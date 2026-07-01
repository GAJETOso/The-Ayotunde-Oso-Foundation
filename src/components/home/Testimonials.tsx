'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { FEATURED_TESTIMONIALS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [active, setActive] = useState(0)

  const prev = () =>
    setActive((i) => (i - 1 + FEATURED_TESTIMONIALS.length) % FEATURED_TESTIMONIALS.length)
  const next = () =>
    setActive((i) => (i + 1) % FEATURED_TESTIMONIALS.length)

  const current = FEATURED_TESTIMONIALS[active]

  return (
    <section
      ref={ref}
      className="section bg-cream"
      aria-labelledby="testimonials-title"
    >
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-600">
            Voices of Change
          </p>
          <h2
            id="testimonials-title"
            className="font-serif text-3xl font-bold text-brand-900 md:text-4xl lg:text-5xl"
          >
            Real people. Real impact.
          </h2>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
          className="mx-auto max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-3xl bg-brand-900 p-8 shadow-brand-lg md:p-14">
            {/* Background decoration */}
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-800/50 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                  className="grid grid-cols-1 gap-10 md:grid-cols-[auto_1fr]"
                >
                  {/* Author Image */}
                  <div className="flex flex-col items-center gap-4 md:items-start">
                    <div className="relative">
                      <div className="h-20 w-20 overflow-hidden rounded-full ring-4 ring-gold/30 md:h-24 md:w-24">
                        <img
                          src={current.image}
                          alt={current.name}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-gold">
                        <Quote className="h-4 w-4 fill-forest-dark text-forest-dark" />
                      </div>
                    </div>
                    <div className="text-center md:text-left">
                      <p className="font-semibold text-white">{current.name}</p>
                      <p className="text-sm text-white/60">{current.title}</p>
                      {current.organization && (
                        <p className="text-sm text-white/50">{current.organization}</p>
                      )}
                      <p className="mt-1 text-xs text-white/40">{current.location}</p>
                    </div>
                    {current.rating && (
                      <div className="flex gap-1">
                        {Array.from({ length: current.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-gold text-gold"
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Quote */}
                  <div className="flex flex-col justify-center">
                    <Quote
                      className="mb-4 h-10 w-10 fill-gold/20 text-gold/20"
                      aria-hidden="true"
                    />
                    <blockquote className="font-serif text-xl font-medium leading-relaxed text-white md:text-2xl">
                      &ldquo;{current.content}&rdquo;
                    </blockquote>
                    {current.program && (
                      <div className="mt-6">
                        <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/60">
                          Program: {current.program}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="mt-10 flex items-center justify-between">
                {/* Dots */}
                <div className="flex items-center gap-2" role="tablist">
                  {FEATURED_TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={cn(
                        'h-2 rounded-full transition-all duration-300',
                        i === active
                          ? 'w-8 bg-gold'
                          : 'w-2 bg-white/30 hover:bg-white/50'
                      )}
                      role="tab"
                      aria-selected={i === active}
                      aria-label={`Testimonial ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={prev}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 text-white/60 transition-all hover:border-white/50 hover:bg-white/10 hover:text-white"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={next}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold text-forest-dark transition-all hover:bg-gold-light"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mini cards */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {FEATURED_TESTIMONIALS.map((t, i) => (
            <motion.button
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.3 + i * 0.08,
                ease: [0.19, 1, 0.22, 1],
              }}
              onClick={() => setActive(i)}
              className={cn(
                'group flex items-center gap-3 rounded-2xl border p-4 text-left transition-all duration-200',
                i === active
                  ? 'border-brand-300 bg-brand-50 shadow-brand'
                  : 'border-border bg-white hover:border-brand-200 hover:shadow-card'
              )}
            >
              <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-brand-900">{t.name}</p>
                <p className="truncate text-xs text-muted-foreground">{t.type}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
