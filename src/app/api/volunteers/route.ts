import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import prisma from '@/lib/db'
import { sendEmail } from '@/lib/email'
import { cache } from '@/lib/redis'

const VolunteerSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  phone: z.string().optional(),
  dateOfBirth: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  country: z.string().default('Nigeria'),
  occupation: z.string().optional(),
  skills: z.array(z.string()).default([]),
  interests: z.array(z.string()).default([]),
  availability: z.array(z.string()).default([]),
  hoursPerWeek: z.number().min(1).max(40).default(4),
  programs: z.array(z.string()).default([]),
  motivation: z.string().min(20).max(2000),
  emergencyName: z.string().optional(),
  emergencyPhone: z.string().optional(),
})

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') ?? 'unknown'
    const { allowed } = await cache.rateLimit(`volunteer:${ip}`, 3, 3600)
    if (!allowed) {
      return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 })
    }

    const body = await req.json()
    const parsed = VolunteerSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid application data', details: parsed.error.flatten() }, { status: 400 })
    }

    const data = parsed.data

    const existing = await prisma.volunteer.findUnique({ where: { email: data.email } })
    if (existing) {
      return NextResponse.json(
        { error: 'An application with this email already exists.' },
        { status: 409 }
      )
    }

    const volunteer = await prisma.volunteer.create({
      data: {
        ...data,
        dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : undefined,
        status: 'PENDING',
      },
    })

    // Notify team
    await sendEmail({
      to: process.env.VOLUNTEER_EMAIL || process.env.CONTACT_EMAIL || 'volunteers@ayotundeosofoundation.org',
      subject: `New Volunteer Application: ${data.firstName} ${data.lastName}`,
      html: `<p>New volunteer application from <strong>${data.firstName} ${data.lastName}</strong> (${data.email}).</p>
             <p>Programs of interest: ${data.programs.join(', ') || 'General'}</p>
             <p>Motivation: ${data.motivation}</p>
             <p><a href="${process.env.NEXT_PUBLIC_APP_URL}/admin/volunteers/${volunteer.id}">Review Application</a></p>`,
    })

    // Confirm to applicant
    await sendEmail({
      to: data.email,
      subject: 'Volunteer Application Received — The Ayotunde Oso Foundation',
      html: `<div style="font-family:sans-serif">
               <h2>Thank you, ${data.firstName}!</h2>
               <p>We have received your volunteer application. Our team will review it and contact you within 5-7 business days.</p>
               <p>In the meantime, feel free to explore our programs at <a href="${process.env.NEXT_PUBLIC_APP_URL}/programs">ayotundeosofoundation.org/programs</a>.</p>
             </div>`,
    })

    return NextResponse.json({ success: true, volunteerId: volunteer.id })
  } catch (error) {
    console.error('Volunteer API error:', error)
    return NextResponse.json({ error: 'Failed to submit application' }, { status: 500 })
  }
}
