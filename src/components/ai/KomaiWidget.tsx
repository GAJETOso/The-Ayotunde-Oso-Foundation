'use client'

import * as React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, X, Minimize2, Sparkles } from 'lucide-react'
import { KomaiChat } from './KomaiChat'
import { cn } from '@/lib/utils'

export function KomaiWidget() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isMinimized, setIsMinimized] = React.useState(false)
  const [showBadge, setShowBadge] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowBadge(true)
    }, 10000)
    return () => clearTimeout(timer)
  }, [isOpen])

  const handleOpen = () => {
    setIsOpen(true)
    setShowBadge(false)
    setIsMinimized(false)
  }

  const handleClose = () => {
    setIsOpen(false)
    setIsMinimized(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3" aria-label="KOMAI AI Assistant">
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className={cn(
              'w-[380px] max-w-[calc(100vw-3rem)] rounded-2xl overflow-hidden',
              'bg-white dark:bg-neutral-950',
              'border border-neutral-200 dark:border-neutral-800',
              'shadow-2xl shadow-black/20'
            )}
            style={{ height: '560px', maxHeight: 'calc(100vh - 100px)' }}
          >
            <KomaiChat onClose={handleClose} onMinimize={() => setIsMinimized(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimized indicator */}
      <AnimatePresence>
        {isMinimized && (
          <motion.button
            key="minimized"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            onClick={() => setIsMinimized(false)}
            className="flex items-center gap-2 bg-brand-700 text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium"
          >
            <Sparkles className="size-3.5" />
            KOMAI
          </motion.button>
        )}
      </AnimatePresence>

      {/* Badge tooltip */}
      <AnimatePresence>
        {showBadge && !isOpen && (
          <motion.div
            key="badge"
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-floating px-4 py-3 max-w-[240px]"
          >
            <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">Hi there! I am KOMAI</p>
            <p className="text-xs text-neutral-500 mt-0.5">How can I help you today?</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        onClick={isOpen ? handleClose : handleOpen}
        className={cn(
          'relative size-14 rounded-full shadow-lg flex items-center justify-center transition-colors',
          isOpen
            ? 'bg-neutral-800 text-white hover:bg-neutral-700'
            : 'bg-brand-700 text-white hover:bg-brand-600'
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? 'Close KOMAI assistant' : 'Open KOMAI assistant'}
        aria-expanded={isOpen}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="size-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="size-6" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse ring */}
        {!isOpen && showBadge && (
          <span className="absolute inset-0 rounded-full animate-ping bg-brand-500 opacity-25" />
        )}

        {/* Notification dot */}
        {showBadge && !isOpen && (
          <span className="absolute -top-1 -right-1 size-3.5 bg-gold-500 rounded-full border-2 border-white" />
        )}
      </motion.button>
    </div>
  )
}
