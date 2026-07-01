import * as React from 'react'

type UseIntersectionObserverOptions = {
  threshold?: number | number[]
  rootMargin?: string
  root?: Element | null
  once?: boolean
  enabled?: boolean
}

export function useIntersectionObserver<T extends Element>(
  options: UseIntersectionObserverOptions = {}
): [React.RefObject<T | null>, boolean] {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    root = null,
    once = true,
    enabled = true,
  } = options

  const ref = React.useRef<T | null>(null)
  const [isIntersecting, setIsIntersecting] = React.useState(false)
  const hasIntersected = React.useRef(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el || !enabled || (once && hasIntersected.current)) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          hasIntersected.current = true
          if (once) observer.disconnect()
        } else if (!once) {
          setIsIntersecting(false)
        }
      },
      { threshold, rootMargin, root }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, root, once, enabled])

  return [ref, isIntersecting]
}
