# Next.js Migration Plan

**Created:** 2026-08-21
**Project:** xeghepmientrung-lander
**Goal:** Convert the current static Firebase-hosted HTML/CSS/JS site into a maintainable Next.js app without losing SEO, route behavior, booking leads, or deployment safety.

## Recommendation

Use a two-step migration.

1. **Primary path: static Next.js export on existing Firebase Hosting.**
   - Best fit for the current app because all public pages are static and the booking form already posts to a separate Vercel email API.
   - Preserve Firebase Hosting as the production static host.
   - Keep the existing Vercel API at `https://xeghepmientrungapi.vercel.app/api/send-email`.
   - Configure Next.js with `output: "export"` and `images.unoptimized: true`.

2. **Optional later path: full-stack Next.js deployment.**
   - Move `api/api/send-email.js` into `src/app/api/send-email/route.ts`.
   - Deploy to Vercel or Firebase App Hosting.
   - Use this only if you want one deployment surface for pages and API.

This keeps the riskiest parts separated: first migrate rendering and SEO, then decide whether to move the email runtime.

## Current State

- Static site lives under `public/`.
- Firebase Hosting serves `public/` via `firebase.json`.
- Main route is `public/index.html`.
- Article routes live at `public/bai-viet/<slug>/index.html`.
- Shared styling lives in `public/assets/css/style.css`, while pages load `style.min.css`.
- Shared browser behavior lives in `public/assets/js/main.js`, while pages load `main.min.js`.
- Analytics/conversion tracking lives in `public/assets/js/gtag-config.js`.
- Booking form posts to `https://xeghepmientrungapi.vercel.app/api/send-email`.
- Email API lives in a separate Node package under `api/` and sends mail through Gmail SMTP with Nodemailer.
- There are no tests, CI config, root `package.json`, or frontend build pipeline today.

## Target Architecture

```text
xeghepmientrung-lander/
|-- package.json
|-- package-lock.json
|-- next.config.ts
|-- tsconfig.json
|-- eslint.config.mjs
|-- firebase.json
|-- src/
|   |-- app/
|   |   |-- layout.tsx
|   |   |-- page.tsx
|   |   |-- globals.css
|   |   |-- not-found.tsx
|   |   |-- privacy/
|   |   |   `-- page.tsx
|   |   |-- bai-viet/
|   |   |   |-- page.tsx
|   |   |   `-- [slug]/
|   |   |       `-- page.tsx
|   |   |-- robots.ts
|   |   `-- sitemap.ts
|   |-- components/
|   |   |-- SiteHeader.tsx
|   |   |-- SiteFooter.tsx
|   |   |-- FloatingCta.tsx
|   |   |-- BookingForm.tsx
|   |   |-- JsonLd.tsx
|   |   |-- PricingSection.tsx
|   |   |-- TourSection.tsx
|   |   `-- Testimonials.tsx
|   |-- content/
|   |   |-- site.ts
|   |   |-- articles.ts
|   |   |-- pricing.ts
|   |   |-- tours.ts
|   |   `-- testimonials.ts
|   `-- lib/
|       |-- analytics.ts
|       |-- booking.ts
|       `-- seo.ts
|-- public/
|   |-- assets/
|   |   `-- images/
|   |-- favicon.ico
|   `-- legacy-static/       # temporary only, remove after parity
`-- api/                     # unchanged unless optional full-stack phase is chosen
```

## Route Mapping

| Current file | Next route | Notes |
|---|---|---|
| `public/index.html` | `src/app/page.tsx` | Home, pricing, tours, testimonials, booking form |
| `public/privacy.html` | `src/app/privacy/page.tsx` | Add redirect/canonical decision for `/privacy.html` |
| `public/bai-viet/index.html` | `src/app/bai-viet/page.tsx` | Blog index |
| `public/bai-viet/da-nang-quang-tri/index.html` | `src/app/bai-viet/[slug]/page.tsx` | Content from `articles.ts` |
| `public/bai-viet/da-nang-quang-binh/index.html` | `src/app/bai-viet/[slug]/page.tsx` | Content from `articles.ts` |
| `public/bai-viet/lich-trinh-xe-ghep-da-nang-hue/index.html` | `src/app/bai-viet/[slug]/page.tsx` | Content from `articles.ts` |
| `public/bai-viet/kinh-nghiem-xe-ghep-da-nang-quang-tri/index.html` | `src/app/bai-viet/[slug]/page.tsx` | Fix existing canonical mismatch during migration |
| `public/bai-viet/meo-dat-xe-ghep-tiet-kiem/index.html` | `src/app/bai-viet/[slug]/page.tsx` | Content from `articles.ts` |
| `public/bai-viet/so-sanh-xe-khach-va-xe-ghep/index.html` | `src/app/bai-viet/[slug]/page.tsx` | Fix existing canonical mismatch during migration |
| `public/bai-viet/xe-ghep-an-toan-cho-tre-em/index.html` | `src/app/bai-viet/[slug]/page.tsx` | Content from `articles.ts` |
| `public/404.html` | `src/app/not-found.tsx` | Exported 404 should render branded fallback |
| `public/500.html` | Keep as legacy static or defer | Static export has no server 500 runtime |

## Phase 0: Migration Safety Baseline

**Objective:** Capture the current behavior before changing structure.

**Tasks:**
- Record current route list from `public/sitemap.xml`, footer links, and `public/bai-viet/`.
- Save current titles, canonical URLs, meta descriptions, OG tags, and JSON-LD blocks per route.
- Identify canonical inconsistencies to fix deliberately:
  - `public/bai-viet/kinh-nghiem-xe-ghep-da-nang-quang-tri/index.html` canonical points to a root `.html` URL.
  - `public/bai-viet/so-sanh-xe-khach-va-xe-ghep/index.html` canonical points to a root `.html` URL.
  - `public/privacy.html` canonical is `/privacy.html` while the Next route should probably be `/privacy`.
- Create a parity checklist for:
  - Home sections
  - Article pages
  - Booking form
  - Zalo, phone, Facebook, email links
  - Google Ads tracking
  - Sitemap and robots

**Acceptance criteria:**
- `.planning/nextjs-migration/PARITY.md` exists.
- Every current public HTML route appears in the parity checklist.
- Every route has expected `title`, canonical URL, and primary CTA recorded.

## Phase 1: Scaffold Next.js App

**Objective:** Add the Next.js project foundation without deleting the existing static site yet.

**Tasks:**
- Create root `package.json` with scripts:
  - `dev`: `next dev`
  - `build`: `next build`
  - `start`: `next start`
  - `lint`: `next lint` or current Next lint command available at scaffold time
  - `typecheck`: `tsc --noEmit`
- Add `next`, `react`, `react-dom`, `typescript`, ESLint config, and package lock.
- Add `next.config.ts`:
  - `output: "export"`
  - `images: { unoptimized: true }`
  - choose route slash behavior after Phase 0 canonical review
- Add `src/app/layout.tsx`, `src/app/page.tsx`, and `src/app/globals.css`.
- Move or copy current image assets so existing URLs like `/assets/images/logo.png` remain valid.
- Keep old static files available until final cutover.

**Acceptance criteria:**
- `npm run typecheck` exits 0.
- `npm run build` exits 0.
- `out/index.html` is generated by `next build`.
- Existing image paths under `/assets/images/` still resolve in the built output.

## Phase 2: Shared Layout, Styling, and Data Model

**Objective:** Replace repeated static HTML patterns with reusable components and typed content.

**Tasks:**
- Convert `public/assets/css/style.css` into `src/app/globals.css` initially with minimal changes.
- Create shared layout components:
  - `SiteHeader`
  - `SiteFooter`
  - `FloatingCta`
  - `JsonLd`
- Create content modules:
  - `src/content/site.ts` for phone, Zalo, email, Facebook, domain, business name.
  - `src/content/pricing.ts` for schedules and prices.
  - `src/content/tours.ts` for tour cards.
  - `src/content/testimonials.ts` for reviews and stats.
  - `src/content/articles.ts` for article metadata and bodies.
- Replace hard-coded repeated contact data with `site.ts`.
- Keep public display text in Vietnamese.

**Acceptance criteria:**
- Header and footer render on home, privacy, blog index, and article routes.
- Search for `0826 430 430` shows it comes from a shared source or intentional SEO text blocks only.
- `src/content/site.ts` contains the canonical phone, Zalo, email, Facebook, and site URL values.
- CSS class names used by migrated components exist in `globals.css`.

## Phase 3: Migrate Home Page

**Objective:** Rebuild `public/index.html` as React components while preserving SEO and conversion behavior.

**Tasks:**
- Convert the home sections into components:
  - Hero
  - Booking steps
  - Schedule and pricing
  - Tour services
  - Testimonials and trust stats
  - Booking form
  - Contact aside
- Use Next Metadata API for title, description, canonical, Open Graph, and Twitter metadata.
- Render current JSON-LD blocks through `JsonLd`.
- Implement `BookingForm` as a client component.
- Move form submission logic from `main.js` into:
  - `src/components/BookingForm.tsx`
  - `src/lib/booking.ts`
- Use `NEXT_PUBLIC_BOOKING_API_URL` with default `https://xeghepmientrungapi.vercel.app/api/send-email`.

**Acceptance criteria:**
- Home page contains exactly one `h1`.
- Home page metadata matches the current production intent.
- Booking form requires name and phone before sending.
- Successful submit posts the same payload fields currently sent by `public/assets/js/main.js`.
- Failure state still shows Zalo and phone fallback links.
- `npm run build` exits 0.

## Phase 4: Migrate Blog and Article Routes

**Objective:** Convert all article pages to route-driven Next pages and remove duplicated markup.

**Tasks:**
- Create `src/app/bai-viet/page.tsx` for the article index.
- Create `src/app/bai-viet/[slug]/page.tsx`.
- Add `generateStaticParams()` from `src/content/articles.ts`.
- Add route metadata from article records.
- Add Article and Breadcrumb JSON-LD per article.
- Preserve related article links and CTAs.
- Normalize canonical URLs based on Phase 0 decision.
- Update sitemap generation to include all migrated article routes.

**Acceptance criteria:**
- `next build` generates all article routes.
- Every article in the current `public/bai-viet/*/index.html` tree has a matching Next route.
- Every article page has:
  - title
  - description
  - canonical URL
  - Open Graph URL
  - Article JSON-LD
  - Breadcrumb JSON-LD
- `src/content/articles.ts` is the source of truth for article slug, title, description, canonical, and related links.

## Phase 5: Analytics and Tracking

**Objective:** Preserve Google Ads conversion tracking without global script sprawl.

**Tasks:**
- Load Google tag in `src/app/layout.tsx` using `next/script`.
- Move `window.pushEvent` and conversion helpers into `src/lib/analytics.ts`.
- Recreate tracking for:
  - page view
  - phone clicks
  - Zalo clicks
  - email clicks
  - Facebook clicks
  - external links
  - form submit
  - booking lead submit
  - tour pricing calls
- Prefer `NEXT_PUBLIC_GOOGLE_ADS_ID` for the public Ads ID, with current `AW-16682976859` as the configured value.

**Acceptance criteria:**
- Built HTML includes the Google tag script.
- Clicking `tel:` links triggers contact conversion.
- Clicking Zalo links triggers Zalo conversion.
- Booking form submit triggers booking conversion.
- No page depends on `public/assets/js/main.min.js` or `public/assets/js/gtag-config.js`.

## Phase 6: SEO Files, Redirects, and Hosting

**Objective:** Make the exported Next app deployable on Firebase with equivalent SEO behavior.

**Tasks:**
- Decide canonical policy:
  - Recommended: extensionless routes for all public pages, including `/privacy`.
  - Add redirects from legacy `.html` paths where needed.
- Generate or preserve:
  - `/robots.txt`
  - `/sitemap.xml`
  - `/sitemap-index.xml` if still needed
- Update `firebase.json`:
  - Change hosting `public` from `public` to `out` after cutover.
  - Preserve cache headers for `/_next/static/**`, `/assets/**`, HTML, robots, and sitemap files.
  - Add redirects for legacy paths such as `/privacy.html` if canonical changes.
- Keep current `cleanUrls` and `trailingSlash` decisions aligned with canonical policy.
- Add a deployment checklist for Firebase Hosting preview and production.

**Acceptance criteria:**
- `firebase.json` points to `out` only after the Next build is ready.
- `npm run build` produces `out/robots.txt` and `out/sitemap.xml`, or static equivalents are copied into `out`.
- Legacy URLs either resolve or redirect to the chosen canonical URL.
- Sitemap contains all current route pages, not just the subset currently listed in `public/sitemap.xml`.

## Phase 7: Optional Full-Stack API Consolidation

**Objective:** Move the booking email API into Next.js only if the hosting target supports runtime server code.

**Do this only for Vercel or Firebase App Hosting, not static export.**

**Tasks:**
- Create `src/app/api/send-email/route.ts`.
- Port helpers from `api/api/send-email.js`:
  - CORS allowlist
  - JSON parsing
  - validation
  - honeypot check
  - email template
  - plain text template
  - Nodemailer send
- Add server-only env vars:
  - `GMAIL_USER`
  - `GMAIL_APP_PASSWORD`
  - `BOOKING_EMAIL_TO`
  - `BOOKING_EMAIL_CC`
- Point `NEXT_PUBLIC_BOOKING_API_URL` to `/api/send-email`.
- Decide whether to retire the separate `api/` Vercel package.

**Acceptance criteria:**
- API route rejects non-POST requests.
- API route rejects missing `name` or `phone`.
- API route rejects honeypot `_hp`.
- API route sends email with the same subject and recipient behavior as current API.
- Static export is disabled or not used for this deployment path.

## Phase 8: QA, Parity, and Cutover

**Objective:** Prove the migrated app is equivalent or better before production switch.

**Tasks:**
- Run local checks:
  - `npm run typecheck`
  - `npm run build`
  - static preview of `out/`
- Inspect desktop and mobile pages:
  - `/`
  - `/privacy`
  - `/bai-viet`
  - each article route
  - 404 route
- Verify booking form with test payload against staging or production API.
- Verify page source for metadata and JSON-LD.
- Verify all header/footer/contact CTAs.
- Verify `robots.txt` and `sitemap.xml`.
- Deploy to Firebase preview channel first.
- Compare preview URL with current production for:
  - visual parity
  - route parity
  - SEO parity
  - lead submission parity

**Acceptance criteria:**
- No broken internal links.
- No missing images.
- No route loses a title, description, canonical URL, or primary CTA.
- Booking form succeeds or shows fallback contact options.
- Firebase preview channel passes manual smoke test.
- Production deploy is made only after preview parity is accepted.

## Risks and Mitigations

| Risk | Why it matters | Mitigation |
|---|---|---|
| SEO route/canonical drift | Existing pages have mixed slash and `.html` canonical behavior | Freeze canonical policy in Phase 0 and add redirects |
| Booking lead loss | Current conversion depends on client JS and external API | Keep API unchanged for first migration and test form payload parity |
| Static export API mismatch | Next static export does not support runtime API routes | Keep email API separate until optional full-stack phase |
| Image optimization mismatch | Static export cannot use default Next image optimization safely | Use regular `img` or `next/image` with `images.unoptimized: true` |
| Styling regression | CSS is large and hand-authored | First migrate CSS globally, componentize later |
| Analytics double-counting | Current tracking has both generic and specific click listeners | Centralize tracking in `analytics.ts` and test event names |
| Content duplication | Current pages repeat header/footer/contact markup | Move shared content into typed `src/content/*` modules |

## Open Decisions

1. **Hosting target for final app**
   - Recommended now: static export on Firebase Hosting.
   - Alternative: full-stack app on Vercel or Firebase App Hosting.

2. **Canonical URL policy**
   - Recommended: extensionless canonical URLs, no `.html`, consistent article slugs.
   - Needs confirmation because current files mix `/privacy.html`, trailing slash article canonicals, and extensionless sitemap entries.

3. **Content model depth**
   - Faster: convert HTML into JSX first, then extract article body data later.
   - Cleaner: model all article content in `src/content/articles.ts` immediately.

4. **API consolidation**
   - Recommended now: keep separate Vercel API.
   - Optional later: move into Next route handler once deployment is full-stack.

## Execution Order

1. Phase 0: Baseline and canonical decisions.
2. Phase 1: Scaffold Next.js with static export.
3. Phase 2: Shared layout and content data.
4. Phase 3: Home page migration.
5. Phase 4: Blog and article migration.
6. Phase 5: Analytics and booking behavior.
7. Phase 6: Firebase export deployment.
8. Phase 8: QA and cutover.
9. Phase 7 only if you choose full-stack deployment later.

## External References Checked

- Next.js static export supports `output: "export"` and produces static HTML deployable on any static host.
- Next.js App Router supports route metadata through the Metadata API and special sitemap/robots file conventions.
- Firebase Hosting can serve static assets and content from a configured public directory.
- Firebase framework-aware Hosting for Next.js is preview/legacy for new adoption; Firebase recommends App Hosting for full-stack framework apps.
- Firebase App Hosting supports Next.js apps and is the better Firebase path if SSR or API routes are required.

