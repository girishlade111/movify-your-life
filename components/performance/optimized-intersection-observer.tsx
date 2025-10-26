"use client"

import type React from "react"

import { useEffect, useRef, useCallback } from "react"

interface OptimizedIntersectionObserverProps {
  onIntersect: () => void
  threshold?: number
  rootMargin?: string
  once?: boolean
  children: React.ReactNode
}

// Memoized component to prevent unnecessary re-renders
export default function OptimizedIntersectionObserver({
  onIntersect,
  threshold = 0.1,
  rootMargin = "50px",
  once = true,
  children,
}: OptimizedIntersectionObserverProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const hasIntersectedRef = useRef(false)

  // Memoized callback to prevent recreation
  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && (!once || !hasIntersectedRef.current)) {
          hasIntersectedRef.current = true

          // Use requestIdleCallback to avoid blocking main thread
          if ("requestIdleCallback" in window) {
            requestIdleCallback(() => onIntersect())
          } else {
            // Fallback for browsers without requestIdleCallback
            setTimeout(() => onIntersect(), 0)
          }

          if (once && observerRef.current) {
            observerRef.current.unobserve(entry.target)
          }
        }
      })
    },
    [onIntersect, once],
  )

  useEffect(() => {
    if (!elementRef.current) return

    // Reuse observer instance when possible
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(handleIntersect, {
        threshold,
        rootMargin,
      })
    }

    observerRef.current.observe(elementRef.current)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [handleIntersect, threshold, rootMargin])

  return <div ref={elementRef}>{children}</div>
}
