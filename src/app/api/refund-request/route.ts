import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import prisma from '@/lib/db'
import { sendRefundRequestNotification } from '@/lib/email'
import { cache } from '@/lib/redis'

const RefundSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  donationDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  amount: z.string().min(1),
  currency: z.enum(['NGN', 'USD', 'GBP', 'EUR']),
  transactionRef: z.string().optional(),
  paymentMethod: z.enum(['card', 'paystack', 'flutterwave', 'paypal', 'bank_transfer', 'other']),
  reason: z.enum(['programme_not_carried_out', 'duplicate', 'wrong_amount', 'technical_error', 'other']),
  description: z.string().min(10).max(2000),
})

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') ?? 'unknown'
    const { allowed } = await cache.rateLimit(`refund:${ip}`, 3, 3600)
    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await req.json()
    const parsed = RefundSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const {
      name, email, phone, donationDate, amount, currency,
      transactionRef, paymentMethod, reason, description,
    } = parsed.data

    const referenceNumber = `RFD-${Date.now()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`

    const reasonLabels: Record<string, string> = {
      programme_not_carried_out: 'Programme not yet carried out (7-day window)',
      duplicate: 'Duplicate charge (7-day window)',
      wrong_amount: 'Wrong amount charged (7-day window)',
      technical_error: 'Technical error (7-day window)',
      other: 'Other',
    }

    const subject = `REFUND REQUEST: ${name} — ${currency} ${amount} on ${donationDate}`
    const message = [
      `Reference: ${referenceNumber}`,
      `Donor: ${name} <${email}>`,
      `Phone: ${phone ?? 'Not provided'}`,
      `Donation Date: ${donationDate}`,
      `Amount: ${currency} ${amount}`,
      `Transaction Ref: ${transactionRef ?? 'Not provided'}`,
      `Payment Method: ${paymentMethod}`,
      `Reason: ${reasonLabels[reason]}`,
      `Description:\n${description}`,
    ].join('\n')

    await prisma.contactSubmission.create({
      data: { name, email, phone, subject, message },
    })

    await sendRefundRequestNotification({
      name,
      email,
      donationDate,
      amount,
      currency,
      transactionRef,
      paymentMethod,
      reason: reasonLabels[reason],
      description,
      referenceNumber,
    })

    return NextResponse.json({ success: true, referenceNumber })
  } catch (error) {
    console.error('Refund request API error:', error)
    return NextResponse.json({ error: 'Failed to submit request. Please try again.' }, { status: 500 })
  }
}
