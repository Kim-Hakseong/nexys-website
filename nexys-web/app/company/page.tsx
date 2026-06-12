import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Ph, CtaBand } from "@/components/ui";

export const metadata: Metadata = {
  title: "회사소개",
  description: "(주)넥시스 회사소개 — 인사말, 핵심 가치, 연혁, 인증 현황.",
};

const VALUES = [
  {
    no: "01",
    title: "PASSION",
    kr: "열정",
    body: "넥시스는 가슴 뜨거운 사람들이 함께합니다. 고객의 아이디어와 기술의 가치를 위해 오늘도 타오르는 열정으로 한발 더 내딛습니다.",
  },
  {
    no: "02",
    title: "IDEA",
    kr: "아이디어",
    body: "넥시스는 고객의 아이디어를 믿습니다. 축적된 경험과 독보적인 기술, 최고의 인력을 바탕으로 고객의 아이디어를 구현하고 검증합니다.",
  },
  {
    no: "03",
    title: "COMMUNICATION",
    kr: "소통",
    body: "넥시스는 소통의 힘을 믿습니다. 구성원의 소통, 고객과의 소통, 세상과의 소통을 바탕으로 보다 높은 이상을 추구합니다.",
  },
];

const TIMELINE: {
  year: string;
  events: { m: string; e: string; key?: boolean }[];
}[] = [
  {
    year: "2017",
    events: [
      { m: "02", e: "(주)넥시스 설립", key: true },
      { m: "06", e: "공장설립 및 직접생산증명 확인 (패키지 소프트웨어)" },
      { m: "08", e: "벤처기업 인증 (기술보증)" },
      { m: "09", e: "대전지능로봇센터 본사 이전 및 기업부설연구소 설립" },
      { m: "11", e: "현대로템㈜ 방산 협력업체 등록" },
    ],
  },
  {
    year: "2018",
    events: [
      { m: "06", e: "엔지니어링 사업부 신설", key: true },
      { m: "10", e: "GS칼텍스 협력업체 등록" },
      { m: "11", e: "한화에어로스페이스 협력업체 등록 · 기술등급 T4 취득" },
    ],
  },
  {
    year: "2019",
    events: [
      {
        m: "01",
        e: "KSLV-Ⅱ 3rd Engine Combustion Test System 시험 지원 및 유지보수 다년 계약 체결",
        key: true,
      },
      { m: "05", e: "스마트팩토리를 위한 기계학습 알고리즘 개발 착수" },
    ],
  },
  {
    year: "2020",
    events: [
      { m: "02", e: "ISO 9001 · 14001 · 45001 인증 취득", key: true },
      { m: "04", e: "기술혁신형 중소기업(Inno-Biz) 인증 · 벤처기업 인증 갱신" },
      { m: "09", e: "한양ENG 협력업체 등록" },
    ],
  },
  {
    year: "2021",
    events: [
      { m: "01", e: "FPGA 기반 CEDM 제어 시스템 특허출원 및 등록", key: true },
      { m: "—", e: "KAI 한국항공우주산업 협력업체 등록" },
    ],
  },
  {
    year: "2022",
    events: [
      { m: "08", e: "LIG넥스원 협력업체 등록", key: true },
      { m: "10", e: "기술혁신형 중소기업(Inno-Biz) 인증 갱신" },
    ],
  },
  {
    year: "2023",
    events: [
      { m: "09", e: "NI Korea MIL & AEROSPACE Partner 등록", key: true },
    ],
  },
  {
    year: "2024",
    events: [
      { m: "02", e: "유성구 미건테크노월드 1차 407호 본사 이전", key: true },
      { m: "04", e: "ISO 9001 · 14001 · 45001 인증 갱신" },
    ],
  },
];

const CERTS = [
  {
    tag: "ISO 9001",
    name: "품질경영시스템",
    desc: "설계·구축 전 과정의 품질을 국제 표준으로 관리합니다. (2020 취득 · 2024 갱신)",
  },
  {
    tag: "ISO 14001",
    name: "환경경영시스템",
    desc: "사업 전반의 환경 영향을 체계적으로 관리하는 국제 인증입니다.",
  },
  {
    tag: "ISO 45001",
    name: "안전보건경영시스템",
    desc: "현장 안전과 근로자 보건을 보장하는 국제 표준 인증입니다.",
  },
  {
    tag: "Inno-Biz",
    name: "기술혁신형 중소기업",
    desc: "기술 경쟁력을 인정받은 기술혁신형 중소기업 인증. (2020 · 2022 갱신)",
  },
  {
    tag: "VENTURE",
    name: "벤처기업 인증",
    desc: "기술보증 기반 벤처기업 인증을 보유하고 있습니다.",
  },
  {
    tag: "PATENT · T4",
    name: "기술등급 T4 · 특허",
    desc: "기술등급 T4 취득 및 FPGA 기반 CEDM 제어 시스템 특허 등록.",
  },
];

export default function CompanyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="page-hero__crumb">
            <Link href="/">HOME</Link> <span className="accent">/</span>{" "}
            <span>회사소개</span>
          </div>
          <Reveal as="h1">
            기술과 아이디어로
            <br />
            더 나은 <em className="accent">내일</em>을 만듭니다
          </Reveal>
          <Reveal as="p" className="lead" delay={1}>
            (주)넥시스는 Test Automation, Plant Control, Data Processing &amp;
            Analysis 설계·구축 전문기업입니다. 시스템 설계, HMI S/W 개발, 전·계장
            공사까지 원스톱 통합 솔루션을 제공합니다.
          </Reveal>
        </div>
      </section>

      {/* GREETING */}
      <section className="section section--white">
        <div className="wrap">
          <div className="greeting">
            <Reveal className="greeting__media">
              <Ph src="/images/engine.jpg" alt="연구소 전경" light />
            </Reveal>
            <Reveal delay={1}>
              <span className="eyebrow">Greeting</span>
              <p className="greeting__statement mt-m">
                당신의 아이디어와 기술의 가치를{" "}
                <em className="accent">믿고 실행하십시오.</em> 넥시스는 당신의
                가치와 함께합니다.
              </p>
              <div className="greeting__body">
                <p>
                  (주)넥시스는 다년간 축적된 Knowhow와 독보적인 기술, 최상의
                  인력을 바탕으로 고객의 아이디어를 구현하고 검증해 온 시험계측
                  전문기업입니다.
                </p>
                <p>
                  방산·항공우주 분야의 HILS·SIL 시스템, 시험 자동화 및 제어계측
                  엔지니어링을 설계·구축하며, 시스템 설계부터 HMI S/W 개발,
                  전·계장 공사에 이르는 통합 솔루션을 한 팀에서 완성합니다.
                </p>
                <p>
                  검증되지 않은 위험을 시험실 안에서 끝내고, 핵심 기술의 국산화를
                  앞당기는 것. 그것이 넥시스가 매일 한 발 더 내딛는 이유입니다.
                </p>
              </div>
              <div className="greeting__sign">
                <b>(주)넥시스</b>
                <span>New Experiment System</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section section--dark" id="values">
        <div className="wrap">
          <div className="sec-head--split sec-head">
            <Reveal>
              <span className="eyebrow">Core Values</span>
              <h2 className="h-lg mt-m">
                넥시스를 움직이는
                <br />
                세 가지 가치
              </h2>
            </Reveal>
            <Reveal as="p" className="body-dim" delay={1}>
              가슴 뜨거운 사람들이 함께합니다. 열정과 아이디어, 그리고 소통으로
              더 높은 이상을 추구합니다.
            </Reveal>
          </div>
          <div className="values">
            {VALUES.map((v, i) => (
              <Reveal as="article" className="vcard" delay={i} key={v.no}>
                <span className="vcard__no">{v.no}</span>
                <h3 className="vcard__title">{v.title}</h3>
                <p className="vcard__kr">{v.kr}</p>
                <p className="vcard__body">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section section--paper" id="history">
        <div className="wrap">
          <div className="sec-head--split sec-head">
            <Reveal>
              <span className="eyebrow">History — 2017 → 2024</span>
              <h2 className="h-lg mt-m">
                설립 이후 멈추지 않은
                <br />
                성장의 기록
              </h2>
            </Reveal>
            <Reveal as="p" className="body-dim" delay={1}>
              2017년 설립 이후 국방·항공 파트너 등록, 특허, 인증, 다년 시험지원
              계약으로 입지를 넓혀 왔습니다.
            </Reveal>
          </div>

          <div className="timeline">
            {TIMELINE.map((row) => (
              <Reveal className="tl-row" key={row.year}>
                <div className="tl-year">
                  {row.year}
                  <span className="dot"></span>
                </div>
                <div className="tl-events">
                  {row.events.map((ev, i) => (
                    <div
                      className={`tl-event${ev.key ? " is-key" : ""}`}
                      key={i}
                    >
                      <span className="m">{ev.m}</span>
                      <span className="e">{ev.e}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section section--ink" id="cert">
        <div className="wrap">
          <div className="sec-head--split sec-head">
            <Reveal>
              <span className="eyebrow">Certifications</span>
              <h2 className="h-lg mt-m">
                검증된 시스템과
                <br />
                기술력의 증명
              </h2>
            </Reveal>
            <Reveal as="p" className="body-dim" delay={1}>
              국제 표준 경영시스템 인증과 기술혁신 인증, 특허로
              품질·환경·안전·기술력을 입증합니다.
            </Reveal>
          </div>
          <div className="certs">
            {CERTS.map((c, i) => (
              <Reveal as="article" className="cert" delay={i % 3} key={c.tag}>
                <span className="cert__tag">{c.tag}</span>
                <h3 className="cert__name">{c.name}</h3>
                <p className="cert__desc">{c.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            넥시스의 열정을
            <br />
            직접 경험하십시오.
          </>
        }
      />
    </>
  );
}
