# Ian Kamau — Engineering Portfolio

A state-of-the-art, single-page engineering portfolio for **Ian Kamau**, Electrical & Electronics Engineering graduate (Moi University, Kenya), built with **Next.js 16**, **TypeScript**, **Tailwind CSS 4** and a GSAP-powered cinematic motion system.

![Next.js 16](https://img.shields.io/badge/Next.js-16-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8)

---

## Highlights

- **Cinematic boot preloader** — engineering boot-log, counter and curtain wipe
- **Lenis smooth scrolling** wired into the GSAP ticker, with smooth anchor navigation
- **Hero** — full-viewport dusk transmission imagery, giant split-line typography (Space Grotesk), outlined display text, magnetic CTAs, live status readout
- **Selected work** — editorial alternating media cards with grayscale→color hover, clip reveals and parallax; each opens a **full-screen case study** (problem → objective → solution → hardware → testing → results → metrics → lessons)
- **Final-year project deep dive** — sticky visual column, scroll-drawn **SVG system architecture diagram**, animated metric counters
- **Pinned horizontal film-strip gallery** for laboratory exposure (native swipe rail on touch)
- **Scroll-scrubbed trajectory timeline** and word-by-word philosophy manifesto
- **Full-bleed contact CTA** with night-grid backdrop and magnetic button
- **Imagery-first information delivery** — 14 curated engineering photographs, every image captioned with technical context
- Honesty-first content system: `[PLACEHOLDER]` chips on unverified claims (metrics, employers, links) per the portfolio spec
- Accessibility: semantic landmarks, skip link, focus states, `prefers-reduced-motion` respected throughout, keyboard + ESC support in modals
- SEO: metadata, Open Graph, JSON-LD Person schema

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) + React 19 |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS 4 + design tokens (dark graphite / engineering green) |
| Motion | GSAP 3 + ScrollTrigger, Lenis smooth scroll, Framer Motion (modals) |
| Fonts | Space Grotesk (display) · Geist (body) · IBM Plex Mono (technical labels) |
| Icons | Lucide |

## Getting Started

```bash
# install dependencies
bun install        # or npm install / pnpm install

# run the dev server
bun run dev        # or npm run dev
# → http://localhost:3000

# production build
bun run build && bun run start
```

No environment variables are required. The site is fully static content — no database calls at runtime.

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home — the full scroll experience
│   ├── layout.tsx            # Fonts, SEO, preloader, smooth scroll, grain
│   ├── globals.css           # Design tokens + cinematic motion system
│   ├── about/ education/ experience/ engineering/   # Supporting routes
│   └── api/
├── components/
│   ├── portfolio/
│   │   ├── sections/         # hero, snapshot, work (+case-study modal), fyp,
│   │   │                     # capabilities, experience, lab-gallery, trajectory,
│   │   │                     # philosophy, contact, tools-ticker
│   │   ├── preloader.tsx     # Boot-sequence intro
│   │   ├── smooth-scroll.tsx # Lenis + GSAP ticker integration
│   │   ├── anim-heading.tsx  # Split-line reveals + FadeIn
│   │   ├── parallax-media.tsx# Clip-reveal + parallax image frame
│   │   ├── counter.tsx       # Animated number counters
│   │   ├── magnetic.tsx      # Magnetic hover wrapper
│   │   └── marquee.tsx       # Infinite CSS ticker (grid-safe)
│   └── layout/               # Header (hide-on-scroll) + footer
├── data/                     # ALL portfolio content lives here
│   ├── profile.ts            # Profile, focus areas, philosophy, timeline, labs
│   ├── projects.ts           # 5 projects with full case-study fields + images
│   ├── experience.ts         # Industrial attachment
│   ├── education.ts  skills.ts  certifications.ts
│   └── types.ts              # Typed data model (spec section 43)
├── hooks/  store/
└── lib/
public/
├── images/                   # 14 curated engineering photographs
└── cv/Ian-Kamau-CV.pdf       # Placeholder CV (replace with the real one)
```

## Customizing the Content

**Everything editable lives in `src/data/`.** No JSX changes needed to update content.

1. **Profile & links** — `src/data/profile.ts` (replace placeholder LinkedIn/GitHub/email URLs)
2. **Projects** — `src/data/projects.ts` (set `verified: true` once metrics are confirmed; swap images in `public/images/`)
3. **Experience** — `src/data/experience.ts` (replace `[Company Name]`)
4. **CV** — drop the real PDF at `public/cv/Ian-Kamau-CV.pdf`
5. **Photography** — replace files in `public/images/` keeping the same names (current imagery is illustrative — swap in real project/lab photos before publishing, per the spec's visual-storytelling policy)

## Design System

- **Palette** — background `#0B0D0F`, surface `#12161A`, text `#F4F6F8`/`#A7B0B8`, engineering green `#4ADE80`, signal amber `#FBBF24`, data blue `#60A5FA`
- **Type** — Space Grotesk display headings, Geist body, IBM Plex Mono for technical labels/eyebrows
- **Motion language** — reveals communicate structure (masks, parallax, draw-in diagrams), never decoration; fully disabled under `prefers-reduced-motion`

## Scripts

| Command | Purpose |
|---|---|
| `bun run dev` | Dev server on port 3000 |
| `bun run build` | Production build (standalone output) |
| `bun run lint` | ESLint |
| `bun run db:push` | Push Prisma schema (if you extend the data layer) |

## Deployment

Deploys cleanly to **Vercel** (zero config) or any Node host via the standalone build. Update `metadataBase` in `src/app/layout.tsx` to the production domain.
