# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
npx vercel       # Deploy preview
npx vercel --prod --yes  # Deploy to production
```

## Architecture

Single-page landing site for Karl Gallant AI Consulting. Next.js 16 App Router with Tailwind CSS v4.

**Page structure** (`app/page.tsx`): Navigation → Hero → Problem → Solution → Process → Credibility → CTA → Footer

**Key components**:
- `NetworkAnimation.tsx` - Canvas-based animated node network in hero with coral-to-teal gradients (mouse-reactive parallax)
- All section components use Framer Motion's `useInView` for scroll-triggered animations

## Design System

OpenClaw-inspired dark theme. Defined in `app/globals.css` using Tailwind v4's `@theme inline` syntax:

**Colors**:
| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | #ff4d4d | Coral - buttons, CTAs, accents |
| `--color-secondary` | #00e5cc | Teal/cyan - highlights, glows |
| `--color-bg-deep` | #050810 | Darkest background |
| `--color-bg-surface` | #0a0f1a | Cards, elevated surfaces |
| `--color-bg-elevated` | #111827 | Higher elevation |
| `--color-text-primary` | #f0f4ff | Main text |
| `--color-text-secondary` | #8892b0 | Secondary text |
| `--color-text-muted` | #5a6480 | Muted text |

**Typography** (via Fontshare CDN):
- Headlines: Clash Display via `font-[family-name:var(--font-heading)]`
- Body: Satoshi via `--font-body`

**Utility classes**: `.gradient-text` (teal), `.gradient-text-coral`, `.glow-primary`, `.glow-cyan`, `.glow-coral`, `.grid-pattern`, `.dot-pattern`

## External Links (Placeholders)

- Cal.com booking: `https://cal.com/karlgallant`
- Tally form: `https://tally.so/r/placeholder`
- Email: `hello@karlgallant.com`
- Production URL: `https://karlgallant-site.vercel.app`
