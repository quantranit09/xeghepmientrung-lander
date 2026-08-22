import type { MetadataRoute } from "next";
import { sitemapRoutes } from "@/content/routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-08-21T00:00:00+07:00");

  return sitemapRoutes.map((route) => ({
    url: route.canonical,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
