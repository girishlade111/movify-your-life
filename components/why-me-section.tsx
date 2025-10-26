"use client"

import { useState } from "react"
import ProgressiveLoader from "@/components/performance/progressive-loader"
import OptimizedImage from "@/components/performance/optimized-image"

export default function WhyMeSection() {
  const [feedback, setFeedback] = useState("")
  const [email, setEmail] = useState("")

  const handleSendFeedback = () => {
    const subject = encodeURIComponent("Feedback for Script.Movie")
    const body = encodeURIComponent(`Feedback: ${feedback}\n\nFrom: ${email}`)
    window.open(`mailto:feedback@script.movie?subject=${subject}&body=${body}`)
  }

  return (
    <section className="py-20 bg-white">
      {/* Why Me Section */}
      <ProgressiveLoader delay={2000}>
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

          {/* Image */}
          <div className="flex justify-center mb-12">
            <OptimizedImage
              src="/why-me-image.webp"
              alt="People asking questions about screenwriting"
              className="w-full max-w-4xl h-auto rounded-2xl shadow-lg"
              width={800}
              height={600}
            />
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-start gap-4">
              <span className="text-2xl font-bold text-purple-600 mt-1">→</span>
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#4a5568" }}>
                <strong>
                  Telling your story involves both self-expression (show others) and self-revelation (understand
                  myself).
                </strong>
                <br />
                Unlike social media, this isn't about views.
                <br />
                Script.Movie turns your moments into an ever-lasting impact.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl font-bold text-purple-600 mt-1">→</span>
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#4a5568" }}>
                <strong>From drama to comedy, heartbreak to healing, your life already has cinematic rhythm.</strong>
                <br />
                We just help you see it, shape it, and script it, the way pro filmmakers are used to do.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl font-bold text-purple-600 mt-1">→</span>
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#4a5568" }}>
                <strong>You don't need fame, you can do it just for your self.</strong>
                <br />
                We'll guide the structure. So that, you bring the story only you can tell.
              </p>
            </div>
          </div>
        </div>
      </ProgressiveLoader>

      {/* Feedback Section */}
      <ProgressiveLoader delay={2500}>
        <div className="max-w-4xl mx-auto px-8 mt-20">
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

            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: "#4a5568" }}>
                  Your Email (optional)
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="feedback" className="block text-sm font-medium mb-2" style={{ color: "#4a5568" }}>
                  Your Feedback
                </label>
                <textarea
                  id="feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Share your thoughts, suggestions, or questions..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors resize-none"
                />
              </div>

              <div className="text-center">
                <button
                  onClick={handleSendFeedback}
                  disabled={!feedback.trim()}
                  className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:transform hover:-translate-y-0.5"
                >
                  Send Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      </ProgressiveLoader>
    </section>
  )
}
