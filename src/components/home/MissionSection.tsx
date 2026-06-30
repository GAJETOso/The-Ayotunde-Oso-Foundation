'use client'

import { useRef, type ComponentType } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Quote } from 'lucide-react'
import { FOUNDATION, CORE_VALUES } from '@/lib/constants'
import {
  Shield, Heart, Eye, CheckCircle, Lightbulb, Zap, Users, Globe, Leaf, Hand
} from 'lucide-react'

const VALUE_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  integrity: Shield,
  compassion: Heart,
  transparency: Eye,
  accountability: CheckCircle,
  innovation: Lightbulb,
  empowerment: Zap,
  community: Users,
  inclusion: Globe,
  sustainability: Leaf,
  service: Hand,
}

export function MissionSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      ref={ref}
      className="section bg-cream"
      aria-labelledby="mission-title"
    >
      <div className="container-wide">
        {/* Mission & Vision */}
        <div className="mb-24 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            >
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-600">
                Who We Are
              </p>
              <h2
                id="mission-title"
                className="mb-6 font-serif text-4xl font-bold leading-tight text-brand-900 md:text-5xl lg:text-6xl"
              >
                Built on belief.
                <br />
                <span className="text-gold-600">Driven by purpose.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
            >
              {/* Mission */}
              <div className="mb-8 rounded-2xl border border-brand-100 bg-white p-8 shadow-card">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-900">
                    <span className="text-sm font-bold text-white">M</span>
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-brand-600">
                    Our Mission
                  </h3>
                </div>
                <p className="text-lg leading-relaxed text-foreground/80">
                  {FOUNDATION.mission}
                </p>
              </div>

              {/* Vision */}
              <div className="rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/5 to-gold/10 p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold">
                    <span className="text-sm font-bold text-forest-dark">V</span>
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gold-700">
                    Our Vision
                  </h3>
                </div>
                <p className="text-lg leading-relaxed text-foreground/80">
                  {FOUNDATION.vision}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Image collage */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] overflow-hidden rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600"
                    alt="Young girl studying with bright eyes"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600"
                    alt="Community health workers"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="mt-12 space-y-4">
                <div className="aspect-square overflow-hidden rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600"
                    alt="Volunteers planting trees"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="aspect-[4/5] overflow-hidden rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600"
                    alt="Youth mentorship session"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 rounded-2xl border border-brand-100 bg-white p-6 shadow-floating"
            >
              <p className="font-serif text-3xl font-bold text-brand-900">7+</p>
              <p className="mt-1 text-sm text-muted-foreground">Years of impact</p>
              <div className="mt-3 flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-7 w-7 overflow-hidden rounded-full border-2 border-white"
                  >
                    <img
                      src={`https://i.pravatar.cc/28?img=${i + 10}`}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
                <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-brand-900 text-[9px] font-bold text-white">
                  340+
                </div>
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground">Volunteers worldwide</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Core Values */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="mb-12 text-center"
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-600">
              What Guides Us
            </p>
            <h2 className="font-serif text-3xl font-bold text-brand-900 md:text-4xl">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {CORE_VALUES.map((value, i) => {
              const Icon = VALUE_ICONS[value.id] ?? Shield
              return (
                <motion.div
                  key={value.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + i * 0.06,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  className="group rounded-2xl border border-border bg-white p-5 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover"
                >
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 transition-colors group-hover:bg-brand-900">
                    <Icon className="h-5 w-5 text-brand-700 transition-colors group-hover:text-white" />
                  </div>
                  <h3 className="mb-1 text-sm font-bold text-brand-900">{value.title}</h3>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
