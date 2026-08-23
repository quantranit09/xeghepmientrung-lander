# Bảo Trang Transport Landing Page

Next.js static export landing page for Bảo Trang Transport private car, contract car, and transfer bookings.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

`next.config.ts` uses `output: "export"`, so `npm start` serves the generated `out/` directory through `scripts/serve-out.mjs`.

## Form Submissions

The trip request form submits to the Vercel serverless email API in `api/api/send-email.js`.

Create `.env.local` from `.env.example` and set:

```bash
NEXT_PUBLIC_BOOKING_API_URL=https://xeghepmientrungapi.vercel.app/api/send-email
```

Because this is a static export, `NEXT_PUBLIC_*` values are baked into the client bundle at build time. Set them before running `npm run build`.

The API package sends email through Gmail SMTP. Configure these environment variables in the API deployment:

```bash
GMAIL_USER=booking-sender@gmail.com
GMAIL_APP_PASSWORD=google_app_password
BOOKING_EMAIL_TO=tranvantrieu.qt@gmail.com
BOOKING_EMAIL_CC=
ALLOW_ORIGINS=https://baotrangtransport.com,https://www.baotrangtransport.com,https://xedanangquangtri.com,https://www.xedanangquangtri.com
```

## Vercel Deployment

This repository is deployed as two Vercel projects from the same Git repository.

### 1. Frontend project

- Root Directory: `.`
- Framework Preset: `Next.js`
- Install Command: `npm ci`
- Build Command: `npm run build`
- Environment Variables:

```bash
NEXT_PUBLIC_BOOKING_API_URL=https://xeghepmientrungapi.vercel.app/api/send-email
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-16682976859
```

Add the production domains `baotrangtransport.com` and `xedanangquangtri.com` to this project as needed.

### 2. Email API project

- Root Directory: `api`
- Framework Preset: `Other`
- Install Command: `npm ci`
- Function: `api/send-email.js`, served as `/api/send-email`
- Environment Variables:

```bash
GMAIL_USER=booking-sender@gmail.com
GMAIL_APP_PASSWORD=google_app_password
BOOKING_EMAIL_TO=tranvantrieu.qt@gmail.com
BOOKING_EMAIL_CC=
ALLOW_ORIGINS=https://baotrangtransport.com,https://www.baotrangtransport.com,https://xedanangquangtri.com,https://www.xedanangquangtri.com,https://xeghepmientrung.com,https://www.xeghepmientrung.com
```

If the API project URL changes, update `NEXT_PUBLIC_BOOKING_API_URL` in the frontend project and redeploy the frontend.

### CLI shortcuts

```bash
npm run deploy:api
npm run deploy:frontend
npm run deploy:all
```

Run `npm run vercel:link` from the repository root to link the frontend project. Run `npm --prefix api run link` to link the API project.

## Useful Commands

```bash
npm run typecheck
npm run lint
npm run build
```
