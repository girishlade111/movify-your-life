"use client"

import { ArrowRight } from "lucide-react"

export default function CriticalHeader() {
  return (
    <header className="relative z-10 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto">
      {/* Logo - Critical, loads immediately and links to main site */}
      <a href="https://www.script.movie" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <img src="/script-movie-logo.png" alt="Script.Movie" className="h-8 w-auto" loading="eager" decoding="sync" />
      </a>

      {/* Navigation - Optimized for fast render */}
      <nav className="hidden md:flex items-center gap-6 bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 shadow-sm border border-slate-200">
        <a
          href="#"
          className="font-medium text-sm transition-colors duration-200 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-md px-2 py-1"
          style={{ fontFamily: "Denton Test, serif", color: "#565656" }}
        >
          Screenwriting
        </a>
        <a
          href="#"
          className="font-medium text-sm transition-colors duration-200 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-md px-2 py-1"
          style={{ fontFamily: "Denton Test, serif", color: "#565656" }}
        >
          Collections
        </a>
        <button
          className="font-medium text-sm transition-colors duration-200 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-md px-2 py-1"
          style={{ fontFamily: "Denton Test, serif", color: "#565656" }}
        >
          Testimonial
        </button>
      </nav>

      {/* Mobile menu button */}
      <button className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
        <div className="w-5 h-5 flex flex-col justify-center items-center">
          <span className="block w-5 h-0.5 bg-slate-600 mb-1"></span>
          <span className="block w-5 h-0.5 bg-slate-600 mb-1"></span>
          <span className="block w-5 h-0.5 bg-slate-600"></span>
        </div>
      </button>

      {/* Login Button */}
      <a
        href="https://app.script.movie"
        className="hidden md:flex bg-white hover:bg-slate-50 px-4 py-2 rounded-full font-medium items-center gap-2 transition-all duration-200 border border-slate-300 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 hover:transform hover:-translate-y-0.5 hover:shadow-lg"
        style={{ fontFamily: "Denton Test, serif", color: "#565656" }}
      >
        Login
        <ArrowRight className="w-3 h-3" style={{ color: "#565656" }} />
      </a>
    </header>
  )
}
