import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        brand: {
          '50': '#F0FAF5',
          '100': '#DCFAEC',
          '200': '#B9F3D9',
          '300': '#86E6BD',
          '400': '#4DD29B',
          '500': '#1ABB7B',
          '600': '#0E9963',
          '700': '#0B7A4F',
          '800': '#0B6141',
          '900': '#0B4D35',
          '950': '#052E1F',
          DEFAULT: '#0B4D35',
          light: '#16A672',
        },
        gold: {
          '50': '#FFFBEB',
          '100': '#FEF8D9',
          '200': '#FDEDB2',
          '300': '#FBDC7E',
          '400': '#F9C84A',
          '500': '#D4A843',
          '600': '#B8872C',
          '700': '#9A6C1E',
          '800': '#7D5417',
          '900': '#643F11',
          DEFAULT: '#D4A843',
          light: '#F0C869',
        },
        cream: {
          DEFAULT: '#FAF8F4',
          '50': '#FDFCFA',
          '100': '#FAF8F4',
          '200': '#F5F0E8',
          '300': '#EDE6D9',
        },
        forest: {
          DEFAULT: '#0B4D35',
          dark: '#052E1F',
          deeper: '#031F15',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        serif: ['var(--font-playfair)', ...fontFamily.serif],
        display: ['var(--font-playfair)', ...fontFamily.serif],
      },
      fontSize: {
        'display-2xl': [
          '4.5rem',
          { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' },
        ],
        'display-xl': [
          '3.75rem',
          { lineHeight: '1.08', letterSpacing: '-0.025em', fontWeight: '700' },
        ],
        'display-lg': [
          '3rem',
          { lineHeight: '1.12', letterSpacing: '-0.02em', fontWeight: '700' },
        ],
        'display-md': [
          '2.25rem',
          { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '700' },
        ],
        'display-sm': [
          '1.875rem',
          { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' },
        ],
      },
      spacing: {
        '4.5': '1.125rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '88': '22rem',
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-down': 'fadeDown 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.4s ease-out',
        'slide-in-right': 'slideInRight 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        wave: 'wave 1.5s ease-in-out infinite',
        ticker: 'ticker 30s linear infinite',
        'number-scroll': 'numberScroll 2s ease-out forwards',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(11, 77, 53, 0.4)' },
          '50%': { boxShadow: '0 0 0 20px rgba(11, 77, 53, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        wave: {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(0.4)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        numberScroll: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-brand':
          'linear-gradient(135deg, #0B4D35 0%, #16A672 100%)',
        'gradient-gold': 'linear-gradient(135deg, #D4A843 0%, #F0C869 100%)',
        'gradient-hero':
          'linear-gradient(to bottom, rgba(11,77,53,0.92) 0%, rgba(11,77,53,0.5) 60%, rgba(11,77,53,0.2) 100%)',
        'gradient-card':
          'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        shimmer:
          'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)',
      },
      boxShadow: {
        brand: '0 4px 24px -2px rgba(11, 77, 53, 0.25)',
        'brand-lg': '0 8px 48px -4px rgba(11, 77, 53, 0.3)',
        gold: '0 4px 24px -2px rgba(212, 168, 67, 0.35)',
        card: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.05)',
        'card-hover':
          '0 4px 8px rgba(0,0,0,0.06), 0 16px 40px rgba(0,0,0,0.1)',
        glass:
          '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.15)',
        floating: '0 24px 64px rgba(0,0,0,0.18)',
        'glow-brand': '0 0 48px rgba(11, 77, 53, 0.35)',
        'glow-gold': '0 0 48px rgba(212, 168, 67, 0.35)',
        'inner-white': 'inset 0 1px 0 rgba(255,255,255,0.15)',
        'inner-black': 'inset 0 1px 0 rgba(0,0,0,0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        xs: '475px',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'ease-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'ease-in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
        '1500': '1500ms',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
