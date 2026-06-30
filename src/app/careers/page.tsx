import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Careers | The Ayotunde Oso Foundation',
  description: 'Join the team at The Ayotunde Oso Foundation. View open positions and help us build a more equitable Nigeria.',
};

const OPEN_ROLES = [
  {
    title: 'Program Officer — Education',
    department: 'Programs',
    type: 'Full-time',
    location: 'Lagos, Nigeria',
    level: 'Mid-level',
    description: 'Lead the day-to-day implementation of AOF’s education programs, including scholarship administration, digital learning center operations, and teacher training coordination across Lagos, Ogun, and Oyo states.',
    requirements: ['Bachelor’s degree in Education, Social Work, or related field', 'Minimum 3 years experience in program management', 'Experience in community development or NGO sector', 'Strong reporting and data management skills', 'Willingness to travel within Southwest Nigeria'],
    posted: '2025-06-01',
  },
  {
    title: 'Healthcare Outreach Coordinator',
    department: 'Programs',
    type: 'Full-time',
    location: 'Delta State, Nigeria',
    level: 'Mid-level',
    description: 'Coordinate mobile healthcare outreach activities across Delta and Bayelsa states, including logistics management, community mobilization, health worker scheduling, and outcome data collection.',
    requirements: ['Degree in Public Health, Nursing, or related healthcare field', 'Community health experience in rural or riverine areas', 'Strong logistics coordination skills', 'Valid driver’s license', 'Fluency in Itsekiri or Urhobo a plus'],
    posted: '2025-06-10',
  },
  {
    title: 'Communications & Content Manager',
    department: 'Communications',
    type: 'Full-time',
    location: 'Lagos, Nigeria (Hybrid)',
    level: 'Senior',
    description: 'Drive AOF’s brand narrative across digital and traditional channels. Create compelling content, manage social media presence, support media relations, and produce impact stories that inspire donors and partners.',
    requirements: ['Degree in Communications, Journalism, or Marketing', 'Minimum 4 years in communications, preferably nonprofit', 'Exceptional writing skills in English', 'Video production and photography skills a plus', 'Social media management experience'],
    posted: '2025-06-15',
  },
  {
    title: 'Finance & Grants Officer',
    department: 'Finance',
    type: 'Full-time',
    location: 'Lagos, Nigeria',
    level: 'Mid-level',
    description: 'Manage financial reporting, grant compliance, donor fund tracking, and support the annual audit process. Prepare financial statements, budget variance reports, and grantee financial reviews.',
    requirements: ['Degree in Accounting, Finance, or related field', 'ACA, ACCA, or ICAN certification preferred', 'Minimum 3 years NGO finance experience', 'Experience with donor financial reporting', 'Proficiency in QuickBooks or similar accounting software'],
    posted: '2025-06-20',
  },
  {
    title: 'MEAL Officer (Monitoring, Evaluation, Accountability & Learning)',
    department: 'Programs',
    type: 'Full-time',
    location: 'Abuja, Nigeria',
    level: 'Mid-level',
    description: 'Design and manage AOF’s MEAL systems, conduct field assessments, analyze program data, and produce evidence-based learning products that strengthen program quality and demonstrate impact to stakeholders.',
    requirements: ['Degree in Statistics, Social Sciences, or related field', 'Minimum 3 years MEAL experience in development or humanitarian sector', 'Proficiency in KoBoToolbox, SPSS, or STATA', 'Strong quantitative and qualitative research skills', 'Experience writing impact reports'],
    posted: '2025-06-25',
  },
  {
    title: 'Volunteer & Community Engagement Coordinator',
    department: 'Programs',
    type: 'Contract (12 months)',
    location: 'Lagos, Nigeria',
    level: 'Entry-level',
    description: 'Manage AOF’s growing volunteer network: recruit, onboard, schedule, and recognize volunteers across all programs. Build community engagement through events, campaigns, and ambassador programs.',
    requirements: ['Degree in any field', 'Strong interpersonal and organizational skills', 'Experience managing volunteers or community groups', 'High energy and genuine passion for community work', 'Proficiency in Microsoft Office or Google Workspace'],
    posted: '2025-06-28',
  },
];

const BENEFITS = [
  { title: 'Competitive Salary', desc: 'Market-rate compensation benchmarked against NGO sector standards', icon: '💰' },
  { title: 'Health Insurance', desc: 'Comprehensive health coverage for you and your immediate family', icon: '🏥' },
  { title: 'Learning & Development', desc: 'Annual L&D budget and access to conferences, courses, and certifications', icon: '📚' },
  { title: 'Flexible Work', desc: 'Hybrid and flexible arrangements for eligible roles', icon: '🏠' },
  { title: 'Paid Leave', desc: '21 days annual leave plus public holidays and compassionate leave', icon: '🌴' },
  { title: 'Mission Alignment', desc: 'Work that matters. Every day. Alongside people who care deeply.', icon: '❤️' },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow="Careers at AOF"
        title="Work That Changes Lives"
        subtitle="We are looking for passionate, talented people who want to dedicate their careers to creating real change in communities across Nigeria. If that is you, we want to hear from you."
        gradient="green"
        breadcrumbs={[{ label: 'Careers', href: '/careers' }]}
      />

      {/* Benefits */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Why Work at AOF?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((b) => (
              <div key={b.title} className="flex gap-4">
                <div className="text-3xl flex-shrink-0">{b.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{b.title}</h3>
                  <p className="text-sm text-gray-600">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-gray-600">{OPEN_ROLES.length} positions currently available</p>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {OPEN_ROLES.map((role) => (
              <Card key={role.title} className="border hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">{role.department}</Badge>
                        <Badge variant={role.type === 'Full-time' ? 'default' : 'secondary'} className="text-xs">{role.type}</Badge>
                        <Badge variant="outline" className="text-xs">{role.level}</Badge>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{role.title}</h3>
                      <p className="text-sm text-gray-500 mb-3">📍 {role.location} · Posted {new Date(role.posted).toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                      <p className="text-sm text-gray-600 mb-4">{role.description}</p>
                      <div>
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Requirements</h4>
                        <ul className="space-y-1">
                          {role.requirements.map((req) => (
                            <li key={req} className="flex items-start gap-2 text-sm text-gray-700">
                              <span className="text-brand-green mt-0.5 flex-shrink-0">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Button variant="default" asChild>
                        <Link href={`/contact?subject=career-${role.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>Apply Now</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Spontaneous Application */}
      <section className="py-16 bg-brand-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Don’t See the Right Role?</h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">We are always interested in hearing from exceptional people. Send us your CV and a note about the kind of work you would like to do with us.</p>
          <Button variant="gold" size="lg" asChild>
            <Link href="/contact?subject=spontaneous-application">Send Spontaneous Application</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
