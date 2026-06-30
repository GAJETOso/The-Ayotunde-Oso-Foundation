import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const FROM = 'The Ayotunde Oso Foundation <hello@ayotundeosofoundation.org>'
const REPLY_TO = 'info@ayotundeosofoundation.org'

export async function sendEmail({
  to,
  subject,
  html,
  text,
  replyTo,
}: {
  to: string | string[]
  subject: string
  html: string
  text?: string
  replyTo?: string
}) {
  return resend.emails.send({
    from: FROM,
    to,
    subject,
    html,
    text,
    replyTo: replyTo || REPLY_TO,
  })
}

export async function sendContactConfirmation({
  name,
  email,
  subject,
  message,
}: {
  name: string
  email: string
  subject: string
  message: string
}) {
  // Notify foundation team
  await sendEmail({
    to: process.env.CONTACT_EMAIL || REPLY_TO,
    subject: `New Contact: ${subject}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#0B4D35;padding:24px;border-radius:12px 12px 0 0">
          <h1 style="color:#fff;margin:0;font-size:20px">New Contact Form Submission</h1>
        </div>
        <div style="background:#f9f9f9;padding:24px;border-radius:0 0 12px 12px">
          <p><strong>From:</strong> ${name} (${email})</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p style="background:#fff;padding:16px;border-radius:8px;border-left:4px solid #0B4D35">${message}</p>
        </div>
      </div>`,
    replyTo: email,
  })

  // Auto-reply to submitter
  return sendEmail({
    to: email,
    subject: 'We received your message — The Ayotunde Oso Foundation',
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#0B4D35;padding:24px;border-radius:12px 12px 0 0">
          <h1 style="color:#fff;margin:0;font-size:20px">Thank you, ${name}!</h1>
        </div>
        <div style="padding:24px">
          <p>We have received your message and our team will get back to you within 2 business days.</p>
          <p style="color:#666;font-size:14px">Reference: ${subject}</p>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
          <p style="color:#888;font-size:12px">The Ayotunde Oso Foundation &middot; Empowering Communities Through Service</p>
        </div>
      </div>`,
  })
}

export async function sendDonationReceipt({
  email,
  name,
  amount,
  currency,
  frequency,
  donationId,
}: {
  email: string
  name: string
  amount: number
  currency: string
  frequency: string
  donationId: string
}) {
  return sendEmail({
    to: email,
    subject: `Donation Receipt — Thank you, ${name}!`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#0B4D35;padding:32px;border-radius:12px 12px 0 0;text-align:center">
          <h1 style="color:#D4A843;margin:0 0 8px;font-size:28px">Thank You!</h1>
          <p style="color:#fff;margin:0;font-size:16px">Your generosity makes a real difference</p>
        </div>
        <div style="padding:32px">
          <p style="font-size:16px">Dear ${name},</p>
          <p>Thank you for your ${frequency === 'one-time' ? '' : frequency} donation of <strong style="color:#0B4D35">${currency} ${amount.toLocaleString()}</strong> to The Ayotunde Oso Foundation.</p>
          <div style="background:#f9faf8;border:1px solid #e0e0e0;border-radius:12px;padding:20px;margin:24px 0">
            <p style="margin:0 0 8px"><strong>Donation ID:</strong> ${donationId}</p>
            <p style="margin:0 0 8px"><strong>Amount:</strong> ${currency} ${amount.toLocaleString()}</p>
            <p style="margin:0"><strong>Frequency:</strong> ${frequency}</p>
          </div>
          <p>This receipt serves as acknowledgement for tax purposes. Please retain it for your records.</p>
          <a href="https://ayotundeosofoundation.org/impact" style="display:inline-block;background:#D4A843;color:#0B4D35;padding:12px 28px;border-radius:8px;text-decoration:none;font-weight:bold;margin-top:16px">See Your Impact</a>
        </div>
        <div style="background:#f5f5f5;padding:24px;border-radius:0 0 12px 12px;text-align:center">
          <p style="color:#888;font-size:12px;margin:0">The Ayotunde Oso Foundation is a registered nonprofit organization. All donations are tax-deductible to the extent permitted by law.</p>
        </div>
      </div>`,
  })
}

export async function sendNewsletterConfirmation(email: string) {
  return sendEmail({
    to: email,
    subject: 'Welcome to the AOF Community Newsletter!',
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#0B4D35;padding:32px;border-radius:12px 12px 0 0;text-align:center">
          <h1 style="color:#D4A843;margin:0">You are In!</h1>
        </div>
        <div style="padding:32px">
          <p>Welcome to the AOF Community. You will receive our latest updates, impact stories, and opportunities to get involved.</p>
          <p style="color:#888;font-size:12px">If you did not subscribe, you can safely ignore this email.</p>
        </div>
      </div>`,
  })
}
