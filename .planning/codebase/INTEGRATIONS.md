# External Integrations

**Analysis Date:** 2026-08-21

## APIs & External Services

**Analytics & Ads:**
- Google tag / Google Ads - Tracks page views, contact clicks, form submissions, conversions, scroll depth, external links, and time on page.
  - SDK/Client: External script loaded from `https://www.googletagmanager.com/gtag/js?id=AW-16682976859` in `public/index.html`, `public/privacy.html`, `public/404.html`, `public/500.html`, `public/bai-viet/index.html`, and article pages under `public/bai-viet/*/index.html`.
  - Implementation: `public/assets/js/gtag-config.js`.
  - Auth: Measurement/conversion ID is embedded as `AW-16682976859`; no environment variable is used.

**Booking API:**
- Vercel-hosted email API - Receives booking form submissions from the static site.
  - SDK/Client: Browser `fetch()` in `public/assets/js/main.js`.
  - Endpoint: `https://xeghepmientrungapi.vercel.app/api/send-email`.
  - Server implementation: `api/api/send-email.js`.
  - Auth: CORS allowlist in `api/api/send-email.js`; no user authentication or request token is implemented.

**Email Delivery:**
- Gmail SMTP - Sends booking notification email from the serverless API.
  - SDK/Client: `nodemailer` in `api/package.json` and `api/api/send-email.js`.
  - SMTP config: `smtp.gmail.com`, port `465`, secure TLS in `api/api/send-email.js`.
  - Auth: `GMAIL_USER`, `GMAIL_APP_PASSWORD`.
  - Recipients: `BOOKING_EMAIL_TO` and `BOOKING_EMAIL_CC` with fallback addresses in `api/api/send-email.js`.

**Contact Channels:**
- Zalo - Public contact links throughout static pages.
  - SDK/Client: Plain links such as `https://zalo.me/0826430430` in `public/index.html`, `public/bai-viet/index.html`, and `public/bai-viet/*/index.html`.
  - Auth: Not applicable.
- Facebook - Public profile links throughout static pages.
  - SDK/Client: Plain links such as `https://www.facebook.com/profile.php?id=61552012090157` in `public/index.html` and blog pages.
  - Auth: Not applicable.
- Phone and email links - `tel:` and `mailto:` links in `public/index.html`, `public/privacy.html`, `public/404.html`, `public/500.html`, and blog pages.
  - SDK/Client: Browser-native link handling.
  - Auth: Not applicable.

## Data Storage

**Databases:**
- Not detected.
  - Connection: Not applicable.
  - Client: Not applicable.

**File Storage:**
- Local committed static assets only.
  - Location: `public/assets/images/`, `public/assets/css/`, and `public/assets/js/`.
  - Public serving: Firebase Hosting serves the `public/` directory configured by `firebase.json`.

**Caching:**
- Firebase Hosting cache headers.
  - Static assets: `firebase.json` sets `Cache-Control: public, max-age=31536000, immutable` for `/assets/**`.
  - HTML: `firebase.json` sets `Cache-Control: public, max-age=60` for `**/*.html`.
  - SEO files: `firebase.json` sets `Cache-Control: public, max-age=3600` for `/robots.txt` and `/sitemap*.xml`.
- External cache service: not detected.

## Authentication & Identity

**Auth Provider:**
- Not detected for site visitors.
  - Implementation: Public static pages in `public/` and unauthenticated contact links.
- Gmail SMTP credential authentication for email delivery.
  - Implementation: `api/api/send-email.js` reads `GMAIL_USER` and `GMAIL_APP_PASSWORD`.

## Monitoring & Observability

**Error Tracking:**
- Dedicated error tracking service: not detected.

**Logs:**
- Browser logging in `public/assets/js/main.js` for placeholder Facebook sending and email submit failures.
- Browser logging in `public/assets/js/gtag-config.js` for tracked events and conversion errors.
- Server logging in `api/api/send-email.js` via `console.error('Email send failed:', err)`.
- Analytics events are pushed to `window.dataLayer` and `gtag()` in `public/assets/js/gtag-config.js`.

## CI/CD & Deployment

**Hosting:**
- Firebase Hosting for static files.
  - Config: `firebase.json`.
  - Project alias: `.firebaserc`.
  - Public root: `public/`.
- Vercel for the email API.
  - Scripts: `api/package.json`.
  - Runtime entry: `api/api/send-email.js`.
  - Deployment metadata directory `.vercel` is ignored in `.gitignore` and `api/.gitignore`.

**CI Pipeline:**
- Not detected.
  - No GitHub Actions, GitLab CI, CircleCI, or similar workflow files are present in the inspected tree.

## Environment Configuration

**Required env vars:**
- `GMAIL_USER` - Gmail account used as SMTP sender in `api/api/send-email.js`.
- `GMAIL_APP_PASSWORD` - Gmail App Password used by Nodemailer in `api/api/send-email.js`.

**Optional env vars:**
- `BOOKING_EMAIL_TO` - Overrides default recipient in `api/api/send-email.js`.
- `BOOKING_EMAIL_CC` - Overrides default CC recipient in `api/api/send-email.js`.

**Secrets location:**
- Local env files are not committed; `.gitignore` ignores `*.env` and `api/.env`.
- `.vercel` is ignored by `.gitignore` and `api/.gitignore`; deployment secrets are expected outside committed source.

## Webhooks & Callbacks

**Incoming:**
- `POST /api/send-email` - Implemented by `api/api/send-email.js` in the API package.
- `OPTIONS /api/send-email` - CORS preflight handled by `api/api/send-email.js`.

**Outgoing:**
- Gmail SMTP send - `api/api/send-email.js` calls `transporter.sendMail(mailOptions)`.
- Google tag events - `public/assets/js/gtag-config.js` calls `gtag('event', ...)` and pushes to `window.dataLayer`.
- Contact redirects - Static pages link out to Zalo, Facebook, phone, and email from `public/index.html` and `public/bai-viet/*/index.html`.

---

*Integration audit: 2026-08-21*
