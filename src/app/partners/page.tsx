import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Partners & Sponsors | The Ayotunde Oso Foundation',
  description: 'Meet the organizations and individuals who partner with AOF to create lasting change across communities.',
};

const PARTNER_TIERS = [
  {
    tier: 'Platinum',
    color: 'bg-slate-100 border-slate-300',
    badgeVariant: 'secondary' as const,
    partners: [
      { name: 'Global Health Initiative', logo: 'GHI', sector: 'Healthcare', since: '2019', contribution: 'Primary healthcare equipment donor and medical staff trainer' },
      { name: 'EduForward Foundation', logo: 'EFF', sector: 'Education', since: '2020', contribution: 'Curriculum development and scholarship co-funding partner' },
      { name: 'GreenEarth Alliance', logo: 'GEA', sector: 'Environment', since: '2021', contribution: 'Environmental program co-implementer across 12 states' },
    ],
  },
  {
    tier: 'Gold',
    color: 'bg-amber-50 border-amber-200',
    badgeVariant: 'gold' as const,
    partners: [
      { name: 'Lagos State Government', logo: 'LSG', sector: 'Government', since: '2020', contribution: 'Land grants and regulatory support for community programs' },
      { name: 'TechBridge Nigeria', logo: 'TBN', sector: 'Technology', since: '2022', contribution: 'Digital skills training infrastructure and curriculum' },
      { name: 'AfriCare Medical', logo: 'ACM', sector: 'Healthcare', since: '2021', contribution: 'Mobile clinic vehicles and pharmaceutical donations' },
      { name: 'Sterling Bank Foundation', logo: 'SBF', sector: 'Finance', since: '2022', contribution: 'Youth entrepreneur micro-grant co-funding' },
    ],
  },
  {
    tier: 'Silver',
    color: 'bg-gray-50 border-gray-200',
    badgeVariant: 'outline' as const,
    partners: [
      { name: 'UNICEF Nigeria', logo: 'UNI', sector: 'International', since: '2021', contribution: 'Child nutrition and education program alignment' },
      { name: 'Dangote Foundation', logo: 'DGF', sector: 'Corporate', since: '2022', contribution: 'Emergency relief co-response and food distribution' },
      { name: 'MTN Foundation', logo: 'MTN', sector: 'Telecom', since: '2023', contribution: 'Digital inclusion and rural connectivity projects' },
      { name: 'Shell LiveWIRE', logo: 'SLW', sector: 'Energy', since: '2022', contribution: 'Youth entrepreneurship training in Delta region' },
      { name: 'Nestle Nigeria', logo: 'NST', sector: 'FMCG', since: '2023', contribution: 'Nutrition education and school feeding programs' },
      { name: 'Access Bank Foundation', logo: 'ABF', sector: 'Finance', since: '2023', contribution: 'Women economic empowerment grants' },
    ],
  },
];

const IMPACT_STATS = [
  { value: '47+', label: 'Partner Organizations' },
  { value: '₦2.8B', label: 'Collective Investment' },
  { value: '18', label: 'Countries Represented' },
  { value: '94%', label: 'Partner Retention Rate' },
];

const HOW_WE_PARTNER = [
  {
    title: 'Co-Implementation',
    description: 'Work alongside our teams to deliver programs directly in communities, sharing resources, expertise, and accountability.',
    icon: '🤝',
  },
  {
    title: 'Capacity Building',
    description: 'Strengthen our organizational capacity through training, systems support, and knowledge transfer initiatives.',
    icon: '📈',
  },
  {
    title: 'Financial Grants',
    description: 'Fund specific programs or provide unrestricted support that allows AOF to respond to emerging community needs.',
    icon: '💰',
  },
  {
    title: 'In-Kind Support',
    description: 'Donate goods, services, equipment, or expertise that directly resources our programs and operations.',
    icon: '📦',
  },
  {
    title: 'Advocacy & Influence',
    description: 'Amplify our mission through your networks, platforms, and relationships to expand reach and impact.',
    icon: '📣',
  },
  {
    title: 'Research & Learning',
    description: 'Partner with us on research, evaluation, and learning initiatives that strengthen the evidence base for our work.',
    icon: '🔬',
  },
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow="Partners & Sponsors"
        title="Stronger Together"
        subtitle="Behind every community transformed is a network of committed partners who believe that collaboration multiplies impact. We are grateful for every organization that stands with us."
        gradient="green"
        breadcrumbs={[{ label: 'Partners', href: '/partners' }]}
      />

      {/* Impact Stats */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {IMPACT_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-brand-green mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Tiers */}
      {PARTNER_TIERS.map((tier) => (
        <section key={tier.tier} className="py-16 bg-cream-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-10">
              <Badge variant={tier.badgeVariant} className="text-sm px-3 py-1">{tier.tier} Partners</Badge>
              <div className="h-px flex-1 bg-gray-200" />
            </div>
            <div className={`grid gap-6 ${
              tier.tier === 'Platinum' ? 'md:grid-cols-3' :
              tier.tier === 'Gold' ? 'md:grid-cols-2 lg:grid-cols-4' :
              'md:grid-cols-2 lg:grid-cols-3'
            }`}>
              {tier.partners.map((partner) => (
                <Card key={partner.name} className={`border ${tier.color} hover:shadow-md transition-shadow`}>
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green font-bold text-lg mb-4">
                      {partner.logo}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{partner.name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">{partner.sector}</Badge>
                      <span className="text-xs text-gray-500">Since {partner.since}</span>
                    </div>
                    <p className="text-sm text-gray-600">{partner.contribution}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* How We Partner */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ways to Partner</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Every organization brings unique strengths. We work to find partnership models that create mutual value while maximizing community impact.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HOW_WE_PARTNER.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 bg-brand-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">Join our growing network of impact-driven partners. Together, we can reach more communities, deepen our programs, and create change that lasts generations.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg" asChild>
              <Link href="/contact?subject=partnership">Start a Conversation</Link>
            </Button>
            <Button variant="outline-white" size="lg" asChild>
              <Link href="/resources/partnership-deck">Download Partnership Deck</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
