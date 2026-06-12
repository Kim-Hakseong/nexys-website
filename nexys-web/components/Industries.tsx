"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { CASES, type CaseItem } from "@/lib/cases-data";
import { asset } from "@/lib/asset";
import { useLang } from "@/lib/i18n";

const GROUPS = [
  { key: "defence", ko: "국방 · 항공우주", en: "Defence · Aerospace" },
  { key: "commercial", ko: "에너지 · 산업", en: "Energy · Industry" },
] as const;

function groupOf(c: CaseItem): string {
  if (
    c.cats.includes("nuclear") ||
    c.cats.includes("engineering") ||
    c.slug === "aircraft-bearing-tester"
  )
    return "commercial";
  return "defence";
}

function specsOf(c: CaseItem): string[] {
  return c.platform
    .split("·")
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 3);
}

export default function Industries() {
  const { lang } = useLang();
  const en = lang === "en";
  const [group, setGroup] = useState<string>("defence");
  const [activeSlug, setActiveSlug] = useState<string>(
    CASES.find((c) => groupOf(c) === "defence")!.slug
  );

  const items = CASES.filter((c) => groupOf(c) === group);
  const active = items.find((c) => c.slug === activeSlug) ?? items[0];

  const switchGroup = (g: string) => {
    if (g === group) return;
    setGroup(g);
    const first = CASES.find((c) => groupOf(c) === g);
    if (first) setActiveSlug(first.slug);
  };

  return (
    <>
      <Reveal className="sec-head">
        <span className="eyebrow">Industries — {en ? "Applications" : "적용 분야"}</span>
        <h2 className="h-lg mt-m">
          {en ? (
            <>
              Proven systems,
              <br />
              deployed by NEXYS
            </>
          ) : (
            <>
              증명된 시스템,
              <br />
              넥시스의 구축 실적
            </>
          )}
        </h2>
        <p className="lead body-dim mt-s" style={{ maxWidth: "62ch" }}>
          {en
            ? "From battlefield UAVs to nuclear test facilities — NEXYS systems operate in the most demanding verification environments. Select a field to explore."
            : "전장의 무인기에서 원자력 시험시설까지 — 가장 까다로운 검증 환경에서 넥시스의 시스템이 가동되고 있습니다. 분야를 선택해 살펴보십시오."}
        </p>
      </Reveal>

      <Reveal className="industries">
        <div className="ind-tabs" role="tablist" aria-label={en ? "Sector" : "사업 분야"}>
          {GROUPS.map((g, i) => (
            <button
              key={g.key}
              className={`ind-tab${group === g.key ? " is-active" : ""}`}
              role="tab"
              aria-selected={group === g.key}
              onClick={() => switchGroup(g.key)}
            >
              <span className="ind-tab-k">{String(i + 1).padStart(2, "0")}</span>
              {en ? g.en : g.ko}
            </button>
          ))}
        </div>

        <div className="ind-body">
          <div className="ind-list">
            {items.map((c, i) => (
              <Link
                key={c.slug}
                href={`/cases/${c.slug}`}
                className={`ind-item${active?.slug === c.slug ? " is-active" : ""}`}
                onMouseEnter={() => setActiveSlug(c.slug)}
                onFocus={() => setActiveSlug(c.slug)}
              >
                <span className="ind-no">{String(i + 1).padStart(2, "0")}</span>
                <span className="ind-main">
                  <b>{en ? c.titleEn : c.title}</b>
                  <span className="ind-desc">{en ? c.descEn : c.desc}</span>
                </span>
                <span className="ind-arr">→</span>
              </Link>
            ))}
          </div>

          {active ? (
            <Link className="ind-visual" href={`/cases/${active.slug}`}>
              <div className="ind-visual__in" key={active.slug}>
                <div className="ph">
                  <img
                    className="ph__img"
                    src={asset(active.image)}
                    alt={en ? active.titleEn : active.title}
                  />
                </div>
                <div className="ind-caption">
                  <span className="ind-cap-tag">{active.badge}</span>
                  <b>{en ? active.titleEn : active.title}</b>
                  <div className="ind-specs">
                    {specsOf(active).map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                  <span className="ind-cap-more">
                    {en ? "View case" : "사례 자세히 보기"}{" "}
                    <span className="arr">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ) : null}
        </div>

        <div className="section-foot">
          <Link className="btn btn--ghost" href="/cases">
            {en ? "View all work" : "전체 구축 사례 보기"}{" "}
            <span className="arr">→</span>
          </Link>
        </div>
      </Reveal>
    </>
  );
}
