import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Resources | The Ayotunde Oso Foundation',
  description: 'Access reports, guides, grant information, toolkits, and other resources from The Ayotunde Oso Foundation.',
};

const RESOURCE_CATEGORIES = [
  {
    title: 'Annual Reports',
    description: 'Audited financial statements and program impact reports, published annually.',
    icon: '📊',
    resources: [
      { title: 'AOF Annual Report 2024', type: 'PDF', size: '4.2 MB', href: '/resources/annual-report-2024.pdf' },
      { title: 'AOF Annual Report 2023', type: 'PDF', size: '3.8 MB', href: '/resources/annual-report-2023.pdf' },
      { title: 'AOF Annual Report 2022', type: 'PDF', size: '3.1 MB', href: '/resources/annual-report-2022.pdf' },
    ],
  },
  {
    title: 'Program Reports',
    description: 'Detailed evaluations and case studies from each of our core program areas.',
    icon: '📈',
    resources: [
      { title: 'Education Program Impact Study 2024', type: 'PDF', size: '2.4 MB', href: '/resources/education-impact-2024.pdf' },
      { title: 'Healthcare Outreach Outcomes Report', type: 'PDF', size: '1.9 MB', href: '/resources/healthcare-outcomes-2024.pdf' },
      { title: 'Green Schools Initiative Evaluation', type: 'PDF', size: '1.5 MB', href: '/resources/green-schools-eval-2024.pdf' },
      { title: 'Mentorship Program Year 2 Review', type: 'PDF', size: '2.1 MB', href: '/resources/mentorship-review-2024.pdf' },
      { title: 'Anambra Flood Response Report', type: 'PDF', size: '3.2 MB', href: '/resources/anambra-flood-response-2024.pdf' },
    ],
  },
  {
    title: 'Grants & Funding',
    description: 'Information about AOF grant opportunities for community-based organizations.',
    icon: '💰',
    resources: [
      { title: 'Community Grants Program Guide 2025', type: 'PDF', size: '1.1 MB', href: '/resources/grants/community-grants-guide-2025.pdf' },
      { title: 'Grant Application Checklist', type: 'PDF', size: '0.3 MB', href: '/resources/grants/application-checklist.pdf' },
      { title: 'Budget Template for Applicants', type: 'XLSX', size: '0.2 MB', href: '/resources/grants/budget-template.xlsx' },
    ],
    cta: { label: 'Apply for a Grant', href: '/resources/grants' },
  },
  {
    title: 'Toolkits & Guides',
    description: 'Practical guides and toolkits for community leaders and program implementers.',
    icon: '🛠️',
    resources: [
      { title: 'Community Health Volunteer Handbook', type: 'PDF', size: '1.8 MB', href: '/resources/chv-handbook.pdf' },
      { title: 'Environmental Club Starter Kit', type: 'PDF', size: '2.2 MB', href: '/resources/env-club-kit.pdf' },
      { title: 'Mentor Handbook — AOF Mentorship Program', type: 'PDF', size: '1.4 MB', href: '/resources/mentor-handbook.pdf' },
      { title: 'Emergency Preparedness Community Guide', type: 'PDF', size: '1.6 MB', href: '/resources/emergency-prep-guide.pdf' },
    ],
  },
  {
    title: 'Policy & Governance',
    description: 'Our organizational policies, governance documents, and codes of conduct.',
    icon: '📃',
    resources: [
      { title: 'AOF Child Safeguarding Policy', type: 'PDF', size: '0.8 MB', href: '/resources/child-safeguarding-policy.pdf' },
      { title: 'Data Protection Policy', type: 'PDF', size: '0.6 MB', href: '/resources/data-protection-policy.pdf' },
      { title: 'Anti-Corruption & Whistleblower Policy', type: 'PDF', size: '0.5 MB', href: '/resources/anti-corruption-policy.pdf' },
      { title: 'Volunteer Code of Conduct', type: 'PDF', size: '0.4 MB', href: '/resources/volunteer-code-of-conduct.pdf' },
    ],
  },
  {
    title: 'Media Kit',
    description: 'Logos, brand assets, photos, and press materials for media and partners.',
    icon: '🎨',
    resources: [
      { title: 'AOF Logo Pack (SVG, PNG, EPS)', type: 'ZIP', size: '12.4 MB', href: '/resources/aof-logo-pack.zip' },
      { title: 'Brand Guidelines 2025', type: 'PDF', size: '5.1 MB', href: '/resources/brand-guidelines-2025.pdf' },
      { title: 'Press Photos Collection', type: 'ZIP', size: '48.2 MB', href: '/resources/press-photos.zip' },
    ],
    cta: { label: 'Visit Press Page', href: '/press' },
  },
];

const TYPE_COLORS: Record<string, string> = {
  PDF: 'bg-red-100 text-red-700',
  XLSX: 'bg-green-100 text-green-700',
  ZIP: 'bg-purple-100 text-purple-700',
  DOCX: 'bg-blue-100 text-blue-700',
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow="Resources"
        title="Knowledge Shared, Impact Multiplied"
        subtitle="We believe in radical transparency. Access our reports, toolkits, grant information, and media assets — all publicly available because accountability is core to who we are."
        gradient="green"
        breadcrumbs={[{ label: 'Resources', href: '/resources' }]}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RESOURCE_CATEGORIES.map((cat) => (
              <Card key={cat.title} className="border hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">{cat.icon}</div>
                  <h2 className="text-lg font-bold text-gray-900 mb-2">{cat.title}</h2>
                  <p className="text-sm text-gray-600 mb-5">{cat.description}</p>
                  <ul className="space-y-3 mb-5">
                    {cat.resources.map((res) => (
                      <li key={res.title}>
                        <a
                          href={res.href}
                          className="flex items-center gap-3 text-sm hover:text-brand-green transition-colors group"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className={`text-xs px-1.5 py-0.5 rounded font-mono font-medium flex-shrink-0 ${TYPE_COLORS[res.type] || 'bg-gray-100 text-gray-600'}`}>{res.type}</span>
                          <span className="flex-1 text-gray-700 group-hover:text-brand-green">{res.title}</span>
                          <span className="text-gray-400 text-xs flex-shrink-0">{res.size}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  {cat.cta && (
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <Link href={cat.cta.href}>{cat.cta.label}</Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Informed</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">Subscribe to our newsletter to receive new reports, toolkits, and resources directly in your inbox.</p>
          <Button variant="default" size="lg" asChild>
            <Link href="/#newsletter">Subscribe to Newsletter</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
