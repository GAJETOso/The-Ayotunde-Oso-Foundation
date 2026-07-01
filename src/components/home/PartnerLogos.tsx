'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Realistic partner/sponsor logos using text-based representations
// In production these would be actual logo image files
const PARTNERS = [
  { name: 'UNICEF Nigeria', category: 'ngo' },
  { name: 'Lagos State Govt', category: 'government' },
  { name: 'Access Bank', category: 'corporate' },
  { name: 'Dangote Foundation', category: 'foundation' },
  { name: 'MTN Foundation', category: 'corporate' },
  { name: 'USAID Nigeria', category: 'government' },
  { name: 'Tony Elumelu Foundation', category: 'foundation' },
  { name: 'British Council', category: 'international' },
  { name: 'Zenith Bank', category: 'corporate' },
  { name: 'Nestle Nigeria', category: 'corporate' },
]

export function PartnerLogos() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      ref={ref}
      className="section-sm border-y border-border bg-background"
      aria-labelledby="partners-title"
    >
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="mb-10 text-center"
        >
          <p
            id="partners-title"
            className="text-xs font-bold uppercase tracking-widest text-muted-foreground"
          >
            Trusted Partners & Sponsors
          </p>
        </motion.div>

        {/* Infinite scroll ticker */}
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: [0, -50 + '%'] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="flex w-[200%] items-center gap-12"
          >
            {[...PARTNERS, ...PARTNERS].map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="flex-shrink-0 rounded-xl border border-border bg-white px-8 py-4 shadow-sm transition-all hover:shadow-card hover:border-brand-200"
              >
                <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <a
            href="/partners"
            className="text-sm font-semibold text-brand-700 hover:text-brand-900"
          >
            Become a Partner →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
