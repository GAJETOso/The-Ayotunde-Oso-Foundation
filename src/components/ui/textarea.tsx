'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string
  label?: string
  hint?: string
  showCount?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, label, hint, showCount, maxLength, id, value, onChange, ...props }, ref) => {
    const textareaId = id || React.useId()
    const [count, setCount] = React.useState(
      typeof value === 'string' ? value.length : 0
    )

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCount(e.target.value.length)
      onChange?.(e)
    }

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1" aria-hidden>*</span>}
          </label>
        )}
        <textarea
          id={textareaId}
          className={cn(
            'flex min-h-[120px] w-full rounded-xl border bg-white px-4 py-3 text-sm text-neutral-900 ring-offset-white placeholder:text-neutral-400 transition-all duration-200 resize-y',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'dark:bg-neutral-950 dark:text-neutral-100 dark:placeholder:text-neutral-500',
            error
              ? 'border-red-500 focus-visible:ring-red-500/30'
              : 'border-neutral-300 focus-visible:border-brand-500 focus-visible:ring-brand-500/20 dark:border-neutral-700',
            className
          )}
          ref={ref}
          value={value}
          onChange={handleChange}
          maxLength={maxLength}
          aria-invalid={!!error}
          aria-describedby={
            error ? `${textareaId}-error` : hint ? `${textareaId}-hint` : undefined
          }
          {...props}
        />
        <div className="flex justify-between items-center mt-1.5">
          <div>
            {error && (
              <p id={`${textareaId}-error`} className="text-xs text-red-600 dark:text-red-400" role="alert">
                {error}
              </p>
            )}
            {hint && !error && (
              <p id={`${textareaId}-hint`} className="text-xs text-neutral-500 dark:text-neutral-400">
                {hint}
              </p>
            )}
          </div>
          {showCount && maxLength && (
            <p className="text-xs text-neutral-400 tabular-nums">
              {count}/{maxLength}
            </p>
          )}
        </div>
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
