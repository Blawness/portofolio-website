# Technology Stack

## Core Framework
- **Next.js 15.5.4** with App Router
- **React 19.1.0** with TypeScript
- **Turbopack** for fast development and builds

## Styling & UI
- **Tailwind CSS v4** with PostCSS integration
- **Radix UI** components for accessible primitives
- **Framer Motion** for animations
- **Lucide React** for icons
- **Class Variance Authority** for component variants
- **Styled Components** for CSS-in-JS when needed

## Content Management
- **Sanity CMS v4** for content management
- **Next-Sanity** for Next.js integration
- **Sanity Vision** for GROQ query testing
- **Sanity Image URL** for optimized images

## Development Tools
- **TypeScript 5** for type safety
- **ESLint 9** with Next.js config
- **Path aliases** configured (`@/*` → `./src/*`)

## Common Commands

### Development
```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production with Turbopack
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Sanity CMS
```bash
npx sanity deploy    # Deploy Sanity Studio
npx sanity status    # Check project status
npx sanity manage    # Open project management
```

## Environment Setup
- Requires `.env.local` with Sanity project credentials
- CORS configuration needed for Sanity Studio
- Images served from `cdn.sanity.io` (configured in Next.js)

## Build System
- Uses Turbopack for both development and production builds
- TypeScript compilation with strict mode enabled
- Automatic font optimization with next/font