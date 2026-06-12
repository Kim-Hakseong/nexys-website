import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다 (404)",
};

export default function NotFound() {
  return (
    <section
      className="page-hero"
      style={{ minHeight: "72vh", display: "flex", alignItems: "center" }}
    >
      <div className="wrap">
        <div className="page-hero__crumb">
          <span className="accent">ERROR</span> <span>404</span>
        </div>
        <h1 className="display" style={{ fontSize: "clamp(60px,16vw,180px)" }}>
          4<em className="accent">0</em>4
        </h1>
        <p className="lead" style={{ maxWidth: 560 }}>
          요청하신 페이지를 찾을 수 없습니다. 주소가 변경되었거나 삭제되었을 수
          있습니다.
        </p>
        <div
          className="hero__cta"
          style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 38 }}
        >
          <Link className="btn btn--lg btn--primary" href="/">
            홈으로 <span className="arr">→</span>
          </Link>
          <Link className="btn btn--lg" href="/cases">
            구축 사례 보기 <span className="arr">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
