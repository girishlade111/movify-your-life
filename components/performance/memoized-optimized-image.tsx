"use client"

import React, { useState, useCallback, useMemo } from "react"
import OptimizedIntersectionObserver from "./optimized-intersection-observer"

interface MemoizedOptimizedImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  width?: number
  height?: number
  onLoad?: () => void
}

// Memoized image component
const MemoizedOptimizedImage = React.memo(function MemoizedOptimizedImage({
  src,
  alt,
  className = "",
  priority = false,
  width,
  height,
  onLoad,
}: MemoizedOptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(priority)
  const [error, setError] = useState(false)

  // Memoized callbacks
  const handleIntersect = useCallback(() => {
    if (!shouldLoad) {
      setShouldLoad(true)
    }
  }, [shouldLoad])

  const handleLoad = useCallback(() => {
    requestAnimationFrame(() => {
      setIsLoaded(true)
      onLoad?.()
    })
  }, [onLoad])

  const handleError = useCallback(() => {
    setError(true)
  }, [])

  // Memoized image props to prevent object recreation
  const imageProps = useMemo(
    () => ({
      src: src || "/placeholder.svg",
      alt,
      width,
      height,
      loading: priority ? ("eager" as const) : ("lazy" as const),
      decoding: "async" as const,
      onLoad: handleLoad,
      onError: handleError,
    }),
    [src, alt, width, height, priority, handleLoad, handleError],
  )

  // Memoized classes
  const imageClasses = useMemo(
    () => `transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"} ${className}`,
    [isLoaded, className],
  )

  if (priority || shouldLoad) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        {shouldLoad && !error && (
          <>
            {!isLoaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse rounded" />
            )}
            <img {...imageProps} className={imageClasses} />
          </>
        )}
        {error && (
          <div className="flex items-center justify-center bg-slate-100 text-slate-500 text-sm p-4 rounded">
            Failed to load image
          </div>
        )}
      </div>
    )
  }

  return (
    <OptimizedIntersectionObserver onIntersect={handleIntersect} threshold={0.1} rootMargin="100px">
      <div className={`relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse rounded" />
      </div>
    </OptimizedIntersectionObserver>
  )
})

export default MemoizedOptimizedImage
