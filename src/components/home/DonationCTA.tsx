'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Heart, ArrowRight, Check } from 'lucide-react'
import { SUGGESTED_AMOUNTS, IMPACT_MESSAGES } from '@/lib/constants'
import { cn } from '@/lib/utils'

const IMPACT_ITEMS = [
  '$25 feeds a family for a week',
  '$50 funds 5 medical screenings',
  '$100 plants 40 trees',
  '$250 mentors 10 youth for a month',
  '$500 supports a term scholarship',
]

export function DonationCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedAmount, setSelectedAmount] = useState(50)

  const amounts = SUGGESTED_AMOUNTS.USD.slice(0, 6)

  const getImpactMessage = (amount: number): string => {
    const keys = Object.keys(IMPACT_MESSAGES).map(Number).sort((a, b) => b - a)
    for (const key of keys) {
      if (amount >= key) return IMPACT_MESSAGES[key]
    }
    return 'helps someone in need'
  }

  return (
    <section
      ref={ref}
      className="section relative overflow-hidden bg-brand-900"
      aria-labelledby="donation-cta-title"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1400')",
          }}
        />
        <div className="absolute inset-0 bg-brand-900/90" />
      </div>
      <div className="absolute -right-48 top-0 h-96 w-96 rounded-full bg-brand-700/30 blur-3xl" />
      <div className="absolute -left-48 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-wide relative">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gold">
              Make a Difference Today
            </p>
            <h2
              id="donation-cta-title"
              className="mb-6 font-serif text-4xl font-bold leading-tight text-white md:text-5xl"
            >
              Your generosity
              <br />
              <span className="text-gold">changes everything.</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-white/65">
              Every donation — no matter the size — directly funds our programs,
              reaches real people, and transforms real lives. 100% of your gift
              goes to the communities we serve.
            </p>

            <ul className="space-y-3">
              {IMPACT_ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gold">
                    <Check className="h-3 w-3 text-forest-dark" />
                  </div>
                  <span className="text-sm text-white/70">{item}</span>
                </li>
              ))}
            </ul>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <div className="rounded-xl border border-white/15 px-4 py-2.5 text-center">
                <p className="text-xs font-bold text-gold">100%</p>
                <p className="text-xs text-white/50">Transparent</p>
              </div>
              <div className="rounded-xl border border-white/15 px-4 py-2.5 text-center">
                <p className="text-xs font-bold text-gold">CAC</p>
                <p className="text-xs text-white/50">Registered</p>
              </div>
              <div className="rounded-xl border border-white/15 px-4 py-2.5 text-center">
                <p className="text-xs font-bold text-gold">Secure</p>
                <p className="text-xs text-white/50">SSL Encrypted</p>
              </div>
              <div className="rounded-xl border border-white/15 px-4 py-2.5 text-center">
                <p className="text-xs font-bold text-gold">Tax</p>
                <p className="text-xs text-white/50">Deductible</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Quick Donate */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="mb-6 font-serif text-2xl font-bold text-white">
                Quick Donate
              </h3>

              {/* Amount Selection */}
              <div className="mb-6">
                <label className="mb-3 block text-sm font-semibold text-white/70">
                  Choose an amount (USD)
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {amounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setSelectedAmount(amount)}
                      className={cn(
                        'rounded-xl border-2 px-4 py-3 text-sm font-bold transition-all duration-200',
                        selectedAmount === amount
                          ? 'border-gold bg-gold text-forest-dark shadow-gold'
                          : 'border-white/20 text-white hover:border-gold/50 hover:bg-white/10'
                      )}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>

                {/* Custom amount */}
                <div className="relative mt-3">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-white/50">
                    $
                  </span>
                  <input
                    type="number"
                    placeholder="Other amount"
                    className="w-full rounded-xl border-2 border-white/20 bg-white/5 py-3 pl-8 pr-4 text-sm font-bold text-white placeholder:text-white/30 focus:border-gold focus:outline-none"
                    onChange={(e) => setSelectedAmount(Number(e.target.value))}
                  />
                </div>
              </div>

              {/* Impact preview */}
              {selectedAmount > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 rounded-xl bg-gold/10 p-4"
                >
                  <p className="text-sm text-white/70">
                    <span className="font-bold text-gold">${selectedAmount}</span>{' '}
                    {getImpactMessage(selectedAmount)}
                  </p>
                </motion.div>
              )}

              {/* Frequency */}
              <div className="mb-6 grid grid-cols-3 gap-2">
                {['One-time', 'Monthly', 'Annual'].map((freq) => (
                  <button
                    key={freq}
                    className="rounded-lg border border-white/15 py-2 text-xs font-semibold text-white/60 transition-all hover:border-gold/50 hover:text-gold first:border-gold first:text-gold"
                  >
                    {freq}
                  </button>
                ))}
              </div>

              {/* Donate Button */}
              <Link
                href={`/donate?amount=${selectedAmount}`}
                className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-gold py-4 text-base font-bold text-forest-dark shadow-gold transition-all hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-glow-gold active:translate-y-0"
              >
                <Heart className="h-5 w-5" />
                Donate ${selectedAmount || '...'} Now
                <ArrowRight className="h-4 w-4" />
              </Link>

              <p className="mt-4 text-center text-xs text-white/40">
                Secured by Stripe &middot; SSL Encrypted &middot; No account required
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
