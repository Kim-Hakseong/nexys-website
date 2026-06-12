import Link from "next/link";
import { SITE } from "@/lib/site";
import { asset } from "@/lib/asset";

export default function Footer() {
  const year = 2026; // 정적 export — 빌드 시점 연도 고정
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <Link className="logo" href="/" style={{ color: "#fff" }}>
              <img src={asset("/logo.png")} alt={SITE.fullName} />
            </Link>
            <p className="slogan">Trust Your Idea &amp; Technology</p>
            <p className="addr">
              주식회사 넥시스 · Test Automation / 제어계측 전문기업
              <br />
              {SITE.addr}
              <br />
              TEL {SITE.tel} &nbsp;·&nbsp; FAX {SITE.fax} &nbsp;·&nbsp;{" "}
              {SITE.email}
            </p>
          </div>
          <div className="footer__col">
            <h4>Company</h4>
            <Link href="/company">회사소개</Link>
            <Link href="/company#values">핵심 가치</Link>
            <Link href="/company#history">연혁</Link>
            <Link href="/company#cert">인증 현황</Link>
          </div>
          <div className="footer__col">
            <h4>Work</h4>
            <Link href="/business/mil-aero">사업영역</Link>
            <Link href="/cases">구축 사례</Link>
            <Link href="/business/system">시스템 사업부</Link>
            <Link href="/business/engineering">엔지니어링 사업부</Link>
          </div>
          <div className="footer__col">
            <h4>Contact</h4>
            <Link href="/contact">프로젝트 문의</Link>
            <a href={`tel:${SITE.tel}`}>{SITE.tel}</a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a href={SITE.url} target="_blank" rel="noopener">
              www.i-nexys.com
            </a>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {year} NEXYS Co., Ltd. All rights reserved.</span>
          <span>NEW EXPERIMENT SYSTEM</span>
        </div>
      </div>
    </footer>
  );
}
