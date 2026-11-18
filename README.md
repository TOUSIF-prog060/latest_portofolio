<div align="center">

# Tousif Raza — AI Automation Engineer Portfolio

**An editorial, motion-driven portfolio — giant type, black & white, one aurora accent.**
Built to show founders and startups that the AI systems here ship to production.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?logo=framer&logoColor=white)](https://motion.dev)
[![Lenis](https://img.shields.io/badge/Lenis-smooth_scroll-white)](https://lenis.darkroom.engineering)

</div>

<br />

## About

This is the source for **Tousif Raza's portfolio** (v2). It replaces the earlier glassmorphic site with an
editorial design: oversized, tightly tracked headlines, a strict black-and-white palette, and a single
violet → cyan → teal aurora gradient used only as an accent.

The page is built around proof of work — RAG pipelines, voice agents, outreach automation, published ML
research and a shipped iOS app — each presented as a full-screen case slide.

## Features

- **Giant editorial hero** — "AI that works↘" set at ~21vw with mask-reveal line animation and a live availability status
- **Stacking project slides** — each project is a full-screen `position: sticky` slide that the next one scrolls over, with a step-by-step pipeline diagram, stack tags and a code / App Store link
- **Poster statement section** — white section in a condensed poster face with a rotating "available for freelance" badge
- **Services list** — large rows with an animated aurora underline and slide-in arrow on hover
- **Tech-stack marquee** — infinite outlined-type ticker that pauses on hover
- **About** — portrait (grayscale → colour on hover), stats, timeline and résumé download
- **Roll-up hover text** on every nav and footer link
- **Smooth scrolling** with [Lenis](https://lenis.darkroom.engineering), including smooth anchor links
- **Nav that adapts to the background** — `mix-blend-difference` keeps it readable over black and white sections
- **Performance-first motion** — every animation is transform/opacity only; no blur filters, no WebGL, no video
- **Accessible** — respects `prefers-reduced-motion` (disables Lenis and animations), visible focus rings, duplicate hover text hidden from screen readers
- **SEO** — full metadata, Open Graph / Twitter cards and a generated favicon

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| Language | [TypeScript](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Animation | [Framer Motion](https://motion.dev) + CSS keyframes |
| Smooth scroll | [Lenis](https://lenis.darkroom.engineering) |
| Fonts | Inter Tight (display), Anton (poster), Inter (body), JetBrains Mono (labels) via `next/font` |
| Deployment | [Vercel](https://vercel.com) |

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
git clone https://github.com/TOUSIF-prog060/latest_portofolio.git
cd latest_portofolio
npm install
```

No environment variables are needed.

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Fonts, metadata, Lenis + nav
│   ├── page.tsx          # Section order
│   ├── globals.css       # Palette, type utilities, roll-up + underline effects
│   └── icon.tsx          # Generated favicon
├── components/
│   ├── nav.tsx           # Fixed nav with roll-up links
│   ├── hero.tsx          # Giant headline + bio + CTA
│   ├── work.tsx          # Sticky stacking project slides
│   ├── statement.tsx     # White poster section + rotating badge
│   ├── services.tsx      # Services list
│   ├── stack.tsx         # Tech marquee
│   ├── about.tsx         # Portrait, stats, timeline, résumé
│   ├── contact.tsx       # "Let's talk" CTA + footer
│   ├── reveal.tsx        # MaskLine / FadeUp scroll animations
│   ├── roll.tsx          # Roll-up hover text
│   └── smooth-scroll.tsx # Lenis setup
└── lib/
    ├── content.ts        # ALL site copy, links and project data
    └── utils.ts
```

## Customization

- **Content** — every word on the site (name, bio, links, projects, services, stack, stats, timeline) lives in
  [`src/lib/content.ts`](src/lib/content.ts). Edit that one file to update the site.
- **Images** — replace `public/portrait.webp` and `public/resume.pdf`.
- **Colours & type** — the palette and the aurora gradient are CSS custom properties at the top of
  [`src/app/globals.css`](src/app/globals.css). Each project's slide tint is set by its `hue` in `content.ts`.
- **Domain** — set `site.url` in `content.ts` to your deployed domain so metadata and link previews resolve correctly.

## Deployment

Import the repo at [vercel.com/new](https://vercel.com/new) and deploy — the included `vercel.json` pins the
framework to Next.js, so no settings need to change.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/TOUSIF-prog060/latest_portofolio)

## Contact

**Tousif Raza** — AI Automation Engineer, Bangalore, India

- Email: [tousifshiekh1033@gmail.com](mailto:tousifshiekh1033@gmail.com)
- LinkedIn: [tousif-shiekh-a06776367](https://www.linkedin.com/in/tousif-shiekh-a06776367)
- GitHub: [@TOUSIF-prog060](https://github.com/TOUSIF-prog060)
