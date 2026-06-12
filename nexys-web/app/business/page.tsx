import type { Metadata } from "next";
import BusinessIndexView from "@/components/views/BusinessIndexView";

export const metadata: Metadata = {
  title: "사업영역",
  description:
    "(주)넥시스 사업영역 — 시스템 사업부, 엔지니어링 사업부, 국방·항공기술 연구소.",
};

export default function BusinessIndexPage() {
  return <BusinessIndexView />;
}
