import { CASES } from "@/lib/cases-data";
import { siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

// GEO — LLM/AI 검색 엔진용 사이트 요약 (llms.txt 관례)
export function GET() {
  const u = (p: string) => siteUrl(p);
  const lines = [
    "# NEXYS — (주)넥시스",
    "",
    "> 국방·항공우주 분야의 HILS·SIL 시스템, 시험 자동화(Test Automation), 제어계측 엔지니어링을 설계·구축하는 시험계측 전문기업. 슬로건은 \"Trust Your Idea & Technology\". 2017년 설립, 대전 소재.",
    "",
    "## 회사 정보",
    "- 회사명: (주)넥시스 (NEXYS — New Experiment System)",
    "- 설립: 2017년",
    "- 주소: 대전광역시 유성구 테크노2로 199, 미건테크노월드 1차 407호",
    "- 연락처: TEL 042-932-0213 · FAX 042-932-0214 · master@i-nexys.com",
    "- 전문 분야: HILS, SIL, Test Automation, 제어계측, FLCC, 지상점검장비, 무기체계 점검장비, 원자력 시험설비, 전·계장 공사",
    "- 인증: ISO 9001 / 14001 / 45001, 기술혁신형 중소기업(Inno-Biz), 벤처기업, 기술등급 T4, FPGA 기반 CEDM 제어 특허, NI Korea MIL & AEROSPACE Partner",
    "- 주요 파트너: 국방과학연구소(ADD), 한화에어로스페이스, LIG넥스원, KAI, KARI, 현대로템, NI Korea, 한국원자력연구원 등",
    "",
    "## 주요 페이지",
    `- [홈](${u("/")})`,
    `- [회사소개](${u("/company/")}): 인사말, 3대 가치(PASSION·IDEA·COMMUNICATION), 연혁(2017~2024), 인증`,
    `- [사업영역](${u("/business/")}): 시스템 사업부 / 엔지니어링 사업부 / 국방·항공기술 연구소`,
    `- [구축 사례](${u("/cases/")}): 13개 시스템 구축 실적`,
    `- [문의](${u("/contact/")})`,
    "",
    "## 구축 사례 (13건)",
    ...CASES.map((c) => `- [${c.title}](${u(`/cases/${c.slug}/`)}): ${c.desc}`),
    "",
    "## 상세 요약",
    `- 전체 콘텐츠: ${u("/llms-full.txt")}`,
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
