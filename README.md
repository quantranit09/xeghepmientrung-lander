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
BOOKING_EMAIL_TO=baotrangtransport@gmail.com
BOOKING_EMAIL_CC=
ALLOW_ORIGINS=https://xedanangquangtri.com,https://www.xedanangquangtri.com
```

## Useful Commands

```bash
npm run typecheck
npm run lint
npm run build
```
