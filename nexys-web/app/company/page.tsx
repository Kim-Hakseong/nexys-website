import type { Metadata } from "next";
import CompanyView from "@/components/views/CompanyView";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/seo";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "회사소개",
  description: "(주)넥시스 회사소개 — 인사말, 핵심 가치, 연혁, 인증 현황.",
  alternates: { canonical: asset("/company/") },
};

export default function CompanyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "홈", path: "/" },
          { name: "회사소개", path: "/company/" },
        ])}
      />
      <CompanyView />
    </>
  );
}
