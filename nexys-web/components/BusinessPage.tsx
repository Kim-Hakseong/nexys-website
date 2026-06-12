import Link from "next/link";
import Reveal from "./Reveal";
import { Ph, CtaBand } from "./ui";
import { BUSINESS } from "@/lib/site";
import { CASES, type CaseItem } from "@/lib/cases-data";

export interface Capability {
  tag: string;
  title: string;
  sub?: string;
  items: string[];
}

export interface BusinessData {
  slug: string;
  name: string;
  en: string;
  eyebrow: string;
  lead: string;
  intro: string;
  capabilities: Capability[];
  platforms?: string[];
  works?: string[];
  relatedSlugs: string[];
  ctaTitle: React.ReactNode;
}

export default function BusinessPage(data: BusinessData) {
  const related: CaseItem[] = data.relatedSlugs
    .map((s) => CASES.find((c) => c.slug === s))
    .filter((c): c is CaseItem => Boolean(c));

  const others = BUSINESS.filter((b) => !b.href.endsWith(data.slug));

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="page-hero__crumb">
            <Link href="/">HOME</Link> <span className="accent">/</span>{" "}
            <span>사업영역</span> <span className="accent">/</span>{" "}
            <span>{data.name}</span>
          </div>
          <Reveal as="h1">{data.name}</Reveal>
          <Reveal as="p" className="lead" delay={1}>
            {data.lead}
          </Reveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="section section--ink">
        <div className="wrap">
          <div className="grid-2" style={{ alignItems: "start" }}>
            <Reveal>
              <span className="eyebrow">{data.eyebrow}</span>
              <h2 className="h-lg mt-m">{data.en}</h2>
            </Reveal>
            <Reveal delay={1} style={{ alignSelf: "center" }}>
              <p className="lead body-dim">{data.intro}</p>
            </Reveal>
          </div>

          {/* CAPABILITIES */}
          <div className="solutions">
            {data.capabilities.map((cap, i) => (
              <Reveal
                as="article"
                className="solution"
                delay={i % 3}
                key={cap.title}
              >
                <div className="solution__body">
                  <span className="solution__tag">{cap.tag}</span>
                  <h3 className="solution__title">
                    {cap.title}
                    {cap.sub ? <small>{cap.sub}</small> : null}
                  </h3>
                  <ul className="solution__list">
                    {cap.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS / WORKS */}
      {data.platforms || data.works ? (
        <section className="section section--paper">
          <div className="wrap">
            {data.platforms ? (
              <>
                <Reveal className="sec-head">
                  <span className="eyebrow">Platforms</span>
                  <h2 className="h-md mt-m">주요 적용 플랫폼</h2>
                </Reveal>
                <Reveal className="filter" style={{ marginTop: 28 }}>
                  {data.platforms.map((p) => (
                    <span className="tag" key={p}>
                      <span className="dot"></span>
                      {p}
                    </span>
                  ))}
                </Reveal>
              </>
            ) : null}

            {data.works ? (
              <div style={{ marginTop: data.platforms ? "clamp(40px,6vw,72px)" : 0 }}>
                <Reveal className="sec-head">
                  <span className="eyebrow">Engineering Works</span>
                  <h2 className="h-md mt-m">주요 공사 실적</h2>
                </Reveal>
                <Reveal as="ul" className="spec-list mt-l">
                  {data.works.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </Reveal>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* RELATED CASES */}
      {related.length > 0 ? (
        <section className="section section--ink">
          <div className="wrap">
            <div className="sec-head--split sec-head">
              <Reveal>
                <span className="eyebrow">Related Work</span>
                <h2 className="h-lg mt-m">관련 구축 사례</h2>
              </Reveal>
              <Reveal as="p" className="body-dim" delay={1}>
                해당 사업부가 설계·구축한 대표 사례입니다.
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

            <Reveal
              className="mt-l"
              style={{ display: "flex", gap: 14, flexWrap: "wrap" }}
            >
              {others.map((o) => (
                <Link className="btn btn--ghost" href={o.href} key={o.href}>
                  {o.label} <span className="arr">→</span>
                </Link>
              ))}
            </Reveal>
          </div>
        </section>
      ) : null}

      <CtaBand title={data.ctaTitle} />
    </>
  );
}
