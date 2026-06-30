import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Grants Program | The Ayotunde Oso Foundation',
  description: 'Apply for AOF community grants supporting education, healthcare, environment, and emergency response programs in Nigeria.',
};

const GRANT_TYPES = [
  {
    name: 'Community Impact Grants',
    amount: '₦250,000 – ₦2,000,000',
    duration: '6 – 12 months',
    focus: 'Education, healthcare, environmental sustainability, emergency preparedness',
    eligibility: ['Registered CBO or NGO in Nigeria', 'Minimum 1 year of operations', 'At least 10 community members served', 'No previous AOF grant default'],
    deadline: 'March 31, 2025',
    status: 'OPEN',
  },
  {
    name: 'Women Empowerment Micro-Grants',
    amount: '₦50,000 – ₦500,000',
    duration: '3 – 6 months',
    focus: 'Women-led enterprises, skills training, reproductive health, gender-based violence prevention',
    eligibility: ['Women-led organization or initiative', 'At least 70% women beneficiaries', 'Based in underserved community', 'Demonstrated need with supporting data'],
    deadline: 'Quarterly — Next: June 30, 2025',
    status: 'OPEN',
  },
  {
    name: 'Youth Innovation Grants',
    amount: '₦100,000 – ₦750,000',
    duration: '6 months',
    focus: 'Technology solutions, social enterprise, arts & culture with social impact',
    eligibility: ['Led by individual aged 18–35 or youth-focused organization', 'Clear innovation component', 'Measurable social outcome', 'Viability plan for sustainability'],
    deadline: 'Rolling applications',
    status: 'OPEN',
  },
  {
    name: 'Emergency Response Partnerships',
    amount: 'Up to ₦5,000,000',
    duration: 'Event-based',
    focus: 'Disaster relief, post-crisis recovery, humanitarian corridors',
    eligibility: ['Established humanitarian organization', 'Proven emergency response capacity', 'Geographic presence in affected area', 'NEMA coordination experience'],
    deadline: 'Rolling — deploy within 72 hours',
    status: 'ROLLING',
  },
];

const PROCESS_STEPS = [
  { step: '01', title: 'Review Guidelines', desc: 'Download and carefully read the grant guidelines and eligibility criteria for the grant type you are applying for.' },
  { step: '02', title: 'Prepare Documents', desc: 'Gather your organization registration documents, program budget, team bios, past reports, and letters of community support.' },
  { step: '03', title: 'Complete Application', desc: 'Fill out the online grant application form completely. Incomplete applications will not be reviewed.' },
  { step: '04', title: 'Review Process', desc: 'Applications undergo a 3-stage review: administrative screening, technical assessment, and committee approval. Takes 4–6 weeks.' },
  { step: '05', title: 'Notification', desc: 'All applicants receive written notification of the outcome. Successful grantees proceed to grant agreement signing.' },
  { step: '06', title: 'Implementation', desc: 'Funds are disbursed in tranches tied to milestones. Grantees submit quarterly progress reports and a final evaluation.' },
];

export default function GrantsPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow="Grants Program"
        title="Investing in Community-Led Change"
        subtitle="AOF believes the best change comes from within communities. Our grants fund local organizations with the vision, relationships, and commitment to transform their own communities."
        gradient="gold"
        breadcrumbs={[
          { label: 'Resources', href: '/resources' },
          { label: 'Grants', href: '/resources/grants' },
        ]}
      />

      {/* Grant Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Grant Programs</h2>
            <p className="text-gray-600 max-w-xl mx-auto">We offer four distinct grant types to support organizations at different stages and with different focus areas.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {GRANT_TYPES.map((grant) => (
              <Card key={grant.name} className="border-2 hover:border-brand-green/30 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">{grant.name}</h3>
                    <Badge variant={grant.status === 'OPEN' ? 'default' : 'secondary'} className="flex-shrink-0 ml-2">
                      {grant.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div>
                      <span className="text-gray-500 block">Grant Amount</span>
                      <span className="font-medium text-brand-green">{grant.amount}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Duration</span>
                      <span className="font-medium text-gray-800">{grant.duration}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Focus Areas</span>
                    <p className="text-sm text-gray-700 mt-1">{grant.focus}</p>
                  </div>
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Eligibility</span>
                    <ul className="mt-1 space-y-1">
                      {grant.eligibility.map((e) => (
                        <li key={e} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-brand-green mt-0.5 flex-shrink-0">✓</span> {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t">
                    <div className="text-sm">
                      <span className="text-gray-500">Deadline: </span>
                      <span className="font-medium text-gray-800">{grant.deadline}</span>
                    </div>
                    <Button variant="default" size="sm" asChild>
                      <Link href={`/contact?subject=grant-${grant.name.toLowerCase().replace(/\s+/g, '-')}`}>Apply Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Our grant process is designed to be rigorous but fair. We review every application with care.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl font-black text-brand-green/15 mb-3">{step.step}</div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">Download the guidelines, prepare your documents, and reach out to our grants team if you have questions before applying.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg" asChild>
              <Link href="/contact?subject=grants">Contact Grants Team</Link>
            </Button>
            <Button variant="outline-white" size="lg" asChild>
              <a href="/resources/grants/community-grants-guide-2025.pdf" target="_blank" rel="noopener noreferrer">Download Guidelines</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
