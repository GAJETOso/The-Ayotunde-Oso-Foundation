'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Heart,
  Sun,
  Moon,
  Globe,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'
import { NAV_ITEMS } from '@/lib/constants'
import { AOFLogo } from '@/components/shared/AOFLogo'

const DONATION_LINK = '/donate'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const { scrollY } = useScroll()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 20)
  })

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleDropdownEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(label)
  }

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  const isHomePage = pathname === '/'
  const isTransparent = isHomePage && !isScrolled && !isMobileOpen

  return (
    <>
      <motion.header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          isTransparent
            ? 'bg-transparent'
            : 'border-b border-border/50 bg-background/90 backdrop-blur-xl shadow-sm'
        )}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="container-wide">
          <div className="flex h-18 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex-shrink-0 transition-opacity hover:opacity-90"
              aria-label="The Ayotunde Oso Foundation — Home"
            >
              <AOFLogo
                variant={isTransparent ? 'white' : 'color'}
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden items-center gap-1 lg:flex"
              role="navigation"
              aria-label="Main navigation"
              ref={dropdownRef}
            >
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  {item.children ? (
                    <button
                      className={cn(
                        'flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200',
                        isTransparent
                          ? 'text-white/85 hover:bg-white/10 hover:text-white'
                          : 'text-foreground/75 hover:bg-accent hover:text-foreground',
                        activeDropdown === item.label &&
                          (isTransparent
                            ? 'bg-white/10 text-white'
                            : 'bg-accent text-foreground')
                      )}
                      aria-expanded={activeDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          'h-3.5 w-3.5 transition-transform duration-200',
                          activeDropdown === item.label && 'rotate-180'
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        'flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200',
                        isTransparent
                          ? 'text-white/85 hover:bg-white/10 hover:text-white'
                          : 'text-foreground/75 hover:bg-accent hover:text-foreground',
                        pathname === item.href &&
                          (isTransparent ? 'text-white' : 'text-brand-700 dark:text-brand-400')
                      )}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Mega Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: [0.19, 1, 0.22, 1] }}
                        className="absolute left-0 top-full mt-2 w-64 overflow-hidden rounded-2xl border border-border/60 bg-popover shadow-floating"
                        onMouseEnter={() => handleDropdownEnter(item.label)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <div className="p-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                'group flex flex-col rounded-xl px-4 py-3 transition-all duration-200 hover:bg-accent',
                                pathname === child.href && 'bg-brand-50 dark:bg-brand-900/20'
                              )}
                            >
                              <span
                                className={cn(
                                  'text-sm font-semibold transition-colors',
                                  pathname === child.href
                                    ? 'text-brand-700 dark:text-brand-400'
                                    : 'text-foreground group-hover:text-brand-700 dark:group-hover:text-brand-400'
                                )}
                              >
                                {child.label}
                              </span>
                              {'description' in child && child.description && (
                                <span className="mt-0.5 text-xs text-muted-foreground">
                                  {child.description}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-2 lg:flex">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className={cn(
                  'flex h-9 w-9 items-center justify-center rounded-lg transition-all',
                  isTransparent
                    ? 'text-white/80 hover:bg-white/10 hover:text-white'
                    : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                )}
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </button>

              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={cn(
                  'flex h-9 w-9 items-center justify-center rounded-lg transition-all',
                  isTransparent
                    ? 'text-white/80 hover:bg-white/10 hover:text-white'
                    : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                )}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
              </button>

              {/* Donate CTA */}
              <Link
                href={DONATION_LINK}
                className={cn(
                  'ml-2 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5',
                  isTransparent
                    ? 'bg-gold text-forest-dark shadow-gold hover:bg-gold-light hover:shadow-glow-gold'
                    : 'bg-brand-900 text-white shadow-brand hover:bg-brand-800 hover:shadow-brand-lg'
                )}
              >
                <Heart className="h-4 w-4" />
                Donate
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href={DONATION_LINK}
                className="inline-flex items-center gap-1.5 rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-forest-dark transition-all"
              >
                <Heart className="h-3.5 w-3.5" />
                Donate
              </Link>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-lg transition-all',
                  isTransparent
                    ? 'text-white hover:bg-white/10'
                    : 'text-foreground hover:bg-accent'
                )}
                aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileOpen}
              >
                <AnimatePresence mode="wait">
                  {isMobileOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="open"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-background shadow-floating lg:hidden"
            >
              {/* Mobile Header */}
              <div className="flex h-18 items-center justify-between border-b border-border px-6">
                <AOFLogo variant="color" className="h-9 w-auto" />
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground hover:bg-accent"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Mobile Nav */}
              <nav className="p-4" aria-label="Mobile navigation">
                {NAV_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                    className="mb-1"
                  >
                    {item.children ? (
                      <div>
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === item.label ? null : item.label
                            )
                          }
                          className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-foreground hover:bg-accent"
                        >
                          {item.label}
                          <ChevronDown
                            className={cn(
                              'h-4 w-4 transition-transform duration-200',
                              activeDropdown === item.label && 'rotate-180'
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-4 mt-1 space-y-1 border-l-2 border-brand-100 pl-4 dark:border-brand-800">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:text-brand-700 dark:hover:text-brand-400"
                                    onClick={() => setIsMobileOpen(false)}
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block rounded-xl px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-brand-700"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* Mobile Footer */}
              <div className="border-t border-border p-6">
                <Link
                  href={DONATION_LINK}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-900 py-3.5 text-sm font-semibold text-white shadow-brand transition-all hover:bg-brand-800"
                  onClick={() => setIsMobileOpen(false)}
                >
                  <Heart className="h-4 w-4" />
                  Donate Now
                </Link>
                <div className="mt-4 flex items-center justify-between">
                  <Link
                    href="/volunteer"
                    className="text-sm font-medium text-muted-foreground hover:text-brand-700"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Become a Volunteer
                  </Link>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-accent"
                      aria-label="Toggle theme"
                    >
                      <Sun className="h-4 w-4 dark:hidden" />
                      <Moon className="hidden h-4 w-4 dark:block" />
                    </button>
                    <button
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-accent"
                      aria-label="Change language"
                    >
                      <Globe className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
