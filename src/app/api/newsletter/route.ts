import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import prisma from '@/lib/db'
import { sendNewsletterConfirmation } from '@/lib/email'
import { cache } from '@/lib/redis'

const SubscribeSchema = z.object({
  email: z.string().email(),
  firstName: z.string().optional(),
  source: z.string().optional(),
})

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') ?? 'unknown'
    const { allowed } = await cache.rateLimit(`newsletter:${ip}`, 5, 3600)
    if (!allowed) {
      return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 })
    }

    const body = await req.json()
    const parsed = SubscribeSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const { email, firstName, source } = parsed.data

    const existing = await prisma.newsletterSubscriber.findUnique({ where: { email } })

    if (existing) {
      if (!existing.isActive) {
        await prisma.newsletterSubscriber.update({
          where: { email },
          data: { isActive: true, firstName, confirmedAt: new Date() },
        })
        return NextResponse.json({ success: true, message: 'Welcome back! You have been re-subscribed.' })
      }
      return NextResponse.json({ success: true, message: 'You are already subscribed!' })
    }

    await prisma.newsletterSubscriber.create({
      data: { email, firstName, source, confirmedAt: new Date() },
    })

    await sendNewsletterConfirmation(email)

    return NextResponse.json({ success: true, message: 'Successfully subscribed! Check your email for confirmation.' })
  } catch (error) {
    console.error('Newsletter API error:', error)
    return NextResponse.json({ error: 'Subscription failed' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const email = searchParams.get('email')
  if (!email) return NextResponse.json({ error: 'Email required' }, { status: 400 })

  await prisma.newsletterSubscriber.update({
    where: { email },
    data: { isActive: false },
  })

  return NextResponse.json({ success: true, message: 'Unsubscribed successfully.' })
}
