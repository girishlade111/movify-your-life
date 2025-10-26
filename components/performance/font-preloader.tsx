"use client"

import { useEffect } from "react"

export default function FontPreloader() {
  useEffect(() => {
    // Preload critical fonts
    const preloadFont = (href: string, as = "font") => {
      const link = document.createElement("link")
      link.rel = "preload"
      link.href = href
      link.as = as
      link.type = "font/woff2"
      link.crossOrigin = "anonymous"
      document.head.appendChild(link)
    }

    // Preload Denton Test font if available
    if (typeof window !== "undefined") {
      preloadFont("/fonts/denton-test.woff2")
    }
  }, [])

  return null
}
