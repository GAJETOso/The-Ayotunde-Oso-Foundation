import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import prisma from '@/lib/db'
import { sendContactConfirmation } from '@/lib/email'
import { cache } from '@/lib/redis'

const ContactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(5).max(200),
  message: z.string().min(20).max(5000),
})

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') ?? 'unknown'
    const { allowed } = await cache.rateLimit(`contact:${ip}`, 5, 3600)
    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many contact submissions. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await req.json()
    const parsed = ContactSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const { name, email, phone, subject, message } = parsed.data

    await prisma.contactSubmission.create({
      data: { name, email, phone, subject, message },
    })

    await sendContactConfirmation({ name, email, subject, message })

    return NextResponse.json({ success: true, message: 'Message received! We will respond within 2 business days.' })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
