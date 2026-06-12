import type { Metadata } from "next";
import ContactView from "@/components/views/ContactView";

export const metadata: Metadata = {
  title: "문의",
  description: "(주)넥시스 프로젝트 문의 — 연락처 및 문의 폼.",
};

export default function ContactPage() {
  return <ContactView />;
}
