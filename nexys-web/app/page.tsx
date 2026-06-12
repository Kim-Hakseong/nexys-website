"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import Industries from "@/components/Industries";
import CaseSlider from "@/components/CaseSlider";
import CountUp from "@/components/CountUp";
import { CtaBand } from "@/components/ui";
import { PARTNERS } from "@/lib/site";
import { asset } from "@/lib/asset";
import { useLang } from "@/lib/i18n";

const CHALLENGES = [
  {
    no: "01",
    label: "실장비 시험의 비용과 위험",
    labelEn: "Cost & risk of real-hardware testing",
    body: "고가의 실장비를 반복 시험에 투입하기 어렵고, 비정상·한계 조건 시험은 장비 손상과 안전사고 위험을 동반합니다. 시험실 안에서 위험을 끝내야 합니다.",
    bodyEn: "Expensive hardware is hard to commit to repeated testing, and off-nominal or limit-condition tests risk equipment damage and accidents. Risk must end inside the lab.",
  },
  {
    no: "02",
    label: "통합 검증의 복잡성",
    labelEn: "Complexity of integrated verification",
    body: "제어기·센서·통신(1553B·CAN·RS422)·유압·전기 계통이 얽힌 시스템을 단계별로, 그리고 통합으로 검증해야 합니다.",
    bodyEn: "Systems entangling controllers, sensors, communications (1553B·CAN·RS422), hydraulics and electrical lines must be verified stage by stage and as a whole.",
  },
  {
    no: "03",
    label: "반복성과 데이터 신뢰성",
    labelEn: "Repeatability & data reliability",
    body: "동일 조건을 정확히 재현하고, 고속·고정밀로 데이터를 취득·저장·분석해야 결과를 신뢰할 수 있습니다.",
    bodyEn: "Results are trustworthy only when identical conditions are reproduced precisely and data is acquired, stored and analyzed at high speed and precision.",
  },
  {
    no: "04",
    label: "핵심 기술의 국산화",
    labelEn: "Localizing core technology",
    body: "수입 의존도가 높은 HILS·점검장비 플랫폼을 국산 기술로 대체해, 유지보수와 기술 주권을 확보해야 합니다.",
    bodyEn: "Import-dependent HILS and test-equipment platforms must be replaced with domestic technology to secure maintainability and technological sovereignty.",
  },
];

const STATS = [
  { to: 9, u: "년+", uEn: "yrs+", label: "방산·항공 시험계측 업력", labelEn: "Years in defense·aerospace T&M" },
  { to: 13, u: "+", uEn: "+", label: "주요 시스템 구축 사례", labelEn: "Major systems delivered" },
  { to: 15, u: "+", uEn: "+", label: "국방·항공·에너지 파트너", labelEn: "Defense·aerospace·energy partners" },
  { to: 3, u: "종", uEn: "", label: "ISO 9001·14001·45001 인증", labelEn: "ISO 9001·14001·45001 certified" },
];

export default function Home() {
  const { lang } = useLang();
  const en = lang === "en";
  const t = (ko: React.ReactNode, e: React.ReactNode) => (en ? e : ko);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg">
          <img className="hero__img" src={asset("/images/hero-uav.jpg")} alt="" />
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
                {t(
                  <>
                    실장비 없이 검증하고, 위험 없이 시험합니다. 넥시스는
                    방산·항공우주 분야의
                    <br className="d-only" /> HILS·SIL 시스템과 시험 자동화
                    엔지니어링을 설계·구축하는 시험계측 전문기업입니다.
                  </>,
                  <>
                    Verify without the real hardware, test without the risk.
                    NEXYS designs and builds HILS·SIL systems
                    <br className="d-only" /> and test-automation engineering for
                    the defense and aerospace industries.
                  </>
                )}
              </p>
            </Reveal>
            <Reveal className="hero__cta" delay={3}>
              <Link className="btn btn--lg btn--primary" href="/cases">
                {t("구축 사례 보기", "View our work")} <span className="arr">→</span>
              </Link>
              <Link className="btn btn--lg" href="/contact">
                {t("프로젝트 문의", "Start a project")} <span className="arr">→</span>
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
                {t(
                  <>
                    실장비 시험은
                    <br />
                    비싸고, 위험하고,
                    <br />
                    <em className="accent">반복할 수 없습니다.</em>
                  </>,
                  <>
                    Real-hardware testing is
                    <br />
                    costly, risky, and
                    <br />
                    <em className="accent">impossible to repeat.</em>
                  </>
                )}
              </h2>
            </Reveal>
            <Reveal delay={1} style={{ alignSelf: "center" }}>
              <p className="lead body-dim">
                {t(
                  "항공기·무인기·발사체의 제어 시스템은 단 한 번의 결함도 허용되지 않습니다. 그러나 실제 장비로 모든 조건을 반복 시험하는 것은 막대한 비용과 안전 리스크를 동반합니다.",
                  "Control systems for aircraft, UAVs and launch vehicles allow no single fault. Yet testing every condition on real hardware carries enormous cost and safety risk."
                )}
              </p>
              <p className="body-dim mt-m" style={{ fontSize: 16 }}>
                {t(
                  <>
                    넥시스는 실장비를 대신할 정밀한 시험 환경을 구축해,{" "}
                    <em className="accent">
                      검증되지 않은 위험을 시험실 안에서 끝내는
                    </em>{" "}
                    일을 합니다.
                  </>,
                  <>
                    NEXYS builds precise test environments that stand in for the
                    real hardware, so that{" "}
                    <em className="accent">
                      unverified risk ends inside the lab.
                    </em>
                  </>
                )}
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
                {t(
                  <>
                    방산·항공 시험 현장이
                    <br />
                    마주한 네 가지 난제
                  </>,
                  <>
                    Four challenges facing
                    <br />
                    defense &amp; aerospace testing
                  </>
                )}
              </h2>
              <Accordion
                items={CHALLENGES.map((c) => ({
                  no: c.no,
                  label: en ? c.labelEn : c.label,
                  body: en ? c.bodyEn : c.body,
                }))}
              />
            </Reveal>
            <Reveal className="chal-media" delay={1}>
              <div className="ph">
                <img
                  className="ph__img"
                  src={asset("/images/engine.jpg")}
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
              <span className="eyebrow">
                {t("Selected Work — 13 Cases", "Selected Work — 13 Cases")}
              </span>
              <h2 className="h-lg mt-m">
                {t(
                  <>
                    현장에서 검증된
                    <br />
                    넥시스의 구축 사례
                  </>,
                  <>
                    Field-proven systems
                    <br />
                    built by NEXYS
                  </>
                )}
              </h2>
            </Reveal>
            <Reveal as="p" className="body-dim" delay={1}>
              {t(
                "HILS 플랫폼부터 발사체·드론·원자력 시험설비까지. 좌우로 드래그하거나 화살표로 탐색하세요.",
                "From HILS platforms to launch-vehicle, drone and nuclear test facilities. Drag or use the arrows to explore."
              )}
            </Reveal>
          </div>

          <CaseSlider />

          <Reveal className="mt-l">
            <Link className="btn btn--ghost" href="/cases">
              {t("전체 구축 사례 보기", "View all work")} <span className="arr">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="section section--ink">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">By the Numbers</span>
            <h2 className="h-lg mt-m">
              {t("숫자가 증명하는 신뢰", "Trust, proven in numbers")}
            </h2>
          </Reveal>
          <div className="stats">
            {STATS.map((s, i) => (
              <Reveal className="stat" delay={i} key={s.label}>
                <div className="stat__num">
                  <CountUp to={s.to} />
                  <span className="u">{en ? s.uEn : s.u}</span>
                </div>
                <div className="stat__label">{en ? s.labelEn : s.label}</div>
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
              {t(
                "국방·항공·에너지 분야의 파트너와 함께합니다",
                "Working with partners across defense, aerospace and energy"
              )}
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
        title={t(
          <>
            당신의 아이디어와
            <br />
            기술의 가치를 믿고 실행하십시오.
          </>,
          <>
            Trust the value of your
            <br />
            idea and technology — and act on it.
          </>
        )}
        cta={t("프로젝트 문의하기", "Start a project")}
      />
    </>
  );
}
