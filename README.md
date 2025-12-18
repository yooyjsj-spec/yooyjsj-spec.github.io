# ADAM Lab Static Site (React + Vite + TSX)

Static, client-only site for ADAM Lab. Built with Vite, React, and TypeScript (TSX). Uses HashRouter for safe GitHub Pages deployment and keeps styling lightweight via Tailwind CDN plus a small `index.css`.

## Quick Start
1. Install deps: `npm install`
2. Dev server: `npm run dev`
3. Production build: `npm run build`
4. Preview build: `npm run preview`

## Deployment (GitHub Pages)
- Vite `base` is set to `./` and the app uses `HashRouter`, so it works under `/username/repo/`.
- Deploy from local: `npm run deploy` (runs `npm run build` then publishes `dist` to `gh-pages` branch via `gh-pages` package).
- If you change the repo name, update `package.json` `homepage` to `https://<USERNAME>.github.io/<REPO>` so links remain accurate.
- You can also wire a GitHub Actions workflow to run `npm ci && npm run build` and publish the `dist` folder to `gh-pages`.

## Project Structure
```
├─ index.html
├─ public/
│  └─ logo.svg                # Wordmark used by Navbar
├─ src/
│  ├─ main.tsx                # App entry
│  ├─ App.tsx                 # Routes (HashRouter)
│  ├─ index.css               # Minimal global styles
│  ├─ components/             # Layout, Navbar, VideoHover, etc.
│  ├─ pages/                  # Home, Research, Publications, People, Community, Contact
│  ├─ data/                   # Static content & asset references
│  ├─ types.ts                # Shared TypeScript types
│  ├─ utils/assetPath.ts      # BASE_URL-safe asset helper for GH Pages
│  └─ vite-env.d.ts           # Vite env types
└─ vite.config.ts             # Vite + React plugin + alias + base='./'
```

## Content & Assets
- Page text/sections live in `src/pages/*`. Update copy directly there.
- Data-driven bits (people, publications, hero assets) live in `src/data/*`.
- Static files (logo, optional images/videos) go in `public/`. Example: `public/images/journals/...` or `public/videos/...`.
- For local assets referenced in code, use the helper `assetPath('images/foo.png')` so paths stay correct on GitHub Pages subdirectories.
- If a journal image is missing, components fall back to the default cover.

## Styling
- Tailwind CDN is loaded in `index.html` for utility classes.
- `src/index.css` provides base resets and fonts.
- Components include responsive classes; verify layouts in mobile/desktop when editing sections.

## Notes
- No backend: all content is static and client-side only.
- Router: HashRouter keeps navigation working on static hosting without server rewrites.‬‬
