'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { formatDate } from '@/lib/utils'

const LATEST_ARTICLES = [
  {
    id: '1',
    slug: 'aof-medical-outreach-kano',
    title: 'AOF Conducts Landmark Medical Outreach Reaching 1,500 Residents in Kano',
    excerpt:
      'Our nineteenth medical outreach brought free blood pressure checks, diabetes screenings, eye tests, and mental health consultations to underserved communities in Kano State.',
    category: 'Healthcare',
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600',
    publishedAt: new Date('2025-05-18'),
    readingTime: 4,
    isFeatured: true,
  },
  {
    id: '2',
    slug: 'tree-planting-campaign-2025',
    title: '10,000 Tree Planting Campaign Launches Across Five States',
    excerpt:
      'The foundation has launched an ambitious tree planting initiative targeting five Nigerian states, with community environmental champions trained to sustain the green corridors long-term.',
    category: 'Environment',
    coverImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600',
    publishedAt: new Date('2025-04-30'),
    readingTime: 3,
    isFeatured: false,
  },
  {
    id: '3',
    slug: 'scholarship-cohort-2025',
    title: '120 Students Awarded Full Scholarships in 2025 Education Cohort',
    excerpt:
      'The Ayotunde Oso Foundation is proud to announce its largest ever scholarship cohort, with 120 deserving students from underserved backgrounds awarded full secondary and tertiary education support.',
    category: 'Education',
    coverImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600',
    publishedAt: new Date('2025-04-15'),
    readingTime: 5,
    isFeatured: false,
  },
]

const CATEGORY_COLORS: Record<string, string> = {
  Healthcare: 'bg-red-50 text-red-700',
  Environment: 'bg-emerald-50 text-emerald-700',
  Education: 'bg-blue-50 text-blue-700',
  Mentorship: 'bg-purple-50 text-purple-700',
  Emergency: 'bg-amber-50 text-amber-700',
}

export function LatestNews() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      ref={ref}
      className="section bg-background"
      aria-labelledby="news-title"
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
              Latest Updates
            </p>
            <h2
              id="news-title"
              className="font-serif text-3xl font-bold text-brand-900 md:text-4xl"
            >
              News & Stories
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900"
            >
              All News
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {LATEST_ARTICLES.map((article, i) => (
            <motion.article
              key={article.id}
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
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                {/* Meta */}
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      CATEGORY_COLORS[article.category] ?? 'bg-brand-50 text-brand-700'
                    }`}
                  >
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {formatDate(article.publishedAt, 'short')}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {article.readingTime} min
                  </span>
                </div>

                <h3 className="mb-3 font-serif text-lg font-bold text-brand-900 transition-colors group-hover:text-brand-700">
                  {article.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>

                <Link
                  href={`/news/${article.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-all hover:gap-3 hover:text-brand-900"
                >
                  Read Full Story
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
