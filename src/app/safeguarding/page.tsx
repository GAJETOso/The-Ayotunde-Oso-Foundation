import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/shared/PageHero'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { FadeUp, SlideIn, StaggerContainer, StaggerItem } from '@/components/ui/animations'
import { Heart, ShieldCheck, Users, AlertTriangle, Phone, BookOpen, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Safeguarding Policy | The Ayotunde Oso Foundation',
  description:
    'AOF\'s commitment to the safety, dignity, and wellbeing of every child, young person, and vulnerable adult in all its programmes.',
}

const PRINCIPLES = [
  {
    icon: ShieldCheck,
    title: 'Safety First',
    body: 'The welfare of children and vulnerable adults is paramount. All decisions made in the context of AOF programmes prioritise the safety and dignity of beneficiaries above organisational interests.',
  },
  {
    icon: Users,
    title: 'Safe Recruitment',
    body: 'All staff, volunteers, and partners who have contact with children or vulnerable adults undergo background checks, reference verification, and mandatory safeguarding training before engagement.',
  },
  {
    icon: BookOpen,
    title: 'Training & Awareness',
    body: 'All AOF staff, volunteers, and board members receive safeguarding training at induction and refresher training annually. Programme leads receive enhanced training appropriate to their role.',
  },
  {
    icon: Heart,
    title: 'Dignity & Respect',
    body: 'AOF operates a zero-tolerance policy on abuse, exploitation, and harassment in all forms. Every beneficiary has the right to be treated with dignity, respect, and without discrimination.',
  },
  {
    icon: AlertTriangle,
    title: 'Reporting & Response',
    body: 'Clear reporting channels exist for concerns about the safety or welfare of any child or vulnerable person. All reports are taken seriously, investigated promptly, and handled confidentially.',
  },
  {
    icon: CheckCircle2,
    title: 'Photography & Media',
    body: 'AOF will not photograph, film, or share images of programme beneficiaries — especially children — without the informed written consent of the child\'s parent or guardian.',
  },
]

const UNACCEPTABLE_BEHAVIOURS = [
  'Physical violence, hitting, or corporal punishment of any kind',
  'Verbal abuse, humiliation, or shaming of beneficiaries',
  'Sexual contact, exploitation, or grooming of any person under 18',
  'Leaving children unsupervised with a single adult in an isolated setting',
  'Sharing personal information about beneficiaries without authorisation',
  'Accepting gifts from beneficiaries or their families of significant value',
  'Photographing or filming beneficiaries without proper consent',
  'Discriminating against any person on the basis of age, gender, ethnicity, disability, or religion',
]

export default function SafeguardingPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Safeguarding Policy"
        subtitle="AOF is committed to creating safe environments for every child, young person, and vulnerable adult who participates in or is affected by our programmes."
        eyebrow="Child Protection"
        breadcrumbs={[
          { label: 'Legal', href: '/legal' },
          { label: 'Safeguarding Policy', href: '/safeguarding' },
        ]}
        image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80"
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
                AOF recognises that many of the people we serve — particularly children and young people
                in underserved communities — may be vulnerable. We have a duty of care to every individual
                who comes into contact with our work. This policy applies to all staff, board members,
                volunteers, contractors, partners, and visitors involved in AOF programmes.
              </p>
            </div>
          </SlideIn>

          {/* Core principles */}
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

          {/* Unacceptable behaviours + Reporting */}
          <div className="grid gap-10 lg:grid-cols-2 mb-16">
            <SlideIn from="left">
              <div className="rounded-2xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900/10 p-8">
                <h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100 mb-4">
                  Zero-Tolerance Behaviours
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-5">
                  The following are strictly prohibited and will result in immediate removal from AOF and may result in criminal referral:
                </p>
                <ul className="space-y-3">
                  {UNACCEPTABLE_BEHAVIOURS.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                      <span className="flex-shrink-0 mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </SlideIn>

            <SlideIn from="right" delay={0.1}>
              <div className="space-y-5">
                <Card className="p-6">
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                    How to Report a Concern
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    If you witness or suspect abuse, exploitation, or unsafe behaviour involving a child or vulnerable adult in an AOF programme:
                  </p>
                  <ol className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                    {[
                      'Ensure the person is safe. If in immediate danger, call emergency services (112).',
                      'Do not confront the suspected perpetrator directly.',
                      'Record what you witnessed — date, time, location, and what was said or done.',
                      'Report immediately to the AOF Safeguarding Lead.',
                      'Do not share the information with anyone not directly involved in the response.',
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-brand-700 text-white text-[10px] font-bold mt-0.5">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </Card>

                <Card className="p-6 bg-emerald-50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-800">
                  <Phone className="h-6 w-6 text-emerald-600 mb-3" />
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                    Safeguarding Lead Contact
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                    All safeguarding concerns should be reported to:
                  </p>
                  <div className="text-sm space-y-1">
                    <p className="font-medium text-neutral-900 dark:text-neutral-100">AOF Safeguarding Lead</p>
                    <a href="mailto:safeguarding@ayotundeosofoundation.org" className="text-brand-600 underline break-all">
                      safeguarding@ayotundeosofoundation.org
                    </a>
                    <p className="text-neutral-500 text-xs mt-2">
                      Reports can also be made anonymously via our whistleblower channel.
                    </p>
                  </div>
                </Card>
              </div>
            </SlideIn>
          </div>

          <FadeUp>
            <Card className="p-8 bg-neutral-50 dark:bg-neutral-900/50">
              <h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100 mb-3">
                Policy Review
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                This policy is reviewed annually by the AOF Board of Trustees or following any significant
                safeguarding incident. All significant updates are communicated to staff and volunteers.
                The most current version of this policy is always available at{' '}
                <Link href="/safeguarding" className="text-brand-600 underline">
                  ayotundeosofoundation.org/safeguarding
                </Link>.
              </p>
            </Card>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
