"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Ph, CtaBand } from "@/components/ui";
import { useLang } from "@/lib/i18n";

const DIVISIONS = [
  {
    href: "/business/system",
    name: "시스템 사업부",
    nameEn: "System Dept.",
    tag: "System",
    img: "/images/hils-hmi.jpg",
    blurb: "Test Automation 설계, 분산 제어(DCS), 데이터 취득·분석, 시험지원·유지보수까지 제어·계측 시스템을 통합 구축합니다.",
    blurbEn: "Integrated control & measurement systems — test automation design, distributed control (DCS), data acquisition & analysis, and test support.",
  },
  {
    href: "/business/engineering",
    name: "엔지니어링 사업부",
    nameEn: "Engineering Dept.",
    tag: "Engineering",
    img: "/images/fuelrig.jpg",
    blurb: "공장·설비 자동화, PLC/HMI 프로그래밍, 전기·계장 공사, 제어판넬·MCC 제작과 시운전을 일괄 수행합니다.",
    blurbEn: "Turnkey plant automation, PLC/HMI programming, electrical & instrumentation works, and control-panel/MCC fabrication with commissioning.",
  },
  {
    href: "/business/mil-aero",
    name: "국방·항공기술 연구소",
    nameEn: "MIL · Aerospace Tech Center",
    tag: "MIL · Aerospace",
    img: "/images/thrust-tt.jpg",
    blurb: "유·무인기 FLCC HILS, HILS/SIL 플랫폼, 무기체계 점검장비, 탑재 센서·PCB 설계를 연구·개발합니다.",
    blurbEn: "R&D of FLCC HILS for UAV/manned aircraft, HILS/SIL platforms, weapon-system test equipment, and onboard sensor/PCB design.",
  },
];

export default function BusinessIndexView() {
  const { lang } = useLang();
  const en = lang === "en";
  const t = (ko: React.ReactNode, e: React.ReactNode) => (en ? e : ko);

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
                세 개의 전문 조직,
                <br />
                하나의 <em className="accent">통합 솔루션</em>
              </>,
              <>
                Three specialized teams,
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
          <div className="solutions">
            {DIVISIONS.map((d, i) => (
              <Reveal delay={i} key={d.href}>
                <Link className="solution" href={d.href}>
                  <div className="solution__media">
                    <Ph src={d.img} alt={en ? d.nameEn : d.name} />
                  </div>
                  <div className="solution__body">
                    <span className="solution__tag">{d.tag}</span>
                    <h3 className="solution__title">
                      {en ? d.nameEn : d.name}
                      {!en ? <small>{d.nameEn}</small> : null}
                    </h3>
                    <p className="solution__list" style={{ color: "var(--t-on-dark-dim)", fontSize: 15, lineHeight: 1.6 }}>
                      {en ? d.blurbEn : d.blurb}
                    </p>
                    <div className="solution__foot">
                      <span className="link-arrow">
                        {t("자세히 보기", "Learn more")}{" "}
                        <span className="arr">→</span>
                      </span>
                    </div>
                  </div>
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
