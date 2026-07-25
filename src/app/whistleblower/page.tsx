import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/shared/PageHero'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { FadeUp, SlideIn, StaggerContainer, StaggerItem } from '@/components/ui/animations'
import { AlertTriangle, Eye, Lock, MessageSquare, ShieldCheck, UserX } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Whistleblower Policy | The Ayotunde Oso Foundation',
  description:
    'AOF\'s commitment to a safe speak-up culture — how to report concerns about fraud, misconduct, or wrongdoing without fear of retaliation.',
}

const REPORTABLE_CONCERNS = [
  'Financial fraud, theft, or misappropriation of funds',
  'Corruption, bribery, or conflicts of interest',
  'Falsification of financial records, reports, or grant applications',
  'Violations of the Anti-Money Laundering Policy',
  'Safeguarding failures or abuse of beneficiaries',
  'Serious breaches of AOF\'s Code of Conduct or policies',
  'Health, safety, or environmental violations',
  'Unlawful discrimination or serious harassment',
  'Any other act that may cause significant harm to AOF, its beneficiaries, or the public',
]

const PROTECTIONS = [
  {
    icon: Lock,
    title: 'Confidentiality',
    body: 'The identity of all whistleblowers is kept strictly confidential to the extent possible. Reports are handled by a small number of designated individuals and are not shared more broadly without consent.',
  },
  {
    icon: ShieldCheck,
    title: 'No Retaliation',
    body: 'AOF strictly prohibits retaliation against any person who reports a concern in good faith. Retaliation — including dismissal, demotion, harassment, or exclusion — is itself a disciplinary offence.',
  },
  {
    icon: Eye,
    title: 'Anonymous Reporting',
    body: 'You may report concerns anonymously. Anonymous reports are taken seriously, though investigation may be limited where we cannot seek further information.',
  },
  {
    icon: UserX,
    title: 'Good Faith Protection',
    body: 'Protection applies to reports made in good faith, even if the concern turns out to be unfounded. Making a malicious or knowingly false report is itself a disciplinary matter.',
  },
]

export default function WhistleblowerPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Whistleblower Policy"
        subtitle="We believe a culture of transparency and accountability starts with the courage to speak up. AOF protects everyone who raises concerns in good faith."
        eyebrow="Speak Up"
        breadcrumbs={[
          { label: 'Legal', href: '/legal' },
          { label: 'Whistleblower Policy', href: '/whistleblower' },
        ]}
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80"
        size="sm"
      />

      <section className="section">
        <div className="container-xl">
          <FadeUp>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
              <div>
                <Badge variant="brand" className="mb-2">Policy Document</Badge>
                <p className="text-sm text-neutral-500">
                  Effective: 1 May 2025 &mdash; Last reviewed: July 2026
                </p>
              </div>
              <Button variant="outline" asChild>
                <Link href="/legal">All Policies</Link>
              </Button>
            </div>
          </FadeUp>

          {/* Commitment banner */}
          <SlideIn from="bottom" delay={0.05}>
            <div className="rounded-2xl bg-brand-700 p-8 text-white mb-16">
              <h2 className="font-display text-2xl font-bold mb-3">Our Commitment</h2>
              <p className="text-brand-200 max-w-3xl leading-relaxed">
                AOF is committed to the highest standards of openness, integrity, and accountability.
                We want everyone associated with AOF — staff, volunteers, board members, partners,
                and community members — to feel safe raising genuine concerns without fear of
                negative consequences.
              </p>
            </div>
          </SlideIn>

          {/* What to report + Protections */}
          <div className="grid gap-10 lg:grid-cols-2 mb-16">
            <SlideIn from="left">
              <div>
                <h2 className="heading-3 mb-6">What You Can Report</h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-5">
                  This policy covers concerns about behaviour that is unlawful, contrary to AOF policy,
                  or that may cause harm to individuals, the organisation, or the public. Examples include:
                </p>
                <ul className="space-y-3">
                  {REPORTABLE_CONCERNS.map((concern, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                      <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      {concern}
                    </li>
                  ))}
                </ul>
              </div>
            </SlideIn>

            <SlideIn from="right" delay={0.1}>
              <div>
                <h2 className="heading-3 mb-6">Your Protections</h2>
                <StaggerContainer className="space-y-4">
                  {PROTECTIONS.map((p) => {
                    const Icon = p.icon
                    return (
                      <StaggerItem key={p.title} direction="up">
                        <Card className="p-5">
                          <div className="flex items-start gap-4">
                            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-50 dark:bg-brand-900/30">
                              <Icon className="h-4 w-4 text-brand-700 dark:text-brand-400" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100 mb-1">
                                {p.title}
                              </h3>
                              <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                                {p.body}
                              </p>
                            </div>
                          </div>
                        </Card>
                      </StaggerItem>
                    )
                  })}
                </StaggerContainer>
              </div>
            </SlideIn>
          </div>

          {/* How to report */}
          <FadeUp className="mb-10">
            <h2 className="heading-2">How to Report</h2>
          </FadeUp>
          <div className="grid gap-5 sm:grid-cols-3 mb-16">
            {[
              {
                icon: MessageSquare,
                method: 'Email',
                detail: 'whistleblower@ayotundeosofoundation.org',
                note: 'Emails are monitored only by the designated Whistleblower Officer.',
                href: 'mailto:whistleblower@ayotundeosofoundation.org',
              },
              {
                icon: Lock,
                method: 'Anonymous Report',
                detail: 'Use the contact form on this website',
                note: 'Select "Whistleblower / Anonymous Report" as the department.',
                href: '/contact',
              },
              {
                icon: ShieldCheck,
                method: 'Board Chair',
                detail: 'boardchair@ayotundeosofoundation.org',
                note: 'Use this channel if your concern involves senior management.',
                href: 'mailto:boardchair@ayotundeosofoundation.org',
              },
            ].map((ch) => {
              const Icon = ch.icon
              return (
                <Card key={ch.method} className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 dark:bg-brand-900/30">
                    <Icon className="h-6 w-6 text-brand-700 dark:text-brand-400" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">{ch.method}</h3>
                  <a href={ch.href} className="text-sm text-brand-600 underline break-all">{ch.detail}</a>
                  <p className="mt-2 text-xs text-neutral-500">{ch.note}</p>
                </Card>
              )
            })}
          </div>

          {/* Investigation process */}
          <FadeUp>
            <Card className="p-8 bg-neutral-50 dark:bg-neutral-900/50">
              <h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100 mb-4">
                What Happens After You Report
              </h3>
              <div className="grid gap-4 sm:grid-cols-4 text-sm">
                {[
                  { step: '01', title: 'Acknowledgement', body: 'Your report is acknowledged within 5 business days (where contact details are provided).' },
                  { step: '02', title: 'Initial Review', body: 'The Whistleblower Officer determines whether the concern falls within scope and what action is appropriate.' },
                  { step: '03', title: 'Investigation', body: 'A fair, independent investigation is conducted. You may be asked for further information.' },
                  { step: '04', title: 'Outcome', body: 'Where appropriate, you will be informed of the outcome. Some matters may be referred to external authorities.' },
                ].map((s) => (
                  <div key={s.step} className="text-center">
                    <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand-700 text-white font-bold text-sm">
                      {s.step}
                    </div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">{s.title}</h4>
                    <p className="text-xs text-neutral-500">{s.body}</p>
                  </div>
                ))}
              </div>
            </Card>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
