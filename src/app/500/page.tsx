import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServerErrorContent } from "@/content/generated";
import { routeById } from "@/content/routes";

const route = routeById("serverError");

export const metadata: Metadata = route.metadata;

export default function ServerErrorPage() {
  return (
    <>
      <JsonLd id={route.id} items={route.jsonLd} />
      <ServerErrorContent />
    </>
  );
}
