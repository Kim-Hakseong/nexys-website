import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseDetailView from "@/components/views/CaseDetailView";
import { CASES, getCase } from "@/lib/cases-data";

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const c = getCase(params.slug);
  if (!c) return { title: "구축 사례" };
  return {
    title: c.title,
    description: `${c.title} — ${c.overviewLead}`,
    openGraph: {
      title: `${c.title} — NEXYS`,
      description: c.overviewLead,
      images: [{ url: c.image }],
    },
  };
}

export default function CaseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  if (!getCase(params.slug)) notFound();
  return <CaseDetailView slug={params.slug} />;
}
