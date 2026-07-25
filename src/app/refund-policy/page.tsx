import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/shared/PageHero'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { FadeUp, SlideIn, StaggerContainer, StaggerItem } from '@/components/ui/animations'
import { AlertCircle, CheckCircle2, Clock, Mail, RefreshCw, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Refund Policy | The Ayotunde Oso Foundation',
  description:
    'Understand the donation refund policy of The Ayotunde Oso Foundation — when refunds are available, the review process, and how to submit a request.',
}

const POLICY_SECTIONS = [
  {
    icon: AlertCircle,
    color: 'text-amber-600',
    bg: 'bg-amber-50 dark:bg-amber-900/10',
    border: 'border-amber-200 dark:border-amber-800',
    title: 'General Policy',
    body: 'Donations to The Ayotunde Oso Foundation are generally non-refundable. Once a gift is received, funds are allocated to programme delivery — supporting scholarships, medical outreaches, mentorship activities, and emergency response. Because this deployment begins quickly, we are unable to offer automatic refunds on completed charitable donations.',
  },
  {
    icon: CheckCircle2,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50 dark:bg-emerald-900/10',
    border: 'border-emerald-200 dark:border-emerald-800',
    title: 'When We Will Review a Refund',
    body: 'We take two types of situations seriously. (1) Billing errors — duplicate charge, wrong amount, or unintended technical transaction: submit within 7 days and our team will review. (2) Programme not yet carried out — if you designated your donation to a specific programme that has not yet been delivered, you may also request a refund within 7 days of your donation date.',
  },
  {
    icon: XCircle,
    color: 'text-red-600',
    bg: 'bg-red-50 dark:bg-red-900/10',
    border: 'border-red-200 dark:border-red-800',
    title: 'What Is Not Eligible',
    body: 'Once the programme a donation was designated to has been carried out, no refund is possible under any circumstances — regardless of the reason or how recently the donation was made. Additionally, the following are not eligible: requests submitted more than 7 days after the donation date; voluntary donations where no billing error occurred; and donations made via third-party fundraising platforms (please contact the platform directly).',
  },
  {
    icon: Clock,
    color: 'text-blue-600',
    bg: 'bg-blue-50 dark:bg-blue-900/10',
    border: 'border-blue-200 dark:border-blue-800',
    title: 'Submission Deadline',
    body: 'All refund requests — whether for a billing error (wrong amount, duplicate charge, technical error) or for a programme not yet carried out — must be submitted within 7 days of the donation date. Requests outside this window will not be considered.',
  },
  {
    icon: RefreshCw,
    color: 'text-purple-600',
    bg: 'bg-purple-50 dark:bg-purple-900/10',
    border: 'border-purple-200 dark:border-purple-800',
    title: 'Recurring Donations',
    body: 'If you set up a recurring gift and wish to cancel it, you may do so at any time by logging into your donor portal or contacting us at giving@ayotundeosofoundation.org. Cancellation stops future charges immediately. Charges already processed follow the same general policy above.',
  },
  {
    icon: Mail,
    color: 'text-brand-600',
    bg: 'bg-brand-50 dark:bg-brand-900/10',
    border: 'border-brand-200 dark:border-brand-800',
    title: 'How to Request a Refund',
    body: 'Use our online Refund Request Form — it captures all the information our team needs to review your case quickly. Alternatively, email giving@ayotundeosofoundation.org with your name, email, transaction reference, amount, date of donation, and a brief description of the issue. Processing time once approved is 7–10 business days.',
  },
]

const STEPS = [
  { step: '01', title: 'Submit the form', description: 'Complete the Refund Request Form with your transaction details.' },
  { step: '02', title: 'We review your case', description: 'Our finance team reviews within 5 business days and may contact you for more information.' },
  { step: '03', title: 'Decision notified', description: 'You receive an email with the outcome — approval or, if ineligible, a clear explanation.' },
  { step: '04', title: 'Refund processed', description: 'Approved refunds are returned to your original payment method within 7–10 business days.' },
]

export default function RefundPolicyPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Refund Policy"
        subtitle="We are committed to transparency and donor trust. This policy explains when and how donation refunds are handled."
        eyebrow="Donor Trust"
        breadcrumbs={[{ label: 'Refund Policy', href: '/refund-policy' }]}
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80"
        size="sm"
      />

      {/* Last Updated */}
      <section className="section">
        <div className="container-xl">
          <FadeUp>
            <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
              <div>
                <Badge variant="brand" className="mb-2">Policy Document</Badge>
                <p className="text-sm text-neutral-500">Last updated: 1 May 2025 &mdash; Effective immediately</p>
              </div>
              <Button asChild>
                <Link href="/refund-request">Submit a Refund Request</Link>
              </Button>
            </div>
          </FadeUp>

          {/* Summary banner */}
          <SlideIn from="bottom" delay={0.05}>
            <div className="rounded-2xl bg-brand-700 p-8 text-white mb-16">
              <h2 className="font-display text-2xl font-bold mb-3">The Short Version</h2>
              <p className="text-white text-lg font-medium mb-3">
                Donations are generally non-refundable, because funds are immediately deployed to programmes.
              </p>
              <div className="max-w-3xl space-y-3 text-brand-200 leading-relaxed">
                <p>
                  <strong className="text-white">Exception:</strong> if a donor believes an error occurred — wrong amount, duplicate charge — they can email{' '}
                  <a href="mailto:giving@ayotundeosofoundation.org" className="text-gold-300 underline">
                    giving@ayotundeosofoundation.org
                  </a>{' '}
                  or fill the form within <strong className="text-white">7 days</strong> (if the programme donated towards has not yet been executed) and the foundation will review the case manually.
                </p>
                <p className="text-white font-semibold border-t border-white/20 pt-3">
                  Once the designated programme has been carried out, no refund is possible under any circumstances.
                </p>
              </div>
            </div>
          </SlideIn>

          {/* Policy sections */}
          <StaggerContainer className="grid gap-6 md:grid-cols-2">
            {POLICY_SECTIONS.map((s) => {
              const Icon = s.icon
              return (
                <StaggerItem key={s.title} direction="up">
                  <Card className={`p-6 h-full border ${s.border} ${s.bg}`}>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-0.5">
                        <Icon className={`size-5 ${s.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">{s.title}</h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{s.body}</p>
                      </div>
                    </div>
                  </Card>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container-xl">
          <FadeUp className="mb-12 text-center">
            <Badge variant="gold" className="mb-4">The Process</Badge>
            <h2 className="heading-2">How a refund request works</h2>
          </FadeUp>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <FadeUp key={s.step} delay={Number(s.step) * 0.08}>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-brand-700 text-white font-display font-bold text-lg">
                    {s.step}
                  </div>
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">{s.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{s.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-xl">
          <FadeUp className="max-w-2xl mx-auto text-center">
            <h2 className="heading-2 mb-4">Need to request a refund?</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
              Our Refund Request Form takes under 2 minutes to complete and gives our team everything
              needed to review your case promptly.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/refund-request">Submit Refund Request</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Us Instead</Link>
              </Button>
            </div>
            <p className="mt-6 text-xs text-neutral-400">
              Questions? Email{' '}
              <a href="mailto:giving@ayotundeosofoundation.org" className="underline">
                giving@ayotundeosofoundation.org
              </a>
            </p>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
