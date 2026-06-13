import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseDetailView from "@/components/views/CaseDetailView";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, caseServiceLd } from "@/lib/seo";
import { asset } from "@/lib/asset";
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
    alternates: { canonical: asset(`/cases/${c.slug}/`) },
    openGraph: {
      title: `${c.title} — NEXYS`,
      description: c.overviewLead,
      images: [{ url: asset(c.image) }],
    },
  };
}

export default function CaseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const c = getCase(params.slug);
  if (!c) notFound();
  return (
    <>
      <JsonLd
        data={[
          caseServiceLd(c),
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "구축 사례", path: "/cases/" },
            { name: c.title, path: `/cases/${c.slug}/` },
          ]),
        ]}
      />
      <CaseDetailView slug={params.slug} />
    </>
  );
}
