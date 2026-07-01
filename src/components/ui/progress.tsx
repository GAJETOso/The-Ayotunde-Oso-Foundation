'use client'

import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import { cn } from '@/lib/utils'

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  label?: string
  showValue?: boolean
  color?: 'brand' | 'gold' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'default' | 'lg'
}

const colorMap = {
  brand: 'bg-brand-600',
  gold: 'bg-gold-500',
  success: 'bg-emerald-500',
  warning: 'bg-amber-500',
  danger: 'bg-red-500',
}

const sizeMap = {
  sm: 'h-1.5',
  default: 'h-2.5',
  lg: 'h-4',
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, label, showValue, color = 'brand', size = 'default', ...props }, ref) => (
  <div className="w-full">
    {(label || showValue) && (
      <div className="flex justify-between items-center mb-1.5">
        {label && <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">{label}</span>}
        {showValue && <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 tabular-nums">{value ?? 0}%</span>}
      </div>
    )}
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        'relative overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800',
        sizeMap[size],
        className
      )}
      {...props}
      value={value}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          'h-full w-full flex-1 rounded-full transition-all duration-700 ease-out-expo',
          colorMap[color]
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  </div>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
