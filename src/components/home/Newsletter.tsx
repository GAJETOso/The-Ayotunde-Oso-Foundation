'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, ArrowRight, Check, Loader2 } from 'lucide-react'

export function Newsletter() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || status === 'loading') return
    setStatus('loading')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      ref={ref}
      className="section-sm bg-background"
      aria-labelledby="newsletter-title"
    >
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 text-center md:p-16"
        >
          {/* Background decoration */}
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-700/40 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <Mail className="h-7 w-7 text-white" />
            </div>

            <h2
              id="newsletter-title"
              className="mb-3 font-serif text-3xl font-bold text-white md:text-4xl"
            >
              Stay connected with our impact
            </h2>
            <p className="mb-8 text-base text-white/70">
              Join 5,000+ supporters receiving our monthly impact reports, program
              updates, and stories of transformation.
            </p>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3 rounded-2xl bg-white/10 px-8 py-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-400">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-white">You&apos;re subscribed!</p>
                  <p className="text-sm text-white/70">
                    Welcome to our community. Check your inbox for a welcome email.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center gap-3 sm:flex-row"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-sm text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 w-full sm:w-auto"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-brand-900 transition-all hover:bg-cream disabled:opacity-70 w-full sm:w-auto justify-center"
                >
                  {status === 'loading' ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <ArrowRight className="h-4 w-4" />
                  )}
                  Subscribe Free
                </button>
              </form>
            )}

            {status === 'error' && (
              <p className="mt-3 text-sm text-red-300">
                Something went wrong. Please try again.
              </p>
            )}

            <p className="mt-4 text-xs text-white/40">
              No spam, ever. Unsubscribe anytime. See our{' '}
              <a href="/privacy" className="underline hover:text-white/70">
                Privacy Policy
              </a>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
