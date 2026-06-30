'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Monitor } from 'lucide-react'
import { cn } from '@/lib/utils'

type ThemeToggleProps = {
  className?: string
  variant?: 'icon' | 'cycle'
  showLabel?: boolean
}

export function ThemeToggle({ className, variant = 'icon', showLabel }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <div
        className={cn('size-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 animate-pulse', className)}
        aria-hidden
      />
    )
  }

  const cycle = () => {
    if (theme === 'light') setTheme('dark')
    else if (theme === 'dark') setTheme('system')
    else setTheme('light')
  }

  const currentIcon = resolvedTheme === 'dark' ? Moon : Sun
  const CurrentIcon = currentIcon

  const label =
    theme === 'light' ? 'Switch to dark mode'
    : theme === 'dark' ? 'Switch to system preference'
    : 'Switch to light mode'

  return (
    <button
      onClick={cycle}
      className={cn(
        'relative flex items-center justify-center gap-2 rounded-xl transition-all duration-200',
        'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100',
        'dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500',
        showLabel ? 'px-3 py-2 text-sm font-medium' : 'size-10',
        className
      )}
      aria-label={label}
      title={label}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={resolvedTheme}
          initial={{ scale: 0.7, opacity: 0, rotate: -30 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          exit={{ scale: 0.7, opacity: 0, rotate: 30 }}
          transition={{ duration: 0.2 }}
        >
          <CurrentIcon className="size-4.5" />
        </motion.div>
      </AnimatePresence>
      {showLabel && <span>{resolvedTheme === 'dark' ? 'Dark' : resolvedTheme === 'light' ? 'Light' : 'System'}</span>}
      {theme === 'system' && !showLabel && (
        <Monitor className="absolute -bottom-0.5 -right-0.5 size-2.5 text-brand-600" />
      )}
    </button>
  )
}
