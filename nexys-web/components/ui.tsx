import Link from "next/link";
import Reveal from "./Reveal";
import { asset } from "@/lib/asset";

// 이미지 플레이스홀더 (이미지 있으면 표시, 없으면 그라데이션 + 라벨)
export function Ph({
  src,
  alt,
  label,
  light,
  className,
}: {
  src?: string;
  alt?: string;
  label?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`ph${light ? " ph--light" : ""}${className ? " " + className : ""}`}
      data-label={src ? undefined : label}
    >
      {src ? (
        <img
          className="ph__img"
          src={asset(src)}
          alt={alt ?? ""}
          loading="lazy"
        />
      ) : null}
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

// ARX식 메가 CTA 밴드
export function CtaBand({
  title,
  cta = "프로젝트 문의하기",
  href = "/contact",
}: {
  title: React.ReactNode;
  cta?: string;
  href?: string;
}) {
  return (
    <section className="cta-band">
      <div className="wrap">
        <Reveal as="h2">{title}</Reveal>
        <Reveal delay={1}>
          <Link className="btn btn--lg" href={href}>
            {cta} <span className="arr">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

// 내부 페이지 히어로
export function PageHero({
  crumb,
  title,
  lead,
}: {
  crumb: React.ReactNode;
  title: React.ReactNode;
  lead?: React.ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="page-hero__crumb">{crumb}</div>
        <Reveal as="h1">{title}</Reveal>
        {lead ? (
          <Reveal as="p" className="lead" delay={1}>
            {lead}
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
