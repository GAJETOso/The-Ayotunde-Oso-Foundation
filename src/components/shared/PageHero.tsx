'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronRight, Home } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { BreadcrumbItem } from '@/types'

type PageHeroProps = {
  title: string
  subtitle?: string
  description?: string
  breadcrumbs?: BreadcrumbItem[]
  image?: string
  imageAlt?: string
  eyebrow?: string
  size?: 'sm' | 'default' | 'lg'
  align?: 'left' | 'center'
  children?: React.ReactNode
  gradient?: 'brand' | 'gold' | 'dark' | 'none'
  className?: string
}

export function PageHero({
  title,
  subtitle,
  description,
  breadcrumbs,
  image,
  imageAlt,
  eyebrow,
  size = 'default',
  align = 'center',
  children,
  gradient = 'brand',
  className,
}: PageHeroProps) {
  const heroRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const sizeClasses = {
    sm: 'pt-28 pb-16',
    default: 'pt-32 pb-20',
    lg: 'pt-40 pb-28',
  }

  const gradientClasses = {
    brand: 'from-forest-900 via-brand-900 to-brand-800',
    gold: 'from-forest-900 via-forest-800 to-brand-900',
    dark: 'from-neutral-950 via-neutral-900 to-neutral-800',
    none: '',
  }

  return (
    <section
      ref={heroRef}
      className={cn('relative overflow-hidden', sizeClasses[size], className)}
    >
      {/* Background */}
      <div className="absolute inset-0">
        {image ? (
          <motion.div className="absolute inset-0" style={{ y }}>
            <Image
              src={image}
              alt={imageAlt || title}
              fill
              className="object-cover"
              priority
              quality={90}
            />
          </motion.div>
        ) : null}
        <div className={cn(
          'absolute inset-0 bg-gradient-to-br',
          image ? 'opacity-85' : '',
          gradientClasses[gradient]
        )} />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className={cn('container-xl relative z-10', align === 'center' && 'text-center')}
        style={{ opacity }}
      >
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className={cn(
              'flex items-center gap-1.5 text-sm',
              align === 'center' && 'justify-center'
            )}>
              <li>
                <Link
                  href="/"
                  className="text-white/60 hover:text-white transition-colors flex items-center gap-1"
                >
                  <Home className="size-3.5" />
                  <span className="sr-only">Home</span>
                </Link>
              </li>
              {breadcrumbs.map((crumb, i) => (
                <React.Fragment key={crumb.href}>
                  <ChevronRight className="size-3.5 text-white/40" aria-hidden />
                  <li>
                    {i === breadcrumbs.length - 1 || !crumb.href ? (
                      <span className="text-white/90 font-medium">{crumb.label}</span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="text-white/60 hover:text-white transition-colors"
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                </React.Fragment>
              ))}
            </ol>
          </nav>
        )}

        {/* Eyebrow */}
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={cn(
              'text-gold-400 text-sm font-semibold uppercase tracking-[0.2em] mb-3',
              align === 'center' && 'text-center'
            )}
          >
            {eyebrow}
          </motion.p>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            'font-display font-bold text-white leading-tight',
            size === 'sm' && 'text-3xl md:text-4xl',
            size === 'default' && 'text-4xl md:text-5xl lg:text-6xl',
            size === 'lg' && 'text-5xl md:text-6xl lg:text-7xl',
          )}
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              'text-white/80 mt-4 leading-relaxed',
              size === 'sm' ? 'text-base' : 'text-lg md:text-xl',
              align === 'center' && 'max-w-2xl mx-auto'
            )}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className={cn(
              'text-white/70 mt-3 text-sm leading-relaxed',
              align === 'center' && 'max-w-xl mx-auto'
            )}
          >
            {description}
          </motion.p>
        )}

        {/* Children (CTA buttons, etc.) */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={cn(
              'mt-8 flex flex-wrap gap-3',
              align === 'center' && 'justify-center'
            )}
          >
            {children}
          </motion.div>
        )}
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 40" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,40 C360,0 1080,0 1440,40 L1440,40 L0,40 Z"
            className="fill-white dark:fill-neutral-950"
          />
        </svg>
      </div>
    </section>
  )
}
