import type { Metadata } from "next";
import CasesView from "@/components/views/CasesView";

export const metadata: Metadata = {
  title: "구축 사례",
  description:
    "(주)넥시스 구축 사례 — HILS·SIL, 추진·시험, 원자력·에너지, 엔지니어링 분야 13개 시스템 구축 사례.",
};

export default function CasesPage() {
  return <CasesView />;
}
