// lib/site.ts — 사이트 전역 상수 (회사 정보, 내비, 파트너)

export const SITE = {
  name: "NEXYS",
  nameKr: "(주)넥시스",
  fullName: "NEXYS — New Experiment System",
  slogan: "Trust Your Idea & Technology",
  desc: "(주)넥시스 — 방산·항공우주 시험계측 전문기업. HILS·SIL 시스템, 시험 자동화, 제어계측 엔지니어링.",
  url: "https://www.i-nexys.com",
  tel: "042-932-0213",
  fax: "042-932-0214",
  email: "master@i-nexys.com",
  addr: "대전광역시 유성구 테크노2로 199, 미건테크노월드 1차 407호",
  addrLine1: "대전광역시 유성구 테크노2로 199",
  addrLine2: "미건테크노월드 1차 407호",
} as const;

export const NAV = [
  { href: "/company", label: "회사소개" },
  { href: "/business/mil-aero", label: "사업영역" },
  { href: "/cases", label: "구축 사례" },
  { href: "/contact", label: "문의" },
] as const;

export const PARTNERS = [
  "ADD 국방과학연구소",
  "한화에어로스페이스",
  "LIG넥스원",
  "KAI 한국항공우주산업",
  "KARI 항공우주연구원",
  "현대로템",
  "대한항공",
  "한국원자력연구원",
  "한국기계연구원",
  "한국표준과학연구원",
  "NI Korea",
  "GS칼텍스",
  "한양ENG",
] as const;

export const BUSINESS = [
  { href: "/business/mil-aero", label: "국방·항공기술 연구소", en: "MIL · Aerospace" },
  { href: "/business/system", label: "시스템 사업부", en: "System Dept." },
  { href: "/business/engineering", label: "엔지니어링 사업부", en: "Engineering Dept." },
] as const;
