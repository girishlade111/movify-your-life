"use client"

import React from "react"
import { Instagram, Linkedin, Github, Mail, Globe, ArrowRight, Film } from "lucide-react"

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/girish_lade_/",
    icon: Instagram,
    color: "bg-pink-100 hover:bg-pink-200",
    iconColor: "text-pink-600"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/girish-lade-075bba201/",
    icon: Linkedin,
    color: "bg-blue-100 hover:bg-blue-200",
    iconColor: "text-blue-600"
  },
  {
    name: "GitHub",
    url: "https://github.com/girishlade111",
    icon: Github,
    color: "bg-slate-100 hover:bg-slate-200",
    iconColor: "text-slate-700"
  },
  {
    name: "CodePen",
    url: "https://codepen.io/Girish-Lade-the-looper",
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm0 2.4c5.283 0 9.6 4.317 9.6 9.6 0 5.283-4.317 9.6-9.6 9.6-5.283 0-9.6-4.317-9.6-9.6 0-5.283 4.317-9.6 9.6-9.6zm-3.6 4.8c-.48 0-.9.18-1.2.48l-3.6 6-3.6-6c-.3-.3-.72-.48-1.2-.48-.9 0-1.62.72-1.62 1.62 0 .9.72 1.62 1.62 1.62h7.2c.9 0 1.62-.72 1.62-1.62 0-.9-.72-1.62-1.62-1.62zm4.2 1.2c-.48 0-.9.18-1.2.48l-1.8 3.12-1.8-3.12c-.3-.3-.72-.48-1.2-.48-.9 0-1.62.72-1.62 1.62 0 .9.72 1.62 1.62 1.62h4.8c.9 0 1.62-.72 1.62-1.62 0-.9-.72-1.62-1.62-1.62zm4.2 0c-.48 0-.9.18-1.2.48l-1.8 3.12-1.8-3.12c-.3-.3-.72-.48-1.2-.48-.9 0-1.62.72-1.62 1.62 0 .9.72 1.62 1.62 1.62h4.8c.9 0 1.62-.72 1.62-1.62 0-.9-.72-1.62-1.62-1.62z" />
      </svg>
    ),
    color: "bg-white border border-slate-200 hover:bg-slate-50",
    iconColor: "text-slate-700"
  },
  {
    name: "Email",
    url: "mailto:admin@ladestack.in",
    icon: Mail,
    color: "bg-green-100 hover:bg-green-200",
    iconColor: "text-green-600"
  },
  {
    name: "Website",
    url: "https://ladestack.in",
    icon: Globe,
    color: "bg-purple-100 hover:bg-purple-200",
    iconColor: "text-purple-600"
  }
]

const footerLinks = {
  product: [
    { name: "Screenwriting", url: "#" },
    { name: "Collections", url: "#" },
    { name: "Pricing", url: "#" },
    { name: "Testimonials", url: "#" }
  ],
  company: [
    { name: "About Us", url: "#" },
    { name: "Blog", url: "#" },
    { name: "Careers", url: "#" },
    { name: "Contact", url: "mailto:admin@ladestack.in" }
  ],
  legal: [
    { name: "Privacy Policy", url: "#" },
    { name: "Terms of Service", url: "#" },
    { name: "Cookie Policy", url: "#" }
  ]
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <a href="https://www.script.movie" className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-purple-600 rounded-lg">
                <Film className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-800" style={{ fontFamily: "Denton Test, serif" }}>
                Script.Movie
              </span>
            </a>
            <p className="text-slate-600 mb-6 max-w-sm leading-relaxed">
              Transform your life story into a professional Hollywood-style movie script. 
              Expert screenwriters craft compelling cinematic narratives from your real-life experiences.
            </p>
            
            {/* CTA Button */}
            <a
              href="https://www.script.movie/movify"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-full font-medium transition-all duration-200 shadow-md hover:shadow-lg hover:transform hover:-translate-y-0.5"
            >
              Movify My Life
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-slate-800 mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-slate-600 hover:text-purple-600 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-slate-800 mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-slate-600 hover:text-purple-600 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-slate-800 mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-slate-600 hover:text-purple-600 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-600">Follow us:</span>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-full ${social.color} transition-all duration-200 group`}
                    aria-label={`Visit our ${social.name}`}
                  >
                    {typeof social.icon === "function" ? (
                      <social.icon />
                    ) : (
                      <social.icon className={`w-5 h-5 ${social.iconColor}`} />
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-slate-500">
              <span>&copy; {new Date().getFullYear()} Movify Your Life. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span>Built with ❤️ by <a href="https://ladestack.in" className="text-purple-600 hover:underline">LadeStack</a></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}