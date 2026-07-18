'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import { ARTICLES, CATEGORY_COLORS } from '@/data/articles'

const LATEST_ARTICLES = [...ARTICLES]
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
  .slice(0, 3)

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
                    {article.categoryLabel}
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
