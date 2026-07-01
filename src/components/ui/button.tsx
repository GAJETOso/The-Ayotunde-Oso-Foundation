'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 select-none',
  {
    variants: {
      variant: {
        default:
          'bg-brand-700 text-white hover:bg-brand-600 active:bg-brand-800 shadow-brand hover:shadow-brand/80',
        gold:
          'bg-gold-500 text-forest-900 hover:bg-gold-400 active:bg-gold-600 shadow-sm font-bold',
        destructive:
          'bg-red-600 text-white hover:bg-red-500 active:bg-red-700 shadow-sm',
        outline:
          'border-2 border-brand-700 bg-transparent text-brand-700 hover:bg-brand-700 hover:text-white dark:border-brand-400 dark:text-brand-400 dark:hover:bg-brand-400 dark:hover:text-forest-900',
        'outline-gold':
          'border-2 border-gold-500 bg-transparent text-gold-700 hover:bg-gold-500 hover:text-forest-900 dark:border-gold-400 dark:text-gold-400',
        'outline-white':
          'border-2 border-white bg-transparent text-white hover:bg-white hover:text-forest-900',
        secondary:
          'bg-brand-100 text-brand-900 hover:bg-brand-200 dark:bg-brand-900/40 dark:text-brand-100 dark:hover:bg-brand-900/60',
        ghost:
          'bg-transparent hover:bg-brand-100 hover:text-brand-900 dark:hover:bg-brand-900/40 dark:hover:text-brand-100',
        link:
          'bg-transparent text-brand-700 underline-offset-4 hover:underline dark:text-brand-400 h-auto px-0',
        white:
          'bg-white text-forest-900 hover:bg-cream-50 shadow-sm active:bg-cream-100',
        dark:
          'bg-forest-900 text-white hover:bg-forest-800 active:bg-black shadow-sm',
      },
      size: {
        xs: 'h-7 px-3 text-xs rounded-lg',
        sm: 'h-9 px-4 text-sm rounded-lg',
        default: 'h-11 px-6 py-2',
        lg: 'h-12 px-8 text-base',
        xl: 'h-14 px-10 text-lg rounded-2xl',
        '2xl': 'h-16 px-12 text-xl rounded-2xl',
        icon: 'h-10 w-10 rounded-xl',
        'icon-sm': 'h-8 w-8 rounded-lg',
        'icon-lg': 'h-12 w-12 rounded-xl',
        'icon-xl': 'h-14 w-14 rounded-2xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            {children}
          </>
        ) : (
          children
        )}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
