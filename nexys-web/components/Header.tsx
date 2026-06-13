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

function NiAlliance() {
  return (
    <span className="ni-alliance" aria-label="NI Official Alliance Partner">
      <img
        className="ni-alliance__mark"
        src={asset("/images/ni-mark.png")}
        alt="NI"
      />
      <span className="ni-alliance__txt">Official Alliance</span>
    </span>
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
          <Link className="logo" href="/" aria-label="NEXYS Home">
            <img src={asset("/logo.png")} alt={SITE.fullName} />
          </Link>

          {/* 상단 메뉴 — 영문 통일 + 가운데 정렬 */}
          <nav className="nav nav--center" aria-label="Main menu">
            <div className="nav__links">
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  aria-current={isActive(n.href) ? "page" : undefined}
                >
                  {n.labelEn}
                </Link>
              ))}
            </div>
          </nav>

          <div className="nav__right">
            <Link className="btn" href="/contact">
              Inquiry <span className="arr">→</span>
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
              <NiAlliance />
            </div>
          </div>

          <button
            className="burger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
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
        <nav className="mobile-menu__links" aria-label="Mobile menu">
          {NAV.map((n, i) => (
            <Link key={n.href} href={n.href} onClick={() => setMenuOpen(false)}>
              <span className="idx">{String(i + 1).padStart(2, "0")}</span>{" "}
              {n.labelEn}
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
          <NiAlliance />
        </div>
        <div className="mobile-menu__foot">
          <span>TEL {SITE.tel}</span>
          <span>{SITE.email}</span>
          <span>Daejeon, Korea</span>
        </div>
      </div>
    </>
  );
}
