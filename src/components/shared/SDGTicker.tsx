'use client'

import { SDG_GOALS } from '@/data/impact'

export function SDGTicker() {
  const doubled = [...SDG_GOALS, ...SDG_GOALS]

  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-4 items-stretch"
        style={{
          width: `${doubled.length * 148}px`,
          animation: 'sdg-scroll 50s linear infinite',
        }}
      >
        {doubled.map((sdg, i) => (
          <div
            key={`${sdg.number}-${i}`}
            className="flex-shrink-0 w-32 rounded-xl p-4 text-center"
            style={{
              backgroundColor: sdg.color + '22',
              border: `1px solid ${sdg.color}55`,
            }}
          >
            <div
              className="font-display text-2xl font-bold"
              style={{ color: sdg.color }}
            >
              {sdg.number}
            </div>
            <p className="mt-1 text-[11px] font-semibold text-white leading-tight">
              {sdg.title}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes sdg-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .sdg-ticker-inner { animation-play-state: paused; }
        }
      `}</style>
    </div>
  )
}
