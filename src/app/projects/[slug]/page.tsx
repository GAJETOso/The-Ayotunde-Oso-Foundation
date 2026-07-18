import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageHero } from '@/components/shared/PageHero'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Users, Target, Calendar, ArrowLeft } from 'lucide-react'
import { PROJECTS_BY_SLUG } from '@/data/projects'

const NGN_PER_USD = 1640

const STATUS_MAP = {
  active: { label: 'Active', variant: 'success' as const },
  planning: { label: 'Launching Soon', variant: 'warning' as const },
  completed: { label: 'Completed', variant: 'brand' as const },
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = PROJECTS_BY_SLUG[slug]
  if (!project) return { title: 'Project Not Found | AOF' }
  return {
    title: `${project.title} | AOF Projects`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = PROJECTS_BY_SLUG[slug]

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
                  <div className="mb-6 space-y-3">
                    {/* NGN bar */}
                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <p className="font-bold text-brand-700 dark:text-brand-400">
                          ₦{(project.raisedNgn / 1_000_000).toFixed(1)}M raised
                        </p>
                        <p className="text-neutral-500">{progressPercent}% · ₦{(project.budgetNgn / 1_000_000).toFixed(1)}M goal</p>
                      </div>
                      <div className="h-2.5 overflow-hidden rounded-full bg-brand-100 dark:bg-brand-900/40">
                        <div
                          className="h-full rounded-full bg-gradient-brand"
                          style={{ width: `${progressPercent}%` }}
                          role="progressbar"
                          aria-label="NGN fundraising progress"
                          aria-valuenow={progressPercent}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    {/* USD bar */}
                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <p className="font-bold text-amber-700 dark:text-amber-400">
                          ${raisedUsd.toLocaleString()} USD raised
                        </p>
                        <p className="text-neutral-500">{progressPercent}% · ${budgetUsd.toLocaleString()} goal</p>
                      </div>
                      <div className="h-2.5 overflow-hidden rounded-full bg-amber-100 dark:bg-amber-900/40">
                        <div
                          className="h-full rounded-full bg-amber-500"
                          style={{ width: `${progressPercent}%` }}
                          role="progressbar"
                          aria-label="USD fundraising progress"
                          aria-valuenow={progressPercent}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
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
