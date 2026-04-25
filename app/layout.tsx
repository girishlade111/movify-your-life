import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://vercel.com/pijako9357-1154s-projects/v0-movify-your-life'),
  
  // Title Templates
  title: {
    default: 'Movify Your Life - Transform Your Story Into a Hollywood Movie Script',
    template: '%s | Movify Your Life'
  },

  // Description - Long Form
  description: 'Transform your life story into a professional Hollywood-style movie script. Our expert screenwriters craft compelling, cinematic narratives from your real-life experiences. Free until 27 July - no AI, just authentic storytelling.',

  // Keywords - Short Form
  keywords: [
    'movie script',
    'screenplay',
    'life story',
    'Hollywood script',
    'personal screenplay',
    'movie script writer',
    'life to movie',
    'cinematic story',
    'script writing service',
    'personal narrative screenplay'
  ].join(', '),

  // Author
  authors: [{ name: 'Movify Your Life' }],
  creator: 'Movify Your Life',
  publisher: 'Movify Your Life',

  // Open Graph - Social Media
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vercel.com/pijako9357-1154s-projects/v0-movify-your-life',
    siteName: 'Movify Your Life',
    title: 'Movify Your Life - Transform Your Story Into a Hollywood Movie Script',
    description: 'Transform your life story into a professional Hollywood-style movie script. Expert screenwriters craft compelling narratives from your real-life experiences.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Movify Your Life - Turn Your Life Into a Movie Script'
      }
    ]
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Movify Your Life - Transform Your Story Into a Hollywood Movie Script',
    description: 'Transform your life story into a professional Hollywood-style movie script. Free until 27 July!',
    images: ['/og-image.png'],
    creator: '@movifyourlife'
  },

  // Robots - Allow crawling
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },

  // Canonical URL
  alternates: {
    canonical: 'https://vercel.com/pijako9357-1154s-projects/v0-movify-your-life',
    languages: {
      'en': 'https://vercel.com/pijako9357-1154s-projects/v0-movify-your-life'
    }
  },

  // Category and classification
  category: 'entertainment',
  classification: 'Screenwriting Services',

  // Other SEO tags
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code'
  },

  // App links
  appLinks: {
    web: {
      url: 'https://www.script.movie/movify',
      should_fallback: true
    }
  },

  // Social Media Profiles
  metadata: {
    'instagram:creator': '@girish_lade_',
    'instagram:site': '@girish_lade_'
  }
}

// Social Links for JSON-LD
export const socialLinks = {
  instagram: 'https://www.instagram.com/girish_lade_/',
  linkedin: 'https://www.linkedin.com/in/girish-lade-075bba201/',
  github: 'https://github.com/girishlade111',
  codepen: 'https://codepen.io/Girish-Lade-the-looper',
  email: 'admin@ladestack.in',
  website: 'https://ladestack.in'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.script.movie" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://www.script.movie" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme Color */}
        <meta name="theme-color" content="#7c3aed" />
        <meta name="msapplication-TileColor" content="#7c3aed" />

        {/* Canonical */}
        <link rel="canonical" href="https://vercel.com/pijako9357-1154s-projects/v0-movify-your-life" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}