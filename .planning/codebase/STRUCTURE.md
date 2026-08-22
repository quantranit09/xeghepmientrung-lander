# Codebase Structure

**Analysis Date:** 2026-08-21

## Directory Layout

```text
xeghepmientrung-lander/
|-- .firebaserc                 # Firebase project alias for hosting
|-- .gitignore                  # Ignored env, Firebase, Vercel, and dependency artifacts
|-- .planning/
|   `-- codebase/               # Codebase mapping documents
|-- README.md                   # Project overview and SEO notes
|-- firebase.json               # Firebase Hosting configuration
|-- api/
|   |-- .gitignore              # API-local Vercel ignore rule
|   |-- package.json            # API package manifest and Vercel scripts
|   |-- package-lock.json       # API npm lockfile
|   `-- api/
|       `-- send-email.js       # Serverless booking email endpoint
`-- public/
    |-- index.html              # Main landing page
    |-- privacy.html            # Privacy policy
    |-- 404.html                # Branded 404 page
    |-- 500.html                # Branded 500 page
    |-- robots.txt              # Search crawler rules
    |-- sitemap.xml             # URL sitemap
    |-- sitemap-index.xml       # Sitemap index
    |-- assets/
    |   |-- css/
    |   |   |-- style.css       # Source CSS implementation
    |   |   `-- style.min.css   # Referenced minified CSS file
    |   |-- js/
    |   |   |-- gtag-config.js  # Google tag/event tracking setup
    |   |   |-- main.js         # Source booking/contact behavior
    |   |   `-- main.min.js     # Referenced minified JS file
    |   `-- images/             # Logos, favicons, and responsive WebP imagery
    `-- bai-viet/
        |-- index.html          # Blog/article collection page
        |-- da-nang-quang-tri/
        |   `-- index.html      # Route article page
        |-- da-nang-quang-binh/
        |   `-- index.html      # Route article page
        |-- lich-trinh-xe-ghep-da-nang-hue/
        |   `-- index.html      # Route article page
        |-- kinh-nghiem-xe-ghep-da-nang-quang-tri/
        |   `-- index.html      # Topic article page
        |-- meo-dat-xe-ghep-tiet-kiem/
        |   `-- index.html      # Topic article page
        |-- so-sanh-xe-khach-va-xe-ghep/
        |   `-- index.html      # Topic article page
        `-- xe-ghep-an-toan-cho-tre-em/
            `-- index.html      # Topic article page
```

## Directory Purposes

**Project Root:**
- Purpose: Holds deployment configuration, project documentation, Firebase metadata, and the two deployable surfaces.
- Contains: `README.md`, `firebase.json`, `.firebaserc`, `.gitignore`, `public/`, `api/`, and `.planning/`.
- Key files: `firebase.json`, `.firebaserc`, `README.md`.

**`public/`:**
- Purpose: Firebase Hosting public root and static website source.
- Contains: Main page, policy page, error pages, SEO crawler files, shared assets, and blog/article routes.
- Key files: `public/index.html`, `public/privacy.html`, `public/robots.txt`, `public/sitemap.xml`, `public/sitemap-index.xml`.

**`public/assets/css/`:**
- Purpose: Shared visual styling for the static site.
- Contains: Source stylesheet `public/assets/css/style.css` and referenced stylesheet `public/assets/css/style.min.css`.
- Key files: `public/assets/css/style.css`, `public/assets/css/style.min.css`.

**`public/assets/js/`:**
- Purpose: Shared browser behavior and analytics setup.
- Contains: Booking/contact behavior in `public/assets/js/main.js`, analytics setup in `public/assets/js/gtag-config.js`, and referenced script `public/assets/js/main.min.js`.
- Key files: `public/assets/js/main.js`, `public/assets/js/main.min.js`, `public/assets/js/gtag-config.js`.

**`public/assets/images/`:**
- Purpose: Static image asset library for pages and social previews.
- Contains: Logos, favicons, touch icons, and WebP route/tour images such as `public/assets/images/hero-1200.webp`, `public/assets/images/minivan-1200.webp`, and `public/assets/images/hue_trip-1200.webp`.
- Key files: `public/assets/images/logo.png`, `public/assets/images/full-logo.png`, `public/assets/images/hero-1200.webp`, `public/assets/images/favicon-32.png`.

**`public/bai-viet/`:**
- Purpose: SEO article collection and article route tree.
- Contains: `public/bai-viet/index.html` and article directories with `index.html` files.
- Key files: `public/bai-viet/index.html`, `public/bai-viet/da-nang-quang-tri/index.html`, `public/bai-viet/da-nang-quang-binh/index.html`, `public/bai-viet/so-sanh-xe-khach-va-xe-ghep/index.html`.

**`api/`:**
- Purpose: Separate Node.js package for serverless API deployment.
- Contains: API package manifest, npm lockfile, ignore file, and serverless endpoint directory.
- Key files: `api/package.json`, `api/package-lock.json`, `api/.gitignore`.

**`api/api/`:**
- Purpose: Serverless endpoint files.
- Contains: `api/api/send-email.js`.
- Key files: `api/api/send-email.js`.

**`.planning/codebase/`:**
- Purpose: Generated codebase intelligence for GSD planning.
- Contains: `STACK.md`, `INTEGRATIONS.md`, `ARCHITECTURE.md`, and `STRUCTURE.md`.
- Key files: `.planning/codebase/STACK.md`, `.planning/codebase/INTEGRATIONS.md`, `.planning/codebase/ARCHITECTURE.md`, `.planning/codebase/STRUCTURE.md`.

## Key File Locations

**Entry Points:**
- `public/index.html`: Main landing page and booking form entry.
- `public/bai-viet/index.html`: Article collection entry.
- `public/bai-viet/*/index.html`: Individual article route entries.
- `public/privacy.html`: Privacy policy route.
- `public/404.html`: 404 fallback page.
- `public/500.html`: 500 fallback page.
- `api/api/send-email.js`: Serverless API entry for booking email delivery.

**Configuration:**
- `firebase.json`: Firebase Hosting public root, clean URLs, trailing slash setting, ignored patterns, and cache headers.
- `.firebaserc`: Firebase project alias.
- `.gitignore`: Ignores env files, API dependencies, `.firebase`, `.vercel`, `api/.env`, and `.DS_Store`.
- `api/package.json`: API package metadata, Node engine, Nodemailer dependency, and Vercel scripts.
- `api/package-lock.json`: API dependency lockfile.
- `api/.gitignore`: Ignores API-local `.vercel`.

**Core Logic:**
- `public/assets/js/main.js`: Booking form submission, CTA tracking hooks, API `fetch()`, and form status rendering.
- `public/assets/js/gtag-config.js`: Google tag configuration, event tracking helpers, conversion helpers, and global DOM listeners.
- `api/api/send-email.js`: CORS handling, JSON body parsing, payload validation, email template creation, and Nodemailer delivery.
- `public/assets/css/style.css`: Shared responsive UI styling for pages, grids, forms, cards, header, mobile quickbar, footer, pricing, testimonials, and tour content.

**Testing:**
- Not detected. No test directory, test config, or test files are present.

**SEO Files:**
- `public/robots.txt`: Crawler allow/disallow rules and sitemap declarations.
- `public/sitemap.xml`: XML URL list.
- `public/sitemap-index.xml`: Sitemap index.
- `public/index.html`: Main page JSON-LD blocks for service, organization/local business, FAQ, breadcrumbs, and reviews.
- `public/bai-viet/index.html`: CollectionPage and BreadcrumbList JSON-LD.
- `public/bai-viet/*/index.html`: Article and breadcrumb JSON-LD.

## Naming Conventions

**Files:**
- Static route files use `index.html` inside route directories, for example `public/bai-viet/da-nang-quang-tri/index.html`.
- Root static pages use lowercase descriptive names, for example `public/privacy.html`, `public/404.html`, and `public/500.html`.
- CSS and JS assets use lowercase names, for example `public/assets/css/style.css`, `public/assets/css/style.min.css`, `public/assets/js/main.js`, and `public/assets/js/gtag-config.js`.
- API endpoint files use lowercase kebab-case, for example `api/api/send-email.js`.
- Image assets use descriptive lowercase names with hyphenated size variants or underscore-separated subjects, for example `public/assets/images/hero-1200.webp`, `public/assets/images/minivan-1600.webp`, and `public/assets/images/hue_trip-1200.webp`.

**Directories:**
- Blog/article route directories use lowercase kebab-case slugs, for example `public/bai-viet/meo-dat-xe-ghep-tiet-kiem/`.
- Shared asset directories are grouped by type under `public/assets/css/`, `public/assets/js/`, and `public/assets/images/`.
- API source uses nested `api/api/`, where the outer `api/` is the Node package and the inner `api/` contains serverless endpoint files.

## Where to Add New Code

**New Main-Site Section:**
- Primary code: `public/index.html`.
- Styles: `public/assets/css/style.css`.
- Deployed asset sync: update the referenced `public/assets/css/style.min.css` when pages continue linking `style.min.css`.
- Behavior: add DOM logic to `public/assets/js/main.js` and keep `public/assets/js/main.min.js` in sync when pages continue linking `main.min.js`.

**New Article Page:**
- Implementation: create `public/bai-viet/<slug>/index.html`.
- Listing: add the article card/link to `public/bai-viet/index.html`.
- Navigation: add relevant footer or related-article links in `public/index.html`, `public/bai-viet/index.html`, and related `public/bai-viet/*/index.html` pages when needed.
- SEO: add canonical URL, Open Graph/Twitter metadata, Article JSON-LD, BreadcrumbList JSON-LD, and update `public/sitemap.xml`.

**New Static Route:**
- Implementation: add `public/<route>.html` for flat extension routes or `public/<route>/index.html` for clean directory routes.
- Hosting: keep route behavior consistent with `firebase.json` clean URLs and `trailingSlash: false`.
- SEO: update `public/sitemap.xml` and links from `public/index.html` or `public/bai-viet/index.html` as applicable.

**New Component/Module:**
- HTML pattern: inline the markup in the target page such as `public/index.html` or `public/bai-viet/<slug>/index.html`.
- Styling pattern: add reusable classes to `public/assets/css/style.css`; avoid adding page-only CSS unless the surrounding file already uses inline route-specific styles.
- Browser behavior pattern: add DOM-ready handlers or helper functions to `public/assets/js/main.js`; add cross-page analytics behavior to `public/assets/js/gtag-config.js`.

**New API Endpoint:**
- Implementation: add `api/api/<endpoint-name>.js`.
- Dependencies: add package dependencies to `api/package.json` and refresh `api/package-lock.json`.
- Environment: document new required variables next to the API code and keep secret files ignored by `.gitignore`.
- CORS: follow the allowlist pattern in `api/api/send-email.js` for public browser-called endpoints.

**Utilities:**
- Shared client helpers: `public/assets/js/main.js` for booking/contact behavior or `public/assets/js/gtag-config.js` for tracking behavior.
- Server helpers: keep endpoint-local helper functions in `api/api/send-email.js` or colocate them with a new endpoint under `api/api/` unless multiple API endpoints require sharing.
- Shared CSS utilities: `public/assets/css/style.css`.

**New Images:**
- Location: `public/assets/images/`.
- Naming: use descriptive lowercase names and keep size variants explicit, following examples such as `public/assets/images/hero-1200.webp` and `public/assets/images/danang_trip-1600.webp`.
- References: update HTML `src`, `srcset`, Open Graph image metadata, and JSON-LD image fields in the relevant `public/*.html` or `public/bai-viet/*/index.html` files.

## Special Directories

**`.planning/`:**
- Purpose: GSD planning and codebase intelligence artifacts.
- Generated: Yes.
- Committed: Not determined from files alone.

**`.git/`:**
- Purpose: Git repository metadata.
- Generated: Yes.
- Committed: No.

**`.firebase`:**
- Purpose: Firebase local/deployment metadata.
- Generated: Yes.
- Committed: No; ignored by `.gitignore`.

**`.vercel`:**
- Purpose: Vercel local/deployment metadata.
- Generated: Yes.
- Committed: No; ignored by `.gitignore` and `api/.gitignore`.

**`api/node_modules`:**
- Purpose: Installed API dependencies.
- Generated: Yes.
- Committed: No; ignored by `.gitignore`.

---

*Structure analysis: 2026-08-21*
