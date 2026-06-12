"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, SITE } from "@/lib/site";
import { asset } from "@/lib/asset";

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

  // 라우트 변경 시 메뉴 닫기 + body 잠금 해제
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
          <nav className="nav" aria-label="주요 메뉴">
            <div className="nav__links">
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  aria-current={isActive(n.href) ? "page" : undefined}
                >
                  {n.label}
                </Link>
              ))}
            </div>
            <Link className="btn" href="/contact">
              프로젝트 문의 <span className="arr">→</span>
            </Link>
          </nav>
          <button
            className="burger"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
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
        <nav className="mobile-menu__links" aria-label="모바일 메뉴">
          {NAV.map((n, i) => (
            <Link key={n.href} href={n.href} onClick={() => setMenuOpen(false)}>
              <span className="idx">{String(i + 1).padStart(2, "0")}</span>{" "}
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu__foot">
          <span>TEL {SITE.tel}</span>
          <span>{SITE.email}</span>
          <span>대전 유성구 테크노2로 199</span>
        </div>
      </div>
    </>
  );
}
