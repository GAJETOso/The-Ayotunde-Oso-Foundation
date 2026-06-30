'use client'

import * as React from 'react'
import { Toaster as SonnerToaster } from 'sonner'
import { useTheme } from 'next-themes'

export function Toaster() {
  const { theme } = useTheme()
  return (
    <SonnerToaster
      theme={theme as 'light' | 'dark' | 'system'}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-white group-[.toaster]:text-neutral-900 group-[.toaster]:border-neutral-200 group-[.toaster]:shadow-floating dark:group-[.toaster]:bg-neutral-950 dark:group-[.toaster]:text-neutral-100 dark:group-[.toaster]:border-neutral-800',
          description: 'group-[.toast]:text-neutral-500 dark:group-[.toast]:text-neutral-400',
          actionButton: 'group-[.toast]:bg-brand-600 group-[.toast]:text-white',
          cancelButton: 'group-[.toast]:bg-neutral-100 group-[.toast]:text-neutral-500',
        },
      }}
      position="bottom-right"
      richColors
      closeButton
    />
  )
}

export { toast } from 'sonner'
