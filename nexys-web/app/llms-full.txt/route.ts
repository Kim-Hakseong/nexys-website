import { CASES } from "@/lib/cases-data";
import { siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

// GEO — 사례 본문 포함 상세 요약
export function GET() {
  const u = (p: string) => siteUrl(p);
  const out: string[] = [
    "# NEXYS — (주)넥시스 (상세)",
    "",
    "(주)넥시스는 국방·항공우주 분야의 HILS·SIL 시스템, 시험 자동화, 제어계측 엔지니어링을 설계·구축하는 시험계측 전문기업입니다. 실장비 없이 검증하고 위험 없이 시험하는 정밀 시험 환경을 구축하며, 핵심 기술의 국산화를 지향합니다.",
    "",
    "## 사업영역",
    "- 시스템 사업부: Test Automation 설계, 분산제어(DCS), 데이터 취득(DAQ), 시험지원·유지보수",
    "- 엔지니어링 사업부: 공장·설비 자동화, PLC/HMI, 전기·계장 공사, 제어판넬·MCC 제작·시운전 (Rockwell, SIEMENS, LS Electric, CIMON, EPICS, Wonderware)",
    "- 국방·항공기술 연구소(기업부설연구소): 유·무인기 FLCC HILS, HILS/SIL 플랫폼, 무기체계 점검장비, 탑재 센서·PCB 설계",
    "",
    "## 구축 사례 (13건)",
    "",
  ];
  for (const c of CASES) {
    out.push(`### ${c.no}. ${c.title}`);
    out.push(`- URL: ${u(`/cases/${c.slug}/`)}`);
    out.push(`- 분류: ${c.cat} · ${c.badge} / 사업부: ${c.division} / 플랫폼: ${c.platform}`);
    out.push(`- 개요: ${c.overviewLead}`);
    out.push(`- 특징: ${c.features.join(" · ")}`);
    out.push("");
  }
  return new Response(out.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
