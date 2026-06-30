export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" aria-label="Loading">
      <div className="flex flex-col items-center gap-4">
        {/* AOF Logo Pulse */}
        <div className="relative">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-brand-200 border-t-brand-600" />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              width="28"
              height="28"
              viewBox="0 0 40 40"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M20 4C12 10 8 18 10 26C12 32 16 36 20 38C24 36 28 32 30 26C32 18 28 10 20 4Z"
                fill="#0B4D35"
              />
              <circle cx="20" cy="24" r="4" fill="#D4A843" />
            </svg>
          </div>
        </div>
        <p className="text-sm font-medium text-muted-foreground animate-pulse">
          Loading…
        </p>
      </div>
    </div>
  )
}
