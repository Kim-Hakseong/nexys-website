"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import CasesFilter from "@/components/CasesFilter";
import { CtaBand } from "@/components/ui";
import { ENGINEERING_WORKS, ENGINEERING_WORKS_EN } from "@/lib/cases-data";
import { useLang } from "@/lib/i18n";

export default function CasesView() {
  const { lang } = useLang();
  const en = lang === "en";
  const t = (ko: React.ReactNode, e: React.ReactNode) => (en ? e : ko);

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="page-hero__crumb">
            <Link href="/">HOME</Link> <span className="accent">/</span>{" "}
            <span>{t("구축 사례", "Work")}</span>
          </div>
          <Reveal as="h1">
            {t(
              <>
                현장에서
                <br />
                검증된 <em className="accent">13</em>개의 시스템
              </>,
              <>
                <em className="accent">13</em> field-proven
                <br />
                systems we built
              </>
            )}
          </Reveal>
          <Reveal as="p" className="lead" delay={1}>
            {t(
              "HILS·SIL 플랫폼부터 발사체·드론·원자력 시험설비까지. 넥시스가 설계하고 구축한 대표 사례를 분야별로 살펴보세요.",
              "From HILS·SIL platforms to launch-vehicle, drone and nuclear test facilities — explore the systems NEXYS designed and built, by field."
            )}
          </Reveal>
        </div>
      </section>

      <section className="section section--paper">
        <div className="wrap">
          <CasesFilter />
        </div>
      </section>

      {/* ENGINEERING WORKS */}
      <section className="section section--ink">
        <div className="wrap">
          <div className="sec-head--split sec-head">
            <Reveal>
              <span className="eyebrow">Engineering Works</span>
              <h2 className="h-lg mt-m">
                {t("엔지니어링 공사 실적", "Engineering project record")}
              </h2>
            </Reveal>
            <Reveal as="p" className="body-dim" delay={1}>
              {t(
                "발사체·추진기관·에너지 분야의 전·계장 공사와 시험설비 제작·설치 실적입니다.",
                "A record of E&I works and test-facility fabrication/installation across launch-vehicle, propulsion and energy sectors."
              )}
            </Reveal>
          </div>
          <Reveal as="ul" className="spec-list mt-l">
            {(en ? ENGINEERING_WORKS_EN : ENGINEERING_WORKS).map((w) => (
              <li key={w}>{w}</li>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={t(
          <>
            당신의 시험 과제를
            <br />
            넥시스에 맡기십시오.
          </>,
          <>
            Bring your test challenge
            <br />
            to NEXYS.
          </>
        )}
      />
    </>
  );
}
