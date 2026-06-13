import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultWidget from "@/components/ConsultWidget";
import { LangProvider } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { asset } from "@/lib/asset";
import JsonLd from "@/components/JsonLd";
import { siteGraph } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_ORIGIN || SITE.url),
  title: {
    default: "NEXYS — Trust Your Idea & Technology",
    template: "%s — NEXYS",
  },
  description: SITE.desc,
  applicationName: "NEXYS",
  alternates: { canonical: asset("/") },
  keywords: [
    "넥시스",
    "NEXYS",
    "HILS",
    "SIL",
    "시험자동화",
    "Test Automation",
    "국방",
    "항공우주",
    "제어계측",
    "FLCC",
    "점검장비",
  ],
  authors: [{ name: "NEXYS Co., Ltd." }],
  icons: {
    icon: [{ url: asset("/favicon-nxs.png"), type: "image/png" }],
    apple: asset("/favicon-nxs.png"),
    shortcut: asset("/favicon-nxs.png"),
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "NEXYS",
    title: "NEXYS — Trust Your Idea & Technology",
    description: SITE.desc,
    url: siteUrlForOg(),
    images: [
      { url: asset("/og.png"), width: 1200, height: 630, alt: "NEXYS — Trust Your Idea & Technology" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXYS — Trust Your Idea & Technology",
    description: SITE.desc,
    images: [asset("/og.png")],
  },
};

function siteUrlForOg() {
  return (process.env.NEXT_PUBLIC_SITE_ORIGIN || SITE.url) +
    (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/";
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <JsonLd data={siteGraph()} />
        <LangProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <ConsultWidget />
        </LangProvider>
      </body>
    </html>
  );
}
