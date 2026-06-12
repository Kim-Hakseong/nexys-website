import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CasesFilter from "@/components/CasesFilter";
import { CtaBand } from "@/components/ui";
import { ENGINEERING_WORKS } from "@/lib/cases-data";

export const metadata: Metadata = {
  title: "구축 사례",
  description:
    "(주)넥시스 구축 사례 — HILS·SIL, 추진·시험, 원자력·에너지, 엔지니어링 분야 13개 시스템 구축 사례.",
};

export default function CasesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="page-hero__crumb">
            <Link href="/">HOME</Link> <span className="accent">/</span>{" "}
            <span>구축 사례</span>
          </div>
          <Reveal as="h1">
            현장에서
            <br />
            검증된 <em className="accent">13</em>개의 시스템
          </Reveal>
          <Reveal as="p" className="lead" delay={1}>
            HILS·SIL 플랫폼부터 발사체·드론·원자력 시험설비까지. 넥시스가
            설계하고 구축한 대표 사례를 분야별로 살펴보세요.
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
              <h2 className="h-lg mt-m">엔지니어링 공사 실적</h2>
            </Reveal>
            <Reveal as="p" className="body-dim" delay={1}>
              발사체·추진기관·에너지 분야의 전·계장 공사와 시험설비 제작·설치
              실적입니다.
            </Reveal>
          </div>
          <Reveal as="ul" className="spec-list mt-l">
            {ENGINEERING_WORKS.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={
          <>
            당신의 시험 과제를
            <br />
            넥시스에 맡기십시오.
          </>
        }
      />
    </>
  );
}
