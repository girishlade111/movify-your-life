import ProgressiveLoader from "@/components/performance/progressive-loader"
import OptimizedImage from "@/components/performance/optimized-image"

export default function WhoSection() {
  return (
    <ProgressiveLoader delay={1200} className="relative py-20 bg-white">
      <section>
        {/* Soothing gradient background section */}
        <div className="bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50 py-16 relative">
          {/* Logo container - positioned to be half outside, half inside */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <div className="bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50 rounded-3xl p-6 shadow-lg">
              <div className="bg-white rounded-2xl px-8 py-4 flex items-center justify-center shadow-md border border-slate-200">
                <OptimizedImage src="/script-movie-logo.png" alt="Script.Movie" className="h-8 w-auto" />
              </div>
            </div>
          </div>

          {/* Content */}
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
              <div className="flex items-start gap-6 group">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mt-1 shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <div>
                  <h3
                    className="text-xl md:text-2xl font-semibold mb-2"
                    style={{ color: "#2d3748", fontFamily: "Denton Test, serif" }}
                  >
                    Discover Your Story
                  </h3>
                  <p className="text-lg md:text-xl font-medium" style={{ color: "#4a5568" }}>
                    Uncover the compelling narratives hidden within your life experiences
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mt-1 shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <div>
                  <h3
                    className="text-xl md:text-2xl font-semibold mb-2"
                    style={{ color: "#2d3748", fontFamily: "Denton Test, serif" }}
                  >
                    Structure Your Screenplay
                  </h3>
                  <p className="text-lg md:text-xl font-medium" style={{ color: "#4a5568" }}>
                    Learn professional formatting and storytelling techniques from industry experts
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center mt-1 shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <div>
                  <h3
                    className="text-xl md:text-2xl font-semibold mb-2"
                    style={{ color: "#2d3748", fontFamily: "Denton Test, serif" }}
                  >
                    Craft Your Masterpiece
                  </h3>
                  <p className="text-lg md:text-xl font-medium" style={{ color: "#4a5568" }}>
                    Transform your personal journey into a compelling, market-ready script
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mt-1 shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <div>
                  <h3
                    className="text-xl md:text-2xl font-semibold mb-2"
                    style={{ color: "#2d3748", fontFamily: "Denton Test, serif" }}
                  >
                    Share Your Vision
                  </h3>
                  <p className="text-lg md:text-xl font-medium" style={{ color: "#4a5568" }}>
                    Present your finished screenplay to producers, festivals, or your audience
                  </p>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="text-center mt-12">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center gap-3 mx-auto transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 hover:transform hover:-translate-y-0.5 relative overflow-hidden group">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
                Movify my life now
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </ProgressiveLoader>
  )
}
