'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { PageHero } from '@/components/shared/PageHero'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { formatCurrency, calculateImpact } from '@/lib/utils'
import { SUGGESTED_AMOUNTS, CURRENCY_SYMBOLS, IMPACT_MESSAGES, IMPACT_MESSAGES_NGN } from '@/lib/constants'
import { Heart, Shield, Lock, RefreshCw, ChevronRight, CheckCircle2 } from 'lucide-react'

const PROGRAMS = [
  { value: 'general', label: 'Where Most Needed' },
  { value: 'education', label: 'Education & Youth' },
  { value: 'healthcare', label: 'Healthcare Outreaches' },
  { value: 'mentorship', label: 'Youth Mentorship' },
  { value: 'environment', label: 'Environmental Sustainability' },
  { value: 'emergency', label: 'Emergency Relief' },
]

const CURRENCIES = [
  { value: 'NGN', label: '₦ NGN' },
  { value: 'USD', label: '$ USD' },
  { value: 'GBP', label: '£ GBP' },
  { value: 'EUR', label: '€ EUR' },
]

export default function DonatePage() {
  const [currency, setCurrency] = React.useState('NGN')
  const presetAmounts = (SUGGESTED_AMOUNTS[currency as keyof typeof SUGGESTED_AMOUNTS] ?? SUGGESTED_AMOUNTS.NGN) as readonly number[]
  const [amount, setAmount] = React.useState<number>(presetAmounts[2])
  const [customAmount, setCustomAmount] = React.useState('')
  const [frequency, setFrequency] = React.useState<'one-time' | 'monthly'>('one-time')
  const [program, setProgram] = React.useState('general')

  const handleCurrencyChange = (val: string) => {
    setCurrency(val)
    const defaults = (SUGGESTED_AMOUNTS[val as keyof typeof SUGGESTED_AMOUNTS] ?? SUGGESTED_AMOUNTS.NGN) as readonly number[]
    setAmount(defaults[2])
    setCustomAmount('')
  }
  const [step, setStep] = React.useState(1)
  const [anonymous, setAnonymous] = React.useState(false)
  const [tribute, setTribute] = React.useState(false)
  const [form, setForm] = React.useState({ firstName: '', lastName: '', email: '', phone: '' })
  const [isLoading, setIsLoading] = React.useState(false)

  const displayAmount = customAmount ? parseFloat(customAmount) || 0 : amount
  const impact = calculateImpact(displayAmount, program)
  const currencySymbol = CURRENCY_SYMBOLS[currency] ?? currency

  const getImpactMessage = (): string | null => {
    if (displayAmount <= 0) return null
    const messages = currency === 'NGN' ? IMPACT_MESSAGES_NGN : IMPACT_MESSAGES
    const keys = Object.keys(messages).map(Number).sort((a, b) => b - a)
    for (const key of keys) {
      if (displayAmount >= key) return (messages as Record<number, string>)[key]
    }
    return null
  }
  const impactMessage = getImpactMessage()

  const handlePreset = (val: number) => {
    setAmount(val)
    setCustomAmount('')
  }

  const handleCustom = (val: string) => {
    setCustomAmount(val)
  }

  const handleProceed = async () => {
    if (step < 3) { setStep(s => s + 1); return }
    setIsLoading(true)
    try {
      const res = await fetch('/api/donations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: displayAmount, currency, frequency, paymentMethod: 'stripe', ...form, programDesignation: program, anonymous }),
      })
      const data = await res.json()
      if (data.clientSecret) {
        window.location.href = `/thank-you?session=${data.donationId}`
      }
    } catch { /* handled by toast in production */ }
    finally { setIsLoading(false) }
  }

  return (
    <main id="main-content">
      <PageHero
        title="Make a Difference Today"
        subtitle="Your gift funds education, healthcare, mentorship, environmental action, and emergency relief. Donate in Naira (₦) or Dollars ($) — every kobo and cent counts."
        eyebrow="Donate"
        breadcrumbs={[{ label: 'Donate', href: '/donate' }]}
        image="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1600&q=80"
        size="sm"
      />

      <section className="section">
        <div className="container-xl">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12">
            {/* Main form */}
            <div>
              {/* Steps indicator */}
              <div className="flex items-center gap-2 mb-8">
                {['Amount', 'Your Details', 'Payment'].map((s, i) => (
                  <React.Fragment key={s}>
                    <button
                      onClick={() => step > i + 1 && setStep(i + 1)}
                      className={`flex items-center gap-2 text-sm font-semibold ${
                        step === i + 1 ? 'text-brand-700' :
                        step > i + 1 ? 'text-emerald-600 cursor-pointer' :
                        'text-neutral-400'
                      }`}
                    >
                      <span className={`size-7 rounded-full flex items-center justify-center text-xs font-bold ${
                        step === i + 1 ? 'bg-brand-700 text-white' :
                        step > i + 1 ? 'bg-emerald-100 text-emerald-600' :
                        'bg-neutral-100 text-neutral-400'
                      }`}>
                        {step > i + 1 ? <CheckCircle2 className="size-4" /> : i + 1}
                      </span>
                      <span className="hidden sm:block">{s}</span>
                    </button>
                    {i < 2 && <ChevronRight className="size-4 text-neutral-300" />}
                  </React.Fragment>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {/* Step 1: Amount */}
                {step === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <h2 className="heading-3 mb-6">Choose your gift</h2>

                    {/* Currency + Frequency row */}
                    <div className="flex items-center gap-3 mb-6 flex-wrap">
                      <Select value={currency} onValueChange={handleCurrencyChange}>
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {CURRENCIES.map(c => <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>)}
                        </SelectContent>
                      </Select>
                      <Tabs value={frequency} onValueChange={v => setFrequency(v as 'one-time' | 'monthly')} className="flex-1">
                        <TabsList className="w-full">
                          <TabsTrigger value="one-time" className="flex-1">Give Once</TabsTrigger>
                          <TabsTrigger value="monthly" className="flex-1">Give Monthly</TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>

                    {/* Preset amounts */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {presetAmounts.map(a => (
                        <button
                          key={a}
                          onClick={() => handlePreset(a)}
                          className={`rounded-xl border-2 py-4 font-bold text-lg transition-all ${
                            amount === a && !customAmount
                              ? 'border-brand-600 bg-brand-50 text-brand-700 dark:bg-brand-900/30'
                              : 'border-neutral-200 hover:border-brand-300 text-neutral-700 dark:border-neutral-700 dark:text-neutral-300'
                          }`}
                        >
                          {CURRENCY_SYMBOLS[currency] ?? currency}{a.toLocaleString()}
                        </button>
                      ))}
                    </div>

                    {/* Custom amount */}
                    <Input
                      label="Or enter a custom amount"
                      type="number"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={e => handleCustom(e.target.value)}
                      leftIcon={<span className="text-neutral-500 font-semibold">{CURRENCY_SYMBOLS[currency] ?? currency}</span>}
                      min={1}
                    />

                    {/* Program designation */}
                    <div className="mt-6">
                      <Label className="mb-2 block">Designate your gift (optional)</Label>
                      <Select value={program} onValueChange={setProgram}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          {PROGRAMS.map(p => <SelectItem key={p.value} value={p.value}>{p.label}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Impact message */}
                    {impactMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 p-4 bg-brand-50 dark:bg-brand-900/20 rounded-xl border border-brand-200 dark:border-brand-800"
                      >
                        <p className="text-sm font-semibold text-brand-700 dark:text-brand-300">
                          {currencySymbol}{displayAmount.toLocaleString()} {impactMessage}
                        </p>
                      </motion.div>
                    )}

                    <Button onClick={handleProceed} size="lg" className="w-full mt-6" disabled={displayAmount < 1}>
                      Continue <ChevronRight className="size-4" />
                    </Button>
                  </motion.div>
                )}

                {/* Step 2: Details */}
                {step === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <h2 className="heading-3 mb-6">Your information</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input label="First Name" required value={form.firstName} onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))} />
                      <Input label="Last Name" required value={form.lastName} onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))} />
                      <div className="sm:col-span-2">
                        <Input label="Email Address" type="email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} hint="Your receipt will be sent here" />
                      </div>
                      <div className="sm:col-span-2">
                        <Input label="Phone (optional)" type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mt-4">
                      <Checkbox id="anon" checked={anonymous} onCheckedChange={v => setAnonymous(!!v)} />
                      <Label htmlFor="anon" className="cursor-pointer">Make my donation anonymous</Label>
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                      <Checkbox id="tribute" checked={tribute} onCheckedChange={v => setTribute(!!v)} />
                      <Label htmlFor="tribute" className="cursor-pointer">This donation is in honor/memory of someone</Label>
                    </div>
                    <div className="flex gap-3 mt-8">
                      <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
                      <Button onClick={handleProceed} className="flex-1" disabled={!form.firstName || !form.email}>
                        Continue to Payment <ChevronRight className="size-4" />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Payment */}
                {step === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <h2 className="heading-3 mb-6">Secure payment</h2>
                    <div className="space-y-3 mb-6">
                      {[
                        { id: 'stripe', label: 'Credit/Debit Card (Stripe)', desc: 'Visa, Mastercard, Amex — all currencies' },
                        { id: 'paystack', label: 'Paystack', desc: 'Preferred for Nigerian Naira (NGN)' },
                        { id: 'flutterwave', label: 'Flutterwave', desc: 'Multiple African currencies supported' },
                        { id: 'paypal', label: 'PayPal', desc: 'International — USD, EUR, GBP' },
                      ].map(method => (
                        <Card key={method.id} className="p-4 flex items-center gap-4 cursor-pointer hover:border-brand-300 transition-colors">
                          <div className="size-5 rounded-full border-2 border-brand-600 flex items-center justify-center">
                            <span className="size-2.5 rounded-full bg-brand-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-sm">{method.label}</p>
                            <p className="text-xs text-neutral-500">{method.desc}</p>
                          </div>
                        </Card>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
                      <Lock className="size-3.5" />
                      <span>Your payment is encrypted and secure. We never store card details.</span>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" onClick={() => setStep(2)}>Back</Button>
                      <Button onClick={handleProceed} variant="gold" className="flex-1" loading={isLoading}>
                        Donate {formatCurrency(displayAmount, currency as 'USD')} {frequency === 'monthly' ? '/month' : ''}
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Summary */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Donation Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Amount</span>
                    <span className="font-bold">{formatCurrency(displayAmount, currency as 'USD')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Frequency</span>
                    <span className="font-semibold capitalize">{frequency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Designated to</span>
                    <span className="font-semibold">{PROGRAMS.find(p => p.value === program)?.label}</span>
                  </div>
                </div>
              </Card>

              {/* Trust badges */}
              <Card className="p-6">
                <div className="space-y-4">
                  {[
                    { icon: Shield, label: 'SSL Encrypted', desc: '256-bit encryption on all transactions' },
                    { icon: Heart, label: '87.5% to Programmes', desc: 'Low admin overhead, maximum impact' },
                    { icon: RefreshCw, label: 'Cancel Anytime', desc: 'Monthly gifts can be cancelled at any time' },
                  ].map(b => {
                    const Icon = b.icon
                    return (
                      <div key={b.label} className="flex items-start gap-3">
                        <Icon className="size-5 text-brand-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold">{b.label}</p>
                          <p className="text-xs text-neutral-500">{b.desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Card>

              <Card className="p-4 bg-gold-50 dark:bg-gold-900/10 border-gold-200 dark:border-gold-800">
                <p className="text-xs text-gold-800 dark:text-gold-200 font-medium">
                  All donations are tax-deductible to the extent permitted by applicable law. A receipt will be emailed immediately upon completion.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
