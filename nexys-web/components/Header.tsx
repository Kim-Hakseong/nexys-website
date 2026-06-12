"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, SITE } from "@/lib/site";
import { asset } from "@/lib/asset";
import { useLang } from "@/lib/i18n";

function InstagramIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.4" cy="6.6" r="1.25" fill="currentColor" />
    </svg>
  );
}

function LangSwitch() {
  const { lang, setLang } = useLang();
  return (
    <div className="lang-switch" role="group" aria-label="Language">
      <button
        className={lang === "ko" ? "is-active" : ""}
        aria-pressed={lang === "ko"}
        onClick={() => setLang("ko")}
      >
        KO
      </button>
      <span className="lang-switch__sep">/</span>
      <button
        className={lang === "en" ? "is-active" : ""}
        aria-pressed={lang === "en"}
        onClick={() => setLang("en")}
      >
        EN
      </button>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { lang } = useLang();
  const t = (ko: string, en: string) => (lang === "en" ? en : ko);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.classList.remove("menu-open");
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href ||
        pathname.startsWith(href + "/") ||
        (href.startsWith("/business") && pathname.startsWith("/business"));

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="wrap">
          <Link className="logo" href="/" aria-label="NEXYS 홈">
            <img src={asset("/logo.png")} alt={SITE.fullName} />
          </Link>
          <nav className="nav" aria-label={t("주요 메뉴", "Main menu")}>
            <div className="nav__links">
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  aria-current={isActive(n.href) ? "page" : undefined}
                >
                  {t(n.label, n.labelEn)}
                </Link>
              ))}
            </div>
            <Link className="btn" href="/contact">
              {t("프로젝트 문의", "Inquiry")} <span className="arr">→</span>
            </Link>
            <div className="nav__util">
              <LangSwitch />
              <a
                className="ig-link"
                href={SITE.instagram}
                target="_blank"
                rel="noopener"
                aria-label="NEXYS Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </nav>
          <button
            className="burger"
            aria-label={menuOpen ? t("메뉴 닫기", "Close menu") : t("메뉴 열기", "Open menu")}
            aria-expanded={menuOpen}
            aria-controls="m-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className="mobile-menu" id="m-menu" aria-hidden={!menuOpen}>
        <nav className="mobile-menu__links" aria-label={t("모바일 메뉴", "Mobile menu")}>
          {NAV.map((n, i) => (
            <Link key={n.href} href={n.href} onClick={() => setMenuOpen(false)}>
              <span className="idx">{String(i + 1).padStart(2, "0")}</span>{" "}
              {t(n.label, n.labelEn)}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu__util">
          <LangSwitch />
          <a
            className="ig-link"
            href={SITE.instagram}
            target="_blank"
            rel="noopener"
            aria-label="NEXYS Instagram"
          >
            <InstagramIcon />
            <span>Instagram</span>
          </a>
        </div>
        <div className="mobile-menu__foot">
          <span>TEL {SITE.tel}</span>
          <span>{SITE.email}</span>
          <span>{t("대전 유성구 테크노2로 199", "Daejeon, Korea")}</span>
        </div>
      </div>
    </>
  );
}
