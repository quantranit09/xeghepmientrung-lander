import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { BlogIndexContent } from "@/content/generated";
import { routeById } from "@/content/routes";

const route = routeById("blog");

export const metadata: Metadata = route.metadata;

export default function BlogPage() {
  return (
    <>
      <JsonLd id={route.id} items={route.jsonLd} />
      <BlogIndexContent />
    </>
  );
}
