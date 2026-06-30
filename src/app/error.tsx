'use client'

import { useEffect } from 'react'
import { AlertCircle, RefreshCcw, Home } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
          <AlertCircle className="h-8 w-8 text-destructive" aria-hidden="true" />
        </div>
        <h1 className="mb-3 font-serif text-2xl font-bold">Something went wrong</h1>
        <p className="mb-8 text-muted-foreground">
          We encountered an unexpected error. Our team has been notified. Please
          try again or return to the home page.
        </p>
        {error.digest && (
          <p className="mb-6 text-xs font-mono text-muted-foreground">
            Error ID: {error.digest}
          </p>
        )}
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-xl bg-brand-900 px-6 py-3 font-semibold text-white transition-all hover:bg-brand-800"
          >
            <RefreshCcw className="h-4 w-4" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-border px-6 py-3 font-semibold transition-all hover:border-brand-300 hover:bg-brand-50"
          >
            <Home className="h-4 w-4" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}
