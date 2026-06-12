"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

export default function NotFound() {
  const { lang } = useLang();
  const en = lang === "en";
  const t = (ko: string, e: string) => (en ? e : ko);

  return (
    <section
      className="page-hero"
      style={{ minHeight: "72vh", display: "flex", alignItems: "center" }}
    >
      <div className="wrap">
        <div className="page-hero__crumb">
          <span className="accent">ERROR</span> <span>404</span>
        </div>
        <h1 className="display" style={{ fontSize: "clamp(60px,16vw,180px)" }}>
          4<em className="accent">0</em>4
        </h1>
        <p className="lead" style={{ maxWidth: 560 }}>
          {t(
            "요청하신 페이지를 찾을 수 없습니다. 주소가 변경되었거나 삭제되었을 수 있습니다.",
            "The page you requested could not be found. It may have moved or been removed."
          )}
        </p>
        <div
          className="hero__cta"
          style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 38 }}
        >
          <Link className="btn btn--lg btn--primary" href="/">
            {t("홈으로", "Back home")} <span className="arr">→</span>
          </Link>
          <Link className="btn btn--lg" href="/cases">
            {t("구축 사례 보기", "View work")} <span className="arr">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
