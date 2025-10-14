# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project: Next.js 15 (App Router) + TypeScript + Tailwind CSS (v4) + Radix UI + Framer Motion

Commands
- Install dependencies
  - npm install
- Start dev server (Turbopack)
  - npm run dev
  - Serves on http://localhost:3000
- Build (Turbopack)
  - npm run build
- Start production server
  - npm run start
- Lint
  - npm run lint

Notes:
- Tests are not configured in package.json (no test script present). Single-test runs are not available until a test runner is added (e.g., Vitest/Jest) and scripts are defined.

High-level architecture
- App Router layout and pages (src/app)
  - layout.tsx defines global HTML structure, loads Geist fonts (next/font), and imports globals.css. It renders a persistent <Nav /> and wraps page content in a main region.
  - page.tsx is a client component using framer-motion for entrance animations and a local Button component for actions.
- Components
  - src/components/nav.tsx: Client-side navigation header built with @radix-ui/react-navigation-menu and next/link.
  - src/components/ui/button.tsx: A small design-system primitive built with class-variance-authority (cva). Exposes variant and size options; styled via Tailwind utility classes and the cn helper.
- Utilities
  - src/lib/utils.ts: Exports cn(...), composing clsx with tailwind-merge for safe class merging. This is the central helper for conditional/variant class strings across the UI.
- Styling and theming
  - src/app/globals.css: Tailwind CSS v4 with @import "tailwindcss" and @plugin "tailwindcss-animate". Defines an inline @theme mapping Orca-inspired CSS variables (background/foreground and an orcablue scale) into Tailwind tokens. Global background uses layered gradients; .bg-orca-depth adds subtle texture.
- TypeScript and module resolution
  - tsconfig.json sets strict, bundler moduleResolution, and an alias: @/* -> ./src/* for clean imports (e.g., import { Nav } from "@/components/nav").
- Linting
  - eslint.config.mjs uses the new Flat Config extending "next/core-web-vitals" and "next/typescript". Ignores: node_modules, .next, out, build, next-env.d.ts. The lint script runs eslint with this configuration.
- Next.js config
  - next.config.ts currently uses default options; Turbopack is enabled via CLI flags in scripts for dev/build.

Important references from README
- Dev flow: npm run dev, then edit src/app/page.tsx; hot reloading is enabled. Uses next/font to load Geist.
- Deployment: Standard Next.js deployment guidance applies (e.g., Vercel). See Next.js docs for details.
