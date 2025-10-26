"use client"

import React, { useState, useCallback, useMemo } from "react"
import OptimizedIntersectionObserver from "./optimized-intersection-observer"

interface MemoizedProgressiveLoaderProps {
  children: React.ReactNode
  delay?: number
  className?: string
  threshold?: number
}

// Memoized component to prevent unnecessary re-renders
const MemoizedProgressiveLoader = React.memo(function MemoizedProgressiveLoader({
  children,
  delay = 0,
  className = "",
  threshold = 0.1,
}: MemoizedProgressiveLoaderProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [shouldRender, setShouldRender] = useState(delay === 0)

  // Memoized callback to prevent recreation
  const handleIntersect = useCallback(() => {
    if (delay > 0 && !shouldRender) {
      // Use setTimeout with minimal delay to avoid blocking
      setTimeout(() => setShouldRender(true), Math.min(delay, 100))
    } else {
      setIsVisible(true)
    }
  }, [delay, shouldRender])

  // Memoized delayed visibility handler
  const handleDelayedVisibility = useCallback(() => {
    if (shouldRender) {
      setIsVisible(true)
    }
  }, [shouldRender])

  // Use effect only when necessary
  React.useEffect(() => {
    if (shouldRender && !isVisible) {
      // Use requestAnimationFrame for smooth animations
      requestAnimationFrame(() => {
        handleDelayedVisibility()
      })
    }
  }, [shouldRender, isVisible, handleDelayedVisibility])

  // Memoized class names to prevent string concatenation on every render
  const containerClasses = useMemo(() => {
    return `transition-all duration-700 ease-out ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    } ${className}`
  }, [isVisible, className])

  if (!shouldRender && delay > 0) {
    return (
      <OptimizedIntersectionObserver onIntersect={handleIntersect} threshold={threshold}>
        <div className={`h-32 ${className}`} />
      </OptimizedIntersectionObserver>
    )
  }

  return (
    <OptimizedIntersectionObserver onIntersect={handleDelayedVisibility} threshold={threshold}>
      <div className={containerClasses}>{children}</div>
    </OptimizedIntersectionObserver>
  )
})

export default MemoizedProgressiveLoader
