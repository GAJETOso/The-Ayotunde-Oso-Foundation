import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/shared/PageHero'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/animations'
import {
  Scale,
  ShieldCheck,
  UserCheck,
  AlertTriangle,
  Lock,
  Cookie,
  RefreshCw,
  Globe,
  FileText,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Legal & Compliance | The Ayotunde Oso Foundation',
  description:
    'All legal policies, compliance documents, and governance frameworks of The Ayotunde Oso Foundation in one place.',
}

const POLICIES = [
  {
    icon: Scale,
    title: 'Terms of Use',
    description: 'Rules governing use of the AOF website, services, and digital platforms.',
    href: '/terms',
    badge: 'Governance',
  },
  {
    icon: Lock,
    title: 'Privacy Policy',
    description: 'How we collect, use, store, and protect your personal data in line with the NDPR.',
    href: '/privacy',
    badge: 'Data & Privacy',
  },
  {
    icon: Cookie,
    title: 'Cookie Policy',
    description: 'How we use cookies and similar tracking technologies on our website.',
    href: '/cookies',
    badge: 'Data & Privacy',
  },
  {
    icon: RefreshCw,
    title: 'Refund Policy',
    description: 'Conditions under which donation refunds may be reviewed and processed.',
    href: '/refund-policy',
    badge: 'Donations',
  },
  {
    icon: ShieldCheck,
    title: 'Anti-Money Laundering Policy',
    description: 'Our commitment to preventing financial crime and ensuring the integrity of all donations.',
    href: '/aml-policy',
    badge: 'Compliance',
  },
  {
    icon: UserCheck,
    title: 'Safeguarding Policy',
    description: 'How AOF protects children, young people, and vulnerable adults in all its programmes.',
    href: '/safeguarding',
    badge: 'Child Protection',
  },
  {
    icon: AlertTriangle,
    title: 'Whistleblower Policy',
    description: 'How to safely report concerns about wrongdoing, fraud, or misconduct within AOF.',
    href: '/whistleblower',
    badge: 'Governance',
  },
  {
    icon: Globe,
    title: 'Accessibility Statement',
    description: 'Our commitment to making this website accessible to all users.',
    href: '/accessibility',
    badge: 'Accessibility',
  },
]

const LEGAL_NOTICES = [
  {
    title: 'Registered Organisation',
    body: 'The Ayotunde Oso Foundation is registered with the Corporate Affairs Commission (CAC) of Nigeria as a Not-for-Profit Organisation (NPO). Registration number: CAC RC-8610457.',
  },
  {
    title: 'Governing Law',
    body: 'All policies, contracts, and activities of The Ayotunde Oso Foundation are governed by the laws of the Federal Republic of Nigeria, including the Companies and Allied Matters Act (CAMA) 2020.',
  },
  {
    title: 'Tax Status',
    body: 'AOF operates as a registered nonprofit and may qualify for tax-exempt status under applicable Nigerian tax law. Donors are advised to consult their tax advisors regarding the deductibility of donations in their jurisdiction.',
  },
  {
    title: 'Disclaimer',
    body: 'The content on this website is provided for general informational purposes only. AOF makes no warranties, express or implied, regarding the accuracy, completeness, or suitability of information on this site.',
  },
]

export default function LegalPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Legal & Compliance"
        subtitle="All governance documents, compliance policies, and legal notices for The Ayotunde Oso Foundation in one place."
        eyebrow="Transparency"
        breadcrumbs={[{ label: 'Legal', href: '/legal' }]}
        image="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80"
        size="sm"
      />

      {/* Policy documents */}
      <section className="section">
        <div className="container-xl">
          <FadeUp className="mb-10">
            <Badge variant="brand" className="mb-3">Policy Documents</Badge>
            <h2 className="heading-2">Our Policies</h2>
            <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-400">
              AOF is committed to full transparency in how we operate. The following documents
              govern our conduct, protect our stakeholders, and ensure compliance with applicable law.
            </p>
          </FadeUp>

          <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {POLICIES.map((p) => {
              const Icon = p.icon
              return (
                <StaggerItem key={p.href} direction="up">
                  <Link href={p.href} className="block h-full group">
                    <Card className="h-full p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-card-hover group-hover:ring-1 group-hover:ring-brand-200">
                      <div className="mb-4 flex items-start justify-between gap-3">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-900/30 group-hover:bg-brand-100 dark:group-hover:bg-brand-900/50 transition-colors">
                          <Icon className="h-5 w-5 text-brand-700 dark:text-brand-400" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mt-1">
                          {p.badge}
                        </span>
                      </div>
                      <h3 className="mb-2 font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                        {p.description}
                      </p>
                      <p className="mt-4 text-xs font-semibold text-brand-600 dark:text-brand-400">
                        Read policy →
                      </p>
                    </Card>
                  </Link>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Legal notices */}
      <section className="section bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container-xl">
          <FadeUp className="mb-10">
            <Badge variant="gold" className="mb-3">Legal Notices</Badge>
            <h2 className="heading-2">Legal Information</h2>
          </FadeUp>

          <div className="grid gap-5 md:grid-cols-2">
            {LEGAL_NOTICES.map((n) => (
              <FadeUp key={n.title}>
                <Card className="p-6 h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <FileText className="h-4 w-4 text-brand-600 flex-shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">{n.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{n.body}</p>
                </Card>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section">
        <div className="container-xl">
          <FadeUp className="max-w-2xl mx-auto text-center">
            <h2 className="heading-2 mb-4">Questions about our policies?</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
              Our compliance team is happy to answer questions about any of our legal or governance documents.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href="/contact">Contact Compliance Team</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="mailto:legal@ayotundeosofoundation.org">legal@ayotundeosofoundation.org</Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
