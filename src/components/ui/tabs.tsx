'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cn } from '@/lib/utils'

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & { variant?: 'underline' | 'pills' | 'cards' }
>(({ className, variant = 'underline', ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'flex',
      variant === 'underline' && 'border-b border-neutral-200 dark:border-neutral-800 gap-0',
      variant === 'pills' && 'gap-1 p-1 bg-neutral-100 rounded-xl dark:bg-neutral-900',
      variant === 'cards' && 'gap-2',
      className
    )}
    data-variant={variant}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-200',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-1',
      'disabled:pointer-events-none disabled:opacity-50',
      // Underline variant
      '[&[data-variant=underline]]:px-4 [&[data-variant=underline]]:py-3 [&[data-variant=underline]]:border-b-2 [&[data-variant=underline]]:border-transparent [&[data-variant=underline]]:text-neutral-500',
      '[&[data-variant=underline][data-state=active]]:border-brand-600 [&[data-variant=underline][data-state=active]]:text-brand-700',
      // Pills variant
      'group-[&[data-variant=pills]]:px-3 group-[&[data-variant=pills]]:py-1.5 group-[&[data-variant=pills]]:rounded-lg',
      // Default underline styling without data-variant propagation
      'px-4 py-3 border-b-2 border-transparent text-neutral-500 dark:text-neutral-400',
      'data-[state=active]:border-brand-600 data-[state=active]:text-brand-700 dark:data-[state=active]:text-brand-400 dark:data-[state=active]:border-brand-400',
      'hover:text-neutral-700 dark:hover:text-neutral-200 hover:border-neutral-300 dark:hover:border-neutral-700',
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
