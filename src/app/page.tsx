import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { HomeContent } from "@/content/generated";
import { routeById } from "@/content/routes";

const route = routeById("home");

export const metadata: Metadata = route.metadata;

export default function HomePage() {
  return (
    <>
      <JsonLd id={route.id} items={route.jsonLd} />
      <HomeContent />
    </>
  );
}
