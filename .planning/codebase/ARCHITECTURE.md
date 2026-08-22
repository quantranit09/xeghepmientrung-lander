# Architecture

**Analysis Date:** 2026-08-21

## Pattern Overview

**Overall:** Static SEO site with a companion serverless email endpoint.

**Key Characteristics:**
- Public pages are manually authored static HTML under `public/` and hosted from the Firebase `public` directory configured by `firebase.json`.
- Shared CSS, images, and browser JavaScript live under `public/assets/`; page HTML directly links these assets.
- SEO metadata and Schema.org JSON-LD are embedded in each HTML page, including `public/index.html`, `public/bai-viet/index.html`, and route article pages under `public/bai-viet/*/index.html`.
- Booking form submission is client-driven from `public/assets/js/main.js` to the Vercel-hosted serverless API implemented in `api/api/send-email.js`.
- Server-side persistence is not present; the API validates request data and sends notification email through Gmail SMTP.

## Layers

**Static Page Layer:**
- Purpose: Defines routable content, SEO metadata, schema markup, navigation, CTAs, and forms.
- Location: `public/`
- Contains: `public/index.html`, `public/privacy.html`, `public/404.html`, `public/500.html`, `public/bai-viet/index.html`, and article pages under `public/bai-viet/*/index.html`.
- Depends on: `public/assets/css/style.min.css`, `public/assets/js/gtag-config.js`, `public/assets/js/main.min.js`, images under `public/assets/images/`, Google tag script, Zalo links, Facebook links, phone links, and email links.
- Used by: Firebase Hosting configured in `firebase.json`.

**Shared Asset Layer:**
- Purpose: Provides reusable visual styling, browser behavior, favicons, logos, and responsive WebP imagery.
- Location: `public/assets/`
- Contains: `public/assets/css/style.css`, `public/assets/css/style.min.css`, `public/assets/js/main.js`, `public/assets/js/main.min.js`, `public/assets/js/gtag-config.js`, and image files under `public/assets/images/`.
- Depends on: Browser DOM APIs and Google tag globals in `public/assets/js/gtag-config.js`.
- Used by: Static pages in `public/index.html`, `public/bai-viet/index.html`, `public/bai-viet/*/index.html`, `public/privacy.html`, `public/404.html`, and `public/500.html`.

**Client Interaction Layer:**
- Purpose: Handles DOM-ready initialization, CTA click tracking, lead form validation, booking message assembly, API submission, and user-facing form status messages.
- Location: `public/assets/js/`
- Contains: `public/assets/js/main.js` and `public/assets/js/gtag-config.js`.
- Depends on: Browser APIs, `window.dataLayer`, `gtag()`, and the external booking API URL in `public/assets/js/main.js`.
- Used by: Page scripts loaded from static HTML files.

**Serverless API Layer:**
- Purpose: Accepts booking submissions, applies CORS, parses JSON, validates required fields, builds email payloads, and sends mail through Gmail SMTP.
- Location: `api/api/`
- Contains: `api/api/send-email.js`.
- Depends on: `nodemailer`, Node.js request streams, `process.env.GMAIL_USER`, `process.env.GMAIL_APP_PASSWORD`, optional `process.env.BOOKING_EMAIL_TO`, and optional `process.env.BOOKING_EMAIL_CC`.
- Used by: Browser `fetch()` call in `public/assets/js/main.js` to `https://xeghepmientrungapi.vercel.app/api/send-email`.

**Hosting & Deployment Layer:**
- Purpose: Configures static hosting and API deployment workflows.
- Location: project root and `api/`
- Contains: `firebase.json`, `.firebaserc`, `api/package.json`, and `api/package-lock.json`.
- Depends on: Firebase Hosting for `public/` and Vercel CLI/runtime for `api/api/send-email.js`.
- Used by: Deployment commands and hosted production infrastructure.

## Data Flow

**Static Page Request:**

1. Firebase Hosting serves HTML files from `public/` according to `firebase.json`.
2. The HTML page loads metadata, Schema.org JSON-LD, favicons, Google tag script, `public/assets/js/gtag-config.js`, and the referenced stylesheet `public/assets/css/style.min.css`.
3. The page body renders static content, images from `public/assets/images/`, contact CTAs, and route/article content.
4. The page loads `public/assets/js/main.min.js` near the end of the body for booking form behavior and CTA tracking.

**Booking Submission:**

1. Visitor submits `form#leadForm` defined in `public/index.html`.
2. `public/assets/js/main.js` reads `FormData`, requires `name` and `phone`, normalizes the phone number, builds `orderInfo`, and pushes a `lead_submit` event.
3. `public/assets/js/main.js` posts JSON to `https://xeghepmientrungapi.vercel.app/api/send-email`.
4. `api/api/send-email.js` applies CORS for `https://xeghepmientrung.com`, `https://www.xeghepmientrung.com`, and `http://localhost:3000`.
5. `api/api/send-email.js` parses the JSON request body, rejects honeypot submissions via `_hp`, validates required fields, builds HTML and plain text messages, and sends email through Nodemailer.
6. The API returns `{ success: true }` or an error response; `public/assets/js/main.js` updates `#formMsg` with success, partial success, or fallback contact options.

**Analytics & Conversion Tracking:**

1. Static pages load Google tag with ID `AW-16682976859` and then load `public/assets/js/gtag-config.js`.
2. `public/assets/js/gtag-config.js` defines `window.pushEvent` and `window.trackConversion`.
3. DOM event listeners in `public/assets/js/gtag-config.js` track external links, phone clicks, Zalo clicks, email clicks, Facebook clicks, form submissions, scroll depth, and time on page.
4. `public/assets/js/main.js` reuses `window.pushEvent` for specific CTA locations and the booking form submit event.

**State Management:**
- Client state is local to DOM event handlers in `public/assets/js/main.js` and `public/assets/js/gtag-config.js`.
- Server state is request-scoped in `api/api/send-email.js`.
- Persistent database, browser storage, and server-side session state are not detected.

## Key Abstractions

**Static Route Page:**
- Purpose: Represents a routable landing page, policy page, error page, blog index, or blog article.
- Examples: `public/index.html`, `public/privacy.html`, `public/bai-viet/index.html`, `public/bai-viet/da-nang-quang-tri/index.html`.
- Pattern: One HTML file per route, with route-specific `<title>`, canonical URL, Open Graph metadata, JSON-LD, shared header/footer, and direct asset links.

**Article Page:**
- Purpose: Represents SEO content for a route, travel topic, or comparison article.
- Examples: `public/bai-viet/da-nang-quang-tri/index.html`, `public/bai-viet/da-nang-quang-binh/index.html`, `public/bai-viet/so-sanh-xe-khach-va-xe-ghep/index.html`.
- Pattern: `public/bai-viet/<slug>/index.html` with article content, breadcrumb navigation, related articles, contact CTA, and JSON-LD.

**Shared Styling System:**
- Purpose: Provides the visual layout, responsive grids, cards, buttons, header, mobile quickbar, forms, footer, testimonials, tour cards, and pricing tables.
- Examples: `public/assets/css/style.css` and `public/assets/css/style.min.css`.
- Pattern: CSS custom properties in `:root`, section/card/grid classes, media queries, and component-specific class blocks.

**Tracking Facade:**
- Purpose: Centralizes event and conversion tracking for page behavior.
- Examples: `public/assets/js/gtag-config.js`.
- Pattern: Global functions `window.pushEvent(eventName, eventData)` and `window.trackConversion(conversionType, transactionId)`.

**Booking Form Handler:**
- Purpose: Converts `form#leadForm` data into analytics events and an API payload.
- Examples: `public/assets/js/main.js`, `public/index.html`.
- Pattern: DOMContentLoaded initialization, element lookup by ID, client-side validation, `fetch()` POST, and inline status rendering to `#formMsg`.

**Email Endpoint Helpers:**
- Purpose: Keep serverless request handling readable.
- Examples: `setCors`, `badRequest`, `getClientIp`, `readJsonBody`, `validate`, `makeTransporter`, `createEmailTemplate`, and `createPlainTextMessage` in `api/api/send-email.js`.
- Pattern: Small top-level CommonJS functions used by the exported handler.

## Entry Points

**Home Page:**
- Location: `public/index.html`
- Triggers: Browser request to `/`.
- Responsibilities: Main landing content, service pricing, tour information, testimonials, booking form, contact options, SEO schema, and primary footer navigation.

**Blog Index:**
- Location: `public/bai-viet/index.html`
- Triggers: Browser request to `/bai-viet/`.
- Responsibilities: Lists route and topic articles, includes collection JSON-LD, and links users back to booking/contact CTAs.

**Article Routes:**
- Location: `public/bai-viet/*/index.html`
- Triggers: Browser requests such as `/bai-viet/da-nang-quang-tri/` and `/bai-viet/so-sanh-xe-khach-va-xe-ghep/`.
- Responsibilities: Route-specific or topic-specific SEO content, article JSON-LD, breadcrumbs, related links, and contact CTAs.

**Policy and Error Pages:**
- Location: `public/privacy.html`, `public/404.html`, `public/500.html`.
- Triggers: Direct route request, error routing, or footer link.
- Responsibilities: Privacy disclosure and branded fallback pages with contact CTAs.

**Client Scripts:**
- Location: `public/assets/js/gtag-config.js`
- Triggers: Loaded by page `<head>` script tags.
- Responsibilities: Initialize Google tag configuration and attach analytics listeners.
- Location: `public/assets/js/main.js`
- Triggers: Source implementation for the script referenced by pages as `public/assets/js/main.min.js`.
- Responsibilities: Booking form behavior and specific CTA analytics.

**Email API:**
- Location: `api/api/send-email.js`
- Triggers: `POST /api/send-email` in the serverless runtime.
- Responsibilities: CORS, request parsing, validation, email construction, SMTP delivery, and JSON responses.

## Error Handling

**Strategy:** Client-side validation plus API HTTP status responses and console logging.

**Patterns:**
- `public/assets/js/main.js` prevents form submission when `name` or `phone` is missing and writes the message to `#formMsg`.
- `public/assets/js/main.js` wraps outbound API calls in `try/catch`, returns booleans from async send helpers, and shows fallback Zalo/phone options when automated sends fail.
- `api/api/send-email.js` returns `400` for invalid payloads, `400` for honeypot bot detection, `405` for non-POST methods, and `500` for send failures.
- `api/api/send-email.js` logs server errors with `console.error`.
- `public/assets/js/gtag-config.js` wraps event tracking in `try/catch` and logs tracking errors with `console.error`.

## Cross-Cutting Concerns

**Logging:** Browser logs are in `public/assets/js/main.js` and `public/assets/js/gtag-config.js`; server logs are in `api/api/send-email.js`.

**Validation:** Browser requires `name` and `phone` in `public/assets/js/main.js` and uses HTML form attributes in `public/index.html`; server validates `name` and `phone`, sanitizes string fields, and checks `_hp` honeypot in `api/api/send-email.js`.

**Authentication:** Visitor authentication is not present; the email API relies on CORS allowlisting and Gmail SMTP credentials from environment variables in `api/api/send-email.js`.

---

*Architecture analysis: 2026-08-21*
