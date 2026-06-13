import type { Metadata } from "next";
import ContactView from "@/components/views/ContactView";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/seo";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "문의",
  description: "(주)넥시스 프로젝트 문의 — 연락처 및 문의 폼.",
  alternates: { canonical: asset("/contact/") },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "홈", path: "/" },
          { name: "문의", path: "/contact/" },
        ])}
      />
      <ContactView />
    </>
  );
}
