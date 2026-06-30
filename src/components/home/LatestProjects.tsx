'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, MapPin, Calendar, Target } from 'lucide-react'
import { cn, formatCurrency, formatDate } from '@/lib/utils'

const PROJECTS = [
  {
    id: '1',
    slug: 'digital-literacy-lagos-2025',
    title: 'Digital Literacy for 500 Youth in Lagos',
    description:
      'A 3-month intensive digital skills program equipping underserved youth with web development, digital marketing, and data literacy skills.',
    program: 'Education',
    status: 'active' as const,
    location: 'Lagos Island, Lagos',
    startDate: new Date('2025-02-01'),
    budget: 120000,
    raised: 89000,
    beneficiaries: 500,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600',
    color: 'bg-blue-50 text-blue-700',
  },
  {
    id: '2',
    slug: 'healthcare-outreach-abuja-q2-2025',
    title: 'Healthcare Outreach — Abuja (Q2 2025)',
    description:
      'Free blood pressure, diabetes, eye, and mental health screenings for 800+ residents of Garki and Wuse districts.',
    program: 'Healthcare',
    status: 'active' as const,
    location: 'Abuja, FCT',
    startDate: new Date('2025-04-10'),
    budget: 45000,
    raised: 45000,
    beneficiaries: 800,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600',
    color: 'bg-red-50 text-red-700',
  },
  {
    id: '3',
    slug: 'green-ibadan-2025',
    title: 'Green Ibadan Initiative — 3,000 Trees',
    description:
      'Partnering with Oyo State schools to plant 3,000 trees and train student environmental champions across 12 secondary schools.',
    program: 'Environment',
    status: 'planning' as const,
    location: 'Ibadan, Oyo State',
    startDate: new Date('2025-07-01'),
    budget: 35000,
    raised: 12000,
    beneficiaries: 5000,
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600',
    color: 'bg-emerald-50 text-emerald-700',
  },
]

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
              Math.round((project.raised / project.budget) * 100),
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

                  {/* Progress bar */}
                  <div className="mb-4">
                    <div className="mb-2 flex justify-between text-xs">
                      <span className="font-semibold text-brand-700">
                        {formatCurrency(project.raised)} raised
                      </span>
                      <span className="text-muted-foreground">
                        {progressPercent}% of {formatCurrency(project.budget)}
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-brand-100">
                      <div
                        className="h-full rounded-full bg-gradient-brand transition-all duration-1000 ease-out-expo"
                        style={{ width: `${progressPercent}%` }}
                        role="progressbar"
                        aria-valuenow={progressPercent}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-all hover:gap-3 hover:text-brand-900"
                  >
                    View Project
                    <ArrowRight className="h-4 w-4" />
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
