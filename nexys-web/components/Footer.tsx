"use client";

import Link from "next/link";
import { SITE } from "@/lib/site";
import { asset } from "@/lib/asset";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const year = 2026; // 정적 export — 빌드 시점 연도 고정
  const { lang } = useLang();
  const t = (ko: string, en: string) => (lang === "en" ? en : ko);

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <Link className="logo" href="/" style={{ color: "#fff" }}>
              <img src={asset("/logo.png")} alt={SITE.fullName} />
            </Link>
            <p className="slogan">Trust Your Idea &amp; Technology</p>
            <p className="addr">
              {t(
                "주식회사 넥시스 · Test Automation / 제어계측 전문기업",
                "NEXYS Co., Ltd. · Test Automation / Control & Instrumentation"
              )}
              <br />
              {lang === "en" ? SITE.addrEn : SITE.addr}
              <br />
              TEL {SITE.tel} &nbsp;·&nbsp; FAX {SITE.fax} &nbsp;·&nbsp;{" "}
              {SITE.email}
            </p>
          </div>
          <div className="footer__col">
            <h4>Company</h4>
            <Link href="/company">{t("회사소개", "About")}</Link>
            <Link href="/company#values">{t("핵심 가치", "Core Values")}</Link>
            <Link href="/company#history">{t("연혁", "History")}</Link>
            <Link href="/company#cert">{t("인증 현황", "Certifications")}</Link>
          </div>
          <div className="footer__col">
            <h4>Work</h4>
            <Link href="/business">{t("사업영역", "Business")}</Link>
            <Link href="/cases">{t("구축 사례", "Work")}</Link>
            <Link href="/business/system">{t("시스템 사업부", "System Dept.")}</Link>
            <Link href="/business/engineering">
              {t("엔지니어링 사업부", "Engineering Dept.")}
            </Link>
          </div>
          <div className="footer__col">
            <h4>Contact</h4>
            <Link href="/contact">{t("프로젝트 문의", "Inquiry")}</Link>
            <a href={`tel:${SITE.tel}`}>{SITE.tel}</a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a href={SITE.instagram} target="_blank" rel="noopener">
              Instagram
            </a>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {year} NEXYS Co., Ltd. All rights reserved.</span>
          <span>NEW EXPERIMENT SYSTEM</span>
        </div>
      </div>
    </footer>
  );
}
