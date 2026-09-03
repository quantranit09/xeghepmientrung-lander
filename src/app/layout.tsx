import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { ClientBehaviors } from "@/components/ClientBehaviors";
import { site } from "@/lib/site";
import "./globals.css";

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
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${site.googleAdsId}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${site.googleAdsId}', {
              page_title: document.title,
              page_location: window.location.href,
              custom_map: {
                dimension1: 'service_type',
                dimension2: 'location'
              }
            });
          `}
        </Script>
        {children}
        <ClientBehaviors />
      </body>
    </html>
  );
}
