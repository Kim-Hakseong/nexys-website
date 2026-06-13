// lib/seo.ts — SEO/AEO/GEO 공용 헬퍼 + JSON-LD(Schema.org) 빌더
// 모두 비가시 메타데이터. 화면 레이아웃/스타일에 영향 없음.

import { SITE } from "./site";
import { CASES, type CaseItem } from "./cases-data";

const ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || SITE.url;
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** 절대 URL (origin + basePath + path) */
export function siteUrl(path = "/"): string {
  return `${ORIGIN}${BASE}${path}`;
}

const ORG_ID = siteUrl("/#organization");
const WEBSITE_ID = siteUrl("/#website");

/** 조직(회사) 구조화 데이터 — AEO/GEO 핵심 엔티티 */
export function organizationLd() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: "(주)넥시스",
    legalName: "(주)넥시스",
    alternateName: ["NEXYS", "넥시스", "New Experiment System"],
    url: siteUrl("/"),
    logo: siteUrl("/favicon-nxs.png"),
    image: siteUrl("/og.png"),
    description: SITE.desc,
    slogan: "Trust Your Idea & Technology",
    foundingDate: "2017",
    email: SITE.email,
    telephone: "+82-42-932-0213",
    faxNumber: "+82-42-932-0214",
    address: {
      "@type": "PostalAddress",
      streetAddress: "테크노2로 199, 미건테크노월드 1차 407호",
      addressLocality: "유성구",
      addressRegion: "대전광역시",
      postalCode: "34025",
      addressCountry: "KR",
    },
    sameAs: [SITE.instagram, SITE.url],
    areaServed: "KR",
    knowsAbout: [
      "HILS",
      "SIL",
      "Test Automation",
      "시험 자동화",
      "제어계측",
      "FLCC",
      "지상점검장비",
      "MIL-STD-1553B",
      "ARINC 429",
      "FPGA",
      "국방·항공우주 시험",
      "원자력 시험설비",
    ],
    knowsLanguage: ["ko", "en"],
  };
}

/** 웹사이트 구조화 데이터 */
export function websiteLd() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteUrl("/"),
    name: "NEXYS — Trust Your Idea & Technology",
    description: SITE.desc,
    inLanguage: "ko-KR",
    publisher: { "@id": ORG_ID },
  };
}

/** 사이트 공통 @graph (레이아웃에 1회 삽입) */
export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationLd(), websiteLd()],
  };
}

/** 빵부스러기(경로 계층) */
export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: siteUrl(it.path),
    })),
  };
}

/** 개별 구축 사례 → Service */
export function caseServiceLd(c: CaseItem) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: c.title,
    serviceType: `${c.cat} · ${c.badge}`,
    description: c.overviewLead,
    url: siteUrl(`/cases/${c.slug}/`),
    image: siteUrl(c.image),
    areaServed: "KR",
    provider: { "@id": ORG_ID },
    inLanguage: "ko-KR",
  };
}

/** 구축 사례 13건 목록 → ItemList */
export function casesItemListLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "구축 사례",
    numberOfItems: CASES.length,
    itemListElement: CASES.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.title,
      url: siteUrl(`/cases/${c.slug}/`),
    })),
  };
}
