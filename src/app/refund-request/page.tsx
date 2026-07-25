'use client'

import * as React from 'react'
import Link from 'next/link'
import { PageHero } from '@/components/shared/PageHero'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { CheckCircle2, Clock, Mail, ShieldCheck } from 'lucide-react'
import { toast } from '@/components/ui/toast'

const REASONS = [
  { value: 'duplicate', label: 'Duplicate charge — I was charged more than once' },
  { value: 'wrong_amount', label: 'Wrong amount — I was charged a different amount than intended' },
  { value: 'technical_error', label: 'Technical error — an unintended transaction occurred' },
  { value: 'other', label: 'Other — please describe below' },
]

const PAYMENT_METHODS = [
  { value: 'card', label: 'Credit / Debit Card' },
  { value: 'paystack', label: 'Paystack' },
  { value: 'flutterwave', label: 'Flutterwave' },
  { value: 'paypal', label: 'PayPal' },
  { value: 'bank_transfer', label: 'Bank Transfer' },
  { value: 'other', label: 'Other' },
]

type FormState = {
  name: string
  email: string
  phone: string
  donationDate: string
  amount: string
  currency: string
  transactionRef: string
  paymentMethod: string
  reason: string
  description: string
}

const EMPTY: FormState = {
  name: '',
  email: '',
  phone: '',
  donationDate: '',
  amount: '',
  currency: 'NGN',
  transactionRef: '',
  paymentMethod: 'card',
  reason: 'duplicate',
  description: '',
}

export default function RefundRequestPage() {
  const [form, setForm] = React.useState<FormState>(EMPTY)
  const [isLoading, setIsLoading] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [error, setError] = React.useState('')
  const [refNum, setRefNum] = React.useState('')

  const update = (key: keyof FormState, value: string) =>
    setForm((f) => ({ ...f, [key]: value }))

  const isValid =
    form.name.trim().length >= 2 &&
    form.email.includes('@') &&
    form.donationDate !== '' &&
    form.amount !== '' &&
    form.description.trim().length >= 10

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)
    try {
      const res = await fetch('/api/refund-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) {
        setRefNum(data.referenceNumber)
        setSubmitted(true)
        toast.success('Refund request received — you will hear from us within 5 business days.')
      } else {
        setError(data.error || 'Submission failed. Please try again.')
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
        title="Refund Request"
        subtitle="If you believe an error occurred with your donation, submit the form below and our team will review your case within 5 business days."
        eyebrow="Donor Support"
        breadcrumbs={[
          { label: 'Refund Policy', href: '/refund-policy' },
          { label: 'Refund Request', href: '/refund-request' },
        ]}
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80"
        size="sm"
      />

      <section className="section">
        <div className="container-xl">
          <div className="grid lg:grid-cols-[1fr_340px] gap-12">
            {/* Form */}
            <div>
              <Badge variant="brand" className="mb-6">Refund Request Form</Badge>

              {submitted ? (
                <div className="text-center py-16">
                  <div className="size-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="size-10 text-emerald-600" />
                  </div>
                  <h2 className="heading-3 mb-3">Request Received</h2>
                  <p className="text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
                    Thank you, {form.name}. Your refund request has been submitted successfully.
                    A confirmation has been sent to <strong>{form.email}</strong>.
                  </p>
                  {refNum && (
                    <div className="mt-6 inline-block rounded-xl bg-neutral-100 dark:bg-neutral-800 px-6 py-3">
                      <p className="text-xs text-neutral-500 mb-1">Reference Number</p>
                      <p className="font-mono text-sm font-bold text-neutral-900 dark:text-neutral-100">
                        {refNum}
                      </p>
                    </div>
                  )}
                  <p className="mt-6 text-sm text-neutral-500">
                    Keep your reference number for follow-up enquiries.
                    Our team will respond within <strong>5 business days</strong>.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <Button onClick={() => { setSubmitted(false); setForm(EMPTY) }}>
                      Submit Another Request
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/">Back to Home</Link>
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {error && (
                    <Alert variant="destructive">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  {/* Donor details */}
                  <fieldset className="space-y-4">
                    <legend className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                      Your Details
                    </legend>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input
                        label="Full Name"
                        name="name"
                        required
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                      />
                      <Input
                        label="Email Address"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        hint="Use the email address you donated with"
                      />
                      <Input
                        label="Phone (optional)"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                      />
                    </div>
                  </fieldset>

                  {/* Transaction details */}
                  <fieldset className="space-y-4">
                    <legend className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                      Donation Details
                    </legend>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input
                        label="Date of Donation"
                        name="donationDate"
                        type="date"
                        required
                        value={form.donationDate}
                        onChange={(e) => update('donationDate', e.target.value)}
                      />
                      <div className="flex gap-2">
                        <div className="w-24 flex-shrink-0">
                          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                            Currency
                          </label>
                          <Select value={form.currency} onValueChange={(v) => update('currency', v)}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="NGN">NGN ₦</SelectItem>
                              <SelectItem value="USD">USD $</SelectItem>
                              <SelectItem value="GBP">GBP £</SelectItem>
                              <SelectItem value="EUR">EUR €</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex-1">
                          <Input
                            label="Amount Donated"
                            name="amount"
                            type="number"
                            min="1"
                            step="0.01"
                            required
                            value={form.amount}
                            onChange={(e) => update('amount', e.target.value)}
                            hint="Enter the exact amount charged"
                          />
                        </div>
                      </div>

                      <Input
                        label="Transaction Reference (optional)"
                        name="transactionRef"
                        value={form.transactionRef}
                        onChange={(e) => update('transactionRef', e.target.value)}
                        hint="Found in your payment confirmation email"
                      />
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                          Payment Method
                        </label>
                        <Select value={form.paymentMethod} onValueChange={(v) => update('paymentMethod', v)}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {PAYMENT_METHODS.map((m) => (
                              <SelectItem key={m.value} value={m.value}>
                                {m.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </fieldset>

                  {/* Reason */}
                  <fieldset className="space-y-4">
                    <legend className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                      Reason for Request
                    </legend>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                        What happened?
                      </label>
                      <Select value={form.reason} onValueChange={(v) => update('reason', v)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {REASONS.map((r) => (
                            <SelectItem key={r.value} value={r.value}>
                              {r.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Textarea
                      label="Description"
                      name="description"
                      required
                      value={form.description}
                      onChange={(e) => update('description', e.target.value)}
                      showCount
                      maxLength={2000}
                      hint="Please describe the issue in detail so we can investigate quickly"
                    />
                  </fieldset>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    loading={isLoading}
                    disabled={!isValid}
                  >
                    Submit Refund Request
                  </Button>
                  <p className="text-xs text-neutral-500 text-center">
                    By submitting, you confirm the information provided is accurate.
                    See our{' '}
                    <Link href="/refund-policy" className="underline">
                      Refund Policy
                    </Link>{' '}
                    for eligibility details.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <Card className="p-6">
                <ShieldCheck className="size-8 text-brand-600 mb-3" />
                <h3 className="font-semibold mb-2">Secure & Confidential</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  All refund requests are handled confidentially by our finance team.
                  Your personal and payment details are never shared with third parties.
                </p>
              </Card>

              <Card className="p-6">
                <Clock className="size-8 text-amber-500 mb-3" />
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                  Our team reviews all refund requests within <strong>5 business days</strong>.
                  Approved refunds are processed in 7–10 business days.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Review decision</span>
                    <span className="font-medium">5 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Processing (if approved)</span>
                    <span className="font-medium">7–10 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Submission deadline</span>
                    <span className="font-medium">30 days from donation</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <Mail className="size-8 text-brand-600 mb-3" />
                <h3 className="font-semibold mb-2">Prefer Email?</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                  You can also email us directly. Include your name, donation date, amount,
                  transaction reference, and a description of the issue.
                </p>
                <a
                  href="mailto:giving@ayotundeosofoundation.org"
                  className="text-sm font-medium text-brand-600 underline break-all"
                >
                  giving@ayotundeosofoundation.org
                </a>
              </Card>

              <Card className="p-6 border-neutral-100 dark:border-neutral-800">
                <h3 className="font-semibold mb-3 text-sm">Not sure you qualify?</h3>
                <p className="text-xs text-neutral-500 mb-4">
                  Read our full Refund Policy to understand eligibility before submitting.
                </p>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link href="/refund-policy">Read Refund Policy</Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
