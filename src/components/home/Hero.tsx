'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowRight, Heart, Play, ChevronDown } from 'lucide-react'
import { HERO_STATS } from '@/lib/constants'

const HERO_WORDS = ['People.', 'Communities.', 'Futures.']

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeWord, setActiveWord] = useState(0)
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % HERO_WORDS.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-forest-darker"
      aria-label="Hero section"
    >
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1920&q=85')",
          }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deeper/95 via-forest-darker/80 to-forest-deeper/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deeper/60 via-transparent to-transparent" />
      </motion.div>

      {/* Subtle animated grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <motion.div
        className="container-wide relative z-10 pb-32 pt-40"
        style={{ opacity }}
      >
        <div className="max-w-4xl">
          {/* Eyebrow tag */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="mb-8 inline-flex items-center gap-3"
          >
            <div className="flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                Transforming Lives Since May 2025
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <div className="mb-8 overflow-hidden">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="font-serif text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl xl:text-8xl"
            >
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.35, ease: [0.19, 1, 0.22, 1] }}
                >
                  Joy Returns.
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block text-gold"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
                >
                  Lives Transform.
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.65, ease: [0.19, 1, 0.22, 1] }}
                >
                  Communities Rise.
                </motion.span>
              </span>
            </motion.h1>
          </div>

          {/* Animated rotating word */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.19, 1, 0.22, 1] }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="text-lg font-medium text-white/60">We empower</span>
            <span className="relative h-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeWord}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                  className="inline-block text-lg font-bold text-gold"
                >
                  {HERO_WORDS[activeWord]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: [0.19, 1, 0.22, 1] }}
            className="mb-10 max-w-xl text-lg leading-relaxed text-white/65 md:text-xl"
          >
            Through education, healthcare, environmental stewardship, youth
            mentorship, and emergency response — the Ayotunde Oso Foundation
            turns compassion into lasting change.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: [0.19, 1, 0.22, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/donate"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-gold px-7 py-4 text-base font-bold text-forest-dark shadow-gold transition-all duration-300 hover:-translate-y-1 hover:bg-gold-light hover:shadow-glow-gold active:translate-y-0"
            >
              <Heart className="h-5 w-5 transition-transform group-hover:scale-110" />
              Donate Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/programs"
              className="group inline-flex items-center gap-2.5 rounded-xl border-2 border-white/25 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/50 hover:bg-white/10"
            >
              Explore Our Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <button
              className="group inline-flex items-center gap-2.5 rounded-xl px-4 py-4 text-sm font-semibold text-white/70 transition-all hover:text-white"
              onClick={() => {
                // In production: open video modal
                window.open('https://www.youtube.com/@AyotundeOsoFoundation', '_blank')
              }}
              aria-label="Watch our impact video"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 transition-all group-hover:bg-white/20">
                <Play className="ml-0.5 h-4 w-4 fill-current" />
              </span>
              Watch Our Story
            </button>
          </motion.div>
        </div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease: [0.19, 1, 0.22, 1] }}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm md:grid-cols-4"
          role="region"
          aria-label="Foundation impact statistics"
        >
          {HERO_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="group flex flex-col items-center gap-1 px-6 py-6 transition-colors hover:bg-white/5"
            >
              <span className="font-serif text-3xl font-bold text-gold md:text-4xl">
                {mounted ? stat.value : '—'}
              </span>
              <span className="text-center text-xs font-medium uppercase tracking-wider text-white/50">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
