'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Users, Heart, Clock, Globe, ArrowRight } from 'lucide-react'

const VOLUNTEER_BENEFITS = [
  {
    icon: Heart,
    title: 'Make Real Impact',
    description: 'Directly contribute to programs changing lives on the ground.',
  },
  {
    icon: Clock,
    title: 'Flexible Commitment',
    description: 'Choose hours and projects that fit your schedule and skills.',
  },
  {
    icon: Globe,
    title: 'Global Community',
    description: 'Join 340+ changemakers from across Nigeria and the diaspora.',
  },
  {
    icon: Users,
    title: 'Professional Growth',
    description: 'Gain skills, references, and a powerful network of impact leaders.',
  },
]

export function VolunteerCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      ref={ref}
      className="section bg-cream"
      aria-labelledby="volunteer-cta-title"
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800"
                alt="Volunteers working together in the community"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating volunteer count */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-6 top-12 rounded-2xl border border-border bg-white p-5 shadow-floating"
            >
              <div className="mb-2 flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 overflow-hidden rounded-full border-2 border-white"
                  >
                    <img
                      src={`https://i.pravatar.cc/32?img=${i + 20}`}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold text-brand-900">340+ Volunteers</p>
              <p className="text-xs text-muted-foreground">Join us today!</p>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-600">
              Become a Volunteer
            </p>
            <h2
              id="volunteer-cta-title"
              className="mb-6 font-serif text-4xl font-bold leading-tight text-brand-900 md:text-5xl"
            >
              Your skills can
              <br />
              <span className="text-gold-600">change a life.</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Whether you are a doctor, teacher, environmentalist, tech expert,
              storyteller, or simply someone with a heart to serve — there is a
              place for you in the Ayotunde Oso Foundation community.
            </p>

            <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {VOLUNTEER_BENEFITS.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.1,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  className="flex items-start gap-3"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50">
                    <benefit.icon className="h-5 w-5 text-brand-700" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm font-bold text-brand-900">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/volunteer"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-900 px-7 py-4 font-semibold text-white shadow-brand transition-all hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-brand-lg"
              >
                <Users className="h-5 w-5" />
                Apply to Volunteer
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/volunteer#learn-more"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-brand-200 px-7 py-4 font-semibold text-brand-800 transition-all hover:border-brand-600 hover:bg-brand-50"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
