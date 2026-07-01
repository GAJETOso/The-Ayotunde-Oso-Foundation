'use client'

import { useRef, useEffect, type ReactNode } from 'react'
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  type Variants,
} from 'framer-motion'

const EASE = [0.19, 1, 0.22, 1] as const

// ─── FadeUp ────────────────────────────────────────────────────────────────
export function FadeUp({
  children,
  delay = 0,
  duration = 0.7,
  className,
  amount = 0.08,
}: {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  amount?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

// ─── FadeIn ────────────────────────────────────────────────────────────────
export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  className,
}: {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.08 })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

// ─── SlideIn ───────────────────────────────────────────────────────────────
export function SlideIn({
  children,
  from = 'left',
  delay = 0,
  distance = 48,
  duration = 0.8,
  className,
}: {
  children: ReactNode
  from?: 'left' | 'right' | 'bottom'
  delay?: number
  distance?: number
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.08 })
  const initial =
    from === 'left'   ? { opacity: 0, x: -distance } :
    from === 'right'  ? { opacity: 0, x: distance }  :
                        { opacity: 0, y: distance }
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

// ─── ScaleIn ───────────────────────────────────────────────────────────────
export function ScaleIn({
  children,
  delay = 0,
  duration = 0.6,
  from = 0.9,
  className,
}: {
  children: ReactNode
  delay?: number
  duration?: number
  from?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.08 })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: from }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

// ─── StaggerContainer ──────────────────────────────────────────────────────
export function StaggerContainer({
  children,
  className,
  stagger = 0.09,
  delayChildren = 0.05,
}: {
  children: ReactNode
  className?: string
  stagger?: number
  delayChildren?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })
  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren } },
  }
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      {children}
    </motion.div>
  )
}

// ─── StaggerItem ───────────────────────────────────────────────────────────
export function StaggerItem({
  children,
  className,
  direction = 'up',
}: {
  children: ReactNode
  className?: string
  direction?: 'up' | 'left' | 'right' | 'scale'
}) {
  const init = {
    up:    { opacity: 0, y: 28 },
    left:  { opacity: 0, x: -28 },
    right: { opacity: 0, x: 28 },
    scale: { opacity: 0, scale: 0.9 },
  }[direction]

  const target = {
    up:    { opacity: 1, y: 0 },
    left:  { opacity: 1, x: 0 },
    right: { opacity: 1, x: 0 },
    scale: { opacity: 1, scale: 1 },
  }[direction]

  return (
    <motion.div
      className={className}
      variants={{
        hidden: init,
        show: { ...target, transition: { duration: 0.65, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  )
}

// ─── CountUp ───────────────────────────────────────────────────────────────
export function CountUp({
  to,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 2,
  separator = true,
  className,
}: {
  to: number
  prefix?: string
  suffix?: string
  decimals?: number
  duration?: number
  separator?: boolean
  className?: string
}) {
  const motionValue = useMotionValue(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  const display = useTransform(motionValue, (v) => {
    const rounded = decimals > 0 ? v.toFixed(decimals) : String(Math.round(v))
    const formatted =
      separator && Math.round(v) >= 1000
        ? Number(rounded).toLocaleString()
        : rounded
    return `${prefix}${formatted}${suffix}`
  })

  useEffect(() => {
    if (!inView) return
    const ctrl = animate(motionValue, to, {
      duration,
      ease: [0.19, 1, 0.22, 1],
    })
    return ctrl.stop
  }, [inView, motionValue, to, duration])

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  )
}

// ─── AnimatedProgress ──────────────────────────────────────────────────────
const progressColors = {
  brand:   'bg-brand-600',
  gold:    'bg-gold-500',
  success: 'bg-emerald-500',
  warning: 'bg-amber-500',
  danger:  'bg-red-500',
}

export function AnimatedProgress({
  value,
  color = 'brand',
  label,
  showValue = false,
  delay = 0,
  size = 'default',
}: {
  value: number
  color?: keyof typeof progressColors
  label?: string
  showValue?: boolean
  delay?: number
  size?: 'sm' | 'default' | 'lg'
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const heights = { sm: 'h-1.5', default: 'h-2.5', lg: 'h-4' }
  return (
    <div ref={ref} className="w-full">
      {(label || showValue) && (
        <div className="mb-1.5 flex items-center justify-between">
          {label && (
            <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
              {label}
            </span>
          )}
          {showValue && (
            <span className="tabular-nums text-xs font-semibold text-neutral-700 dark:text-neutral-300">
              {value}%
            </span>
          )}
        </div>
      )}
      <div
        className={`relative overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800 ${heights[size]}`}
      >
        <motion.div
          className={`h-full rounded-full ${progressColors[color]}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : {}}
          transition={{ duration: 1.3, delay, ease: EASE }}
        />
      </div>
    </div>
  )
}
