"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { CtaBand } from "@/components/ui";
import { useLang } from "@/lib/i18n";

type Div = {
  href: string;
  tag: string;
  name: string;
  nameEn: string;
  icon: React.ReactNode;
  desc: string;
  descEn: string;
  bullets: string[];
  bulletsEn: string[];
};

const ICON = {
  // 시스템 — 모니터 + 파형 (HMI·계측 데이터)
  system: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="dept-card__icon" aria-hidden="true">
      <rect x="5" y="9" width="38" height="24" rx="2" />
      <path d="M17 39h14M24 33v6" />
      <path d="M11 24l3-5 4 9 4-13 4 11 3-4 4 2" />
    </svg>
  ),
  // 엔지니어링 — 제어 판넬 / 캐비닛 (PLC·전계장·Panel)
  engineering: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="dept-card__icon" aria-hidden="true">
      <rect x="12" y="6" width="24" height="36" rx="2" />
      <path d="M31 22v6" />
      <path d="M16 22h9M16 27h9M16 32h6" />
      <circle cx="18" cy="13" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="24" cy="13" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  // 국방·항공 — 무인기 / 제트기 실루엣 (항공)
  research: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="dept-card__icon" aria-hidden="true">
      <path d="M24 7l3 15 14 9v3l-14-6 1 11 4 3v2l-8-2-8 2v-2l4-3 1-11-14 6v-3l14-9z" />
    </svg>
  ),
};

const DIVISIONS: Div[] = [
  {
    href: "/business/system",
    tag: "System",
    name: "시스템 사업부",
    nameEn: "System Dept.",
    icon: ICON.system,
    desc: "Test Automation System 설계, 제어·계측 시스템의 H/W·S/W 개발 및 통합 구축을 수행합니다.",
    descEn:
      "Designs Test Automation Systems and develops/integrates the hardware and software of control & measurement systems.",
    bullets: [
      "분산 제어 시스템 (DCS / RT Based)",
      "Data 측정·분석 및 검사·시험 시스템",
      "시험지원 및 유지보수",
    ],
    bulletsEn: [
      "Distributed control (DCS / RT-based)",
      "Data measurement·analysis & test systems",
      "Test support & maintenance",
    ],
  },
  {
    href: "/business/engineering",
    tag: "Engineering",
    name: "엔지니어링 사업부",
    nameEn: "Engineering Dept.",
    icon: ICON.engineering,
    desc: "공장·설비 자동화 시스템 구축과 전기 설비 공사, Panel 제작까지 현장 전체를 책임집니다.",
    descEn:
      "Delivers factory/plant automation, electrical works and panel fabrication — the entire site, end to end.",
    bullets: [
      "PLC·HMI Programming",
      "전기·계장 공사 및 Panel 제작",
      "Sensor·계측기 설치 및 시운전",
    ],
    bulletsEn: [
      "PLC·HMI programming",
      "E&I works & panel fabrication",
      "Sensor/instrument install & commissioning",
    ],
  },
  {
    href: "/business/mil-aero",
    tag: "MIL · Aerospace",
    name: "국방·항공기술 연구소",
    nameEn: "MIL · Aerospace Tech Center",
    icon: ICON.research,
    desc: "유/무인기 FLCC HILS, 무기체계 점검장비, 탑재 센서·PCB 설계까지 국방·항공 특화 기술을 개발합니다.",
    descEn:
      "Develops defense·aerospace technology — FLCC HILS for UAV/manned aircraft, weapon-system test equipment, onboard sensor/PCB design.",
    bullets: [
      "HILS/SIL 및 점검장비 Platform 구축",
      "FLCC/VMC H/W·S/W 점검장비 개발",
      "Interface·Signal Conditioning 설계",
    ],
    bulletsEn: [
      "HILS/SIL & test-equipment platforms",
      "FLCC/VMC HW·SW test equipment",
      "Interface & signal conditioning design",
    ],
  },
];

export default function BusinessIndexView() {
  const { lang } = useLang();
  const en = lang === "en";
  const t = (ko: React.ReactNode, e: React.ReactNode) => (en ? e : ko);
  const gridRef = useRef<HTMLDivElement>(null);

  // 3D 틸트 + 스포트라이트 좌표 추적 (정밀 포인터 + 모션 허용 시에만)
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = gridRef.current;
    if (!fine || reduced || !root) return;
    const cards = Array.from(
      root.querySelectorAll<HTMLElement>(".dept-card")
    );
    const onMove = (e: PointerEvent) => {
      const el = e.currentTarget as HTMLElement;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      el.style.setProperty("--mx", (px * 100).toFixed(1) + "%");
      el.style.setProperty("--my", (py * 100).toFixed(1) + "%");
      const ry = (px - 0.5) * 7;
      const rx = (0.5 - py) * 7;
      el.style.transform = `perspective(900px) translateY(-6px) rotateX(${rx.toFixed(
        2
      )}deg) rotateY(${ry.toFixed(2)}deg)`;
    };
    const onLeave = (e: PointerEvent) => {
      (e.currentTarget as HTMLElement).style.transform = "";
    };
    cards.forEach((el) => {
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
    });
    return () => {
      cards.forEach((el) => {
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
        el.style.transform = "";
      });
    };
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="page-hero__crumb">
            <Link href="/">HOME</Link> <span className="accent">/</span>{" "}
            <span>{t("사업영역", "Business")}</span>
          </div>
          <Reveal as="h1">
            {t(
              <>
                설계부터 검증까지,
                <br />
                하나의 <em className="accent">통합 솔루션</em>
              </>,
              <>
                From design to verification,
                <br />
                one <em className="accent">integrated solution</em>
              </>
            )}
          </Reveal>
          <Reveal as="p" className="lead" delay={1}>
            {t(
              "시스템·엔지니어링·국방항공 세 사업 조직이 설계부터 구축, 전·계장 공사, 유지보수까지 시험계측의 전 과정을 책임집니다. 각 사업부를 선택해 자세히 살펴보세요.",
              "Our System, Engineering and MIL·Aerospace teams cover the entire test & measurement lifecycle — from design and build to E&I works and maintenance. Select a division to explore."
            )}
          </Reveal>
        </div>
      </section>

      <section className="section section--ink">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Business Units</span>
          </Reveal>
          <div className="dept-grid" ref={gridRef}>
            {DIVISIONS.map((d, i) => (
              <Reveal as="div" delay={i} key={d.href} style={{ display: "flex" }}>
                <Link className="dept-card has-spot" href={d.href}>
                  {d.icon}
                  <p className="dept-card__en">{d.tag}</p>
                  <h3>{en ? d.nameEn : d.name}</h3>
                  <p className="dept-card__desc">{en ? d.descEn : d.desc}</p>
                  <ul>
                    {(en ? d.bulletsEn : d.bullets).map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <span className="dept-card__more">
                    {t("자세히 보기", "Learn more")}{" "}
                    <span className="arr">→</span>
                  </span>
                  <span className="spotlight" aria-hidden="true"></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={t(
          <>
            어떤 사업부와
            <br />
            함께하시겠습니까?
          </>,
          <>
            Which team will you
            <br />
            build with?
          </>
        )}
      />
    </>
  );
}
