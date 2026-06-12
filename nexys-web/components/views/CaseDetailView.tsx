"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import Reveal from "@/components/Reveal";
import { Ph, CtaBand } from "@/components/ui";
import { CASES, getCase, getRelated, type CaseItem } from "@/lib/cases-data";
import { asset } from "@/lib/asset";
import { useLang } from "@/lib/i18n";

/* ---- 시네마틱 패럴럭스 히어로 ---- */
function CxHero({
  c,
  title,
  en,
}: {
  c: CaseItem;
  title: string;
  en: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.14]);
  const innerY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const innerO = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section className="cx-hero" ref={ref}>
      <motion.div
        className="cx-hero__media"
        style={reduce ? undefined : { y: mediaY, scale: mediaScale }}
      >
        <img src={asset(c.image)} alt={title} />
      </motion.div>
      <div className="cx-hero__scrim" />
      <div className="cx-hero__bignum" aria-hidden="true">
        {c.no}
      </div>
      <motion.div
        className="cx-hero__inner"
        style={reduce ? undefined : { y: innerY, opacity: innerO }}
      >
        <div className="wrap">
          <div className="cx-crumb">
            <Link href="/">HOME</Link> <span className="accent">/</span>{" "}
            <Link href="/cases">{en ? "Work" : "구축 사례"}</Link>{" "}
            <span className="accent">/</span> <span>{c.no}</span>
          </div>
          <span className="cx-hero__cat">
            {c.cat} · {c.badge}
          </span>
          <h1 className="cx-hero__title">{title}</h1>
        </div>
      </motion.div>
      <div className="cx-scrollcue">
        <span className="bar" /> SCROLL
      </div>
    </section>
  );
}

/* ---- 풀블리드 패럴럭스 피규어 ---- */
function CxFigure({ src, cap }: { src: string; cap?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-11%", "11%"]);
  return (
    <div className="cx-figure" ref={ref}>
      <motion.div className="cx-figure__media" style={reduce ? undefined : { y }}>
        <img src={asset(src)} alt={cap ?? ""} loading="lazy" />
      </motion.div>
      {cap ? <span className="cx-figure__cap">{cap}</span> : null}
    </div>
  );
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <div className="cx-list">
      {items.map((it, i) => (
        <Reveal className="cx-list__item" delay={Math.min(i, 4)} key={i}>
          <span className="cx-list__n">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="cx-list__t">{it}</span>
        </Reveal>
      ))}
    </div>
  );
}

export default function CaseDetailView({ slug }: { slug: string }) {
  const c = getCase(slug);
  const { lang } = useLang();
  const en = lang === "en";
  const t = (ko: React.ReactNode, e: React.ReactNode) => (en ? e : ko);
  if (!c) return null;

  const title = en ? c.titleEn : c.title;
  const related = getRelated(c.slug, 3);
  const idx = CASES.findIndex((x) => x.slug === c.slug);
  const prev = idx > 0 ? CASES[idx - 1] : CASES[CASES.length - 1];
  const next = idx < CASES.length - 1 ? CASES[idx + 1] : CASES[0];

  const specs: [string, string][] = [
    [en ? "Sector" : "분야", en ? c.sectorEn : c.sector],
    [en ? "Division" : "사업부", en ? c.divisionEn : c.division],
    [en ? "Platform" : "플랫폼", c.platform],
    [en ? "Category" : "카테고리", `${c.cat} · ${c.badge}`],
    [en ? "Case No." : "사례 번호", `${c.no} / 13`],
  ];

  return (
    <>
      <div className="cx">
        <CxHero c={c} title={title} en={en} />

        {/* OVERVIEW LEAD */}
        <section className="cx-sec">
          <div className="wrap">
            <div className="cx-lead-grid">
              <Reveal as="div" className="cx-label">
                <b>01</b> {en ? "Overview" : "시스템 개요"}
              </Reveal>
              <Reveal>
                <p className="cx-lead">{en ? c.overviewLeadEn : c.overviewLead}</p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FIGURE 1 */}
        <CxFigure src={c.image} cap={`${title} — ${c.badge}`} />

        {/* SPEC SHEET */}
        <section className="cx-sec cx-sec--line">
          <div className="wrap">
            <div className="cx-head">
              <Reveal as="h2">
                {t(
                  <>
                    기술 <em className="accent">사양</em>
                  </>,
                  <>
                    Technical <em className="accent">specs</em>
                  </>
                )}
              </Reveal>
            </div>
            <div className="cx-specsheet">
              {specs.map(([k, v], i) => (
                <Reveal className="cx-spec-row" delay={Math.min(i, 4)} key={k}>
                  <span className="k">{k}</span>
                  <span className="v">{v}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* OVERVIEW POINTS */}
        <section className="cx-sec cx-sec--line">
          <div className="wrap">
            <div className="cx-head">
              <Reveal as="div" className="cx-label" style={{ marginBottom: 18 }}>
                <b>02</b> {en ? "What it does" : "구성"}
              </Reveal>
              <Reveal as="h2">
                {t(
                  <>
                    시스템 <em className="accent">구성</em>
                  </>,
                  <>
                    System <em className="accent">overview</em>
                  </>
                )}
              </Reveal>
            </div>
            <NumberedList items={en ? c.overviewEn : c.overview} />
          </div>
        </section>

        {/* FIGURE 2 */}
        <CxFigure src={c.figures[0]} cap={`${title} — 01`} />

        {/* FEATURES */}
        <section className="cx-sec cx-sec--line">
          <div className="wrap">
            <div className="cx-head">
              <Reveal as="div" className="cx-label" style={{ marginBottom: 18 }}>
                <b>03</b> {en ? "Capabilities" : "특징"}
              </Reveal>
              <Reveal as="h2">
                {t(
                  <>
                    시스템 <em className="accent">특징</em>
                  </>,
                  <>
                    Key <em className="accent">features</em>
                  </>
                )}
              </Reveal>
            </div>
            <NumberedList items={en ? c.featuresEn : c.features} />
          </div>
        </section>

        {/* FIGURE 3 */}
        <CxFigure src={c.figures[1] ?? c.figures[0]} cap={`${title} — 02`} />
      </div>

      {/* RELATED (light) */}
      <section className="section section--paper">
        <div className="wrap">
          <div className="sec-head--split sec-head">
            <Reveal>
              <span className="eyebrow">Related Work</span>
              <h2 className="h-lg mt-m">{t("연관 구축 사례", "Related Work")}</h2>
            </Reveal>
            <Reveal as="p" className="body-dim" delay={1}>
              {t(
                "넥시스의 다른 시험계측 구축 사례도 확인해 보세요.",
                "Explore more of NEXYS's test & measurement systems."
              )}
            </Reveal>
          </div>
          <div className="related">
            {related.map((r, i) => (
              <Reveal delay={i} key={r.slug}>
                <Link className="gcard" href={`/cases/${r.slug}`}>
                  <div className="gcard__media">
                    <Ph src={r.image} alt={en ? r.titleEn : r.title} />
                    <span className="gcard__badge">{r.badge}</span>
                    <span className="gcard__no">{r.no}</span>
                  </div>
                  <div className="gcard__body">
                    <span className="gcard__cat">{r.cat}</span>
                    <h3 className="gcard__title">{en ? r.titleEn : r.title}</h3>
                    <p className="gcard__desc">{en ? r.descEn : r.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div
            className="mt-l"
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            <Link className="link-arrow" href={`/cases/${prev.slug}`}>
              <span className="arr">←</span> {t(`이전 (${prev.no})`, `Prev (${prev.no})`)}
            </Link>
            <Link className="btn btn--ghost" href="/cases">
              {t("전체 사례 보기", "All work")} <span className="arr">→</span>
            </Link>
            <Link className="link-arrow" href={`/cases/${next.slug}`}>
              {t(`다음 (${next.no})`, `Next (${next.no})`)} <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title={t(
          <>
            유사한 시험장치가
            <br />
            필요하신가요?
          </>,
          <>
            Need a similar
            <br />
            test system?
          </>
        )}
      />
    </>
  );
}
