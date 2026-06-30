import { cn } from '@/lib/utils'

interface AOFLogoProps {
  variant?: 'color' | 'white' | 'dark' | 'icon-only'
  className?: string
}

export function AOFLogo({ variant = 'color', className }: AOFLogoProps) {
  const isWhite = variant === 'white'
  const primaryColor = isWhite ? '#FFFFFF' : '#0B4D35'
  const goldColor = '#D4A843'
  const textColor = isWhite ? '#FFFFFF' : '#0B4D35'
  const taglineColor = isWhite ? 'rgba(255,255,255,0.6)' : '#6B7280'

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 52"
      fill="none"
      role="img"
      aria-label="The Ayotunde Oso Foundation"
      className={cn('h-10 w-auto', className)}
    >
      {/* Emblem Icon */}
      <g>
        {/* Outer circle */}
        <circle
          cx="26"
          cy="26"
          r="23"
          fill={primaryColor}
          fillOpacity={isWhite ? 0.15 : 1}
        />
        {isWhite && (
          <circle cx="26" cy="26" r="23" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />
        )}

        {/* Leaf/Flame shape representing life and hope */}
        <path
          d="M26 8 C20 14 16 20 18 28 C20 34 23 38 26 40 C29 38 32 34 34 28 C36 20 32 14 26 8Z"
          fill={isWhite ? 'rgba(255,255,255,0.9)' : goldColor}
        />

        {/* Inner leaf — the foundation's core */}
        <path
          d="M26 14 C22 19 20 24 21.5 29 C23 33 24.5 36 26 38 C27.5 36 29 33 30.5 29 C32 24 30 19 26 14Z"
          fill={primaryColor}
          fillOpacity={isWhite ? 0.8 : 1}
        />

        {/* Gold dot — the spark of joy/potential */}
        <circle cx="26" cy="28" r="3.5" fill={goldColor} />

        {/* Small growth dots */}
        <circle cx="26" cy="18" r="2" fill={isWhite ? 'rgba(255,255,255,0.5)' : goldColor} fillOpacity="0.6" />
      </g>

      {/* Foundation Name Text */}
      {variant !== 'icon-only' && (
        <g>
          {/* Main name */}
          <text
            x="58"
            y="21"
            fontFamily="'Playfair Display', Georgia, serif"
            fontSize="13.5"
            fontWeight="700"
            fill={textColor}
            letterSpacing="0.3"
          >
            Ayotunde Oso
          </text>

          {/* Foundation sub-label */}
          <text
            x="58"
            y="36"
            fontFamily="'Inter', system-ui, sans-serif"
            fontSize="9"
            fontWeight="500"
            fill={taglineColor}
            letterSpacing="2.5"
            textAnchor="start"
          >
            FOUNDATION
          </text>

          {/* Separator line */}
          <line
            x1="58"
            y1="39"
            x2="195"
            y2="39"
            stroke={isWhite ? 'rgba(255,255,255,0.2)' : goldColor}
            strokeWidth="0.75"
          />
        </g>
      )}
    </svg>
  )
}
