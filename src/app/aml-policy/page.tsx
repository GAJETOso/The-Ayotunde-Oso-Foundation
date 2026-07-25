import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/shared/PageHero'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { FadeUp, SlideIn, StaggerContainer, StaggerItem } from '@/components/ui/animations'
import { AlertTriangle, CheckCircle2, Eye, FileSearch, ShieldCheck, Users, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Anti-Money Laundering Policy | The Ayotunde Oso Foundation',
  description:
    'AOF\'s policy for preventing money laundering, terrorist financing, and financial crime in all donation and fundraising activities.',
}

const PRINCIPLES = [
  {
    icon: Eye,
    title: 'Know Your Donor (KYD)',
    body: 'AOF maintains reasonable due diligence on donors, particularly for large or unusual gifts. We verify the identity and legitimacy of major donors and corporate sponsors before accepting funds.',
  },
  {
    icon: FileSearch,
    title: 'Source of Funds',
    body: 'We take reasonable steps to understand the source of all donations, especially those above threshold amounts. We will decline gifts where the source of funds cannot be reasonably established.',
  },
  {
    icon: AlertTriangle,
    title: 'Suspicious Activity Reporting',
    body: 'All staff and volunteers are trained to identify and report suspicious financial activity. Concerns are escalated to the Compliance Officer and, where required by law, reported to the Nigerian Financial Intelligence Unit (NFIU).',
  },
  {
    icon: Users,
    title: 'Training & Awareness',
    body: 'All staff, board members, and key volunteers with financial responsibilities receive AML training at induction and at least annually thereafter.',
  },
  {
    icon: ShieldCheck,
    title: 'Record Keeping',
    body: 'AOF maintains adequate records of all financial transactions and donor due diligence for a minimum of five years in compliance with CAMA 2020 and applicable financial regulations.',
  },
  {
    icon: CheckCircle2,
    title: 'No Cash Above Threshold',
    body: 'AOF does not accept cash donations above ₦500,000 (or foreign currency equivalent) from any single source. All significant donations must be made through verifiable channels.',
  },
]

const RED_FLAGS = [
  'Unusually large donations with no clear relationship to the donor\'s known means',
  'Donors who are reluctant to provide identification or source of funds information',
  'Requests to return funds to a different account or third party',
  'Multiple donations from the same source structured to fall below reporting thresholds',
  'Donations from jurisdictions subject to international sanctions',
  'Donations accompanied by conditions that would influence AOF\'s programme activities',
  'Donors who show unusual interest in how funds are transferred or recorded',
]

export default function AMLPolicyPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Anti-Money Laundering Policy"
        subtitle="AOF is committed to ensuring that no funds received are connected to money laundering, terrorist financing, or any other form of financial crime."
        eyebrow="Compliance"
        breadcrumbs={[
          { label: 'Legal', href: '/legal' },
          { label: 'AML Policy', href: '/aml-policy' },
        ]}
        image="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80"
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

          {/* Introduction */}
          <SlideIn from="bottom" delay={0.05}>
            <div className="rounded-2xl bg-brand-700 p-8 text-white mb-16">
              <h2 className="font-display text-2xl font-bold mb-3">Our Commitment</h2>
              <p className="text-brand-200 max-w-3xl leading-relaxed">
                The Ayotunde Oso Foundation (AOF) is committed to operating with the highest standards
                of financial integrity. We will not knowingly accept or retain funds derived from
                illegal activities. This policy applies to all staff, board members, volunteers,
                agents, and partners acting on behalf of AOF.
              </p>
            </div>
          </SlideIn>

          {/* Principles */}
          <FadeUp className="mb-4">
            <h2 className="heading-2">Core Principles</h2>
          </FadeUp>
          <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-16">
            {PRINCIPLES.map((p) => {
              const Icon = p.icon
              return (
                <StaggerItem key={p.title} direction="up">
                  <Card className="p-6 h-full">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-900/30">
                      <Icon className="h-5 w-5 text-brand-700 dark:text-brand-400" />
                    </div>
                    <h3 className="mb-2 font-semibold text-neutral-900 dark:text-neutral-100">{p.title}</h3>
                    <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{p.body}</p>
                  </Card>
                </StaggerItem>
              )
            })}
          </StaggerContainer>

          {/* Red flags */}
          <div className="grid gap-12 lg:grid-cols-2 mb-16">
            <SlideIn from="left">
              <div className="rounded-2xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900/10 p-8">
                <div className="flex items-center gap-3 mb-5">
                  <XCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
                  <h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100">
                    Red Flag Indicators
                  </h3>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  Staff and volunteers must escalate to the Compliance Officer immediately if they observe any of the following:
                </p>
                <ul className="space-y-3">
                  {RED_FLAGS.map((flag, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                      <span className="flex-shrink-0 mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                      {flag}
                    </li>
                  ))}
                </ul>
              </div>
            </SlideIn>

            <SlideIn from="right" delay={0.1}>
              <div className="space-y-5">
                <Card className="p-6">
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                    Donation Thresholds & Controls
                  </h3>
                  <div className="space-y-3 text-sm">
                    {[
                      { label: 'Cash donations accepted (max)', value: '₦500,000' },
                      { label: 'Enhanced due diligence threshold', value: '₦5,000,000+' },
                      { label: 'Anonymous donations accepted (max)', value: '₦100,000' },
                      { label: 'Record retention period', value: '5 years minimum' },
                      { label: 'AML training frequency', value: 'Annual + induction' },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between items-center gap-4">
                        <span className="text-neutral-500">{row.label}</span>
                        <span className="font-semibold text-neutral-900 dark:text-neutral-100 text-right">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                    Regulatory Framework
                  </h3>
                  <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                    {[
                      'Money Laundering (Prevention and Prohibition) Act 2022',
                      'Terrorism (Prevention and Prohibition) Act 2022',
                      'Companies and Allied Matters Act (CAMA) 2020',
                      'Central Bank of Nigeria (CBN) AML/CFT Regulations',
                      'Nigerian Financial Intelligence Unit (NFIU) Guidelines',
                      'FATF Recommendations on Non-Profit Organisations',
                    ].map((law) => (
                      <li key={law} className="flex items-start gap-2">
                        <span className="flex-shrink-0 mt-1.5 h-1 w-1 rounded-full bg-brand-500" />
                        {law}
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="p-6 bg-amber-50 dark:bg-amber-900/10 border-amber-200 dark:border-amber-800">
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                    Report a Concern
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                    Suspected money laundering or financial irregularities should be reported immediately to our Compliance Officer.
                  </p>
                  <a href="mailto:compliance@ayotundeosofoundation.org" className="text-sm font-semibold text-brand-600 underline">
                    compliance@ayotundeosofoundation.org
                  </a>
                </Card>
              </div>
            </SlideIn>
          </div>

          {/* Consequences */}
          <FadeUp>
            <Card className="p-8 bg-neutral-50 dark:bg-neutral-900/50">
              <h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100 mb-3">
                Consequences of Non-Compliance
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                Any staff member, volunteer, or board member who knowingly facilitates money laundering
                or fails to report a known or suspected violation of this policy will face disciplinary action,
                up to and including termination of employment or engagement, and may be subject to criminal prosecution
                under Nigerian law. AOF will cooperate fully with law enforcement and regulatory authorities in any investigation.
              </p>
            </Card>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
