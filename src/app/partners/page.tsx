import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/shared/PageHero'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  FadeUp,
  SlideIn,
  StaggerContainer,
  StaggerItem,
  CountUp,
} from '@/components/ui/animations'

export const metadata: Metadata = {
  title: 'Partners & Sponsors | The Ayotunde Oso Foundation',
  description:
    'Meet the organizations and individuals who partner with AOF to create lasting change across communities.',
  openGraph: { title: 'Partners & Sponsors | The Ayotunde Oso Foundation' },
}

const PARTNER_TIERS = [
  {
    tier: 'Platinum',
    badgeVariant: 'secondary' as const,
    partners: [
      { name: 'Global Health Initiative',  logo: 'GHI', sector: 'Healthcare',   since: '2025', contribution: 'Primary healthcare equipment donor and medical staff trainer' },
      { name: 'EduForward Foundation',     logo: 'EFF', sector: 'Education',    since: '2025', contribution: 'Curriculum development and scholarship co-funding partner' },
    ],
  },
  {
    tier: 'Gold',
    badgeVariant: 'gold' as const,
    partners: [
      { name: 'Lagos State Government',    logo: 'LSG', sector: 'Government',   since: '2025', contribution: 'Land grants and regulatory support for community programs' },
      { name: 'AfriCare Medical',          logo: 'ACM', sector: 'Healthcare',   since: '2025', contribution: 'Mobile clinic vehicles and pharmaceutical donations' },
      { name: 'TechBridge Nigeria',        logo: 'TBN', sector: 'Technology',   since: '2025', contribution: 'Digital skills training infrastructure and curriculum' },
    ],
  },
  {
    tier: 'Silver',
    badgeVariant: 'outline' as const,
    partners: [
      { name: 'Dangote Foundation',        logo: 'DGF', sector: 'Corporate',    since: '2025', contribution: 'Emergency relief co-response and food distribution' },
      { name: 'MTN Foundation',            logo: 'MTN', sector: 'Telecom',      since: '2025', contribution: 'Digital inclusion and rural connectivity projects' },
      { name: 'Access Bank Foundation',    logo: 'ABF', sector: 'Finance',      since: '2025', contribution: 'Women economic empowerment grants' },
    ],
  },
]

const IMPACT_STATS = [
  { to: 8,   suffix: '+', label: 'Partner Organizations',   color: 'text-brand-700' },
  { to: 45,  suffix: 'M', prefix: '₦', decimals: 0, label: 'Collective Investment', color: 'text-gold-700' },
  { to: 2,   suffix: '',  label: 'Countries Represented',   color: 'text-emerald-700' },
  { to: 100, suffix: '%', label: 'Partner Retention Rate',  color: 'text-blue-700' },
]

const HOW_WE_PARTNER = [
  { title: 'Co-Implementation', description: 'Work alongside our teams to deliver programs directly in communities, sharing resources, expertise, and accountability.', icon: '🤝' },
  { title: 'Capacity Building', description: 'Strengthen our organizational capacity through training, systems support, and knowledge transfer initiatives.', icon: '📈' },
  { title: 'Financial Grants', description: 'Fund specific programs or provide unrestricted support that allows AOF to respond to emerging community needs.', icon: '💰' },
  { title: 'In-Kind Support', description: 'Donate goods, services, equipment, or expertise that directly resources our programs and operations.', icon: '📦' },
  { title: 'Advocacy & Influence', description: 'Amplify our mission through your networks, platforms, and relationships to expand reach and impact.', icon: '📣' },
  { title: 'Research & Learning', description: 'Partner with us on research, evaluation, and learning initiatives that strengthen the evidence base for our work.', icon: '🔬' },
]

const tierGridCols: Record<string, string> = {
  Platinum: 'md:grid-cols-3',
  Gold:     'md:grid-cols-2 lg:grid-cols-4',
  Silver:   'md:grid-cols-2 lg:grid-cols-3',
}

export default function PartnersPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Partners & Sponsors"
        title="Stronger Together"
        subtitle="Behind every community transformed is a network of committed partners who believe that collaboration multiplies impact. We are grateful for every organisation that stands with us."
        breadcrumbs={[{ label: 'Partners', href: '/partners' }]}
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80"
        size="default"
      />

      {/* Impact Stats */}
      <section className="section border-b border-neutral-100 dark:border-neutral-800">
        <div className="container-xl">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {IMPACT_STATS.map((stat) => (
              <StaggerItem key={stat.label} direction="up">
                <p className={`font-display text-4xl font-bold ${stat.color}`}>
                  <CountUp
                    to={stat.to}
                    prefix={stat.prefix ?? ''}
                    suffix={stat.suffix}
                    decimals={stat.decimals ?? 0}
                    separator={!stat.decimals}
                  />
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Partner Tiers */}
      {PARTNER_TIERS.map((tier, ti) => (
        <section key={tier.tier} className="section bg-cream-50 dark:bg-neutral-900/50">
          <div className="container-xl">
            <SlideIn from={ti % 2 === 0 ? 'left' : 'right'} className="flex items-center gap-3 mb-10">
              <Badge variant={tier.badgeVariant} className="text-sm px-3 py-1">
                {tier.tier} Partners
              </Badge>
              <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-700" />
            </SlideIn>
            <StaggerContainer className={`grid gap-6 ${tierGridCols[tier.tier] ?? ''}`}>
              {tier.partners.map((partner) => (
                <StaggerItem key={partner.name} direction="scale">
                  <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-xl bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center text-brand-700 dark:text-brand-400 font-bold text-base mb-4">
                        {partner.logo}
                      </div>
                      <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                        {partner.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="text-xs">{partner.sector}</Badge>
                        <span className="text-xs text-neutral-500">Since {partner.since}</span>
                      </div>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">{partner.contribution}</p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      ))}

      {/* How We Partner */}
      <section className="section">
        <div className="container-xl">
          <FadeUp className="text-center mb-14">
            <Badge variant="brand" className="mb-4">Partnership Models</Badge>
            <h2 className="heading-2">Ways to Partner</h2>
            <p className="text-body max-w-2xl mx-auto mt-4 text-neutral-600 dark:text-neutral-400">
              Every organisation brings unique strengths. We work to find partnership models that create
              mutual value while maximising community impact.
            </p>
          </FadeUp>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HOW_WE_PARTNER.map((item) => (
              <StaggerItem key={item.title} direction="up">
                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="section bg-brand-700">
        <div className="container-xl text-center">
          <FadeUp>
            <h2 className="heading-2 text-white mb-4">Become a Partner</h2>
            <p className="text-brand-200 max-w-2xl mx-auto mb-8 text-lg">
              Join our growing network of impact-driven partners. Together, we can reach more communities,
              deepen our programmes, and create change that lasts generations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="gold" size="lg" asChild>
                <Link href="/contact?subject=partnership">Start a Conversation</Link>
              </Button>
              <Button variant="outline-white" size="lg" asChild>
                <Link href="/resources/partnership-deck">Download Partnership Deck</Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
