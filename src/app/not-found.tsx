'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          className="mb-8"
        >
          <div className="relative mx-auto mb-8 h-48 w-48">
            {/* Animated 404 */}
            <svg
              viewBox="0 0 200 200"
              fill="none"
              className="h-full w-full"
              aria-hidden="true"
            >
              <circle cx="100" cy="100" r="90" className="fill-brand-50 dark:fill-brand-950" />
              <circle cx="100" cy="100" r="70" className="fill-brand-100 dark:fill-brand-900" />
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="fill-brand-900 font-serif text-5xl font-bold dark:fill-brand-100"
                fontSize="48"
                fontFamily="serif"
                fontWeight="700"
              >
                404
              </text>
            </svg>
            {/* Orbiting dot */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0"
            >
              <div className="absolute -right-1 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-gold" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        >
          <h1 className="mb-4 font-serif text-3xl font-bold text-brand-900 dark:text-brand-100 md:text-4xl">
            Page Not Found
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            The page you are looking for may have moved, been renamed, or no longer
            exists. Let us help you find what you need.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-900 px-6 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-brand active:translate-y-0"
            >
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
            <Link
              href="/search"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-brand-200 px-6 py-3 font-semibold text-brand-900 transition-all hover:border-brand-600 hover:bg-brand-50 dark:border-brand-800 dark:text-brand-100 dark:hover:border-brand-400 dark:hover:bg-brand-900/30"
            >
              <Search className="h-4 w-4" />
              Search the Site
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 border-t border-border pt-8"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Quick Links
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: '/about', label: 'About Us' },
              { href: '/programs', label: 'Programs' },
              { href: '/donate', label: 'Donate' },
              { href: '/volunteer', label: 'Volunteer' },
              { href: '/contact', label: 'Contact' },
              { href: '/news', label: 'News' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-brand-300 hover:text-brand-700 dark:hover:border-brand-700 dark:hover:text-brand-400"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
