import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PrivacyContent } from "@/content/generated";
import { routeById } from "@/content/routes";

const route = routeById("privacy");

export const metadata: Metadata = route.metadata;

export default function PrivacyPage() {
  return (
    <>
      <JsonLd id={route.id} items={route.jsonLd} />
      <PrivacyContent />
    </>
  );
}
