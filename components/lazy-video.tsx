"use client"

import { useState, useEffect, useRef } from "react"

interface LazyVideoProps {
  priority?: boolean
}

export default function LazyVideo({ priority = false }: LazyVideoProps) {
  const [shouldLoad, setShouldLoad] = useState(priority)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const videoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (priority) {
      setShouldLoad(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoad) {
            setIsInView(true)
            // Delay loading slightly to prioritize above-the-fold content
            setTimeout(() => setShouldLoad(true), 100)
          }
        })
      },
      { threshold: 0.1, rootMargin: "200px" },
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => observer.disconnect()
  }, [shouldLoad, priority])

  return (
    <div
      ref={videoRef}
      className="w-full bg-black flex items-center justify-center relative"
      style={{
        aspectRatio: "16/9",
        borderRadius: "8px",
      }}
    >
      {shouldLoad ? (
        <>
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 flex items-center justify-center rounded-lg animate-pulse">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-white font-medium">Loading video...</p>
              </div>
            </div>
          )}
          <iframe
            src="https://youtube.com/embed/3UMvJ7FFPNA?autoplay=1&loop=1&playlist=3UMvJ7FFPNA&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
            title="Adventure Video Preview"
            className={`w-full h-full rounded-lg transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
          />
        </>
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mb-4">
              <div className="w-6 h-6 border-l-4 border-l-slate-400 rounded-full"></div>
            </div>
            <p className="text-slate-400 font-medium">Video will load when visible</p>
          </div>
        </div>
      )}
    </div>
  )
}
