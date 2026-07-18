'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, MapPin, Target } from 'lucide-react'
import { cn, formatCurrencyCompact } from '@/lib/utils'
import { PROJECTS } from '@/data/projects'

const NGN_PER_USD = 1640

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  active: { label: 'Active', color: 'bg-green-100 text-green-700' },
  planning: { label: 'Launching Soon', color: 'bg-amber-100 text-amber-700' },
  completed: { label: 'Completed', color: 'bg-brand-100 text-brand-700' },
}

export function LatestProjects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      ref={ref}
      className="section bg-cream"
      aria-labelledby="projects-title"
    >
      <div className="container-wide">
        {/* Header */}
        <div className="mb-12 flex items-end justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-600">
              Active Initiatives
            </p>
            <h2
              id="projects-title"
              className="font-serif text-3xl font-bold text-brand-900 md:text-4xl"
            >
              Projects in Motion
            </h2>
          </motion.div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900"
          >
            All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PROJECTS.map((project, i) => {
            const progressPercent = Math.min(
              Math.round((project.raisedNgn / project.budgetNgn) * 100),
              100
            )
            const statusInfo = STATUS_LABELS[project.status]

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.19, 1, 0.22, 1],
                }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Status badge */}
                  <span
                    className={cn(
                      'absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-bold',
                      statusInfo.color
                    )}
                  >
                    {statusInfo.label}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  {/* Program tag */}
                  <span
                    className={cn(
                      'mb-3 inline-block rounded-full px-3 py-1 text-xs font-bold',
                      project.color
                    )}
                  >
                    {project.program}
                  </span>

                  <h3 className="mb-2 font-serif text-lg font-bold text-brand-900 transition-colors group-hover:text-brand-700">
                    {project.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Meta */}
                  <div className="mb-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Target className="h-3 w-3" />
                      {project.beneficiaries.toLocaleString()} beneficiaries
                    </span>
                  </div>

                  {/* Progress bars */}
                  <div className="mb-4 space-y-3">
                    {/* NGN bar */}
                    <div>
                      <div className="mb-1.5 flex justify-between text-xs">
                        <span className="font-semibold text-brand-700">
                          {formatCurrencyCompact(project.raisedNgn, 'NGN')} raised
                        </span>
                        <span className="text-muted-foreground">
                          {progressPercent}% · {formatCurrencyCompact(project.budgetNgn, 'NGN')} goal
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-brand-100">
                        <div
                          className="h-full rounded-full bg-gradient-brand transition-all duration-1000 ease-out-expo"
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
                      <div className="mb-1.5 flex justify-between text-xs">
                        <span className="font-semibold text-amber-700">
                          {formatCurrencyCompact(Math.round(project.raisedNgn / NGN_PER_USD))} raised
                        </span>
                        <span className="text-muted-foreground">
                          {progressPercent}% · {formatCurrencyCompact(Math.round(project.budgetNgn / NGN_PER_USD))} goal
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-amber-100">
                        <div
                          className="h-full rounded-full bg-amber-500 transition-all duration-1000 ease-out-expo"
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

                  {/* Donate CTAs */}
                  <div className="flex flex-col gap-2 mb-3">
                    <Link
                      href={`/donate?project=${project.slug}&currency=NGN`}
                      className="w-full rounded-xl bg-brand-700 px-3 py-2 text-center text-xs font-bold text-white transition-colors hover:bg-brand-800"
                    >
                      Donate in ₦ NGN
                    </Link>
                    <Link
                      href={`/donate?project=${project.slug}&currency=USD`}
                      className="w-full rounded-xl border border-brand-700 px-3 py-2 text-center text-xs font-bold text-brand-700 transition-colors hover:bg-brand-50"
                    >
                      Donate in $ USD
                    </Link>
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground transition-all hover:gap-3 hover:text-brand-700"
                  >
                    View Project
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
