import { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/shared/PageHero';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export const metadata: Metadata = {
  title: 'Projects | The Ayotunde Oso Foundation',
  description: 'Explore active and completed projects by The Ayotunde Oso Foundation across education, healthcare, environment, and emergency relief.',
};

const STATUS_COLORS: Record<string, string> = {
  ACTIVE: 'bg-green-100 text-green-700',
  COMPLETED: 'bg-blue-100 text-blue-700',
  PAUSED: 'bg-yellow-100 text-yellow-700',
  PLANNED: 'bg-purple-100 text-purple-700',
};

const PROJECTS = [
  {
    id: 'project-1',
    title: 'Edu-Connect Digital Learning Centers',
    program: 'Education',
    status: 'ACTIVE',
    location: 'Lagos, Ogun & Oyo States',
    startDate: 'January 2024',
    endDate: 'December 2025',
    budget: '₦85,000,000',
    progress: 62,
    beneficiaries: 4200,
    description: 'Establishing 15 fully-equipped digital learning centers in underserved communities, providing students with access to computers, internet connectivity, and quality educational software.',
    outcomes: ['15 centers established', '4,200+ students enrolled', '120 trained educators', 'Average grade improvement: 34%'],
    tags: ['Education', 'Digital Inclusion', 'Youth'],
  },
  {
    id: 'project-2',
    title: 'Mobile Healthcare Outreach — Delta Region',
    program: 'Healthcare',
    status: 'ACTIVE',
    location: 'Delta & Bayelsa States',
    startDate: 'March 2024',
    endDate: 'February 2026',
    budget: '₦62,000,000',
    progress: 48,
    beneficiaries: 18500,
    description: 'Deploying three fully-equipped mobile medical clinics to bring essential healthcare services — maternal care, chronic disease management, vaccinations — to rural and riverine communities.',
    outcomes: ['3 mobile clinics operational', '18,500+ consultations', '2,100 ante-natal visits', '98% vaccination rate in target areas'],
    tags: ['Healthcare', 'Rural', 'Maternal Health'],
  },
  {
    id: 'project-3',
    title: 'Green Schools Initiative',
    program: 'Environment',
    status: 'ACTIVE',
    location: 'Nationwide',
    startDate: 'September 2023',
    endDate: 'August 2025',
    budget: '₦34,000,000',
    progress: 78,
    beneficiaries: 28000,
    description: 'Embedding environmental education, tree-planting clubs, and waste-reduction programs in 50 secondary schools to cultivate the next generation of environmental stewards.',
    outcomes: ['50 schools enrolled', '210,000 trees planted', '28,000 students engaged', 'Waste reduced by 41% in participating schools'],
    tags: ['Environment', 'Youth', 'Education'],
  },
  {
    id: 'project-4',
    title: 'Flood Relief & Rebuilding — Anambra 2024',
    program: 'Emergency Relief',
    status: 'COMPLETED',
    location: 'Anambra State',
    startDate: 'October 2024',
    endDate: 'January 2025',
    budget: '₦28,000,000',
    progress: 100,
    beneficiaries: 6800,
    description: 'Rapid emergency response to devastating floods that displaced 6,800 people across 14 communities. Provided shelter kits, food, clean water, and medical assistance, followed by rebuilding support.',
    outcomes: ['6,800 people reached', '1,200 shelter kits distributed', '90 tonnes of food aid', '450 homes partially rebuilt', 'Full report published'],
    tags: ['Emergency', 'Flood', 'Rebuilding'],
  },
  {
    id: 'project-5',
    title: 'Women Entrepreneur Accelerator',
    program: 'Mentorship',
    status: 'ACTIVE',
    location: 'Abuja & Kano',
    startDate: 'February 2024',
    endDate: 'January 2026',
    budget: '₦41,000,000',
    progress: 55,
    beneficiaries: 380,
    description: '18-month accelerator program pairing 380 women entrepreneurs with mentors, providing business training, seed grants, and market access support to grow sustainable enterprises.',
    outcomes: ['380 entrepreneurs enrolled', '₦12.4M in seed grants disbursed', '74% business survival rate', '142 jobs created by cohort'],
    tags: ['Women', 'Entrepreneurship', 'Mentorship'],
  },
  {
    id: 'project-6',
    title: 'Clean Water for Rural Communities',
    program: 'Environment',
    status: 'COMPLETED',
    location: 'Kebbi & Sokoto States',
    startDate: 'June 2022',
    endDate: 'December 2023',
    budget: '₦55,000,000',
    progress: 100,
    beneficiaries: 42000,
    description: 'Constructed 34 boreholes and installed 12 solar-powered water treatment systems across rural communities that previously relied on unsafe water sources.',
    outcomes: ['34 boreholes drilled', '12 treatment systems installed', '42,000 people with clean water', 'Waterborne illness down 67%'],
    tags: ['Water', 'Rural', 'Health'],
  },
];

const FILTER_TAGS = ['All', 'Education', 'Healthcare', 'Environment', 'Emergency', 'Mentorship', 'Women', 'Youth'];

export default function ProjectsPage() {
  const activeCount = PROJECTS.filter(p => p.status === 'ACTIVE').length;
  const completedCount = PROJECTS.filter(p => p.status === 'COMPLETED').length;
  const totalBeneficiaries = PROJECTS.reduce((sum, p) => sum + p.beneficiaries, 0);

  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow="Our Projects"
        title="Where Work Meets Impact"
        subtitle="Every project is a deliberate effort to solve a specific problem in a specific community. Explore our active and completed initiatives across all program areas."
        gradient="green"
        breadcrumbs={[{ label: 'Projects', href: '/projects' }]}
      />

      {/* Stats Bar */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-green">{activeCount}</div>
              <div className="text-sm text-gray-600 mt-1">Active Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-green">{completedCount}</div>
              <div className="text-sm text-gray-600 mt-1">Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-green">{totalBeneficiaries.toLocaleString()}+</div>
              <div className="text-sm text-gray-600 mt-1">Total Beneficiaries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-green">5</div>
              <div className="text-sm text-gray-600 mt-1">Program Areas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${STATUS_COLORS[project.status]}`}>
                            {project.status}
                          </span>
                          <Badge variant="outline" className="text-xs">{project.program}</Badge>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                      <div>
                        <span className="text-gray-500">Location</span>
                        <p className="font-medium text-gray-800">{project.location}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Budget</span>
                        <p className="font-medium text-gray-800">{project.budget}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Timeline</span>
                        <p className="font-medium text-gray-800">{project.startDate} – {project.endDate}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Beneficiaries</span>
                        <p className="font-medium text-gray-800">{project.beneficiaries.toLocaleString()}+</p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium text-brand-green">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} color="brand" />
                    </div>

                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Key Outcomes</h4>
                      <ul className="space-y-1">
                        {project.outcomes.map((outcome) => (
                          <li key={outcome} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-brand-green mt-0.5 flex-shrink-0">✓</span>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Support a Project</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">Your contribution funds real projects that transform real lives. Donate today and track the difference you make.</p>
          <Button variant="gold" size="lg" asChild>
            <Link href="/donate">Donate to a Project</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
