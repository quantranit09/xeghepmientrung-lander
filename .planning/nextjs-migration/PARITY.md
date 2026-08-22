# Next.js Migration Parity Checklist

**Created:** 2026-08-21

## Route Inventory

| Current route/file | Target Next route | Status |
|---|---|---|
| `/` from `public/index.html` | `/` | Verified in `out/index.html` |
| `/privacy.html` from `public/privacy.html` | `/privacy` plus legacy redirect | Verified in `out/privacy.html` and `firebase.json` redirect |
| `/404.html` from `public/404.html` | `not-found.tsx` / exported `404.html` | Verified in `out/404.html` |
| `/500.html` from `public/500.html` | `/500` exported static route | Verified in `out/500.html` |
| `/bai-viet/` from `public/bai-viet/index.html` | `/bai-viet` | Verified in `out/bai-viet.html` |
| `/bai-viet/da-nang-quang-tri/` | `/bai-viet/da-nang-quang-tri` | Verified in `out/bai-viet/da-nang-quang-tri.html` |
| `/bai-viet/da-nang-quang-binh/` | `/bai-viet/da-nang-quang-binh` | Verified in `out/bai-viet/da-nang-quang-binh.html` |
| `/bai-viet/lich-trinh-xe-ghep-da-nang-hue/` | `/bai-viet/lich-trinh-xe-ghep-da-nang-hue` | Verified in `out/bai-viet/lich-trinh-xe-ghep-da-nang-hue.html` |
| `/bai-viet/kinh-nghiem-xe-ghep-da-nang-quang-tri/` | `/bai-viet/kinh-nghiem-xe-ghep-da-nang-quang-tri` | Verified in `out/bai-viet/kinh-nghiem-xe-ghep-da-nang-quang-tri.html` |
| `/bai-viet/meo-dat-xe-ghep-tiet-kiem/` | `/bai-viet/meo-dat-xe-ghep-tiet-kiem` | Verified in `out/bai-viet/meo-dat-xe-ghep-tiet-kiem.html` |
| `/bai-viet/so-sanh-xe-khach-va-xe-ghep/` | `/bai-viet/so-sanh-xe-khach-va-xe-ghep` | Verified in `out/bai-viet/so-sanh-xe-khach-va-xe-ghep.html` |
| `/bai-viet/xe-ghep-an-toan-cho-tre-em/` | `/bai-viet/xe-ghep-an-toan-cho-tre-em` | Verified in `out/bai-viet/xe-ghep-an-toan-cho-tre-em.html` |

## SEO Baseline

| Route | Current title/source | Canonical note |
|---|---|---|
| `/` | `Xe ghép Đà Nẵng ↔ Quảng Trị, Quảng Bình | Đón trả tận nơi – Xe Ghép Miền Trung` | Already canonical `/` |
| `/privacy.html` | `Chính sách bảo mật | Xe Ghép Miền Trung` | Current canonical uses `.html`; target should prefer `/privacy` |
| `/bai-viet/` | `Bài Viết - Xe Ghép Miền Trung | Thông Tin Chi Tiết Về Dịch Vụ Xe Ghép` | Current canonical has trailing slash |
| `/bai-viet/da-nang-quang-tri/` | `Xe ghép Đà Nẵng ↔ Quảng Trị | Đón tận nơi – Xe Ghép Miền Trung` | Current canonical has trailing slash |
| `/bai-viet/da-nang-quang-binh/` | `Xe ghép Đà Nẵng ↔ Quảng Bình | Đón tận nơi – Xe Ghép Miền Trung` | Current canonical has trailing slash |
| `/bai-viet/lich-trinh-xe-ghep-da-nang-hue/` | `Lịch Trình Xe Ghép Đà Nẵng ↔ Huế | Đón Tận Nơi – Xe Ghép Miền Trung` | Current canonical has trailing slash |
| `/bai-viet/kinh-nghiem-xe-ghep-da-nang-quang-tri/` | `Kinh Nghiệm Đi Xe Ghép Đà Nẵng ↔ Quảng Trị | Mẹo Hay Cho Du Khách` | Current canonical incorrectly points to a root `.html` URL |
| `/bai-viet/meo-dat-xe-ghep-tiet-kiem/` | `Mẹo Đặt Xe Ghép Tiết Kiệm - Bí Quyết Tiết Kiệm Chi Phí | Xe Ghép Miền Trung` | Current canonical has trailing slash |
| `/bai-viet/so-sanh-xe-khach-va-xe-ghep/` | `So Sánh Xe Khách và Xe Ghép - Nên Chọn Loại Nào? | Xe Ghép Miền Trung` | Current canonical incorrectly points to a root `.html` URL |
| `/bai-viet/xe-ghep-an-toan-cho-tre-em/` | `Xe Ghép An Toàn Cho Trẻ Em - Hướng Dẫn Đi Xe Ghép Với Trẻ | Xe Ghép Miền Trung` | Current canonical has trailing slash |

## Functional Parity

- Booking form must collect `name`, `phone`, `pickup`, `dropoff`, `date`, `time`, `seats`, and `note`.
- Booking form must require `name` and `phone`.
- Booking form must post to `https://xeghepmientrungapi.vercel.app/api/send-email` unless `NEXT_PUBLIC_BOOKING_API_URL` overrides it.
- Booking form success and failure states must show phone and Zalo fallback actions.
- `tel:+84826430430`, `https://zalo.me/0826430430`, `mailto:xeghepmientrung@gmail.com`, and Facebook links must remain available.
- Google Ads ID `AW-16682976859` must still load.
- Assets under `/assets/images/` must remain addressable.
- `robots.txt` must reference `https://xeghepmientrung.com/sitemap.xml`.
- `sitemap.xml` must include all migrated public routes, not only the subset in the current sitemap.

## Verification Commands

- `npm run typecheck`
- `npm run build`
- Serve `out/` locally and inspect `/`, `/privacy`, `/bai-viet`, all article routes, and `/404.html`.

## Verification Result

- `npm run typecheck`: Passed.
- `npm run lint`: Passed.
- `npm run build`: Passed.
- Static `out/` local href/src target check: Passed across 13 generated HTML files.
- Corrected migrated Quảng Trị article Open Graph and JSON-LD values that previously referenced Quảng Bình.
