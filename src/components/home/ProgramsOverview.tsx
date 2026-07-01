'use client'

import { useRef, type ComponentType } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import {
  GraduationCap,
  HeartPulse,
  Users,
  Leaf,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react'
import { PROGRAMS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  GraduationCap,
  HeartPulse,
  Users,
  Leaf,
  AlertTriangle,
}

const PROGRAM_COLORS: Record<string, { bg: string; text: string; hover: string; border: string }> = {
  education: {
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    hover: 'group-hover:bg-blue-600',
    border: 'border-blue-100 group-hover:border-blue-200',
  },
  mentorship: {
    bg: 'bg-purple-50',
    text: 'text-purple-700',
    hover: 'group-hover:bg-purple-600',
    border: 'border-purple-100 group-hover:border-purple-200',
  },
  healthcare: {
    bg: 'bg-red-50',
    text: 'text-red-600',
    hover: 'group-hover:bg-red-500',
    border: 'border-red-100 group-hover:border-red-200',
  },
  environment: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    hover: 'group-hover:bg-emerald-600',
    border: 'border-emerald-100 group-hover:border-emerald-200',
  },
  emergency: {
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    hover: 'group-hover:bg-amber-600',
    border: 'border-amber-100 group-hover:border-amber-200',
  },
}

export function ProgramsOverview() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      ref={ref}
      className="section bg-background"
      aria-labelledby="programs-title"
    >
      <div className="container-wide">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-600">
              What We Do
            </p>
            <h2
              id="programs-title"
              className="font-serif text-4xl font-bold leading-tight text-brand-900 md:text-5xl"
            >
              Five pillars.
              <br />
              <span className="text-gold-600">One shared purpose.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
          >
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-brand-200 px-6 py-3 text-sm font-semibold text-brand-800 transition-all hover:-translate-y-0.5 hover:border-brand-600 hover:bg-brand-50"
            >
              All Programs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((program, index) => {
            const Icon = ICONS[program.icon] ?? GraduationCap
            const colors = PROGRAM_COLORS[program.category] ?? PROGRAM_COLORS.education

            return (
              <motion.article
                key={program.id}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.19, 1, 0.22, 1],
                }}
                className={cn(
                  'group relative overflow-hidden rounded-3xl border bg-white shadow-card transition-all duration-400 hover:-translate-y-2 hover:shadow-floating',
                  colors.border
                )}
              >
                {/* Image */}
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Icon & Category */}
                  <div className="mb-5 flex items-center gap-3">
                    <div
                      className={cn(
                        'flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300',
                        colors.bg,
                        colors.hover
                      )}
                    >
                      <Icon
                        className={cn(
                          'h-6 w-6 transition-colors duration-300',
                          colors.text,
                          'group-hover:text-white'
                        )}
                      />
                    </div>
                    <span
                      className={cn(
                        'rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider',
                        colors.bg,
                        colors.text
                      )}
                    >
                      {program.category}
                    </span>
                  </div>

                  <h3 className="mb-3 font-serif text-xl font-bold text-brand-900 transition-colors group-hover:text-brand-700">
                    {program.name}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    {program.shortDescription}
                  </p>

                  {/* Impact Numbers */}
                  <div className="mb-6 flex gap-6">
                    <div>
                      <p className="font-serif text-lg font-bold text-brand-900">
                        {program.impact.peopleReached.toLocaleString()}+
                      </p>
                      <p className="text-xs text-muted-foreground">Reached</p>
                    </div>
                    <div>
                      <p className="font-serif text-lg font-bold text-brand-900">
                        {program.impact.communitiesServed}
                      </p>
                      <p className="text-xs text-muted-foreground">Communities</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/programs/${program.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-all hover:gap-3 hover:text-brand-900"
                  >
                    Learn More
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
