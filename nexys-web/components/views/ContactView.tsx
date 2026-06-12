"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Ph } from "@/components/ui";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";
import { useLang } from "@/lib/i18n";

const Check = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M6 10l2.6 2.6L14 7.2"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const INQUIRY: [string, string][] = [
  ["시험 시스템 구축 의뢰", "Test-system build request"],
  ["HILS·SIL 플랫폼 상세 문의", "HILS·SIL platform details"],
  ["맞춤형 점검장비 개발", "Custom test-equipment development"],
  ["전계장 공사·시운전 협의", "E&I works & commissioning"],
  ["시험설비 실물 확인 요청", "Request to inspect a facility"],
];
const SUPPORT: [string, string][] = [
  ["국방·항공 (Defence)", "Defence · Aerospace"],
  ["추진·시험 (Propulsion)", "Propulsion · Test"],
  ["원자력·에너지 (Energy)", "Nuclear · Energy"],
];

export default function ContactView() {
  const { lang } = useLang();
  const en = lang === "en";
  const t = (ko: React.ReactNode, e: React.ReactNode) => (en ? e : ko);

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="page-hero__crumb">
            <Link href="/">HOME</Link> <span className="accent">/</span>{" "}
            <span>{t("문의", "Contact")}</span>
          </div>
          <Reveal as="h1">
            {t(
              <>
                당신의 <em className="accent">아이디어</em>를<br />
                들려주십시오
              </>,
              <>
                Tell us your
                <br />
                <em className="accent">idea</em>
              </>
            )}
          </Reveal>
          <Reveal as="p" className="lead" delay={1}>
            {t(
              "HILS·SIL 시스템, 시험 자동화, 제어계측 엔지니어링 — 어떤 시험 과제든 넥시스가 함께 검토합니다. 아래 정보를 남겨 주시면 담당자가 빠르게 연락드립니다.",
              "HILS·SIL systems, test automation, control & instrumentation engineering — whatever the test challenge, NEXYS will review it with you. Leave your details and we'll reach out quickly."
            )}
          </Reveal>
        </div>
      </section>

      {/* 3-COLUMN BLOCK */}
      <section className="section section--ink">
        <div className="wrap">
          <Reveal className="cblock">
            <div className="cblock__col">
              <span className="tag">
                <span className="dot"></span>NEXYS
              </span>
              <h2 className="cblock__lead">
                {t(
                  <>
                    함께
                    <br />
                    검증합시다.
                  </>,
                  <>
                    Let&apos;s
                    <br />
                    verify together.
                  </>
                )}
              </h2>
              <p className="cblock__body">
                {t(
                  <>
                    HILS·SIL 시스템, 시험 자동화, 제어계측 엔지니어링을 검토
                    중이신가요? <strong>사양·일정·예산</strong>을 함께 논의하고,
                    다음 프로젝트를 어떻게 지원할 수 있을지 알려드립니다.
                  </>,
                  <>
                    Considering a HILS·SIL system, test automation or control &
                    instrumentation engineering? Let&apos;s discuss{" "}
                    <strong>specs, schedule and budget</strong> and show how we can
                    support your next project.
                  </>
                )}
              </p>
              <div className="cblock__spacer"></div>
              <a className="reach-card" href={`mailto:${SITE.email}`}>
                <span>
                  <b>{t("바로 연락하기", "Reach us directly")}</b>
                  <small>{t("담당자가 빠르게 회신드립니다.", "We reply promptly.")}</small>
                </span>
                <span className="arr">→</span>
              </a>
            </div>

            <div className="cblock__col">
              <span className="clist-h">{t("이런 경우 문의해 주세요 :", "Get in touch for:")}</span>
              <ul className="clist">
                {INQUIRY.map(([ko, e]) => (
                  <li key={ko}>
                    <Check /> {en ? e : ko}
                  </li>
                ))}
              </ul>
              <div className="cblock__divider"></div>
              <span className="clist-h">{t("이런 분야를 지원합니다 :", "We support:")}</span>
              <ul className="clist">
                {SUPPORT.map(([ko, e]) => (
                  <li key={ko}>
                    <Check /> {en ? e : ko}
                  </li>
                ))}
              </ul>
            </div>

            <div className="cblock__col cblock__col--img">
              <Ph src="/images/engine.jpg" alt={en ? "Test facility" : "시험설비"} />
              <div className="cblock__imgveil"></div>
              <div className="cblock__imgin">
                <span className="tag">
                  <span className="dot"></span>Inquiry
                </span>
                <h3>{t("문의하기", "Contact us")}</h3>
                <p>
                  {t(
                    "시험·검증과 관련해 궁금한 점이 있으신가요? 넥시스 팀이 함께 풀어드립니다.",
                    "Questions about testing and verification? The NEXYS team will work it out with you."
                  )}
                </p>
                <a className="btn btn--primary" href="#contact-form">
                  {t("문의 보내기", "Send inquiry")} <span className="arr">→</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FORM */}
      <section className="section section--dark" id="contact-form">
        <div className="wrap">
          <div className="contact-grid">
            <Reveal>
              <span className="eyebrow">Get in Touch</span>
              <div className="contact-info mt-m">
                <div className="cinfo-row">
                  <span className="k">Address</span>
                  <span className="v">
                    {en ? SITE.addrEnLine1 : SITE.addrLine1}
                    <small>{en ? SITE.addrEnLine2 : SITE.addrLine2}</small>
                  </span>
                </div>
                <div className="cinfo-row">
                  <span className="k">Tel · Fax</span>
                  <span className="v">
                    <a href={`tel:${SITE.tel}`}>{SITE.tel}</a>
                    <small>FAX {SITE.fax}</small>
                  </span>
                </div>
                <div className="cinfo-row">
                  <span className="k">E-mail</span>
                  <span className="v">
                    <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                  </span>
                </div>
                <div className="cinfo-row">
                  <span className="k">Web</span>
                  <span className="v">
                    <a href={SITE.url} target="_blank" rel="noopener">
                      www.i-nexys.com
                    </a>
                  </span>
                </div>
                <div className="cinfo-row">
                  <span className="k">Hours</span>
                  <span className="v">
                    {t("평일 09:00 – 18:00", "Weekdays 09:00 – 18:00")}
                    <small>{t("주말·공휴일 휴무", "Closed weekends & holidays")}</small>
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <ContactForm />
            </Reveal>
          </div>

          <Reveal className="map-ph">
            <iframe
              title={en ? "NEXYS location" : "넥시스 오시는 길"}
              src="https://www.google.com/maps?q=대전광역시+유성구+테크노2로+199&output=embed"
              loading="lazy"
              style={{ width: "100%", height: "100%", border: 0 }}
            ></iframe>
          </Reveal>
        </div>
      </section>
    </>
  );
}
