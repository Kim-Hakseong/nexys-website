import type { Metadata } from "next";
import BusinessIndexView from "@/components/views/BusinessIndexView";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/seo";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "사업영역",
  description:
    "(주)넥시스 사업영역 — 시스템 사업부, 엔지니어링 사업부, 국방·항공기술 연구소.",
  alternates: { canonical: asset("/business/") },
};

export default function BusinessIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "홈", path: "/" },
          { name: "사업영역", path: "/business/" },
        ])}
      />
      <BusinessIndexView />
    </>
  );
}
