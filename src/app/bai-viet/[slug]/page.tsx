import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { articleContentBySlug } from "@/content/article-content";
import {
  articleSlugs,
  routeBySlug,
  type ArticleSlug,
} from "@/content/routes";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return articleSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = routeBySlug(slug);
  if (!route) return {};
  return route.metadata;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const route = routeBySlug(slug as ArticleSlug);
  if (!route) notFound();
  const Content = articleContentBySlug[slug as ArticleSlug];
  if (!Content) notFound();

  return (
    <>
      <JsonLd id={route.id} items={route.jsonLd} />
      <Content />
    </>
  );
}
