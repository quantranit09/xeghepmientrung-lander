import type { Metadata, Viewport } from "next";
import { ClientBehaviors } from "@/components/ClientBehaviors";
import { site } from "@/lib/site";
import "./globals.css";

const googleTagSnippet = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', '${site.googleAdsId}');
`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  icons: {
    icon: [{ url: "/assets/bao-trang/logo-mark-192.png", type: "image/png", sizes: "192x192" }],
    apple: [{ url: "/assets/bao-trang/apple-touch-icon.png", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#079455",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${site.googleAdsId}`} />
        <script dangerouslySetInnerHTML={{ __html: googleTagSnippet }} />
      </head>
      <body>
        {children}
        <ClientBehaviors />
      </body>
    </html>
  );
}
