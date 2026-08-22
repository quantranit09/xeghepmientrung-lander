# Technology Stack

**Analysis Date:** 2026-08-21

## Languages

**Primary:**
- HTML5 - Static public pages in `public/index.html`, `public/privacy.html`, `public/404.html`, `public/500.html`, `public/bai-viet/index.html`, and `public/bai-viet/*/index.html`.
- CSS3 - Shared site styling in `public/assets/css/style.css`; deployed pages reference `public/assets/css/style.min.css`.
- JavaScript - Browser behavior in `public/assets/js/main.js` and `public/assets/js/gtag-config.js`; deployed pages reference `public/assets/js/main.min.js`.

**Secondary:**
- Node.js CommonJS - Serverless email endpoint in `api/api/send-email.js`.
- XML - SEO sitemaps in `public/sitemap.xml` and `public/sitemap-index.xml`.

## Runtime

**Environment:**
- Browser runtime - Static HTML, CSS, and client-side JavaScript are served from `public/`.
- Node.js `>=20` - Declared in `api/package.json` for the serverless API package.

**Package Manager:**
- npm - The API package uses `api/package.json` and `api/package-lock.json`.
- Lockfile: present for the API package at `api/package-lock.json` with lockfileVersion `3`.
- Root package manifest: not detected at `package.json`; root-level build scripts are not present.

## Frameworks

**Core:**
- Static HTML/CSS/JS - Public pages are manually authored under `public/`; no frontend framework is detected.
- Vercel-style Node serverless handler - `api/api/send-email.js` exports `module.exports = async function handler(req, res)`.
- Firebase Hosting - Static hosting is configured in `firebase.json` and `.firebaserc`.

**Testing:**
- Not detected - No `jest.config.*`, `vitest.config.*`, `playwright.config.*`, `cypress.config.*`, `*.test.*`, or `*.spec.*` files are present.

**Build/Dev:**
- Firebase Hosting configuration - `firebase.json` serves `public/`, enables clean URLs, and sets cache headers.
- Vercel CLI workflow - `api/package.json` defines `npm run dev` as `vercel dev` and `npm run deploy` as `vercel && vercel --prod`.
- Manual/static asset workflow - `public/assets/css/style.css` and `public/assets/js/main.js` contain source implementations; `public/assets/css/style.min.css` and `public/assets/js/main.min.js` are newline-free minified assets with nonzero byte sizes.

## Key Dependencies

**Critical:**
- `nodemailer` `^6.9.13` in `api/package.json` - Sends booking emails through Gmail SMTP from `api/api/send-email.js`.
- `nodemailer` `6.10.1` resolved in `api/package-lock.json` - Installed lockfile version for the API package.

**Infrastructure:**
- Google tag script - Pages such as `public/index.html` and `public/bai-viet/index.html` load `https://www.googletagmanager.com/gtag/js?id=AW-16682976859`.
- Firebase Hosting - `firebase.json` configures static hosting for `public/`.
- Vercel runtime expectation - `api/package.json` scripts and `public/assets/js/main.js` point booking submissions at the Vercel-hosted API URL `https://xeghepmientrungapi.vercel.app/api/send-email`.

## Configuration

**Environment:**
- API secrets are read only from environment variables in `api/api/send-email.js`.
- Required API variables: `GMAIL_USER`, `GMAIL_APP_PASSWORD`.
- Optional API variables: `BOOKING_EMAIL_TO`, `BOOKING_EMAIL_CC`.
- Secret-like files are ignored by `.gitignore`: `*.env`, `api/.env`, `.vercel`, and `.firebase`; no `.env*` file is present in the inspected tree.

**Build:**
- `firebase.json` configures the static hosting root, clean URLs, trailing slash behavior, ignored files, and cache headers.
- `.firebaserc` maps the default Firebase project to `xeghepmientrung-lander`.
- `api/package.json` configures the Node API package, dependency list, and Vercel scripts.
- `api/package-lock.json` pins API dependency resolution.
- No bundler config is detected: no `vite.config.*`, `webpack.config.*`, `rollup.config.*`, `tsconfig*.json`, `eslint.config.*`, or Prettier config files.

## Platform Requirements

**Development:**
- Serve `public/` with a static file server or Firebase Hosting emulator to exercise page routes configured by `firebase.json`.
- Run API work from `api/` with Node.js `>=20` and npm dependencies installed from `api/package-lock.json`.
- Provide `GMAIL_USER` and `GMAIL_APP_PASSWORD` to test `api/api/send-email.js`.
- Install or provide the Vercel CLI externally when using `npm run dev` or `npm run deploy` from `api/package.json`; Vercel is not listed as a package dependency.

**Production:**
- Static site target: Firebase Hosting using `firebase.json` with `public/` as the publish directory.
- API target: Vercel serverless deployment serving `api/api/send-email.js` at the URL consumed by `public/assets/js/main.js`.
- Public asset target: files under `public/assets/**` receive long-lived immutable cache headers from `firebase.json`.

---

*Stack analysis: 2026-08-21*
