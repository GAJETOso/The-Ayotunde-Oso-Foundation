import * as React from 'react'

type UseCounterOptions = {
  end: number
  start?: number
  duration?: number
  delay?: number
  enabled?: boolean
  decimals?: number
  easing?: 'linear' | 'easeOut' | 'easeInOut' | 'spring'
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

function springEase(t: number): number {
  // Approximate spring with overshoot
  const c4 = (2 * Math.PI) / 3
  if (t === 0) return 0
  if (t === 1) return 1
  return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1
}

export function useCounter({
  end,
  start = 0,
  duration = 2200,
  delay = 0,
  enabled = true,
  decimals = 0,
  easing = 'easeOut',
}: UseCounterOptions) {
  const [count, setCount] = React.useState(start)
  const frameRef = React.useRef<number>(0)
  const startTimeRef = React.useRef<number>(0)

  React.useEffect(() => {
    if (!enabled) return

    const easeFn =
      easing === 'linear' ? (t: number) => t
      : easing === 'easeInOut' ? easeInOutCubic
      : easing === 'spring' ? springEase
      : easeOutCubic

    const timer = setTimeout(() => {
      startTimeRef.current = performance.now()

      const tick = (now: number) => {
        const elapsed = now - startTimeRef.current
        const progress = Math.min(elapsed / duration, 1)
        const eased = easeFn(progress)
        const current = start + (end - start) * eased

        setCount(parseFloat(current.toFixed(decimals)))

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(tick)
        } else {
          setCount(end)
        }
      }

      frameRef.current = requestAnimationFrame(tick)
    }, delay)

    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(frameRef.current)
    }
  }, [end, start, duration, delay, enabled, decimals, easing])

  return count
}
