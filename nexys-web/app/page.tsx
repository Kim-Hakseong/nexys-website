import Link from "next/link";
import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import Industries from "@/components/Industries";
import CaseSlider from "@/components/CaseSlider";
import CountUp from "@/components/CountUp";
import { CtaBand } from "@/components/ui";
import { PARTNERS } from "@/lib/site";

const CHALLENGES = [
  {
    no: "01",
    label: "실장비 시험의 비용과 위험",
    body: "고가의 실장비를 반복 시험에 투입하기 어렵고, 비정상·한계 조건 시험은 장비 손상과 안전사고 위험을 동반합니다. 시험실 안에서 위험을 끝내야 합니다.",
  },
  {
    no: "02",
    label: "통합 검증의 복잡성",
    body: "제어기·센서·통신(1553B·CAN·RS422)·유압·전기 계통이 얽힌 시스템을 단계별로, 그리고 통합으로 검증해야 합니다.",
  },
  {
    no: "03",
    label: "반복성과 데이터 신뢰성",
    body: "동일 조건을 정확히 재현하고, 고속·고정밀로 데이터를 취득·저장·분석해야 결과를 신뢰할 수 있습니다.",
  },
  {
    no: "04",
    label: "핵심 기술의 국산화",
    body: "수입 의존도가 높은 HILS·점검장비 플랫폼을 국산 기술로 대체해, 유지보수와 기술 주권을 확보해야 합니다.",
  },
];

const STATS = [
  { to: 9, u: "년+", label: "방산·항공 시험계측 업력" },
  { to: 13, u: "+", label: "주요 시스템 구축 사례" },
  { to: 15, u: "+", label: "국방·항공·에너지 파트너" },
  { to: 3, u: "종", label: "ISO 9001·14001·45001 인증" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg">
          <img className="hero__img" src="/images/hero-uav.jpg" alt="" />
          <div className="hero__grain"></div>
          <div className="hero__scan"></div>
        </div>
        <div className="hero__scrim"></div>
        <div className="hero__inner">
          <div className="wrap">
            <Reveal as="span" className="eyebrow">
              Military &amp; Aerospace Test Solution
            </Reveal>
            <Reveal as="h1" className="display" delay={1}>
              Trust Your
              <br />
              Idea &amp; <em className="accent">Technology</em>
            </Reveal>
            <Reveal className="hero__sub" delay={2}>
              <div className="div"></div>
              <p>
                실장비 없이 검증하고, 위험 없이 시험합니다. 넥시스는 방산·항공우주
                분야의
                <br className="d-only" /> HILS·SIL 시스템과 시험 자동화
                엔지니어링을 설계·구축하는 시험계측 전문기업입니다.
              </p>
            </Reveal>
            <Reveal className="hero__cta" delay={3}>
              <Link className="btn btn--lg btn--primary" href="/cases">
                구축 사례 보기 <span className="arr">→</span>
              </Link>
              <Link className="btn btn--lg" href="/contact">
                프로젝트 문의 <span className="arr">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
        <div className="hero__meta">
          <div>HILS · SIL · Test Automation</div>
          <div>EST. 2017 — DAEJEON, KR</div>
        </div>
        <div className="scroll-cue">
          <span className="bar"></span> SCROLL
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="section section--ink">
        <div className="wrap">
          <div className="grid-2" style={{ alignItems: "start" }}>
            <Reveal>
              <span className="eyebrow">The Problem</span>
              <h2 className="h-xl mt-m">
                실장비 시험은
                <br />
                비싸고, 위험하고,
                <br />
                <em className="accent">반복할 수 없습니다.</em>
              </h2>
            </Reveal>
            <Reveal delay={1} style={{ alignSelf: "center" }}>
              <p className="lead body-dim">
                항공기·무인기·발사체의 제어 시스템은 단 한 번의 결함도 허용되지
                않습니다. 그러나 실제 장비로 모든 조건을 반복 시험하는 것은 막대한
                비용과 안전 리스크를 동반합니다.
              </p>
              <p className="body-dim mt-m" style={{ fontSize: 16 }}>
                넥시스는 실장비를 대신할 정밀한 시험 환경을 구축해,{" "}
                <em className="accent">
                  검증되지 않은 위험을 시험실 안에서 끝내는
                </em>{" "}
                일을 합니다.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TODAY'S CHALLENGES */}
      <section className="section section--ink">
        <div className="wrap">
          <div className="chal-layout">
            <Reveal className="chal-left">
              <span className="eyebrow">Today&apos;s Challenges</span>
              <h2 className="h-lg mt-m">
                방산·항공 시험 현장이
                <br />
                마주한 네 가지 난제
              </h2>
              <Accordion items={CHALLENGES} />
            </Reveal>
            <Reveal className="chal-media" delay={1}>
              <div className="ph">
                <img
                  className="ph__img"
                  src="/images/engine.jpg"
                  alt="FIELD"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section section--ink" id="solution">
        <div className="wrap">
          <Industries />
        </div>
      </section>

      {/* CASES SLIDER */}
      <section className="section section--paper">
        <div className="wrap">
          <div className="sec-head--split sec-head">
            <Reveal>
              <span className="eyebrow">Selected Work — 13 Cases</span>
              <h2 className="h-lg mt-m">
                현장에서 검증된
                <br />
                넥시스의 구축 사례
              </h2>
            </Reveal>
            <Reveal as="p" className="body-dim" delay={1}>
              HILS 플랫폼부터 발사체·드론·원자력 시험설비까지. 좌우로 드래그하거나
              화살표로 탐색하세요.
            </Reveal>
          </div>

          <CaseSlider />

          <Reveal className="mt-l">
            <Link className="btn btn--ghost" href="/cases">
              전체 구축 사례 보기 <span className="arr">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="section section--ink">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">By the Numbers</span>
            <h2 className="h-lg mt-m">숫자가 증명하는 신뢰</h2>
          </Reveal>
          <div className="stats">
            {STATS.map((s, i) => (
              <Reveal className="stat" delay={i} key={s.label}>
                <div className="stat__num">
                  <CountUp to={s.to} />
                  <span className="u">{s.u}</span>
                </div>
                <div className="stat__label">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="section section--paper">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Trusted Partners</span>
            <h2 className="h-md mt-m">
              국방·항공·에너지 분야의 파트너와 함께합니다
            </h2>
          </Reveal>
        </div>
        <div className="marquee mt-l">
          <div className="marquee__row">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <div className="partner" key={i}>
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBand
        title={
          <>
            당신의 아이디어와
            <br />
            기술의 가치를 믿고 실행하십시오.
          </>
        }
      />
    </>
  );
}
