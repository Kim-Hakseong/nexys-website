import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultWidget from "@/components/ConsultWidget";
import { LangProvider } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_ORIGIN || SITE.url),
  title: {
    default: "NEXYS — Trust Your Idea & Technology",
    template: "%s — NEXYS",
  },
  description: SITE.desc,
  applicationName: "NEXYS",
  keywords: [
    "넥시스",
    "NEXYS",
    "HILS",
    "SIL",
    "시험자동화",
    "Test Automation",
    "방산",
    "항공우주",
    "제어계측",
    "FLCC",
    "점검장비",
  ],
  authors: [{ name: "NEXYS Co., Ltd." }],
  icons: {
    icon: [{ url: asset("/favicon.svg"), type: "image/svg+xml" }],
    apple: asset("/favicon.svg"),
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "NEXYS",
    title: "NEXYS — Trust Your Idea & Technology",
    description: SITE.desc,
    url: SITE.url,
    images: [{ url: asset("/og.svg"), width: 1200, height: 630, alt: "NEXYS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXYS — Trust Your Idea & Technology",
    description: SITE.desc,
    images: [asset("/og.svg")],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
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
