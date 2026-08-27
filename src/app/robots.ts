import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const publicDisallowPaths = ["/admin/", "/cgi-bin/", "/tmp/", "/private/"];

const aiCrawlerUserAgents = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...aiCrawlerUserAgents.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: publicDisallowPaths,
      })),
      {
        userAgent: "*",
        allow: "/",
        disallow: publicDisallowPaths,
      },
    ],
    sitemap: [`${site.url}/sitemap.xml`],
  };
}
