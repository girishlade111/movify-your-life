# Movify Your Life

> **Transform your life story into a cinematic screenplay**

A high-performance marketing landing page for the "Movify Your Life" service - transforming personal life stories into professional Hollywood-style movie scripts.

---

## Overview

Movify Your Life is a Next.js 15 application that serves as the landing page for a unique service that helps individuals transform their life experiences into compelling movie screenplays. The website features a modern, cinematic design with advanced performance optimizations and a seamless user experience.

---

## Key Features

### Core Functionality
- **Hero Section** - Animated headline "Write Your Life As a Movie Script" with progressive content loading
- **Promotional Video** - Lazy-loaded cinematic video showcase
- **Who Is This For?** - Target audience section highlighting who can benefit from the service
- **Why Choose Us?** - Benefits and value proposition section with compelling reasons to choose Movify
- **Call-to-Action** - Prominent "Movify my life now" button linking to the main service

### Performance Optimizations
- **Web Workers** - Background task processing without blocking main thread
- **Font Preloading** - Critical font assets preloaded for faster rendering
- **Skeleton Loading** - Placeholder UI during content loading
- **Progressive Loading** - Staggered content reveal with memoized loaders
- **Lazy Video Loading** - Video content loaded only when in viewport
- **Code Splitting** - Dynamic imports for non-critical components
- **React.memo & useCallback** - Optimized re-renders and callback preservation
- **RequestIdleCallback** - Non-blocking background operations

### Design & UX
- **Responsive Design** - Mobile-first approach with breakpoints for all devices
- **Animated Transitions** - Smooth fade-in animations and hover effects
- **Gradient Backgrounds** - Professional slate/white gradient theme
- **Custom Typography** - Denton Test font for cinematic feel
- **Accessibility Focus** - ARIA labels and keyboard navigation support

---

## Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | ^19 | UI Library |
| **Next.js** | 15.2.4 | React Framework |
| **TypeScript** | ^5 | Type Safety |
| **Tailwind CSS** | ^4.1.9 | Utility-first CSS |
| **Radix UI** | Latest | Accessible Components |

### UI Components & Libraries
- **Lucide React** - Icon library
- **Recharts** - Data visualization (if needed)
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Next Themes** - Dark mode support
- **Vaul** - Drawer component
- **Embla Carousel** - Touch slider
- **Sonner** - Toast notifications

### Developer Tools
- **PostCSS** - CSS processing
- **ESLint** - Code linting
- **Vercel Analytics** - Performance tracking

---

## Project Structure

```
movify-your-life/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with fonts & analytics
│   └── page.tsx             # Main landing page
├── components/              # React components
│   ├── performance/         # Performance-optimized components
│   │   ├── font-preloader.tsx
│   │   ├── critical-header.tsx
│   │   ├── hero-skeleton.tsx
│   │   ├── web-worker-manager.tsx
│   │   ├── optimized-lazy-video.tsx
│   │   ├── memoized-progressive-loader.tsx
│   │   └── ...
│   ├── optimized-who-section.tsx
│   ├── optimized-why-me-section.tsx
│   ├── who-section.tsx
│   ├── why-me-section.tsx
│   └── theme-provider.tsx
├── public/                  # Static assets
│   ├── images/             # PNG, JPG, WebP images
│   └── icons/              # SVG icons
├── lib/                    # Utility functions
│   └── utils.ts           # Helper utilities
├── styles/                # Global styles
│   └── globals.css        # Global CSS
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── next.config.mjs        # Next.js config
├── postcss.config.mjs     # PostCSS config
└── README.md             # This file
```

---

## Getting Started

### Prerequisites

- **Node.js** 18.x or later
- **pnpm** (recommended) or npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-repo/movify-your-life.git

# Navigate to project directory
cd movify-your-life

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server at http://localhost:3000 |
| `pnpm build` | Build production-optimized application |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint code analysis |

---

## Configuration

### Next.js Configuration (next.config.mjs)

```javascript
{
  eslint: {
    ignoreDuringBuilds: true    // Skip ESLint during build
  },
  typescript: {
    ignoreBuildErrors: true     // Skip TypeScript errors during build
  },
  images: {
    unoptimized: true           // Disable image optimization
  }
}
```

### TypeScript Configuration (tsconfig.json)

- **Target**: ES6
- **Module**: ESNext
- **Strict Mode**: Enabled
- **Path Mapping**: `@/*` → `./*`

### Tailwind CSS Configuration

- **Version**: 4.x
- **Plugins**: tailwindcss-animate, tw-animate-css
- **PostCSS**: @tailwindcss/postcss

---

## Environment Variables

The following environment variables are supported (if needed):

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_ANALYTICS_ID` | Vercel Analytics ID | Auto-configured |
| `NODE_ENV` | Environment mode | development |

---

## Deployment

### Vercel (Recommended)

The project is configured for seamless Vercel deployment:

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel automatically detects Next.js and configures build

**Live URL**: https://vercel.com/pijako9357-1154s-projects/v0-movify-your-life

### Docker Deployment

```dockerfile
# Dockerfile example
FROM node:18-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "start"]
```

---

## Performance Metrics

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: Optimized via font preloading and skeleton states
- **FID (First Input Delay)**: Minimized through web worker offloading
- **CLS (Cumulative Layout Shift)**: Prevented with proper image/video dimensions

### Optimization Techniques
- ✅ Code splitting with dynamic imports
- ✅ React.memo for component memoization
- ✅ useCallback for stable callbacks
- ✅ Progressive image/video loading
- ✅ Web Worker for background tasks
- ✅ Font preloading and display swap

---

## Browser Support

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

Private - All rights reserved

---

## Credits

- Built with [v0.app](https://v0.app)
- Deployed on [Vercel](https://vercel.com)
- UI Components by [Radix UI](https://www.radix-ui.com)
- Icons by [Lucide](https://lucide.dev)

---

## Support

For questions or support, please reach out through the official channels or visit the main website at [script.movie](https://www.script.movie/movify)