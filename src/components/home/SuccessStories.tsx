'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Quote } from 'lucide-react'

const STORIES = [
  {
    id: '1',
    name: 'Chidinma Okafor',
    location: 'Lagos, Nigeria',
    program: 'Education',
    headline: 'From Ajegunle to the University of Lagos',
    story:
      'Growing up in one of Lagos’s most challenging communities, university seemed like a dream. The AOF scholarship changed everything for me.',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500',
    programColor: 'bg-blue-100 text-blue-700',
  },
  {
    id: '2',
    name: 'Yusuf Abdullahi',
    location: 'Kano, Nigeria',
    program: 'Healthcare',
    headline: 'Diabetes Detected, Life Saved',
    story:
      'I had no idea my blood sugar was dangerously high until the AOF health outreach came to my community. Early detection saved my life.',
    image: 'https://images.unsplash.com/photo-1542596594-649edbc13630?w=500',
    programColor: 'bg-red-100 text-red-700',
  },
  {
    id: '3',
    name: 'Amaka Eze',
    location: 'Enugu, Nigeria',
    program: 'Mentorship',
    headline: 'A Mentor Who Believed When No One Else Did',
    story:
      'My AOF mentor helped me launch my tech startup at 22. Today I employ 12 people. The foundation did not just mentor me — they multiplied me.',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500',
    programColor: 'bg-purple-100 text-purple-700',
  },
]

export function SuccessStories() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      ref={ref}
      className="section bg-forest-dark"
      aria-labelledby="stories-title"
    >
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="mb-16 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gold">
              Real Impact
            </p>
            <h2
              id="stories-title"
              className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl"
            >
              Stories that
              <br />
              <span className="text-gold">prove the mission.</span>
            </h2>
          </div>
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-all hover:text-gold-light"
          >
            All Success Stories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {STORIES.map((story, i) => (
            <motion.article
              key={story.id}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.19, 1, 0.22, 1],
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-brand-900/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-brand-900/60"
            >
              {/* Image */}
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-8">
                {/* Quote icon */}
                <Quote className="mb-4 h-6 w-6 text-gold/40" aria-hidden />

                <span className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-bold ${story.programColor}`}>
                  {story.program}
                </span>

                <h3 className="mb-3 font-serif text-xl font-bold text-white">
                  {story.headline}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-white/60">
                  &ldquo;{story.story}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full ring-2 ring-gold/20">
                    <img
                      src={story.image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{story.name}</p>
                    <p className="text-xs text-white/50">{story.location}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
