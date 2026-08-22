import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { NotFoundContent } from "@/content/generated";
import { routeById } from "@/content/routes";

const route = routeById("notFound");

export const metadata: Metadata = route.metadata;

export default function NotFound() {
  return (
    <>
      <JsonLd id={route.id} items={route.jsonLd} />
      <NotFoundContent />
    </>
  );
}
