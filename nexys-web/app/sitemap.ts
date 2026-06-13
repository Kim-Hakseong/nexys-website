import type { MetadataRoute } from "next";
import { CASES } from "@/lib/cases-data";
import { siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

// 빌드 시점 고정 lastmod (정적 export 결정성 유지)
const LASTMOD = "2026-06-13";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/company/",
    "/cases/",
    "/contact/",
    "/business/",
    "/business/mil-aero/",
    "/business/system/",
    "/business/engineering/",
  ];
  const staticPages = routes.map((r) => ({
    url: siteUrl(r),
    lastModified: LASTMOD,
    changeFrequency: "monthly" as const,
    priority: r === "/" ? 1 : 0.7,
  }));
  const casePages = CASES.map((c) => ({
    url: siteUrl(`/cases/${c.slug}/`),
    lastModified: LASTMOD,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));
  return [...staticPages, ...casePages];
}
