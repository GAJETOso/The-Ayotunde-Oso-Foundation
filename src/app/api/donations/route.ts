import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createPaymentIntent } from '@/lib/stripe'
import prisma from '@/lib/db'
import { cache } from '@/lib/redis'
import { sendDonationReceipt } from '@/lib/email'

const DonationSchema = z.object({
  amount: z.number().min(1).max(1000000),
  currency: z.enum(['USD', 'EUR', 'GBP', 'NGN', 'GHS', 'KES']).default('USD'),
  frequency: z.enum(['one-time', 'weekly', 'monthly', 'quarterly', 'annually']).default('one-time'),
  paymentMethod: z.enum(['stripe', 'paystack', 'flutterwave', 'paypal']).default('stripe'),
  email: z.string().email(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  message: z.string().optional(),
  anonymous: z.boolean().default(false),
  dedicatedTo: z.string().optional(),
  programDesignation: z.string().optional(),
})

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') ?? 'unknown'
    const { allowed } = await cache.rateLimit(`donations:${ip}`, 10, 60)
    if (!allowed) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    }

    const body = await req.json()
    const parsed = DonationSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid donation data', details: parsed.error.flatten() }, { status: 400 })
    }

    const data = parsed.data

    // Create pending donation record
    const donation = await prisma.donation.create({
      data: {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        amount: data.amount,
        currency: data.currency,
        frequency: data.frequency.toUpperCase().replace('-', '_') as never,
        paymentMethod: data.paymentMethod,
        programDesignation: data.programDesignation,
        dedicatedTo: data.dedicatedTo,
        message: data.message,
        anonymous: data.anonymous,
        status: 'PENDING',
      },
    })

    let responseData: Record<string, unknown> = { donationId: donation.id }

    if (data.paymentMethod === 'stripe') {
      const paymentIntent = await createPaymentIntent({
        amount: data.amount,
        currency: data.currency,
        metadata: {
          donationId: donation.id,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          frequency: data.frequency,
        },
      })

      await prisma.donation.update({
        where: { id: donation.id },
        data: { paymentIntentId: paymentIntent.id },
      })

      responseData.clientSecret = paymentIntent.client_secret
      responseData.paymentIntentId = paymentIntent.id
    } else if (data.paymentMethod === 'paystack') {
      // Paystack initialization
      const paystackRes = await fetch('https://api.paystack.co/transaction/initialize', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          amount: Math.round(data.amount * 100),
          currency: data.currency,
          reference: donation.id,
          callback_url: `${process.env.NEXT_PUBLIC_APP_URL}/thank-you`,
          metadata: { donationId: donation.id },
        }),
      })
      const paystackData = await paystackRes.json()
      responseData.authorizationUrl = paystackData.data?.authorization_url
      responseData.reference = paystackData.data?.reference
    } else if (data.paymentMethod === 'flutterwave') {
      const flwRes = await fetch('https://api.flutterwave.com/v3/payments', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tx_ref: donation.id,
          amount: data.amount,
          currency: data.currency,
          redirect_url: `${process.env.NEXT_PUBLIC_APP_URL}/thank-you`,
          customer: { email: data.email, name: `${data.firstName} ${data.lastName}` },
          customizations: { title: 'AOF Donation', logo: `${process.env.NEXT_PUBLIC_APP_URL}/logo.png` },
        }),
      })
      const flwData = await flwRes.json()
      responseData.authorizationUrl = flwData.data?.link
    }

    return NextResponse.json(responseData)
  } catch (error) {
    console.error('Donation API error:', error)
    return NextResponse.json({ error: 'Failed to process donation' }, { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  if (!id) return NextResponse.json({ error: 'Donation ID required' }, { status: 400 })

  const donation = await prisma.donation.findUnique({ where: { id } })
  if (!donation) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  return NextResponse.json(donation)
}
