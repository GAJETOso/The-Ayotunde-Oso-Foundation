import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageHero } from '@/components/shared/PageHero'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Users, Target, Calendar, ArrowLeft } from 'lucide-react'

const NGN_PER_USD = 1640

const PROJECTS: Record<string, {
  title: string
  description: string
  program: string
  status: 'active' | 'planning' | 'completed'
  location: string
  startDate: string
  endDate: string
  budgetNgn: number
  raisedNgn: number
  beneficiaries: number
  image: string
  updates: { date: string; text: string }[]
  outcomes: string[]
}> = {
  'digital-literacy-lagos-2025': {
    title: 'Digital Literacy for 500 Youth in Lagos',
    description:
      'A 3-month intensive digital skills programme equipping underserved youth in Lagos Island with web development, digital marketing, and data literacy skills — giving them the tools to participate in the 21st-century economy.',
    program: 'Education',
    status: 'active',
    location: 'Lagos Island, Lagos',
    startDate: '2025-09-01',
    endDate: '2025-11-30',
    budgetNgn: 18_000_000,
    raisedNgn: 13_500_000,
    beneficiaries: 500,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80',
    updates: [
      { date: '2026-01-15', text: 'Cohort 1 completed with 387 graduates receiving certificates.' },
      { date: '2025-11-01', text: 'Mid-programme review: 92% attendance rate, 73% on track for job placement.' },
      { date: '2025-09-01', text: 'Programme launched. 500 students enrolled across 4 training centres.' },
    ],
    outcomes: [
      '387 graduates certified in web development or digital marketing',
      '73% of graduates placed in tech internships or entry-level roles',
      '4 training centres established in Lagos Island',
      'Partnership with 12 tech companies for job placement',
    ],
  },
  'healthcare-outreach-abuja-q1-2026': {
    title: 'Healthcare Outreach — Abuja (Q1 2026)',
    description:
      'Free blood pressure, diabetes, eye, and mental health screenings for 800+ residents of Garki and Wuse districts in Abuja, FCT. Mobile units staffed by volunteer doctors and nurses bring care directly to the community.',
    program: 'Healthcare',
    status: 'active',
    location: 'Abuja, FCT',
    startDate: '2026-01-15',
    endDate: '2026-03-31',
    budgetNgn: 7_200_000,
    raisedNgn: 5_400_000,
    beneficiaries: 800,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
    updates: [
      { date: '2026-02-10', text: 'Week 4 complete: 320 patients screened, 14 referred for specialist care.' },
      { date: '2026-01-15', text: 'Outreach launched in Garki district. First day: 80 patients seen.' },
    ],
    outcomes: [
      '800+ patients to be screened across 3 districts',
      'Free medications provided to all patients',
      '12 Community Health Advocates trained on site',
      'Referral pathway established with National Hospital Abuja',
    ],
  },
  'green-ibadan-2026': {
    title: 'Green Ibadan Initiative — 3,000 Trees',
    description:
      'Partnering with Oyo State schools to plant 3,000 trees and train student environmental champions across 12 secondary schools in Ibadan. Each school adopts and stewards its grove for three years.',
    program: 'Environment',
    status: 'planning',
    location: 'Ibadan, Oyo State',
    startDate: '2026-09-01',
    endDate: '2027-03-31',
    budgetNgn: 5_500_000,
    raisedNgn: 1_870_000,
    beneficiaries: 5000,
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80',
    updates: [
      { date: '2026-07-01', text: 'School partnerships confirmed with 12 secondary schools in Ibadan North and South LGAs.' },
      { date: '2026-05-15', text: 'Fundraising launched. Community pre-registration open for environmental champions programme.' },
    ],
    outcomes: [
      '3,000 trees to be planted across 12 schools',
      '500 student Green Corps champions trained',
      '80%+ tree survival rate target over 3 years',
      'Curriculum integration with Oyo State Ministry of Education',
    ],
  },
}

const STATUS_MAP = {
  active: { label: 'Active', variant: 'success' as const },
  planning: { label: 'Launching Soon', variant: 'warning' as const },
  completed: { label: 'Completed', variant: 'brand' as const },
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = PROJECTS[slug]
  if (!project) return { title: 'Project Not Found | AOF' }
  return {
    title: `${project.title} | AOF Projects`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = PROJECTS[slug]

  if (!project) notFound()

  const progressPercent = Math.min(Math.round((project.raisedNgn / project.budgetNgn) * 100), 100)
  const raisedUsd = Math.round(project.raisedNgn / NGN_PER_USD)
  const budgetUsd = Math.round(project.budgetNgn / NGN_PER_USD)
  const status = STATUS_MAP[project.status]

  return (
    <main id="main-content">
      <PageHero
        eyebrow={project.program}
        title={project.title}
        subtitle={project.description}
        gradient="brand"
        breadcrumbs={[
          { label: 'Projects', href: '/projects' },
          { label: project.title, href: `/projects/${slug}` },
        ]}
        image={project.image}
        size="default"
      />

      <section className="section">
        <div className="container-xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">

              {/* Meta */}
              <div className="flex flex-wrap gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                <span className="flex items-center gap-2">
                  <MapPin className="size-4" />{project.location}
                </span>
                <span className="flex items-center gap-2">
                  <Users className="size-4" />{project.beneficiaries.toLocaleString()} beneficiaries
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="size-4" />
                  {new Date(project.startDate).toLocaleDateString('en-NG', { month: 'short', year: 'numeric' })}
                  {' – '}
                  {new Date(project.endDate).toLocaleDateString('en-NG', { month: 'short', year: 'numeric' })}
                </span>
              </div>

              {/* Expected outcomes */}
              <div>
                <h2 className="heading-3 mb-4">Expected Outcomes</h2>
                <ul className="space-y-3">
                  {project.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-3">
                      <Target className="size-4 text-brand-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">{o}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project updates */}
              <div>
                <h2 className="heading-3 mb-4">Project Updates</h2>
                <div className="space-y-4">
                  {project.updates.map((u) => (
                    <div key={u.date} className="flex gap-4 border-l-2 border-brand-200 dark:border-brand-800 pl-4">
                      <div className="text-xs font-mono text-brand-600 dark:text-brand-400 w-24 flex-shrink-0 pt-0.5">
                        {new Date(u.date).toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </div>
                      <p className="text-sm text-neutral-700 dark:text-neutral-300">{u.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Funding card */}
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <Badge variant={status.variant} className="mb-4">{status.label}</Badge>

                  {/* Progress */}
                  <div className="mb-6">
                    <div className="flex justify-between text-xs mb-2">
                      <div>
                        <p className="font-bold text-brand-700 dark:text-brand-400">
                          ₦{(project.raisedNgn / 1_000_000).toFixed(1)}M raised
                        </p>
                        <p className="text-xs text-neutral-500">≈ ${raisedUsd.toLocaleString()} USD raised</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-neutral-700 dark:text-neutral-300">{progressPercent}% of goal</p>
                        <p className="text-neutral-500 text-[10px]">₦{(project.budgetNgn / 1_000_000).toFixed(1)}M target</p>
                      </div>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-brand-100 dark:bg-brand-900/40">
                      <div
                        className="h-full rounded-full bg-gradient-brand"
                        style={{ width: `${progressPercent}%` }}
                        role="progressbar"
                        aria-valuenow={progressPercent}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <p className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wide">Donate to this project</p>
                    <Button variant="default" className="w-full" size="lg" asChild>
                      <Link href={`/donate?project=${slug}&currency=NGN`}>Donate in ₦ NGN</Link>
                    </Button>
                    <Button variant="outline" className="w-full" size="lg" asChild>
                      <Link href={`/donate?project=${slug}&currency=USD`}>Donate in $ USD</Link>
                    </Button>
                  </div>

                  <Button variant="ghost" size="sm" className="w-full text-neutral-500" asChild>
                    <Link href="/projects">
                      <ArrowLeft className="size-3 mr-1" />All Projects
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
