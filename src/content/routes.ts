import type { Metadata } from "next";
import {
  campaignPageIds,
  campaignPages,
  type CampaignPage,
  type CampaignPageId,
} from "@/content/campaign-pages";
import { contentDates } from "@/content/dates";
import { canonicalPath, site } from "@/lib/site";

export const articleSlugs = [
  "dat-xe-rieng-da-nang-quang-tri",
  "thue-xe-da-nang-di-hai-lang",
  "xe-da-nang-di-dong-ha",
  "xe-san-bay-da-nang-di-quang-tri",
  "tim-xe-ghep-da-nang-quang-tri",
  "xe-da-nang-di-la-vang",
  "xe-da-nang-di-lao-bao",
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
      "Xe riêng Đà Nẵng - Quảng Trị, sân bay Đà Nẵng đi Hải Lăng, Đông Hà, La Vang, Lao Bảo bằng xe 4 chỗ, 5 chỗ, 7 chỗ, đón trả tận nơi theo chuyến.",
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

function pageBreadcrumbJsonLd(title: string, route: string) {
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
        name: title,
        item: canonicalPath(route),
      },
    ],
  };
}

function articleJsonLd(title: string, route: string, description: string) {
  const provider = {
    "@type": "Organization",
    name: site.operatorName,
    url: site.url,
    logo: `${site.url}/assets/bao-trang/logo-mark-192.png`,
    sameAs: [site.facebookUrl, site.zaloUrl],
  };

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
    isAccessibleForFree: true,
    datePublished: contentDates.publishedAt,
    dateModified: contentDates.modifiedAt,
    author: provider,
    publisher: {
      "@type": "Organization",
      name: site.operatorName,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/assets/bao-trang/logo-mark-192.png`,
      },
    },
    about: {
      "@type": "Service",
      name: "Xe riêng và xe hợp đồng miền Trung",
      serviceType: "Private transfer and contracted car service",
      provider,
      areaServed: [
        { "@type": "AdministrativeArea", name: "Đà Nẵng" },
        { "@type": "AdministrativeArea", name: "Quảng Trị" },
        { "@type": "AdministrativeArea", name: "Huế" },
        { "@type": "AdministrativeArea", name: "Quảng Bình" },
      ],
    },
    mentions: [
      { "@type": "Place", name: "Đà Nẵng" },
      { "@type": "Place", name: "Hải Lăng" },
      { "@type": "Place", name: "Đông Hà" },
      { "@type": "Place", name: "La Vang" },
      { "@type": "Place", name: "Lao Bảo" },
      { "@type": "Place", name: "Quảng Trị" },
    ],
  };
}

function campaignWebPageJsonLd(page: CampaignPage) {
  const provider = {
    "@type": "Organization",
    name: site.operatorName,
    url: site.url,
    logo: `${site.url}/assets/bao-trang/logo-mark-192.png`,
    telephone: site.phoneE164,
    sameAs: [site.facebookUrl, site.zaloUrl],
  };

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.headline,
    description: page.description,
    url: canonicalPath(page.route),
    inLanguage: "vi-VN",
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
    },
    about: {
      "@type": "Service",
      name: page.headline,
      serviceType: page.kicker,
      provider,
      areaServed: [
        { "@type": "AdministrativeArea", name: "Đà Nẵng" },
        { "@type": "AdministrativeArea", name: "Quảng Trị" },
        { "@type": "AdministrativeArea", name: "Huế" },
        { "@type": "AdministrativeArea", name: "Quảng Bình" },
      ],
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${site.url}${page.heroImage}`,
    },
  };
}

const campaignRoutePriority: Record<CampaignPageId, number> = {
  xeRieng: 0.9,
  xeGhep: 0.86,
  pricing: 0.84,
  serviceArea: 0.82,
  fleet: 0.78,
  contact: 0.8,
};

const campaignContentRoutes = Object.fromEntries(
  campaignPageIds.map((id) => {
    const page = campaignPages[id];
    return [
      id,
      {
        id,
        route: page.route,
        canonical: canonicalPath(page.route),
        changeFrequency: "monthly",
        priority: campaignRoutePriority[id],
        includeInSitemap: true,
        metadata: buildMetadata({
          title: page.title,
          description: page.description,
          canonical: canonicalPath(page.route),
          ogImage: `${site.url}${page.heroImage}`,
        }),
        jsonLd: [
          pageBreadcrumbJsonLd(page.navLabel, page.route),
          campaignWebPageJsonLd(page),
        ],
      },
    ];
  }),
) as unknown as Record<CampaignPageId, ContentRoute>;

const articles = {
  "dat-xe-rieng-da-nang-quang-tri": {
    title: "Đặt xe riêng Đà Nẵng - Quảng Trị | Xe 4-7 chỗ",
    description:
      "Hướng dẫn đặt xe riêng Đà Nẵng - Quảng Trị theo chuyến, chọn xe 4 chỗ, 5 chỗ, 7 chỗ, đón trả tận nơi và xác nhận lịch trình rõ ràng. Có xe 16 chỗ khi cần.",
    route: "/bai-viet/dat-xe-rieng-da-nang-quang-tri",
    priority: 0.8,
  },
  "thue-xe-da-nang-di-hai-lang": {
    title: "Thuê xe Đà Nẵng đi Hải Lăng | Xe riêng 4-7 chỗ",
    description:
      "Thuê xe Đà Nẵng đi Hải Lăng theo chuyến, đón tận nơi tại sân bay, khách sạn, nhà riêng. Xe 4 chỗ, 5 chỗ, 7 chỗ, báo giá rõ trước khi đi.",
    route: "/bai-viet/thue-xe-da-nang-di-hai-lang",
    priority: 0.75,
  },
  "xe-da-nang-di-dong-ha": {
    title: "Xe Đà Nẵng đi Đông Hà | Đón trả tận nơi",
    description:
      "Đặt xe Đà Nẵng đi Đông Hà bằng xe riêng 4 chỗ, 5 chỗ, 7 chỗ. Phù hợp công tác, gia đình, đón sân bay và trả đúng địa chỉ tại Đông Hà.",
    route: "/bai-viet/xe-da-nang-di-dong-ha",
    priority: 0.75,
  },
  "xe-san-bay-da-nang-di-quang-tri": {
    title: "Xe sân bay Đà Nẵng đi Quảng Trị | Xe riêng",
    description:
      "Đặt xe sân bay Đà Nẵng đi Quảng Trị, Hải Lăng, Đông Hà, La Vang, Lao Bảo. Tài xế theo giờ bay, đón sảnh, xe riêng 4-7 chỗ, báo giá trước.",
    route: "/bai-viet/xe-san-bay-da-nang-di-quang-tri",
    priority: 0.75,
  },
  "tim-xe-ghep-da-nang-quang-tri": {
    title: "Tìm xe ghép Đà Nẵng - Quảng Trị? Gợi ý xe riêng",
    description:
      "Nếu đang tìm xe ghép Đà Nẵng - Quảng Trị để tiết kiệm, hãy cân nhắc xe riêng hoặc bao xe theo chuyến cho nhóm 2-6 khách, đón trả theo lịch hẹn.",
    route: "/bai-viet/tim-xe-ghep-da-nang-quang-tri",
    priority: 0.72,
  },
  "xe-da-nang-di-la-vang": {
    title: "Xe Đà Nẵng đi La Vang | Xe riêng đi lễ",
    description:
      "Đặt xe Đà Nẵng đi La Vang bằng xe riêng, phù hợp đi lễ, gia đình, nhóm nhỏ. Có thể ghé Huế, Hải Lăng, Thành cổ Quảng Trị theo lịch trình.",
    route: "/bai-viet/xe-da-nang-di-la-vang",
    priority: 0.7,
  },
  "xe-da-nang-di-lao-bao": {
    title: "Xe Đà Nẵng đi Lao Bảo | Xe riêng theo chuyến",
    description:
      "Đặt xe Đà Nẵng đi Lao Bảo, Hướng Hóa bằng xe riêng 4 chỗ, 5 chỗ, 7 chỗ. Tư vấn giờ đi, điểm dừng, hành lý và báo giá theo chuyến.",
    route: "/bai-viet/xe-da-nang-di-lao-bao",
    priority: 0.7,
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
    title: "Mẹo đặt xe hợp đồng tiết kiệm khi đi liên tỉnh",
    description:
      "Cách chuẩn bị lịch trình, chọn loại xe, chốt giờ đi, điểm dừng và hành lý để nhận báo giá xe hợp đồng rõ ràng hơn.",
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
      "Lưu ý khi thuê xe riêng cho gia đình có trẻ em, người lớn tuổi hoặc nhiều hành lý: chọn xe, chốt điểm nghỉ và chuẩn bị trước chuyến.",
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
        "Đặt xe riêng Đà Nẵng - Quảng Trị: sân bay Đà Nẵng đi Hải Lăng, Đông Hà, La Vang, Lao Bảo. Xe 4 chỗ, 5 chỗ, 7 chỗ, báo giá theo chuyến.",
      canonical: canonicalPath("/"),
    }),
    jsonLd: [websiteJsonLd(), organizationJsonLd(), serviceJsonLd(), faqJsonLd()],
  },
  ...campaignContentRoutes,
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
        "Hướng dẫn đặt xe riêng 4 chỗ, 5 chỗ, 7 chỗ cho tuyến Đà Nẵng - Quảng Trị, Hải Lăng, Đông Hà, La Vang, Lao Bảo và Quảng Bình.",
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
