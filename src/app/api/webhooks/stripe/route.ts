import { NextRequest, NextResponse } from 'next/server'
import { verifyWebhookSignature } from '@/lib/stripe'
import prisma from '@/lib/db'
import { sendDonationReceipt } from '@/lib/email'

export async function POST(req: NextRequest) {
  const payload = await req.text()
  const signature = req.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 })
  }

  let event
  try {
    event = verifyWebhookSignature(payload, signature)
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  try {
    switch (event.type) {
      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object
        const donation = await prisma.donation.findUnique({
          where: { paymentIntentId: paymentIntent.id },
        })

        if (donation && donation.status !== 'SUCCEEDED') {
          await prisma.donation.update({
            where: { id: donation.id },
            data: { status: 'SUCCEEDED' },
          })

          if (!donation.receiptSent) {
            await sendDonationReceipt({
              email: donation.email,
              name: `${donation.firstName} ${donation.lastName}`,
              amount: Number(donation.amount),
              currency: donation.currency,
              frequency: donation.frequency,
              donationId: donation.id,
            })
            await prisma.donation.update({
              where: { id: donation.id },
              data: { receiptSent: true },
            })
          }
        }
        break
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object
        await prisma.donation.updateMany({
          where: { paymentIntentId: paymentIntent.id },
          data: { status: 'FAILED' },
        })
        break
      }

      case 'charge.refunded': {
        const charge = event.data.object as { payment_intent?: string }
        if (charge.payment_intent) {
          await prisma.donation.updateMany({
            where: { paymentIntentId: charge.payment_intent },
            data: { status: 'REFUNDED' },
          })
        }
        break
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook handler error:', error)
    return NextResponse.json({ error: 'Handler failed' }, { status: 500 })
  }
}
