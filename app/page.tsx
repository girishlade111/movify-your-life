"use client"

import React, { Suspense, useState, useEffect, useCallback } from "react"
import { ArrowRight } from "lucide-react"

// Dynamic imports for code splitting
const OptimizedLazyVideo = React.lazy(() => import("@/components/performance/optimized-lazy-video"))
const OptimizedWhoSection = React.lazy(() => import("@/components/optimized-who-section"))
const OptimizedWhyMeSection = React.lazy(() => import("@/components/optimized-why-me-section"))

// Static imports for critical components
import FontPreloader from "@/components/performance/font-preloader"
import CriticalHeader from "@/components/performance/critical-header"
import HeroSkeleton from "@/components/performance/hero-skeleton"
import MemoizedProgressiveLoader from "@/components/performance/memoized-progressive-loader"
import WebWorkerManager from "@/components/performance/web-worker-manager"

// Memoized hero content component
const HeroContent = React.memo(function HeroContent() {
  return (
    <div className="max-w-5xl mx-auto mb-8 sm:mb-12 animate-fade-in">
      <h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight"
        style={{
          fontFamily: "Denton Test, serif",
          color: "#2d3748",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
        }}
      >
        Write Your Life As a Movie Script
      </h1>

      <MemoizedProgressiveLoader delay={200}>
        <div
          className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed space-y-3"
          style={{ color: "#4a5568" }}
        >
          <p className="text-base sm:text-lg">
            Experience the journey of building a cinematic version of your life's story.
          </p>
          <p className="text-base sm:text-lg">Deliver a polished screenplay, like top Hollywood writers.</p>
          <p className="text-base sm:text-lg">
            <span className="font-semibold text-purple-700 bg-purple-50 px-3 py-1 rounded-full animate-pulse">
              Free until 27 July. NO A.I.
            </span>
          </p>
        </div>
      </MemoizedProgressiveLoader>

      {/* CTA Button - Updated to link to movify page */}
      <MemoizedProgressiveLoader delay={400}>
        <a
          href="https://www.script.movie/movify"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center gap-3 mx-auto transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base mb-8 sm:mb-12 w-fit focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 hover:transform hover:-translate-y-0.5 relative overflow-hidden group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
          Movify my life now
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <ArrowRight className="w-3 h-3 text-white" />
          </div>
        </a>
      </MemoizedProgressiveLoader>

      <MemoizedProgressiveLoader delay={600}>
        <div className="w-full">
          <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-slate-200">
            <Suspense
              fallback={
                <div
                  className="w-full bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse rounded-xl flex items-center justify-center"
                  style={{ aspectRatio: "16/9", minHeight: "300px" }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-slate-600 font-medium">Loading video player...</p>
                  </div>
                </div>
              }
            >
              <OptimizedLazyVideo />
            </Suspense>
          </div>
        </div>
      </MemoizedProgressiveLoader>
    </div>
  )
})

// Main optimized component
export default function Home() {
  const [isHeroLoaded, setIsHeroLoaded] = useState(false)

  // Memoized callback to prevent recreation
  const handleHeroLoad = useCallback(() => {
    if ("requestAnimationFrame" in window) {
      requestAnimationFrame(() => {
        setIsHeroLoaded(true)
      })
    } else {
      setIsHeroLoaded(true)
    }
  }, [])

  // Optimized effect with minimal dependencies
  useEffect(() => {
    const timer = setTimeout(handleHeroLoad, 100)
    return () => clearTimeout(timer)
  }, [handleHeroLoad])

  // Memoized worker ready handler
  const handleWorkerReady = useCallback(() => {
    // Background tasks that don't block main thread
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => {
        console.log("Web Worker ready for background tasks")
      })
    }
  }, [])

  // JSON-LD Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Movify Your Life",
    "description": "Transform your life story into a professional Hollywood-style movie script. Expert screenwriters craft compelling narratives from your real-life experiences.",
    "url": "https://vercel.com/pijako9357-1154s-projects/v0-movify-your-life",
    "provider": {
      "@type": "Organization",
      "name": "Movify Your Life",
      "url": "https://www.script.movie"
    },
    "areaServed": "Worldwide",
    "serviceType": "Screenwriting Services",
    "offer": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validUntil": "2026-07-27"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "100"
    },
    "sameAs": [
      "https://www.script.movie/movify"
    ]
  }

  return (
    <>
      {/* JSON-LD for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Movify Your Life",
          "url": "https://www.script.movie",
          "logo": "https://vercel.com/pijako9357-1154s-projects/v0-movify-your-life/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-000-000-0000",
            "contactType": "Customer Service"
          },
          "sameAs": [
            "https://www.script.movie/movify"
          ]
        }) }}
      />

      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Movify Your Life",
          "url": "https://vercel.com/pijako9357-1154s-projects/v0-movify-your-life",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://vercel.com/pijako9357-1154s-projects/v0-movify-your-life?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }) }}
      />

      <FontPreloader />
      <WebWorkerManager onReady={handleWorkerReady} />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
        <MemoizedProgressiveLoader delay={500}>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="font-bold text-slate-100 select-none tracking-wider"
              style={{ fontSize: "clamp(6rem, 15vw, 20rem)", opacity: 0.03 }}
            >
              Script.Movie
            </div>
          </div>
        </MemoizedProgressiveLoader>

        <CriticalHeader />

        <main className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 pb-8">
          {!isHeroLoaded ? <HeroSkeleton /> : <HeroContent />}
        </main>

        <Suspense
          fallback={<div className="h-96 bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 animate-pulse" />}
        >
          <OptimizedWhoSection />
        </Suspense>

        <Suspense
          fallback={<div className="h-96 bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 animate-pulse" />}
        >
          <OptimizedWhyMeSection />
        </Suspense>
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        @font-face {
          font-family: 'Denton Test';
          font-display: swap;
        }
      `}</style>
    </>
  )
}
