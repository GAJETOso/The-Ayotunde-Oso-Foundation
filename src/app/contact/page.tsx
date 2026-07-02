'use client'

import * as React from 'react'
import { PageHero } from '@/components/shared/PageHero'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Mail, Phone, MapPin, Clock, MessageCircle, CheckCircle2 } from 'lucide-react'
import { toast } from '@/components/ui/toast'

const DEPARTMENTS = [
  { value: 'general', label: 'General Enquiry' },
  { value: 'donations', label: 'Donations & Fundraising' },
  { value: 'volunteer', label: 'Volunteering' },
  { value: 'partnerships', label: 'Partnerships & Collaborations' },
  { value: 'media', label: 'Media & Press' },
  { value: 'grants', label: 'Grant Applications' },
  { value: 'programmes', label: 'Programme Enquiry' },
  { value: 'complaints', label: 'Complaints & Feedback' },
]

const CONTACT_INFO = [
  { icon: MapPin, label: 'Head Office', value: '14 Broad Street, 3rd Floor, Lagos Island, Lagos, Nigeria' },
  { icon: Mail, label: 'General Email', value: 'info@ayotundeosofoundation.org' },
  { icon: Phone, label: 'Phone', value: '+234 (0) 803 XXX XXXX' },
  { icon: Clock, label: 'Office Hours', value: 'Mon–Fri, 9:00 AM – 5:00 PM WAT' },
]

export default function ContactPage() {
  const [form, setForm] = React.useState({ name: '', email: '', phone: '', department: 'general', subject: '', message: '' })
  const [isLoading, setIsLoading] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [error, setError] = React.useState('')

  const update = (key: string, value: string) => setForm(f => ({ ...f, [key]: value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) {
        setSubmitted(true)
        toast.success('Message sent! We will respond within 2 business days.')
      } else {
        setError(data.error || 'Failed to send. Please try again.')
      }
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main id="main-content">
      <PageHero
        title="Contact Us"
        subtitle="We would love to hear from you. Our team responds to every message within 2 business days."
        eyebrow="Get in Touch"
        breadcrumbs={[{ label: 'Contact', href: '/contact' }]}
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80"
        size="sm"
      />

      <section className="section">
        <div className="container-xl">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12">
            {/* Form */}
            <div>
              <Badge variant="brand" className="mb-6">Send a Message</Badge>

              {submitted ? (
                <div className="text-center py-16">
                  <div className="size-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="size-10 text-emerald-600" />
                  </div>
                  <h2 className="heading-3 mb-3">Message received!</h2>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Thank you, {form.name}. We have received your message and will respond within 2 business days.
                    Check your email at <strong>{form.email}</strong> for a confirmation.
                  </p>
                  <Button className="mt-8" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', department: 'general', subject: '', message: '' }) }}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {error && (
                    <Alert variant="destructive">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input label="Full Name" name="name" required value={form.name} onChange={e => update('name', e.target.value)} />
                    <Input label="Email Address" name="email" type="email" required value={form.email} onChange={e => update('email', e.target.value)} />
                    <Input label="Phone (optional)" name="phone" type="tel" value={form.phone} onChange={e => update('phone', e.target.value)} />
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">Department</label>
                      <Select value={form.department} onValueChange={v => update('department', v)}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          {DEPARTMENTS.map(d => <SelectItem key={d.value} value={d.value}>{d.label}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="sm:col-span-2">
                      <Input label="Subject" required value={form.subject} onChange={e => update('subject', e.target.value)} hint="Brief description of your enquiry" />
                    </div>
                    <div className="sm:col-span-2">
                      <Textarea
                        label="Message"
                        name="message"
                        required
                        value={form.message}
                        onChange={e => update('message', e.target.value)}
                        showCount
                        maxLength={5000}
                        hint="Please provide as much detail as possible"
                      />
                    </div>
                  </div>
                  <Button type="submit" size="lg" className="w-full" loading={isLoading} disabled={!form.name || !form.email || !form.subject || !form.message}>
                    Send Message
                  </Button>
                  <p className="text-xs text-neutral-500 text-center">
                    By submitting, you agree to our <a href="/privacy" className="underline">Privacy Policy</a>.
                    We will never share your information with third parties.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {CONTACT_INFO.map(info => {
                    const Icon = info.icon
                    return (
                      <div key={info.label} className="flex items-start gap-3">
                        <div className="size-9 rounded-xl bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center flex-shrink-0">
                          <Icon className="size-4 text-brand-700 dark:text-brand-400" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">{info.label}</p>
                          <p className="text-sm text-neutral-800 dark:text-neutral-200 mt-0.5">{info.value}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Card>

              <Card className="p-6 bg-brand-50 dark:bg-brand-900/20 border-brand-200 dark:border-brand-800">
                <MessageCircle className="size-8 text-brand-600 mb-3" />
                <h3 className="font-semibold mb-2">Chat with KOMAI</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  Our AI assistant can answer common questions instantly, 24/7.
                </p>
                <Button size="sm" onClick={() => document.dispatchEvent(new CustomEvent('open-komai'))} className="w-full">
                  Open KOMAI Chat
                </Button>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-4">Response Times</h3>
                <div className="space-y-3">
                  {[
                    { dept: 'General Enquiry', time: '2 business days' },
                    { dept: 'Donations & Finance', time: '1 business day' },
                    { dept: 'Media & Press', time: 'Same day (urgent)' },
                    { dept: 'Partnerships', time: '3 business days' },
                  ].map(r => (
                    <div key={r.dept} className="flex justify-between text-sm">
                      <span className="text-neutral-500">{r.dept}</span>
                      <span className="font-medium text-neutral-800 dark:text-neutral-200">{r.time}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
