import * as React from 'react'

export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value)

  React.useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}

export function useDebouncedCallback<T extends (...args: unknown[]) => unknown>(
  callback: T,
  delay: number = 300
): T {
  const callbackRef = React.useRef(callback)
  const timerRef = React.useRef<ReturnType<typeof setTimeout>>()

  React.useLayoutEffect(() => {
    callbackRef.current = callback
  })

  return React.useCallback(
    ((...args) => {
      clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => callbackRef.current(...args), delay)
    }) as T,
    [delay]
  )
}
