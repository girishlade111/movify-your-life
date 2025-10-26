"use client"

import React from "react"
import { Mail } from "lucide-react"
import MemoizedProgressiveLoader from "@/components/performance/memoized-progressive-loader"
import MemoizedOptimizedImage from "@/components/performance/memoized-optimized-image"

// Memoized content item component
const ContentItem = React.memo(function ContentItem({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="text-2xl font-bold text-purple-600 mt-1">→</span>
      <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#4a5568" }}>
        {children}
      </p>
    </div>
  )
})

// Memoized email button component
const EmailButton = React.memo(function EmailButton() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-slate-200">
      <h3
        className="text-2xl md:text-3xl font-bold text-center mb-6"
        style={{
          fontFamily: "Denton Test, serif",
          color: "#2d3748",
        }}
      >
        Tell us what you think
      </h3>

      <div className="text-center">
        <a
          href="mailto:info@watzen.ai"
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 mx-auto transition-all duration-300 shadow-lg hover:shadow-xl hover:transform hover:-translate-y-0.5 w-fit focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          <Mail className="w-5 h-5" />
          Send us your feedback
        </a>
      </div>
    </div>
  )
})

// Main memoized component
const OptimizedWhyMeSection = React.memo(function OptimizedWhyMeSection() {
  return (
    <section className="py-20 bg-white">
      <MemoizedProgressiveLoader delay={2000}>
        <div className="max-w-6xl mx-auto px-8">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12"
            style={{
              fontFamily: "Denton Test, serif",
              color: "#2d3748",
              textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
            }}
          >
            Why me ?
          </h2>

          <div className="flex justify-center mb-12">
            <MemoizedOptimizedImage
              src="/why-me-image.webp"
              alt="People asking questions about screenwriting"
              className="w-full max-w-4xl h-auto rounded-2xl shadow-lg"
              width={800}
              height={600}
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <ContentItem>
              <strong>
                Telling your story involves both self-expression (show others) and self-revelation (understand myself).
              </strong>
              <br />
              Unlike social media, this isn't about views.
              <br />
              Script.Movie turns your moments into an ever-lasting impact.
            </ContentItem>

            <ContentItem>
              <strong>From drama to comedy, heartbreak to healing, your life already has cinematic rhythm.</strong>
              <br />
              We just help you see it, shape it, and script it, the way pro filmmakers are used to do.
            </ContentItem>

            <ContentItem>
              <strong>You don't need fame, you can do it just for your self.</strong>
              <br />
              We'll guide the structure. So that, you bring the story only you can tell.
            </ContentItem>
          </div>
        </div>
      </MemoizedProgressiveLoader>

      {/* Email Button Section - Replaces the feedback form */}
      <MemoizedProgressiveLoader delay={2500}>
        <div className="max-w-4xl mx-auto px-8 mt-20">
          <EmailButton />
        </div>
      </MemoizedProgressiveLoader>
    </section>
  )
})

export default OptimizedWhyMeSection
