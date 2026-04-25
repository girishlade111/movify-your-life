"use client"

import { ArrowRight, Instagram, Linkedin, Github, Mail, Globe } from "lucide-react"

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

      {/* Social Media Icons */}
      <div className="hidden lg:flex items-center gap-2 ml-4">
        <a
          href="https://www.instagram.com/girish_lade_/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 transition-all duration-200 group"
          aria-label="Follow us on Instagram"
        >
          <Instagram className="w-4 h-4 text-purple-600 group-hover:text-purple-700" />
        </a>
        <a
          href="https://www.linkedin.com/in/girish-lade-075bba201/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-all duration-200 group"
          aria-label="Connect on LinkedIn"
        >
          <Linkedin className="w-4 h-4 text-blue-600 group-hover:text-blue-700" />
        </a>
        <a
          href="https://github.com/girishlade111"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-all duration-200 group"
          aria-label="View on GitHub"
        >
          <Github className="w-4 h-4 text-slate-700 group-hover:text-slate-800" />
        </a>
        <a
          href="https://codepen.io/Girish-Lade-the-looper"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-white border border-slate-200 hover:bg-slate-50 transition-all duration-200 group"
          aria-label="View on CodePen"
        >
          <svg className="w-4 h-4 text-slate-700 group-hover:text-slate-800" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm0 2.4c5.283 0 9.6 4.317 9.6 9.6 0 5.283-4.317 9.6-9.6 9.6-5.283 0-9.6-4.317-9.6-9.6 0-5.283 4.317-9.6 9.6-9.6zm-3.6 4.8c-.48 0-.9.18-1.2.48l-3.6 6-3.6-6c-.3-.3-.72-.48-1.2-.48-.9 0-1.62.72-1.62 1.62 0 .9.72 1.62 1.62 1.62h7.2c.9 0 1.62-.72 1.62-1.62 0-.9-.72-1.62-1.62-1.62zm4.2 1.2c-.48 0-.9.18-1.2.48l-1.8 3.12-1.8-3.12c-.3-.3-.72-.48-1.2-.48-.9 0-1.62.72-1.62 1.62 0 .9.72 1.62 1.62 1.62h4.8c.9 0 1.62-.72 1.62-1.62 0-.9-.72-1.62-1.62-1.62zm4.2 0c-.48 0-.9.18-1.2.48l-1.8 3.12-1.8-3.12c-.3-.3-.72-.48-1.2-.48-.9 0-1.62.72-1.62 1.62 0 .9.72 1.62 1.62 1.62h4.8c.9 0 1.62-.72 1.62-1.62 0-.9-.72-1.62-1.62-1.62z"/>
          </svg>
        </a>
        <a
          href="mailto:admin@ladestack.in"
          className="p-2 rounded-full bg-green-100 hover:bg-green-200 transition-all duration-200 group"
          aria-label="Send us an email"
        >
          <Mail className="w-4 h-4 text-green-600 group-hover:text-green-700" />
        </a>
        <a
          href="https://ladestack.in"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 transition-all duration-200 group"
          aria-label="Visit our website"
        >
          <Globe className="w-4 h-4 text-purple-600 group-hover:text-purple-700" />
        </a>
      </div>
    </header>
  )
}
