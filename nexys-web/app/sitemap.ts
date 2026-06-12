import type { MetadataRoute } from "next";
import { CASES } from "@/lib/cases-data";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const routes = [
    "",
    "/company",
    "/cases",
    "/contact",
    "/business",
    "/business/mil-aero",
    "/business/system",
    "/business/engineering",
  ];
  const staticPages = routes.map((r) => ({
    url: `${base}${r}`,
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.7,
  }));
  const casePages = CASES.map((c) => ({
    url: `${base}/cases/${c.slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));
  return [...staticPages, ...casePages];
}
