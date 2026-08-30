import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { CampaignLandingContent } from "@/content/CampaignLandingContent";
import { campaignPages } from "@/content/campaign-pages";
import { routeById } from "@/content/routes";

const route = routeById("fleet");
const page = campaignPages.fleet;

export const metadata: Metadata = route.metadata;

export default function DongXeDaNangQuangTriPage() {
  return (
    <>
      <JsonLd id={route.id} items={route.jsonLd} />
      <CampaignLandingContent page={page} />
    </>
  );
}
