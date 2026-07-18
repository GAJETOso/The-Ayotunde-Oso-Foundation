'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, MapPin, Users } from 'lucide-react'
import { EVENTS } from '@/data/events'

const UPCOMING_EVENTS = EVENTS.filter((e) => e.status === 'UPCOMING').slice(0, 3)

export function UpcomingEvents() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      ref={ref}
      className="section bg-background"
      aria-labelledby="events-title"
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
              Save the Date
            </p>
            <h2
              id="events-title"
              className="font-serif text-3xl font-bold text-brand-900 md:text-4xl"
            >
              Upcoming Events
            </h2>
          </motion.div>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900"
          >
            All Events
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {UPCOMING_EVENTS.map((event, i) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.19, 1, 0.22, 1],
              }}
            >
              <Link
                href={`/events/${event.slug}`}
                className="group flex flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card-hover sm:flex-row sm:items-center"
              >
                {/* Date */}
                <div className="flex-shrink-0">
                  <div className="flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-brand-900 text-white">
                    <span className="text-xs font-bold uppercase tracking-wider text-white/60">
                      {new Date(event.date).toLocaleString('en', { month: 'short', timeZone: 'UTC' })}
                    </span>
                    <span className="font-serif text-3xl font-bold">
                      {new Date(event.date).getUTCDate()}
                    </span>
                    <span className="text-xs text-white/60">
                      {new Date(event.date).getUTCFullYear()}
                    </span>
                  </div>
                </div>

                {/* Image */}
                <div className="h-16 w-24 flex-shrink-0 overflow-hidden rounded-xl">
                  <img
                    src={event.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full border px-3 py-0.5 text-xs font-bold ${
                        event.color
                      }`}
                    >
                      {event.type}
                    </span>
                  </div>
                  <h3 className="mb-2 font-serif text-lg font-bold text-brand-900 transition-colors group-hover:text-brand-700">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3 w-3" />
                      {event.location}
                    </span>
                    {event.capacity ? (
                      <span className="flex items-center gap-1.5">
                        <Users className="h-3 w-3" />
                        {event.registrations} / {event.capacity} registered
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5">
                        <Users className="h-3 w-3" />
                        Open registration
                      </span>
                    )}
                  </div>
                </div>

                {/* Registration CTA */}
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center gap-2 rounded-xl bg-brand-50 px-5 py-2.5 text-sm font-semibold text-brand-700 transition-all group-hover:bg-brand-900 group-hover:text-white">
                    Register
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
