import React from "react"
import MemoizedProgressiveLoader from "@/components/performance/memoized-progressive-loader"
import MemoizedOptimizedImage from "@/components/performance/memoized-optimized-image"

// Memoized step component to prevent unnecessary re-renders
const StepItem = React.memo(function StepItem({
  number,
  title,
  description,
  gradient,
}: {
  number: string
  title: string
  description: string
  gradient: string
}) {
  return (
    <div className="flex items-start gap-6 group">
      <div
        className={`flex-shrink-0 w-10 h-10 ${gradient} rounded-full flex items-center justify-center mt-1 shadow-lg group-hover:scale-110 transition-transform duration-200`}
      >
        <span className="text-white font-bold text-lg">{number}</span>
      </div>
      <div>
        <h3
          className="text-xl md:text-2xl font-semibold mb-2"
          style={{ color: "#2d3748", fontFamily: "Denton Test, serif" }}
        >
          {title}
        </h3>
        <p className="text-lg md:text-xl font-medium" style={{ color: "#4a5568" }}>
          {description}
        </p>
      </div>
    </div>
  )
})

// Memoized main component
const OptimizedWhoSection = React.memo(function OptimizedWhoSection() {
  return (
    <MemoizedProgressiveLoader delay={1200} className="relative py-20 bg-white">
      <section>
        <div className="bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50 py-16 relative">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <div className="bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50 rounded-3xl p-6 shadow-lg">
              <div className="bg-white rounded-2xl px-8 py-4 flex items-center justify-center shadow-md border border-slate-200">
                <a href="https://www.script.movie" className="hover:opacity-80 transition-opacity">
                  <MemoizedOptimizedImage src="/script-movie-logo.png" alt="Script.Movie" className="h-8 w-auto" />
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-8 pt-16">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16"
              style={{
                fontFamily: "Denton Test, serif",
                color: "#2d3748",
                textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
              }}
            >
              Your Screenwriting Journey
            </h2>

            <div className="space-y-8">
              <StepItem
                number="1"
                title="Discover Your Story"
                description="Uncover the compelling narratives hidden within your life experiences"
                gradient="bg-gradient-to-br from-blue-500 to-purple-600"
              />
              <StepItem
                number="2"
                title="Structure Your Screenplay"
                description="Learn professional formatting and storytelling techniques from industry experts"
                gradient="bg-gradient-to-br from-purple-500 to-pink-600"
              />
              <StepItem
                number="3"
                title="Craft Your Masterpiece"
                description="Transform your personal journey into a compelling, market-ready script"
                gradient="bg-gradient-to-br from-pink-500 to-red-500"
              />
              <StepItem
                number="4"
                title="Share Your Vision"
                description="Present your finished screenplay to producers, festivals, or your audience"
                gradient="bg-gradient-to-br from-green-500 to-teal-600"
              />
            </div>

            {/* Call to action - Updated to link to movify page */}
            <div className="text-center mt-12">
              <a
                href="https://www.script.movie/movify"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center gap-3 mx-auto transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 hover:transform hover:-translate-y-0.5 relative overflow-hidden group w-fit"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
                Movify my life now
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </MemoizedProgressiveLoader>
  )
})

export default OptimizedWhoSection
