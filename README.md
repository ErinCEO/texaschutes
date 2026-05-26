# Texas Chutes

Rebuild of [texaschutes.com](https://texaschutes.com) — Next.js 16 (App Router) · React 19 · Tailwind v4 · Framer Motion · TypeScript.

## Stack
- Next.js 16 (App Router, Turbopack)
- React 19 / TypeScript
- Tailwind CSS v4
- Framer Motion (page + scroll animations)
- Lucide icons
- shadcn-style components with `cva` + `tailwind-merge`

## Local development
```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build + type-check
npm run start
```

## SEO / NAP+S
- **N**ame, **A**ddress, **P**hone surfaced consistently in `src/components/site-header.tsx`, `src/components/site-footer.tsx`, `src/components/nap-block.tsx`, and `src/app/contact/page.tsx` — all reading from a single source of truth in [`src/lib/business.ts`](src/lib/business.ts).
- **S**chema.org `LocalBusiness` / `HomeAndConstructionBusiness` JSON-LD injected globally via [`src/components/schema-jsonld.tsx`](src/components/schema-jsonld.tsx).
- Microdata (`itemProp` attributes) on the `<address>` element in the footer NAP block.
- Per-page `Metadata` exports with title templates and OpenGraph + Twitter cards.

## Known TODOs
- Confirm correct unit number with client (homepage says Unit A, contact page says Unit C). Currently omitted from NAP — see `src/lib/business.ts`.
- Drop real project photos into `public/projects/<slug>.jpg` and wire onto each project in `src/app/projects/page.tsx` — the live site's photos are JS-rendered (wsimg) and were not statically scrapeable.
- Contact form backend pending — page currently routes to `tel:` and `mailto:` CTAs.
- Add real social handles to `business.social` in `src/lib/business.ts`.

## Deploy
Built to run on Coolify (same pattern as the other client sites) — Node 20 / standard Next.js production build.
