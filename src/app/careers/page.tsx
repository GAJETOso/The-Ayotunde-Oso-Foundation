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
} from '@/components/ui/animations'
import { MapPin, Clock, Briefcase, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers | The Ayotunde Oso Foundation',
  description:
    'Join the team at The Ayotunde Oso Foundation. View open positions and help us build a more equitable Nigeria.',
  openGraph: { title: 'Careers | The Ayotunde Oso Foundation' },
}

const OPEN_ROLES = [
  {
    title: 'Program Officer — Education',
    department: 'Programs',
    type: 'Full-time',
    location: 'Lagos, Nigeria',
    level: 'Mid-level',
    description:
      'Lead the day-to-day implementation of AOF's education programs, including scholarship administration, digital learning center operations, and teacher training coordination across Lagos, Ogun, and Oyo states.',
    requirements: [
      'Bachelor's degree in Education, Social Work, or related field',
      'Minimum 3 years experience in program management',
      'Experience in community development or NGO sector',
      'Strong reporting and data management skills',
      'Willingness to travel within Southwest Nigeria',
    ],
    posted: '2025-06-01',
  },
  {
    title: 'Healthcare Outreach Coordinator',
    department: 'Programs',
    type: 'Full-time',
    location: 'Delta State, Nigeria',
    level: 'Mid-level',
    description:
      'Coordinate mobile healthcare outreach activities across Delta and Bayelsa states, including logistics management, community mobilization, health worker scheduling, and outcome data collection.',
    requirements: [
      'Degree in Public Health, Nursing, or related healthcare field',
      'Community health experience in rural or riverine areas',
      'Strong logistics coordination skills',
      'Valid driver's license',
      'Fluency in Itsekiri or Urhobo a plus',
    ],
    posted: '2025-06-10',
  },
  {
    title: 'Communications & Content Manager',
    department: 'Communications',
    type: 'Full-time',
    location: 'Lagos, Nigeria (Hybrid)',
    level: 'Senior',
    description:
      'Drive AOF's brand narrative across digital and traditional channels. Create compelling content, manage social media presence, support media relations, and produce impact stories that inspire donors and partners.',
    requirements: [
      'Degree in Communications, Journalism, or Marketing',
      'Minimum 4 years in communications, preferably nonprofit',
      'Exceptional writing skills in English',
      'Video production and photography skills a plus',
      'Social media management experience',
    ],
    posted: '2025-06-15',
  },
  {
    title: 'Finance & Grants Officer',
    department: 'Finance',
    type: 'Full-time',
    location: 'Lagos, Nigeria',
    level: 'Mid-level',
    description:
      'Manage financial reporting, grant compliance, donor fund tracking, and support the annual audit process. Prepare financial statements, budget variance reports, and grantee financial reviews.',
    requirements: [
      'Degree in Accounting, Finance, or related field',
      'ACA, ACCA, or ICAN certification preferred',
      'Minimum 3 years NGO finance experience',
      'Experience with donor financial reporting',
      'Proficiency in QuickBooks or similar accounting software',
    ],
    posted: '2025-06-20',
  },
  {
    title: 'MEAL Officer (Monitoring, Evaluation, Accountability & Learning)',
    department: 'Programs',
    type: 'Full-time',
    location: 'Abuja, Nigeria',
    level: 'Mid-level',
    description:
      'Design and manage AOF's MEAL systems, conduct field assessments, analyze program data, and produce evidence-based learning products that strengthen program quality and demonstrate impact to stakeholders.',
    requirements: [
      'Degree in Statistics, Social Sciences, or related field',
      'Minimum 3 years MEAL experience in development or humanitarian sector',
      'Proficiency in KoBoToolbox, SPSS, or STATA',
      'Strong quantitative and qualitative research skills',
      'Experience writing impact reports',
    ],
    posted: '2025-06-25',
  },
  {
    title: 'Volunteer & Community Engagement Coordinator',
    department: 'Programs',
    type: 'Contract (12 months)',
    location: 'Lagos, Nigeria',
    level: 'Entry-level',
    description:
      'Manage AOF's growing volunteer network: recruit, onboard, schedule, and recognize volunteers across all programs. Build community engagement through events, campaigns, and ambassador programs.',
    requirements: [
      'Degree in any field',
      'Strong interpersonal and organizational skills',
      'Experience managing volunteers or community groups',
      'High energy and genuine passion for community work',
      'Proficiency in Microsoft Office or Google Workspace',
    ],
    posted: '2025-06-28',
  },
]

const BENEFITS = [
  { title: 'Competitive Salary', desc: 'Market-rate compensation benchmarked against NGO sector standards', icon: '💰' },
  { title: 'Health Insurance', desc: 'Comprehensive health coverage for you and your immediate family', icon: '🏥' },
  { title: 'Learning & Development', desc: 'Annual L&D budget and access to conferences, courses, and certifications', icon: '📚' },
  { title: 'Flexible Work', desc: 'Hybrid and flexible arrangements for eligible roles', icon: '🏠' },
  { title: 'Paid Leave', desc: '21 days annual leave plus public holidays and compassionate leave', icon: '🌴' },
  { title: 'Mission Alignment', desc: 'Work that matters. Every day. Alongside people who care deeply.', icon: '❤️' },
]

export default function CareersPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Careers at AOF"
        title="Work That Changes Lives"
        subtitle="We are looking for passionate, talented people who want to dedicate their careers to creating real change in communities across Nigeria. If that is you, we want to hear from you."
        breadcrumbs={[{ label: 'Careers', href: '/careers' }]}
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
        size="default"
      />

      {/* Benefits */}
      <section className="section bg-white dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-800">
        <div className="container-xl">
          <FadeUp className="mb-12 text-center">
            <Badge variant="brand" className="mb-4">Why Join Us</Badge>
            <h2 className="heading-2">Why Work at AOF?</h2>
            <p className="text-body mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
              We invest in our team the same way we invest in our communities — with intention, care, and a long-term view.
            </p>
          </FadeUp>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((b) => (
              <StaggerItem key={b.title} direction="up">
                <Card
                  hover
                  className="flex gap-4 p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="text-3xl flex-shrink-0 mt-0.5">{b.icon}</div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">{b.title}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">{b.desc}</p>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Open Roles */}
      <section className="section bg-cream-50 dark:bg-neutral-900/50">
        <div className="container-xl">
          <FadeUp className="mb-12 text-center">
            <Badge variant="gold" className="mb-4">Open Positions</Badge>
            <h2 className="heading-2">Current Openings</h2>
            <p className="text-body mt-3 text-neutral-600 dark:text-neutral-400">
              {OPEN_ROLES.length} positions currently available
            </p>
          </FadeUp>

          <div className="space-y-6 max-w-4xl mx-auto">
            {OPEN_ROLES.map((role, i) => (
              <SlideIn key={role.title} from="bottom" delay={i * 0.05}>
                <Card className="group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <Badge variant="brand" size="sm">{role.department}</Badge>
                          <Badge
                            variant={role.type === 'Full-time' ? 'default' : 'secondary'}
                            size="sm"
                          >
                            {role.type}
                          </Badge>
                          <Badge variant="outline" size="sm">{role.level}</Badge>
                        </div>

                        <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors">
                          {role.title}
                        </h3>

                        <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4 text-xs text-neutral-500">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {role.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            Posted {new Date(role.posted).toLocaleDateString('en-NG', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric',
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-3.5 w-3.5" />
                            {role.level}
                          </span>
                        </div>

                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-5 leading-relaxed">
                          {role.description}
                        </p>

                        <div>
                          <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-2">
                            Requirements
                          </h4>
                          <ul className="space-y-1.5">
                            {role.requirements.map((req) => (
                              <li key={req} className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                                <ChevronRight className="h-4 w-4 text-brand-600 mt-0.5 flex-shrink-0" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex-shrink-0">
                        <Button asChild>
                          <Link
                            href={`/contact?subject=career-${role.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                          >
                            Apply Now
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* Spontaneous Application CTA */}
      <section className="section bg-brand-700">
        <div className="container-xl text-center">
          <FadeUp>
            <h2 className="heading-2 mb-4 text-white">Don't See the Right Role?</h2>
            <p className="text-brand-200 mb-8 max-w-lg mx-auto text-lg">
              We are always interested in hearing from exceptional people. Send us your CV and a note
              about the kind of work you would like to do with us.
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link href="/contact?subject=spontaneous-application">
                Send Spontaneous Application
              </Link>
            </Button>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
