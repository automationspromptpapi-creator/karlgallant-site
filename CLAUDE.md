# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
npx vercel       # Deploy preview
npx vercel --prod # Deploy to production
```

## Architecture

Single-page landing site for AI consulting business. Next.js 14 App Router with Tailwind CSS v4.

**Page structure** (`app/page.tsx`): Navigation → Hero → Problem → Solution → Process → Credibility → CTA → Footer

**Key components**:
- `NetworkAnimation.tsx` - Canvas-based animated node network in hero (mouse-reactive parallax)
- All section components use Framer Motion's `useInView` for scroll-triggered animations

## Design System

Defined in `app/globals.css` using Tailwind v4's `@theme inline` syntax:

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | #6A4CFF | Purple accent, CTAs |
| `--color-secondary` | #00D4FF | Cyan accent, highlights |
| `--color-background` | #0A0A0F | Page background |
| `--color-surface` | #12121A | Cards, elevated surfaces |
| `--color-border` | #1E1E2E | Borders |
| `--color-text-muted` | #8B8B9E | Secondary text |

**Typography**: Space Grotesk (headlines via `font-[family-name:var(--font-space-grotesk)]`), DM Sans (body)

**Utility classes**: `.gradient-text`, `.glow-primary`, `.glow-secondary`, `.grid-pattern`, `.dot-pattern`

## External Links (Placeholders)

- Cal.com booking: `https://cal.com/karlgallant`
- Tally form: `https://tally.so/r/placeholder`
- Email: `hello@karlgallant.com`
