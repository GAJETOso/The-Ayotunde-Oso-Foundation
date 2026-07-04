'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { formatDate } from '@/lib/utils'

const LATEST_ARTICLES = [
  {
    id: '1',
    slug: 'aof-year-one-impact-3200-lives',
    title: 'AOF Year-One Impact: 3,200 Lives Touched Across Seven Communities',
    excerpt:
      'Fourteen months after our founding, The Ayotunde Oso Foundation has directly reached 3,200 individuals across seven Nigerian communities through education, healthcare, environmental, mentorship, and emergency programmes.',
    category: 'Impact Story',
    coverImage: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600',
    publishedAt: new Date('2026-01-15'),
    readingTime: 6,
    isFeatured: true,
  },
  {
    id: '2',
    slug: 'inaugural-scholarship-cohort-2025',
    title: '12 Scholars Enrolled in AOF Inaugural Education Cohort',
    excerpt:
      'The Ayotunde Oso Foundation has awarded its first scholarships to 12 exceptional students from underserved communities across Lagos, Ogun, and Ekiti States for the 2025/26 academic year.',
    category: 'Education',
    coverImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600',
    publishedAt: new Date('2025-10-20'),
    readingTime: 4,
    isFeatured: false,
  },
  {
    id: '3',
    slug: 'mobile-clinic-ekiti-340-patients',
    title: 'AOF Mobile Clinic Reaches 340 Patients in Ekiti State',
    excerpt:
      'Our third free medical outreach served 340 community members in Ado-Ekiti, providing blood pressure checks, diabetes screenings, eye care, and free medications to those who had never seen a doctor.',
    category: 'Healthcare',
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600',
    publishedAt: new Date('2025-08-14'),
    readingTime: 4,
    isFeatured: false,
  },
]

const CATEGORY_COLORS: Record<string, string> = {
  Healthcare: 'bg-red-50 text-red-700',
  Environment: 'bg-emerald-50 text-emerald-700',
  Education: 'bg-blue-50 text-blue-700',
  Mentorship: 'bg-purple-50 text-purple-700',
  Emergency: 'bg-amber-50 text-amber-700',
  'Impact Story': 'bg-brand-50 text-brand-700',
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
