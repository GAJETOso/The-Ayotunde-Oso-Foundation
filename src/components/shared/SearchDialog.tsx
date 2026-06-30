'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, X, FileText, Users, Calendar, Heart, BookOpen, ArrowRight, Command } from 'lucide-react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

type SearchResult = {
  id: string
  title: string
  excerpt: string
  href: string
  category: string
  icon: React.ElementType
}

const QUICK_LINKS: SearchResult[] = [
  { id: '1', title: 'Donate Now', excerpt: 'Support our mission with a donation', href: '/donate', category: 'Action', icon: Heart },
  { id: '2', title: 'Volunteer', excerpt: 'Join our volunteer community', href: '/volunteer', category: 'Action', icon: Users },
  { id: '3', title: 'Our Programs', excerpt: 'Education, Healthcare, Mentorship and more', href: '/programs', category: 'Programs', icon: BookOpen },
  { id: '4', title: 'Upcoming Events', excerpt: 'See all events and register', href: '/events', category: 'Events', icon: Calendar },
  { id: '5', title: 'Impact Dashboard', excerpt: 'View our real-time impact metrics', href: '/impact', category: 'Impact', icon: FileText },
  { id: '6', title: 'Apply for Grants', excerpt: 'Community grant application portal', href: '/resources/grants', category: 'Resources', icon: FileText },
]

const CATEGORY_COLORS: Record<string, string> = {
  Action: 'bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300',
  Programs: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
  Events: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  Impact: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  Resources: 'bg-gold-100 text-gold-700 dark:bg-gold-900/30 dark:text-gold-300',
}

type SearchDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const router = useRouter()
  const [query, setQuery] = React.useState('')
  const [results, setResults] = React.useState<SearchResult[]>(QUICK_LINKS)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [isLoading, setIsLoading] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (open) {
      setQuery('')
      setResults(QUICK_LINKS)
      setSelectedIndex(0)
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  React.useEffect(() => {
    if (!query.trim()) {
      setResults(QUICK_LINKS)
      return
    }
    setIsLoading(true)
    const debounce = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
        if (res.ok) {
          const data = await res.json()
          setResults(data.results?.length ? data.results : QUICK_LINKS.filter(r =>
            r.title.toLowerCase().includes(query.toLowerCase()) ||
            r.excerpt.toLowerCase().includes(query.toLowerCase())
          ))
        }
      } catch {
        setResults(QUICK_LINKS.filter(r =>
          r.title.toLowerCase().includes(query.toLowerCase())
        ))
      } finally {
        setIsLoading(false)
      }
    }, 300)
    return () => clearTimeout(debounce)
  }, [query])

  const handleSelect = (result: SearchResult) => {
    router.push(result.href)
    onOpenChange(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(i => Math.min(i + 1, results.length - 1))
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(i => Math.max(i - 1, 0))
        break
      case 'Enter':
        e.preventDefault()
        if (results[selectedIndex]) handleSelect(results[selectedIndex])
        break
      case 'Escape':
        onOpenChange(false)
        break
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="p-0 gap-0 max-w-2xl overflow-hidden"
        hideClose
        aria-label="Search"
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-neutral-200 dark:border-neutral-800">
          <Search className="size-5 text-neutral-400 flex-shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={e => { setQuery(e.target.value); setSelectedIndex(0) }}
            onKeyDown={handleKeyDown}
            placeholder="Search pages, programs, events, people..."
            className="flex-1 bg-transparent text-base text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 outline-none"
            aria-label="Search"
            role="combobox"
            aria-expanded={results.length > 0}
            aria-autocomplete="list"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-lg text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Clear search"
            >
              <X className="size-4" />
            </button>
          )}
          <kbd className="hidden sm:flex items-center gap-0.5 px-2 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-500 text-xs font-mono">
            <span>Esc</span>
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-[400px] overflow-y-auto">
          {!query && (
            <div className="px-4 py-2">
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Quick Links</p>
            </div>
          )}

          {isLoading ? (
            <div className="py-12 text-center">
              <div className="size-6 border-2 border-brand-600 border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-sm text-neutral-500 mt-2">Searching...</p>
            </div>
          ) : results.length > 0 ? (
            <ul role="listbox" className="px-2 py-2">
              <AnimatePresence initial={false}>
                {results.map((result, index) => {
                  const Icon = result.icon
                  return (
                    <motion.li
                      key={result.id}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03 }}
                      role="option"
                      aria-selected={index === selectedIndex}
                    >
                      <button
                        onClick={() => handleSelect(result)}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={cn(
                          'w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-colors group',
                          index === selectedIndex
                            ? 'bg-brand-50 dark:bg-brand-900/30'
                            : 'hover:bg-neutral-50 dark:hover:bg-neutral-900'
                        )}
                      >
                        <div className={cn(
                          'size-9 rounded-xl flex items-center justify-center flex-shrink-0',
                          index === selectedIndex
                            ? 'bg-brand-700 text-white'
                            : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500'
                        )}>
                          <Icon className="size-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 truncate">
                            {result.title}
                          </p>
                          <p className="text-xs text-neutral-500 truncate">{result.excerpt}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={cn(
                            'text-[10px] font-semibold px-2 py-0.5 rounded-full',
                            CATEGORY_COLORS[result.category] || 'bg-neutral-100 text-neutral-600'
                          )}>
                            {result.category}
                          </span>
                          <ArrowRight className={cn(
                            'size-4 transition-transform',
                            index === selectedIndex ? 'text-brand-600 translate-x-0.5' : 'text-neutral-300'
                          )} />
                        </div>
                      </button>
                    </motion.li>
                  )
                })}
              </AnimatePresence>
            </ul>
          ) : (
            <div className="py-12 text-center">
              <Search className="size-8 text-neutral-300 mx-auto mb-2" />
              <p className="text-sm font-medium text-neutral-500">No results for “{query}”</p>
              <p className="text-xs text-neutral-400 mt-1">Try different keywords or browse our pages</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50">
          <div className="flex items-center gap-3 text-xs text-neutral-400">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 font-mono text-[10px]">↑↓</kbd>
              navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 font-mono text-[10px]">↵</kbd>
              select
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs text-neutral-400">
            <Command className="size-3" />
            <span>K to open</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
