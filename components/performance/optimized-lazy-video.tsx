"use client"

import React, { useState, useCallback, useMemo } from "react"
import OptimizedIntersectionObserver from "./optimized-intersection-observer"

interface OptimizedLazyVideoProps {
  priority?: boolean
}

// Memoized video component
const OptimizedLazyVideo = React.memo(function OptimizedLazyVideo({ priority = false }: OptimizedLazyVideoProps) {
  const [shouldLoad, setShouldLoad] = useState(priority)
  const [isLoaded, setIsLoaded] = useState(false)

  // Memoized callbacks to prevent recreation
  const handleIntersect = useCallback(() => {
    if (!shouldLoad) {
      // Delay video loading to prioritize other content
      requestIdleCallback(
        () => {
          setShouldLoad(true)
        },
        { timeout: 1000 },
      )
    }
  }, [shouldLoad])

  const handleVideoLoad = useCallback(() => {
    requestAnimationFrame(() => {
      setIsLoaded(true)
    })
  }, [])

  // Memoized iframe props to prevent object recreation
  const iframeProps = useMemo(
    () => ({
      src: "https://youtube.com/embed/3UMvJ7FFPNA?autoplay=1&loop=1&playlist=3UMvJ7FFPNA&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1",
      title: "Adventure Video Preview",
      frameBorder: "0" as const,
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      allowFullScreen: true,
      loading: "lazy" as const,
    }),
    [],
  )

  // Memoized styles
  const containerStyle = useMemo(
    () => ({
      aspectRatio: "16/9",
      borderRadius: "8px",
    }),
    [],
  )

  const iframeClasses = useMemo(
    () => `w-full h-full rounded-lg transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`,
    [isLoaded],
  )

  if (!shouldLoad) {
    return (
      <OptimizedIntersectionObserver onIntersect={handleIntersect} threshold={0.1} rootMargin="200px">
        <div
          className="w-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center"
          style={containerStyle}
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mb-4">
              <div className="w-6 h-6 border-l-4 border-l-slate-400 rounded-full"></div>
            </div>
            <p className="text-slate-400 font-medium">Video will load when visible</p>
          </div>
        </div>
      </OptimizedIntersectionObserver>
    )
  }

  return (
    <div className="w-full bg-black flex items-center justify-center relative" style={containerStyle}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 flex items-center justify-center rounded-lg">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white font-medium">Loading video...</p>
          </div>
        </div>
      )}
      <iframe {...iframeProps} className={iframeClasses} onLoad={handleVideoLoad} />
    </div>
  )
})

export default OptimizedLazyVideo
