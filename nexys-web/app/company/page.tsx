import type { Metadata } from "next";
import CompanyView from "@/components/views/CompanyView";

export const metadata: Metadata = {
  title: "회사소개",
  description: "(주)넥시스 회사소개 — 인사말, 핵심 가치, 연혁, 인증 현황.",
};

export default function CompanyPage() {
  return <CompanyView />;
}
