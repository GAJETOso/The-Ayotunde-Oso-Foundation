'use client'

import * as React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Cookie, X, ChevronDown, ChevronUp, Shield, BarChart3, Target, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'

type ConsentPreferences = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  functional: boolean
}

const STORAGE_KEY = 'aof-cookie-consent'

const CATEGORIES = [
  {
    id: 'necessary' as const,
    label: 'Strictly Necessary',
    description: 'Essential for the website to function. Cannot be disabled.',
    icon: Shield,
    required: true,
  },
  {
    id: 'functional' as const,
    label: 'Functional',
    description: 'Remember your preferences such as language and accessibility settings.',
    icon: Settings,
    required: false,
  },
  {
    id: 'analytics' as const,
    label: 'Analytics',
    description: 'Help us understand how visitors interact with our website to improve it.',
    icon: BarChart3,
    required: false,
  },
  {
    id: 'marketing' as const,
    label: 'Marketing',
    description: 'Used to deliver personalized content and relevant advertisements.',
    icon: Target,
    required: false,
  },
]

export function CookieConsent() {
  const [visible, setVisible] = React.useState(false)
  const [showPreferences, setShowPreferences] = React.useState(false)
  const [preferences, setPreferences] = React.useState<ConsentPreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: true,
  })

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) {
        const timer = setTimeout(() => setVisible(true), 1500)
        return () => clearTimeout(timer)
      }
    } catch {
      // localStorage may be blocked
    }
  }, [])

  const save = (prefs: ConsentPreferences) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ preferences: prefs, timestamp: new Date().toISOString() })
      )
    } catch { /* ignore */ }
    setVisible(false)

    // Apply preferences
    if (typeof window !== 'undefined' && (window as { gtag?: unknown }).gtag) {
      (window as { gtag: (...args: unknown[]) => void }).gtag('consent', 'update', {
        analytics_storage: prefs.analytics ? 'granted' : 'denied',
        ad_storage: prefs.marketing ? 'granted' : 'denied',
        functionality_storage: prefs.functional ? 'granted' : 'denied',
      })
    }
  }

  const acceptAll = () => save({ necessary: true, analytics: true, marketing: true, functional: true })

  const rejectAll = () => save({ necessary: true, analytics: false, marketing: false, functional: false })

  const savePreferences = () => save(preferences)

  if (!visible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 md:bottom-4 md:left-4 md:right-auto"
        role="dialog"
        aria-label="Cookie consent"
        aria-modal="true"
      >
        <div className={cn(
          'bg-white dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-800',
          'shadow-2xl shadow-black/20 max-w-[440px] overflow-hidden'
        )}>
          {/* Header */}
          <div className="flex items-center gap-3 px-5 pt-5 pb-4">
            <div className="size-10 rounded-xl bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center flex-shrink-0">
              <Cookie className="size-5 text-brand-700 dark:text-brand-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">We value your privacy</h2>
              <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">
                We use cookies to enhance your experience and analyse site usage.
              </p>
            </div>
            <button
              onClick={rejectAll}
              className="p-1 rounded-lg text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors flex-shrink-0"
              aria-label="Dismiss"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Preferences panel */}
          <AnimatePresence>
            {showPreferences && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-4 space-y-3 border-t border-neutral-100 dark:border-neutral-800 pt-4">
                  {CATEGORIES.map(cat => {
                    const Icon = cat.icon
                    return (
                      <div key={cat.id} className="flex items-start gap-3">
                        <div className="size-7 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon className="size-3.5 text-neutral-600 dark:text-neutral-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">{cat.label}</p>
                          <p className="text-[11px] text-neutral-500 leading-relaxed mt-0.5">{cat.description}</p>
                        </div>
                        <Switch
                          size="sm"
                          checked={preferences[cat.id]}
                          onCheckedChange={checked =>
                            !cat.required && setPreferences(p => ({ ...p, [cat.id]: checked }))
                          }
                          disabled={cat.required}
                          aria-label={`${cat.label} cookies`}
                        />
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Actions */}
          <div className="px-5 pb-5 pt-1 flex flex-col gap-2">
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowPreferences(!showPreferences)}
                className="flex-1 text-xs text-neutral-600 dark:text-neutral-400"
              >
                {showPreferences ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
                {showPreferences ? 'Hide' : 'Manage'} Preferences
              </Button>
              {showPreferences && (
                <Button variant="outline" size="sm" onClick={savePreferences} className="flex-1 text-xs">
                  Save Preferences
                </Button>
              )}
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm" onClick={rejectAll} className="flex-1 text-xs">
                Reject All
              </Button>
              <Button variant="gold" size="sm" onClick={acceptAll} className="flex-1 text-xs">
                Accept All
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="px-5 pb-4 border-t border-neutral-100 dark:border-neutral-800 pt-3">
            <p className="text-[10px] text-neutral-400 text-center">
              By continuing, you agree to our{' '}
              <a href="/privacy" className="underline hover:text-brand-600">Privacy Policy</a>
              {' '}and{' '}
              <a href="/cookies" className="underline hover:text-brand-600">Cookie Policy</a>.
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
