import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { Ph, CtaBand } from "@/components/ui";
import { CASES, getCase, getRelated } from "@/lib/cases-data";

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const c = getCase(params.slug);
  if (!c) return { title: "구축 사례" };
  return {
    title: c.title,
    description: `${c.title} — ${c.overviewLead}`,
    openGraph: {
      title: `${c.title} — NEXYS`,
      description: c.overviewLead,
      images: [{ url: c.image }],
    },
  };
}

export default function CaseDetail({ params }: { params: { slug: string } }) {
  const c = getCase(params.slug);
  if (!c) notFound();

  const related = getRelated(c.slug, 3);
  const idx = CASES.findIndex((x) => x.slug === c.slug);
  const prev = idx > 0 ? CASES[idx - 1] : CASES[CASES.length - 1];
  const next = idx < CASES.length - 1 ? CASES[idx + 1] : CASES[0];

  return (
    <>
      {/* DETAIL HERO */}
      <section className="detail-hero">
        <div className="wrap">
          <div className="page-hero__crumb">
            <Link href="/">HOME</Link> <span className="accent">/</span>{" "}
            <Link href="/cases">구축 사례</Link>{" "}
            <span className="accent">/</span> <span>{c.no}</span>
          </div>
          <Reveal as="span" className="detail-hero__cat">
            {c.cat} · {c.badge}
          </Reveal>
          <Reveal as="h1" delay={1}>
            {c.title}
          </Reveal>
          <Reveal className="detail-meta" delay={2}>
            <div>
              <span className="k">Sector</span>
              <span className="v">{c.sector}</span>
            </div>
            <div>
              <span className="k">Division</span>
              <span className="v">{c.division}</span>
            </div>
            <div>
              <span className="k">Platform</span>
              <span className="v">{c.platform}</span>
            </div>
            <div>
              <span className="k">Case No.</span>
              <span className="v">구축 사례 {c.no}</span>
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
            <Ph src={c.image} alt={c.title} />
          </Reveal>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section section--white">
        <div className="wrap">
          <div className="spec-cols">
            <Reveal as="h2">시스템 개요</Reveal>
            <Reveal delay={1}>
              <p className="lead" style={{ marginBottom: 28 }}>
                {c.overviewLead}
              </p>
              <ul className="spec-list">
                {c.overview.map((o, i) => (
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
            <Reveal as="h2">시스템 특징</Reveal>
            <Reveal delay={1}>
              <ul className="spec-list">
                {c.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="fig-2">
            <Reveal className="detail-figure">
              <Ph src={c.figures[0]} alt={`${c.title} 상세 1`} />
            </Reveal>
            <Reveal className="detail-figure" delay={1}>
              <Ph src={c.figures[1] ?? c.figures[0]} alt={`${c.title} 상세 2`} />
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
              <h2 className="h-lg mt-m">연관 구축 사례</h2>
            </Reveal>
            <Reveal as="p" className="body-dim" delay={1}>
              넥시스의 다른 시험계측 구축 사례도 확인해 보세요.
            </Reveal>
          </div>
          <div className="related">
            {related.map((r, i) => (
              <Reveal delay={i} key={r.slug}>
                <Link className="gcard" href={`/cases/${r.slug}`}>
                  <div className="gcard__media">
                    <Ph src={r.image} alt={r.title} />
                    <span className="gcard__badge">{r.badge}</span>
                    <span className="gcard__no">{r.no}</span>
                  </div>
                  <div className="gcard__body">
                    <span className="gcard__cat">{r.cat}</span>
                    <h3 className="gcard__title">{r.title}</h3>
                    <p className="gcard__desc">{r.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* PREV / NEXT */}
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
              <span className="arr">←</span> 이전 사례 ({prev.no})
            </Link>
            <Link className="btn btn--ghost" href="/cases">
              전체 사례 보기 <span className="arr">→</span>
            </Link>
            <Link className="link-arrow" href={`/cases/${next.slug}`}>
              다음 사례 ({next.no}) <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            유사한 시험장치가
            <br />
            필요하신가요?
          </>
        }
      />
    </>
  );
}
