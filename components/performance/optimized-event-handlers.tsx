"use client"

import { useCallback, useMemo } from "react"

// Debounce utility for expensive operations
export function useDebounce<T extends (...args: any[]) => any>(callback: T, delay: number): T {
  const debouncedCallback = useMemo(() => {
    let timeoutId: NodeJS.Timeout
    return ((...args: Parameters<T>) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => callback(...args), delay)
    }) as T
  }, [callback, delay])

  return debouncedCallback
}

// Throttle utility for frequent events
export function useThrottle<T extends (...args: any[]) => any>(callback: T, delay: number): T {
  const throttledCallback = useMemo(() => {
    let lastCall = 0
    return ((...args: Parameters<T>) => {
      const now = Date.now()
      if (now - lastCall >= delay) {
        lastCall = now
        callback(...args)
      }
    }) as T
  }, [callback, delay])

  return throttledCallback
}

// Optimized scroll handler
export function useOptimizedScrollHandler(callback: () => void) {
  return useCallback(() => {
    if ("requestIdleCallback" in window) {
      requestIdleCallback(callback)
    } else {
      requestAnimationFrame(callback)
    }
  }, [callback])
}
