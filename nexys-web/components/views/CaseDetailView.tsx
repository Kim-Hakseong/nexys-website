"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Ph, CtaBand } from "@/components/ui";
import { CASES, getCase, getRelated } from "@/lib/cases-data";
import { useLang } from "@/lib/i18n";

export default function CaseDetailView({ slug }: { slug: string }) {
  const c = getCase(slug);
  const { lang } = useLang();
  const en = lang === "en";
  const t = (ko: React.ReactNode, e: React.ReactNode) => (en ? e : ko);
  if (!c) return null;

  const related = getRelated(c.slug, 3);
  const idx = CASES.findIndex((x) => x.slug === c.slug);
  const prev = idx > 0 ? CASES[idx - 1] : CASES[CASES.length - 1];
  const next = idx < CASES.length - 1 ? CASES[idx + 1] : CASES[0];

  const title = en ? c.titleEn : c.title;

  return (
    <>
      {/* DETAIL HERO */}
      <section className="detail-hero">
        <div className="wrap">
          <div className="page-hero__crumb">
            <Link href="/">HOME</Link> <span className="accent">/</span>{" "}
            <Link href="/cases">{t("구축 사례", "Work")}</Link>{" "}
            <span className="accent">/</span> <span>{c.no}</span>
          </div>
          <Reveal as="span" className="detail-hero__cat">
            {c.cat} · {c.badge}
          </Reveal>
          <Reveal as="h1" delay={1}>
            {title}
          </Reveal>
          <Reveal className="detail-meta" delay={2}>
            <div>
              <span className="k">Sector</span>
              <span className="v">{en ? c.sectorEn : c.sector}</span>
            </div>
            <div>
              <span className="k">Division</span>
              <span className="v">{en ? c.divisionEn : c.division}</span>
            </div>
            <div>
              <span className="k">Platform</span>
              <span className="v">{c.platform}</span>
            </div>
            <div>
              <span className="k">Case No.</span>
              <span className="v">{t(`구축 사례 ${c.no}`, `Case ${c.no}`)}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LEAD FIGURE */}
      <section
        className="section section--ink"
        style={{ paddingTop: "clamp(40px,5vw,64px)" }}
      >
        <div className="wrap">
          <Reveal className="detail-figure">
            <Ph src={c.image} alt={title} />
          </Reveal>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section section--white">
        <div className="wrap">
          <div className="spec-cols">
            <Reveal as="h2">{t("시스템 개요", "System Overview")}</Reveal>
            <Reveal delay={1}>
              <p className="lead" style={{ marginBottom: 28 }}>
                {en ? c.overviewLeadEn : c.overviewLead}
              </p>
              <ul className="spec-list">
                {(en ? c.overviewEn : c.overview).map((o, i) => (
                  <li key={i}>{o}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section section--dark">
        <div className="wrap">
          <div className="spec-cols">
            <Reveal as="h2">{t("시스템 특징", "Key Features")}</Reveal>
            <Reveal delay={1}>
              <ul className="spec-list">
                {(en ? c.featuresEn : c.features).map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="fig-2">
            <Reveal className="detail-figure">
              <Ph src={c.figures[0]} alt={`${title} 1`} />
            </Reveal>
            <Reveal className="detail-figure" delay={1}>
              <Ph src={c.figures[1] ?? c.figures[0]} alt={`${title} 2`} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* RELATED */}
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
              <span className="arr">←</span> {t(`이전 사례 (${prev.no})`, `Prev (${prev.no})`)}
            </Link>
            <Link className="btn btn--ghost" href="/cases">
              {t("전체 사례 보기", "All work")} <span className="arr">→</span>
            </Link>
            <Link className="link-arrow" href={`/cases/${next.slug}`}>
              {t(`다음 사례 (${next.no})`, `Next (${next.no})`)} <span className="arr">→</span>
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
