import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/shared/PageHero'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/animations'
import { Download, Mail, Handshake, BarChart2, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Partnership Deck | The Ayotunde Oso Foundation',
  description:
    'Download the AOF Partnership Deck — our full overview of partnership tiers, co-branding benefits, impact reporting, and how to partner with us.',
}

const TIERS = [
  {
    name: 'Champion Partner',
    contribution: '₦5M+',
    benefits: [
      'Co-branding on all programme materials',
      'Named recognition in Annual Report',
      'Dedicated impact dashboard access',
      'Quarterly executive briefings',
      'Speaking opportunity at AOF Annual Gala',
    ],
  },
  {
    name: 'Impact Partner',
    contribution: '₦1M – ₦4.9M',
    benefits: [
      'Logo placement on AOF website',
      'Recognition in Annual Report',
      'Semi-annual impact reports',
      'Invitation to programme site visits',
    ],
  },
  {
    name: 'Community Partner',
    contribution: 'Up to ₦999K',
    benefits: [
      'Partner acknowledgement on website',
      'Annual impact summary report',
      'Newsletter feature opportunity',
    ],
  },
]

export default function PartnershipDeckPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Partnership Deck"
        subtitle="Everything you need to understand how a partnership with AOF creates measurable impact — and lasting visibility — for your organisation."
        eyebrow="Resources"
        breadcrumbs={[
          { label: 'Resources', href: '/resources' },
          { label: 'Partnership Deck', href: '/resources/partnership-deck' },
        ]}
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80"
        size="sm"
        gradient="brand"
      >
        <Button variant="gold" size="lg" asChild>
          <a href="/documents/aof-partnership-deck-2026.pdf" download>
            <Download className="mr-2 size-4" />
            Download Deck (PDF)
          </a>
        </Button>
        <Button variant="outline-white" size="lg" asChild>
          <Link href="/contact?subject=partnership">Speak to Partnerships Team</Link>
        </Button>
      </PageHero>

      {/* What's inside */}
      <section className="section">
        <div className="container-xl">
          <FadeUp className="max-w-2xl mb-12">
            <h2 className="heading-2 mb-4">What's in the Deck</h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Our Partnership Deck gives your team the full picture — from AOF's origin story and
              programme reach to financial accountability, co-branding guidelines, and how to get started.
            </p>
          </FadeUp>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Globe,      title: 'About AOF',          desc: 'Our founding story, mission, programmes, and year-1 impact.' },
              { icon: BarChart2,  title: 'Impact Data',         desc: '3,200 lives reached, financial breakdown, SDG alignment.' },
              { icon: Handshake,  title: 'Partnership Tiers',   desc: 'Champion, Impact, and Community tiers with full benefits.' },
              { icon: Download,   title: 'Co-branding Guide',   desc: 'Logo placement, messaging guidelines, and approved assets.' },
              { icon: Mail,       title: 'How to Start',        desc: 'MOU process, timelines, and next steps to formalise.' },
              { icon: BarChart2,  title: 'Reporting Cadence',   desc: 'How and when partners receive impact and financial reports.' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <StaggerItem key={item.title} direction="scale">
                  <Card className="p-5 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                    <Icon className="size-7 text-brand-600 mb-3" />
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                  </Card>
                </StaggerItem>
              )
            })}
          </StaggerContainer>

          {/* Tiers */}
          <FadeUp className="mb-8">
            <h2 className="heading-2">Partnership Tiers</h2>
          </FadeUp>
          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            {TIERS.map((tier, i) => (
              <Card
                key={tier.name}
                className={`p-6 ${i === 0 ? 'border-brand-700 bg-brand-700 text-white' : ''}`}
              >
                <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${i === 0 ? 'text-brand-200' : 'text-brand-600'}`}>
                  {tier.name}
                </p>
                <p className={`font-display text-3xl font-bold mb-4 ${i === 0 ? 'text-gold' : 'text-brand-700 dark:text-brand-400'}`}>
                  {tier.contribution}
                </p>
                <ul className="space-y-2">
                  {tier.benefits.map((b) => (
                    <li key={b} className={`text-sm flex items-start gap-2 ${i === 0 ? 'text-brand-100' : 'text-neutral-600 dark:text-neutral-400'}`}>
                      <span className={`mt-0.5 flex-shrink-0 ${i === 0 ? 'text-gold' : 'text-brand-600'}`}>✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-700">
        <div className="container-xl text-center">
          <FadeUp>
            <h2 className="heading-2 text-white mb-4">Ready to partner with us?</h2>
            <p className="text-brand-200 mb-8 max-w-lg mx-auto">
              Download the full deck or reach out to our Partnerships team to begin the conversation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <a href="/documents/aof-partnership-deck-2026.pdf" download>
                  <Download className="mr-2 size-4" />
                  Download Deck
                </a>
              </Button>
              <Button variant="outline-white" size="lg" asChild>
                <Link href="/contact?subject=partnership">Contact Partnerships</Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
