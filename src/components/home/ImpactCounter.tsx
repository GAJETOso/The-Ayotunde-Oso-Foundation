'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { IMPACT_STATS } from '@/lib/constants'
import { formatNumber } from '@/lib/utils'

const STATS = [
  {
    value: IMPACT_STATS.livesImpacted,
    label: 'Lives Impacted',
    suffix: '+',
    color: 'text-gold',
    description: 'Individuals directly reached by our programs',
  },
  {
    value: IMPACT_STATS.communitiesReached,
    label: 'Communities Served',
    suffix: '',
    color: 'text-brand-300',
    description: 'Across Nigeria and West Africa',
  },
  {
    value: IMPACT_STATS.volunteersEngaged,
    label: 'Active Volunteers',
    suffix: '+',
    color: 'text-gold',
    description: 'Dedicated changemakers in the field',
  },
  {
    value: IMPACT_STATS.medicalOutreaches,
    label: 'Medical Outreaches',
    suffix: '',
    color: 'text-brand-300',
    description: 'Free healthcare events conducted',
  },
  {
    value: IMPACT_STATS.treesPlanted,
    label: 'Trees Planted',
    suffix: '+',
    color: 'text-gold',
    description: 'For a greener, healthier planet',
  },
  {
    value: IMPACT_STATS.youthMentored,
    label: 'Youth Mentored',
    suffix: '+',
    color: 'text-brand-300',
    description: 'Young people guided toward their potential',
  },
  {
    value: IMPACT_STATS.projectsCompleted,
    label: 'Projects Completed',
    suffix: '',
    color: 'text-gold',
    description: 'Initiatives successfully delivered',
  },
  {
    value: IMPACT_STATS.countriesPresent,
    label: 'Countries Reached',
    suffix: '',
    color: 'text-brand-300',
    description: 'And growing across the continent',
  },
]

function CountUp({
  target,
  suffix,
  className,
  isActive,
}: {
  target: number
  suffix: string
  className?: string
  isActive: boolean
}) {
  const [count, setCount] = useState(0)
  const hasStarted = useRef(false)

  useEffect(() => {
    if (!isActive || hasStarted.current) return
    hasStarted.current = true

    const duration = 2200
    const steps = 60
    const increment = target / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      // Ease-out curve
      const progress = step / steps
      const eased = 1 - Math.pow(1 - progress, 3)
      current = Math.round(target * eased)

      if (step >= steps) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isActive, target])

  return (
    <span className={className}>
      {formatNumber(count)}
      {suffix}
    </span>
  )
}

export function ImpactCounter() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-forest-dark py-24 md:py-32"
      aria-labelledby="impact-counter-title"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-brand-900/30 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-wide relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gold">
            Our Impact in Numbers
          </p>
          <h2
            id="impact-counter-title"
            className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl"
          >
            Every number is a life.
            <br />
            <span className="text-gold">Every life, a story.</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-px bg-white/5 md:grid-cols-4">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.19, 1, 0.22, 1],
              }}
              className="group relative flex flex-col items-center gap-2 bg-forest-dark px-6 py-10 text-center transition-colors hover:bg-brand-900/30"
            >
              {/* Hover border accent */}
              <div className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-300 group-hover:scale-x-100" />

              {/* Number */}
              <CountUp
                target={stat.value}
                suffix={stat.suffix}
                isActive={isInView}
                className={`font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl ${stat.color}`}
              />

              {/* Label */}
              <p className="font-semibold text-white">{stat.label}</p>

              {/* Description */}
              <p className="mt-1 text-xs leading-relaxed text-white/40">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="mt-12 text-center"
        >
          <a
            href="/impact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-all hover:text-gold-light"
          >
            View Full Impact Dashboard
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
