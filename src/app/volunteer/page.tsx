'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PageHero } from '@/components/shared/PageHero'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Users, Clock, Globe, Award, ChevronRight, CheckCircle2 } from 'lucide-react'
import { toast } from '@/components/ui/toast'

const SKILLS = ['Teaching', 'Healthcare', 'Engineering', 'Technology', 'Law', 'Finance', 'Marketing', 'Photography', 'Project Management', 'Social Work', 'Agriculture', 'Research', 'Cooking', 'Logistics', 'Counselling']
const PROGRAMS_LIST = ['Education & Youth', 'Healthcare Outreaches', 'Youth Mentorship', 'Environmental Sustainability', 'Emergency Relief', 'Communications', 'Fundraising & Events', 'Administration']
const AVAILABILITY = ['Weekday mornings', 'Weekday afternoons', 'Weekday evenings', 'Saturday', 'Sunday', 'Flexible']

const FAQ = [
  { q: 'Do I need professional qualifications?', a: 'No. We welcome volunteers from all backgrounds. Skills, time, and passion matter most. Some specialist roles (medical, legal) do require qualifications.' },
  { q: 'How many hours per week do I need to commit?', a: 'A minimum of 2–4 hours per week for programme volunteers. Mentor roles require at least 2 hours per month. Emergency response volunteers are on-call.' },
  { q: 'Can I volunteer remotely?', a: 'Yes. Many roles — especially in communications, digital skills, and mentorship — can be done fully remotely from anywhere in the world.' },
  { q: 'Will I receive training?', a: 'All volunteers receive orientation training. Specialist roles include additional capacity building. We invest in our volunteers.' },
  { q: 'Is there a minimum age?', a: 'Volunteers must be at least 18. Youth under 18 can participate in our Youth Corps programme with parental consent.' },
]

export default function VolunteerPage() {
  const [step, setStep] = React.useState(1)
  const [form, setForm] = React.useState({
    firstName: '', lastName: '', email: '', phone: '', country: 'Nigeria',
    occupation: '', skills: [] as string[], interests: [] as string[],
    programs: [] as string[], availability: [] as string[],
    hoursPerWeek: '4', motivation: '', emergencyName: '', emergencyPhone: '',
  })
  const [isLoading, setIsLoading] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)

  const update = (key: string, value: unknown) => setForm(f => ({ ...f, [key]: value }))

  const toggleArray = (key: 'skills' | 'interests' | 'programs' | 'availability', value: string) => {
    setForm(f => ({
      ...f,
      [key]: f[key].includes(value) ? f[key].filter(v => v !== value) : [...f[key], value],
    }))
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      const res = await fetch('/api/volunteers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, hoursPerWeek: parseInt(form.hoursPerWeek) }),
      })
      if (res.ok) {
        setSubmitted(true)
        toast.success('Application submitted! We will be in touch within 5 business days.')
      } else {
        const data = await res.json()
        toast.error(data.error || 'Submission failed. Please try again.')
      }
    } catch {
      toast.error('Network error. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (submitted) {
    return (
      <main id="main-content">
        <div className="min-h-screen flex items-center justify-center py-20">
          <div className="text-center max-w-md">
            <div className="size-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="size-10 text-emerald-600" />
            </div>
            <h1 className="heading-2 mb-4">Application Received!</h1>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">Thank you, {form.firstName}. Our volunteer coordinator will review your application and contact you within 5 business days.</p>
            <Button asChild><a href="/">Return Home</a></Button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main id="main-content">
      <PageHero
        title="Volunteer With Us"
        subtitle="Join 2,300+ changemakers who give their time, skills, and passion to communities that need it most."
        eyebrow="Get Involved"
        breadcrumbs={[{ label: 'Volunteer', href: '/volunteer' }]}
        image="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1600&q=80"
      />

      {/* Benefits */}
      <section className="section">
        <div className="container-xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Users, title: 'Community', desc: 'Join a network of 2,300+ passionate changemakers' },
              { icon: Clock, title: 'Flexible Commitment', desc: 'From 2 hours/month to full-time field roles' },
              { icon: Globe, title: 'Remote Options', desc: 'Many roles available fully online from anywhere' },
              { icon: Award, title: 'Training & Certificates', desc: 'All volunteers receive orientation and recognition' },
            ].map(b => {
              const Icon = b.icon
              return (
                <Card key={b.title} className="p-6 text-center">
                  <Icon className="size-8 text-brand-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">{b.title}</h3>
                  <p className="text-xs text-neutral-500">{b.desc}</p>
                </Card>
              )
            })}
          </div>

          {/* Application form */}
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              {['Personal Info', 'Skills & Interests', 'Motivation'].map((s, i) => (
                <React.Fragment key={s}>
                  <span className={`flex items-center gap-2 text-sm font-semibold ${
                    step === i + 1 ? 'text-brand-700' : step > i + 1 ? 'text-emerald-600' : 'text-neutral-400'
                  }`}>
                    <span className={`size-7 rounded-full flex items-center justify-center text-xs ${
                      step === i + 1 ? 'bg-brand-700 text-white' : step > i + 1 ? 'bg-emerald-100 text-emerald-700 font-bold' : 'bg-neutral-100 text-neutral-400'
                    }`}>{step > i + 1 ? '✓' : i + 1}</span>
                    <span className="hidden sm:block">{s}</span>
                  </span>
                  {i < 2 && <ChevronRight className="size-4 text-neutral-300" />}
                </React.Fragment>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="vs1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input label="First Name" required value={form.firstName} onChange={e => update('firstName', e.target.value)} />
                    <Input label="Last Name" required value={form.lastName} onChange={e => update('lastName', e.target.value)} />
                    <Input label="Email" type="email" required value={form.email} onChange={e => update('email', e.target.value)} />
                    <Input label="Phone" type="tel" value={form.phone} onChange={e => update('phone', e.target.value)} />
                    <div className="sm:col-span-2">
                      <Input label="Occupation / Profession" value={form.occupation} onChange={e => update('occupation', e.target.value)} />
                    </div>
                    <div className="sm:col-span-2">
                      <Label className="mb-2 block">Country of Residence</Label>
                      <Select value={form.country} onValueChange={v => update('country', v)}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          {['Nigeria', 'Ghana', 'Kenya', 'South Africa', 'United Kingdom', 'United States', 'Canada', 'Other'].map(c => (
                            <SelectItem key={c} value={c}>{c}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="text-sm font-semibold mb-1">Emergency Contact Name</p>
                    <Input value={form.emergencyName} onChange={e => update('emergencyName', e.target.value)} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1">Emergency Contact Phone</p>
                    <Input type="tel" value={form.emergencyPhone} onChange={e => update('emergencyPhone', e.target.value)} />
                  </div>
                  <Button onClick={() => setStep(2)} disabled={!form.firstName || !form.email} className="w-full mt-4">
                    Continue <ChevronRight className="size-4" />
                  </Button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="vs2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <div>
                    <p className="font-semibold mb-3">Skills you can offer</p>
                    <div className="flex flex-wrap gap-2">
                      {SKILLS.map(s => (
                        <button
                          key={s}
                          onClick={() => toggleArray('skills', s)}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium border-2 transition-all ${
                            form.skills.includes(s)
                              ? 'border-brand-600 bg-brand-50 text-brand-700 dark:bg-brand-900/30'
                              : 'border-neutral-200 text-neutral-600 hover:border-brand-300 dark:border-neutral-700'
                          }`}
                        >{s}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold mb-3">Programmes you\'d like to support</p>
                    <div className="space-y-2">
                      {PROGRAMS_LIST.map(p => (
                        <div key={p} className="flex items-center gap-3">
                          <Checkbox id={p} checked={form.programs.includes(p)} onCheckedChange={() => toggleArray('programs', p)} />
                          <Label htmlFor={p} className="cursor-pointer">{p}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold mb-3">Availability</p>
                    <div className="flex flex-wrap gap-2">
                      {AVAILABILITY.map(a => (
                        <button
                          key={a}
                          onClick={() => toggleArray('availability', a)}
                          className={`px-3 py-1.5 rounded-full text-sm border-2 transition-all ${
                            form.availability.includes(a)
                              ? 'border-brand-600 bg-brand-50 text-brand-700 dark:bg-brand-900/30'
                              : 'border-neutral-200 text-neutral-600 hover:border-brand-300 dark:border-neutral-700'
                          }`}
                        >{a}</button>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
                    <Button onClick={() => setStep(3)} className="flex-1">Continue <ChevronRight className="size-4" /></Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="vs3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                  <Textarea
                    label="Why do you want to volunteer with AOF?"
                    required
                    value={form.motivation}
                    onChange={e => update('motivation', e.target.value)}
                    showCount
                    maxLength={2000}
                    hint="Tell us what drives your commitment to service (min. 50 words)"
                  />
                  <Alert variant="info">
                    <AlertDescription>All volunteers undergo a brief background screening and orientation before placement.</AlertDescription>
                  </Alert>
                  <div className="flex gap-3">
                    <Button variant="outline" onClick={() => setStep(2)}>Back</Button>
                    <Button onClick={handleSubmit} className="flex-1" loading={isLoading} disabled={form.motivation.length < 20}>
                      Submit Application
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container-xl max-w-2xl">
          <div className="text-center mb-8">
            <Badge variant="brand" className="mb-3">Questions</Badge>
            <h2 className="heading-2">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible>
            {FAQ.map((item, i) => (
              <AccordionItem key={i} value={`q${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
  )
}
