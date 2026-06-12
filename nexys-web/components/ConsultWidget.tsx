"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

export default function ConsultWidget() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { lang } = useLang();
  const t = (ko: string, en: string) => (lang === "en" ? en : ko);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    if (open) document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  return (
    <div className={`consult${open ? " is-open" : ""}`} ref={ref}>
      <div className="consult__panel" role="dialog" aria-label={t("상담", "Consult")}>
        <div className="consult__head">
          <b>{t("무엇이든 문의하세요", "How can we help?")}</b>
          <span>{t("넥시스 팀이 빠르게 회신드립니다.", "Our team replies promptly.")}</span>
        </div>
        {/* TODO: 실시간 문의 / 카카오톡 상담 실제 연동 (현재 모양만) */}
        <button className="consult__opt" type="button" data-todo="live-chat">
          <span className="consult__ico" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 5.5h16v10H8l-4 3.5V5.5z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="consult__txt">
            <b>{t("실시간 문의", "Live inquiry")}</b>
            <small>{t("준비 중 — 곧 오픈", "Coming soon")}</small>
          </span>
        </button>
        <a className="consult__opt consult__opt--kakao" href="#" data-todo="kakao">
          <span className="consult__ico" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <ellipse cx="12" cy="11" rx="9" ry="7.3" fill="currentColor" />
              <path d="M8 17l-1 4 5-3" fill="currentColor" />
            </svg>
          </span>
          <span className="consult__txt">
            <b>{t("카카오톡 상담", "KakaoTalk")}</b>
            <small>{t("준비 중 — 곧 오픈", "Coming soon")}</small>
          </span>
        </a>
        <Link className="consult__opt consult__opt--mail" href="/contact">
          <span className="consult__ico" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
              <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.7" />
            </svg>
          </span>
          <span className="consult__txt">
            <b>{t("이메일 문의", "Email us")}</b>
            <small>{t("문의 폼으로 이동", "Go to contact form")}</small>
          </span>
        </Link>
      </div>

      <button
        className="consult__fab"
        aria-label={t("상담 열기", "Open consultation")}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        ) : (
          <span className="consult__dots" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
          </span>
        )}
      </button>
    </div>
  );
}
