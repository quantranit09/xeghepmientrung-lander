import type { MetadataRoute } from "next";
import { contentDates } from "@/content/dates";
import { sitemapRoutes } from "@/content/routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(contentDates.modifiedAt);

  return sitemapRoutes.map((route) => ({
    url: route.canonical,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
