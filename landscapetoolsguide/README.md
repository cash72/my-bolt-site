# Landscape Tools Guide

Independent directory comparing **landscaping and lawn care business software** — Jobber, Housecall Pro, LMN, GorillaDesk, and more.

**Stack:** Vite + React + Tailwind, prerendered static pages, Cloudflare Pages.

## Local dev

```bash
cd landscapetoolsguide
npm ci
npm run dev
```

## Build

```bash
npm run typecheck
npm run build:app   # skip prerender (faster)
npm run build       # full build + prerender
```

## Deploy

From repo root:

```bash
npm run deploy -- landscapetoolsguide
npm run deploy -- landscapetoolsguide --attach-domain   # first-time domain
```

## Site structure

| Route | Purpose |
|-------|---------|
| `/tools/{slug}/` | Tool review + affiliate CTA |
| `/compare/{slug}/` | Head-to-head comparisons |
| `/alternatives/{slug}/` | Alternatives roundups |
| `/best/{slug}/` | Best-for lists by use case |
| `/guides/{slug}/` | Buying guides |

Content lives in `src/lib/tools/tools.ts`, `comparisons/`, `alternatives/`, `best/`, and `guides/`.

## Affiliate setup

1. Join vendor partner programs (Jobber, Housecall Pro, etc.) — often via PartnerStack or direct affiliate portals.
2. Copy `.env.example` → `.env` and set `VITE_AFFILIATE_*` URLs.
3. Add the same vars in Cloudflare Pages → Settings → Environment variables.
4. Until set, outbound links fall back to official vendor homepages (no commission).

Affiliate links use `rel="sponsored"` on tool pages via `getAffiliateUrl()` in `src/lib/affiliates.ts`.

## AdSense

Set `VITE_ADSENSE_CLIENT` and slot IDs in `.env` (see `.env.example`). Run `npm run build` to regenerate `ads.txt`.

## Launch plan (first 90 days)

**Month 1 — ship & index**

- Deploy with 23 URLs (8 tools, 2 compares, 2 alternatives, 2 best-for, 1 guide, legal).
- Submit sitemap in Google Search Console.
- Apply for affiliate programs; swap env vars when approved.

**Month 2 — expand content**

- Add 3–5 guides (pricing breakdowns, QuickBooks integration, snow + landscape hybrid).
- Add comparisons: Service Autopilot vs Jobber, GorillaDesk vs Housecall Pro.
- Internal link from every tool page to compare/alternatives.

**Month 3 — measure & iterate**

- Track GSC queries; double down on pages getting impressions.
- Kill or merge pages with zero impressions after 60 days.
- Target: first affiliate conversion or AdSense approval.

## Revenue model

- **Primary:** SaaS affiliate commissions ($75–$300 per qualified signup for FSM tools).
- **Secondary:** Display ads once traffic supports AdSense.

We do not build or host software — curated comparison content with outbound affiliate links.
