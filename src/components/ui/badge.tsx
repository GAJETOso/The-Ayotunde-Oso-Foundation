import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full text-xs font-semibold transition-all duration-200 select-none',
  {
    variants: {
      variant: {
        default:
          'bg-brand-100 text-brand-800 dark:bg-brand-900/40 dark:text-brand-300',
        brand:
          'bg-brand-700 text-white',
        gold:
          'bg-gold-100 text-gold-800 dark:bg-gold-900/30 dark:text-gold-300',
        'gold-solid':
          'bg-gold-500 text-forest-900',
        secondary:
          'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300',
        destructive:
          'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        success:
          'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        warning:
          'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
        info:
          'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        outline:
          'border border-current bg-transparent',
      },
      size: {
        sm: 'px-2 py-0.5 text-[10px]',
        default: 'px-2.5 py-1',
        lg: 'px-3 py-1.5 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean
}

function Badge({ className, variant, size, dot, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {dot && (
        <span
          className={cn(
            'size-1.5 rounded-full flex-shrink-0',
            variant === 'success' && 'bg-emerald-500',
            variant === 'destructive' && 'bg-red-500',
            variant === 'warning' && 'bg-amber-500',
            variant === 'gold' && 'bg-gold-500',
            (!variant || variant === 'default' || variant === 'brand') && 'bg-brand-500',
          )}
          aria-hidden
        />
      )}
      {children}
    </div>
  )
}

export { Badge, badgeVariants }
