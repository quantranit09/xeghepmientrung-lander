const bookingApiUrl =
  process.env.NEXT_PUBLIC_BOOKING_API_URL?.trim() ||
  "https://xeghepmientrungapi.vercel.app/api/send-email";

export const site = {
  name: "Bảo Trang Transport",
  shortName: "Bảo Trang",
  operatorName: "Bảo Trang Transport",
  tagline: "Đưa đón tận nơi, an toàn & đúng giờ",
  url: "https://xedanangquangtri.com",
  phoneDisplay: "0905 123 456",
  phoneHref: "tel:+84905123456",
  phoneE164: "+84905123456",
  zaloUrl: "https://zalo.me/0905123456",
  email: "baotrangtransport@gmail.com",
  facebookUrl: "https://www.facebook.com/profile.php?id=61552012090157",
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-16682976859",
  bookingApiUrl,
};

export const canonicalPath = (path: string) =>
  `${site.url}${path === "/" ? "/" : path.replace(/\/$/, "")}`;
