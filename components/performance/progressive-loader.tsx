"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

interface ProgressiveLoaderProps {
  children: React.ReactNode
  delay?: number
  className?: string
  threshold?: number
}

export default function ProgressiveLoader({
  children,
  delay = 0,
  className = "",
  threshold = 0.1,
}: ProgressiveLoaderProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [shouldRender, setShouldRender] = useState(delay === 0)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => {
        setShouldRender(true)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [delay])

  useEffect(() => {
    if (!shouldRender) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: "50px" },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [shouldRender, threshold])

  if (!shouldRender) {
    return <div className={`h-32 ${className}`} /> // Placeholder to maintain layout
  }

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  )
}
