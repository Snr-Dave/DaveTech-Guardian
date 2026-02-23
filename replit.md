# replit.md

## Overview

This is a cinematic 3D animated video template for the "Dave-Tech Guardian $DL Token" — a promotional sequence featuring an AI robot mascot. The application renders a series of 5 timed scenes with 3D effects, holographic UI overlays, and smooth transitions. It's a client-only React application (no backend/server) that uses Framer Motion for animations, Three.js for 3D rendering capabilities, and Tailwind CSS for styling. The project is designed to be recorded as a video directly from the browser.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Application Type
This is a **client-only single-page application** — there is no backend server, no database, and no API. The entire app runs in the browser as a video-like animated sequence.

### Project Structure
- `client/` — All frontend source code lives here
  - `client/src/App.tsx` — Root component, renders the VideoTemplate
  - `client/src/main.tsx` — Entry point, mounts React to the DOM
  - `client/src/index.css` — Global styles, CSS custom properties for theming, Tailwind imports
  - `client/src/components/video/VideoTemplate.tsx` — Main orchestrator that manages scene transitions, persistent background effects (cyberpunk background, volumetric fog, scanlines), and renders the active scene
  - `client/src/components/video/video_scenes/Scene1-5.tsx` — Individual scene components, each with internal phase-based timing using `setTimeout` for staggered animations
  - `client/src/components/video/ReplitLoadingScene.tsx` — Placeholder loading screen
  - `client/src/lib/video/hooks.ts` — `useVideoPlayer` hook that handles scene advancement based on configured durations, supports looping, and integrates with a recording API (`window.startRecording`/`window.stopRecording`)
  - `client/src/lib/video/animations.ts` — Shared animation presets (spring configs, easing curves, scene transition variants) for consistent motion language
  - `client/src/lib/utils.ts` — Utility for merging Tailwind class names (`cn` function using `clsx` + `tailwind-merge`)
  - `client/src/hooks/use-mobile.tsx` — Mobile breakpoint detection hook
- `client/public/assets/` — Static assets (PNG images for robot torso, digital shield, cyberpunk background, token logo, etc.)
- `shared/` — Shared types directory (included in tsconfig but currently minimal)

### Scene System
The video is composed of 5 scenes with defined durations (in milliseconds):
1. **Scene1 (enter, 4000ms)**: Robot guardian entrance with background flare and typography
2. **Scene2 (shield, 4500ms)**: Shield deployment with robot shifting to side
3. **Scene3 (token, 4500ms)**: Token orbiting with hologram effects
4. **Scene4 (power, 4000ms)**: Power-up sequence with energy surges and grid floor
5. **Scene5 (outro, 4000ms)**: Final logo lockup with robot silhouette

Each scene uses an internal `phase` state with `setTimeout` chains to stagger sub-animations within the scene's duration. The `useVideoPlayer` hook automatically advances between scenes and supports looping.

### Build & Dev Setup
- **Build tool**: Vite 7 with React plugin
- **Dev server**: Runs on port 5000 (`npm run dev:client`)
- **TypeScript**: Strict mode, bundler module resolution
- **Path aliases**: `@/` → `client/src/`, `@shared/` → `shared/`, `@assets/` → `attached_assets/`
- **CSS**: Tailwind CSS v4 with `@tailwindcss/vite` plugin, PostCSS with autoprefixer
- **Output**: Builds to `dist/public/`

### Styling Architecture
- Tailwind CSS 4 with CSS custom properties for theming (defined in `:root`)
- Color palette: Dark cyberpunk theme (deep navy, neon blue accents)
- Fonts: Space Grotesk (display) and JetBrains Mono (body/mono), loaded from Google Fonts
- shadcn/ui configured (components.json present) with "new-york" style, though no shadcn components appear to be in use yet

### Animation Architecture
- **Framer Motion**: Primary animation library for 2D DOM animations and scene transitions via `AnimatePresence`
- **GSAP**: Available as a dependency for complex timeline animations
- **React Three Fiber + Drei**: Available for 3D scene rendering (Three.js integration), though current scenes primarily use 2D motion with CSS transforms and images
- **Framer Motion 3D**: Bridge between Framer Motion and Three.js
- **Lottie React**: Available for After Effects animations
- **React Spring**: Available as an alternative spring animation library

### Design Decisions
- **No server/database**: This is purely a visual/animation project. No data persistence needed.
- **Phase-based animation**: Each scene uses sequential `setTimeout` calls to trigger animation phases, keeping timing explicit and predictable for video recording.
- **Image-based 3D look**: Rather than full 3D models, the current implementation uses 2D images (PNGs) with CSS transforms, blend modes, and blur effects to simulate 3D depth. The Three.js dependencies are available for upgrading to true 3D rendering.
- **Recording integration**: The `useVideoPlayer` hook calls `window.startRecording()` on mount and `window.stopRecording()` when all scenes complete, enabling automated video capture.

## External Dependencies

### Core Libraries
- **React 19** — UI framework
- **Three.js 0.182** + **React Three Fiber 8** + **Drei 9** — 3D rendering pipeline
- **Framer Motion 12** + **Framer Motion 3D 12** — Animation system
- **GSAP 3.14** — Advanced animation timelines
- **Lottie React 2.4** — Lottie animation playback
- **React Spring 10** — Physics-based animations

### Build & Styling
- **Vite 7** — Build tool and dev server
- **Tailwind CSS 4** — Utility-first CSS framework
- **PostCSS + Autoprefixer** — CSS processing
- **TypeScript 5.6** — Type safety

### Replit-specific
- **@replit/vite-plugin-cartographer** — Dev tooling for Replit
- **@replit/vite-plugin-dev-banner** — Development banner overlay
- **@replit/vite-plugin-runtime-error-modal** — Runtime error display

### External Services
- **Google Fonts** — Space Grotesk and JetBrains Mono font loading (CDN)
- No other external APIs, databases, or third-party services are used