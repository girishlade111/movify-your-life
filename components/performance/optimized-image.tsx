"use client"

import { useState, useRef, useEffect } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  width?: number
  height?: number
  onLoad?: () => void
}

export default function OptimizedImage({
  src,
  alt,
  className = "",
  priority = false,
  width,
  height,
  onLoad,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(priority)
  const [error, setError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (priority || shouldLoad) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: "100px" },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [priority, shouldLoad])

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setError(true)
  }

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {shouldLoad && !error && (
        <>
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse rounded" />
          )}
          <img
            ref={imgRef}
            src={src || "/placeholder.svg"}
            alt={alt}
            width={width}
            height={height}
            className={`transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"} ${className}`}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
          />
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
