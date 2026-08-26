import type { Metadata } from "next";
import { contentDates } from "@/content/dates";
import { canonicalPath, site } from "@/lib/site";

export const articleSlugs = [
  "dat-xe-rieng-da-nang-quang-tri",
  "dat-xe-rieng-da-nang-quang-binh",
  "transfer-da-nang-hue",
  "kinh-nghiem-thue-xe-rieng-mien-trung",
  "meo-dat-xe-hop-dong-tiet-kiem",
  "so-sanh-xe-khach-va-xe-rieng",
  "thue-xe-rieng-an-toan-cho-gia-dinh",
] as const;

export type ArticleSlug = (typeof articleSlugs)[number];
export type RouteChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";
export type JsonLdValue = Record<string, unknown> | unknown[];

type MetadataInput = {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  noIndex?: boolean;
};

export type ContentRoute = {
  id: string;
  route: string;
  canonical: string;
  changeFrequency: RouteChangeFrequency;
  priority: number;
  includeInSitemap: boolean;
  metadata: Metadata;
  jsonLd: JsonLdValue[];
};

function buildMetadata({
  title,
  description,
  canonical,
  ogImage = `${site.url}/assets/bao-trang/hero-dragon-bridge-transfer.webp`,
  noIndex = false,
}: MetadataInput): Metadata {
  return {
    metadataBase: new URL(site.url),
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: canonical,
      siteName: site.name,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-image-preview": "large",
      },
    },
  };
}

function serviceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: site.name,
    alternateName: site.operatorName,
    url: site.url,
    image: `${site.url}/assets/bao-trang/hero-dragon-bridge-transfer.webp`,
    logo: `${site.url}/assets/bao-trang/logo-mark-192.png`,
    telephone: site.phoneE164,
    email: site.email,
    priceRange: "Báo giá theo chuyến",
    description:
      "Xe riêng Đà Nẵng - Quảng Trị, xe hợp đồng và transfer 4 chỗ, 5 chỗ, 7 chỗ, đón trả tận nơi theo chuyến. Có xe 16 chỗ cho nhóm đông.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Đà Nẵng",
      addressCountry: "VN",
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Đà Nẵng",
      },
      {
        "@type": "AdministrativeArea",
        name: "Quảng Trị",
      },
      {
        "@type": "AdministrativeArea",
        name: "Quảng Bình",
      },
      {
        "@type": "AdministrativeArea",
        name: "Huế",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phoneE164,
      contactType: "customer service",
      areaServed: "VN",
      availableLanguage: ["vi"],
    },
    sameAs: [site.facebookUrl, site.zaloUrl],
    provider: {
      "@type": "Organization",
      name: site.operatorName,
      url: site.url,
      logo: `${site.url}/assets/bao-trang/logo-mark-192.png`,
    },
    serviceType: "Private transfer and contracted car service",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Xe Đà Nẵng - Quảng Trị",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Xe điện 5 chỗ",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "VND",
            description: "Báo giá theo xe và lịch trình",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Xe riêng 4 chỗ",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "VND",
            description: "Báo giá theo xe và lịch trình",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Xe riêng 7 chỗ",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "VND",
            description: "Báo giá theo xe và lịch trình",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Xe 16 chỗ cho nhóm đông",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "VND",
            description: "Báo giá theo xe và lịch trình",
          },
        },
      ],
    },
  };
}

function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: "vi-VN",
    publisher: {
      "@type": "Organization",
      name: site.operatorName,
      url: site.url,
      logo: `${site.url}/assets/bao-trang/logo-mark-192.png`,
    },
  };
}

function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.operatorName,
    url: site.url,
    logo: `${site.url}/assets/bao-trang/logo-mark-192.png`,
    image: `${site.url}/assets/bao-trang/hero-dragon-bridge-transfer.webp`,
    telephone: site.phoneE164,
    email: site.email,
    sameAs: [site.facebookUrl, site.zaloUrl],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phoneE164,
      contactType: "customer service",
      areaServed: "VN",
      availableLanguage: ["vi"],
    },
  };
}

function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "vi-VN",
    mainEntity: [
      {
        "@type": "Question",
        name: "Dịch vụ tính giá như thế nào?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dịch vụ báo giá theo chuyến xe riêng hoặc xe hợp đồng, dựa trên điểm đón trả, loại xe, giờ đi và lịch trình thực tế.",
        },
      },
      {
        "@type": "Question",
        name: "Có xe 4 chỗ, 5 chỗ và 7 chỗ không?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Có. Xe con 4 chỗ, 5 chỗ và 7 chỗ là lựa chọn chính; xe 16 chỗ có thể sắp xếp thêm cho nhóm đông khi cần.",
        },
      },
      {
        "@type": "Question",
        name: "Có đón sân bay và khách sạn không?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Có. Dịch vụ hỗ trợ đưa đón sân bay, khách sạn, nhà riêng và các điểm du lịch theo lịch trình đã xác nhận.",
        },
      },
    ],
  };
}

function breadcrumbJsonLd(title: string, route: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Trang chủ",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Hướng dẫn",
        item: canonicalPath("/bai-viet"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: canonicalPath(route),
      },
    ],
  };
}

function articleJsonLd(title: string, route: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalPath(route),
    },
    headline: title,
    description,
    url: canonicalPath(route),
    image: [`${site.url}/assets/bao-trang/hero-dragon-bridge-transfer.webp`],
    inLanguage: "vi-VN",
    datePublished: contentDates.publishedAt,
    dateModified: contentDates.modifiedAt,
    author: {
      "@type": "Organization",
      name: site.operatorName,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.operatorName,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/assets/bao-trang/logo-mark-192.png`,
      },
    },
  };
}

const articles = {
  "dat-xe-rieng-da-nang-quang-tri": {
    title: "Đặt xe riêng Đà Nẵng - Quảng Trị | Xe 4-7 chỗ",
    description:
      "Hướng dẫn đặt xe riêng Đà Nẵng - Quảng Trị theo chuyến, chọn xe 4 chỗ, 5 chỗ, 7 chỗ, đón trả tận nơi và xác nhận lịch trình rõ ràng. Có xe 16 chỗ khi cần.",
    route: "/bai-viet/dat-xe-rieng-da-nang-quang-tri",
    priority: 0.8,
  },
  "dat-xe-rieng-da-nang-quang-binh": {
    title: "Đặt xe riêng Đà Nẵng - Quảng Bình | Transfer theo chuyến",
    description:
      "Tư vấn đặt xe riêng Đà Nẵng - Quảng Bình, lựa chọn xe 4 chỗ, 5 chỗ, 7 chỗ cho chặng dài, hành lý và điểm dừng. Có xe 16 chỗ cho nhóm đông.",
    route: "/bai-viet/dat-xe-rieng-da-nang-quang-binh",
    priority: 0.8,
  },
  "transfer-da-nang-hue": {
    title: "Transfer Đà Nẵng - Huế | Xe riêng sân bay, khách sạn",
    description:
      "Dịch vụ transfer Đà Nẵng - Huế bằng xe riêng 4 chỗ, 5 chỗ, 7 chỗ, hỗ trợ sân bay, khách sạn và lịch trình trong ngày. Có xe 16 chỗ khi cần.",
    route: "/bai-viet/transfer-da-nang-hue",
    priority: 0.7,
  },
  "kinh-nghiem-thue-xe-rieng-mien-trung": {
    title: "Kinh nghiệm thuê xe riêng Đà Nẵng - Quảng Trị",
    description:
      "Những điều cần chốt trước khi thuê xe riêng Đà Nẵng - Quảng Trị: loại xe, hành trình, phụ phí, thông tin tài xế và lịch trình.",
    route: "/bai-viet/kinh-nghiem-thue-xe-rieng-mien-trung",
    priority: 0.6,
  },
  "meo-dat-xe-hop-dong-tiet-kiem": {
    title: "Mẹo đặt xe hợp đồng tiết kiệm",
    description:
      "Cách chuẩn bị lịch trình, chọn loại xe và giờ đi để nhận báo giá xe hợp đồng hợp lý hơn.",
    route: "/bai-viet/meo-dat-xe-hop-dong-tiet-kiem",
    priority: 0.6,
  },
  "so-sanh-xe-khach-va-xe-rieng": {
    title: "So sánh xe khách và xe riêng | Chọn phương án phù hợp",
    description:
      "So sánh xe khách và xe riêng 4 chỗ, 5 chỗ, 7 chỗ theo sự linh hoạt, riêng tư, hành lý, điểm đón trả và chi phí theo chuyến.",
    route: "/bai-viet/so-sanh-xe-khach-va-xe-rieng",
    priority: 0.6,
  },
  "thue-xe-rieng-an-toan-cho-gia-dinh": {
    title: "Thuê xe riêng an toàn cho gia đình",
    description:
      "Lưu ý khi thuê xe riêng cho gia đình có trẻ em, người lớn tuổi, nhiều hành lý hoặc lịch trình cần dừng nghỉ.",
    route: "/bai-viet/thue-xe-rieng-an-toan-cho-gia-dinh",
    priority: 0.6,
  },
} satisfies Record<
  ArticleSlug,
  { title: string; description: string; route: string; priority: number }
>;

const articleContentRoutes = Object.fromEntries(
  articleSlugs.map((slug) => {
    const article = articles[slug];
    return [
      slug,
      {
        id: slug,
        route: article.route,
        canonical: canonicalPath(article.route),
        changeFrequency: "monthly",
        priority: article.priority,
        includeInSitemap: true,
        metadata: buildMetadata({
          title: article.title,
          description: article.description,
          canonical: canonicalPath(article.route),
        }),
        jsonLd: [
          breadcrumbJsonLd(article.title, article.route),
          articleJsonLd(article.title, article.route, article.description),
        ],
      },
    ];
  }),
) as unknown as Record<ArticleSlug, ContentRoute>;

export const contentRoutes = {
  home: {
    id: "home",
    route: "/",
    canonical: canonicalPath("/"),
    changeFrequency: "weekly",
    priority: 1,
    includeInSitemap: true,
    metadata: buildMetadata({
      title: "Bảo Trang Transport | Xe riêng 4-7 chỗ, đón trả tận nơi",
      description:
        "Đặt xe riêng Đà Nẵng - Quảng Trị, Đông Hà, Hải Lăng, Gio Linh, Vĩnh Linh, Lao Bảo. Xe 4 chỗ, 5 chỗ, 7 chỗ, giá theo chuyến. Có xe 16 chỗ khi cần.",
      canonical: canonicalPath("/"),
    }),
    jsonLd: [websiteJsonLd(), organizationJsonLd(), serviceJsonLd(), faqJsonLd()],
  },
  privacy: {
    id: "privacy",
    route: "/privacy",
    canonical: canonicalPath("/privacy"),
    changeFrequency: "yearly",
    priority: 0.3,
    includeInSitemap: true,
    metadata: buildMetadata({
      title: `Chính sách bảo mật | ${site.name}`,
      description:
        "Chính sách bảo mật khi gửi thông tin báo giá xe riêng Đà Nẵng - Quảng Trị, xe hợp đồng và transfer theo chuyến.",
      canonical: canonicalPath("/privacy"),
    }),
    jsonLd: [],
  },
  blog: {
    id: "blog",
    route: "/bai-viet",
    canonical: canonicalPath("/bai-viet"),
    changeFrequency: "weekly",
    priority: 0.7,
    includeInSitemap: true,
    metadata: buildMetadata({
      title: `Cẩm nang xe riêng & transfer | ${site.name}`,
      description:
        "Hướng dẫn đặt xe riêng 4 chỗ, 5 chỗ, 7 chỗ cho các chặng Đà Nẵng - Quảng Trị, Quảng Bình và khu vực lân cận. Có xe 16 chỗ cho nhóm đông.",
      canonical: canonicalPath("/bai-viet"),
    }),
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Cẩm nang xe riêng & transfer",
        url: canonicalPath("/bai-viet"),
        inLanguage: "vi-VN",
        publisher: {
          "@type": "Organization",
          name: site.operatorName,
          url: site.url,
        },
      },
    ],
  },
  ...articleContentRoutes,
  notFound: {
    id: "notFound",
    route: "/404",
    canonical: canonicalPath("/404"),
    changeFrequency: "yearly",
    priority: 0,
    includeInSitemap: false,
    metadata: buildMetadata({
      title: `404 - Không tìm thấy trang | ${site.name}`,
      description: "Trang bạn đang tìm kiếm không tồn tại hoặc đã được chuyển sang cấu trúc mới.",
      canonical: canonicalPath("/404"),
      noIndex: true,
    }),
    jsonLd: [],
  },
  serverError: {
    id: "serverError",
    route: "/500",
    canonical: canonicalPath("/500"),
    changeFrequency: "yearly",
    priority: 0,
    includeInSitemap: false,
    metadata: buildMetadata({
      title: `500 - Trang tạm gián đoạn | ${site.name}`,
      description: "Trang đang tạm gián đoạn. Vui lòng liên hệ hotline hoặc Zalo để đặt xe.",
      canonical: canonicalPath("/500"),
      noIndex: true,
    }),
    jsonLd: [],
  },
} satisfies Record<string, ContentRoute>;

export const sitemapRoutes = Object.values(contentRoutes).filter(
  (route) => route.includeInSitemap,
);

export const articleRoutes = articleContentRoutes;

export function routeById(id: keyof typeof contentRoutes) {
  return contentRoutes[id];
}

export function routeBySlug(slug: string) {
  return articleRoutes[slug as ArticleSlug] ?? null;
}
