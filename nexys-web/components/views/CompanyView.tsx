"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { CtaBand } from "@/components/ui";
import ParallaxImage from "@/components/ParallaxImage";
import Timeline from "@/components/Timeline";
import { useLang } from "@/lib/i18n";

const VALUES = [
  {
    no: "01",
    title: "PASSION",
    kr: "열정",
    krEn: "Passion",
    body: "넥시스는 가슴 뜨거운 사람들이 함께합니다. 고객의 아이디어와 기술의 가치를 위해 오늘도 타오르는 열정으로 한발 더 내딛습니다.",
    bodyEn: "NEXYS is built by people with fire in their hearts. For the value of our clients' ideas and technology, we step forward with burning passion every day.",
  },
  {
    no: "02",
    title: "IDEA",
    kr: "아이디어",
    krEn: "Idea",
    body: "넥시스는 고객의 아이디어를 믿습니다. 축적된 경험과 독보적인 기술, 최고의 인력을 바탕으로 고객의 아이디어를 구현하고 검증합니다.",
    bodyEn: "NEXYS believes in our clients' ideas. With accumulated experience, distinctive technology and top talent, we realize and verify those ideas.",
  },
  {
    no: "03",
    title: "COMMUNICATION",
    kr: "소통",
    krEn: "Communication",
    body: "넥시스는 소통의 힘을 믿습니다. 구성원의 소통, 고객과의 소통, 세상과의 소통을 바탕으로 보다 높은 이상을 추구합니다.",
    bodyEn: "NEXYS believes in the power of communication. Through dialogue among our members, with our clients and with the world, we pursue higher ideals.",
  },
];

const TIMELINE: {
  year: string;
  events: { m: string; e: string; eEn: string; key?: boolean }[];
}[] = [
  {
    year: "2017",
    events: [
      { m: "02", e: "(주)넥시스 설립", eEn: "NEXYS Co., Ltd. founded", key: true },
      { m: "06", e: "공장설립 및 직접생산증명 확인 (패키지 소프트웨어)", eEn: "Factory established; direct-production certification (packaged software)" },
      { m: "08", e: "벤처기업 인증 (기술보증)", eEn: "Venture business certification (technology guarantee)" },
      { m: "09", e: "대전지능로봇센터 본사 이전 및 기업부설연구소 설립", eEn: "HQ moved to Daejeon Intelligent Robot Center; in-house R&D institute established" },
      { m: "11", e: "현대로템㈜ 국방 협력업체 등록", eEn: "Registered as Hyundai Rotem defense supplier" },
    ],
  },
  {
    year: "2018",
    events: [
      { m: "06", e: "엔지니어링 사업부 신설", eEn: "Engineering Division newly established", key: true },
      { m: "10", e: "GS칼텍스 협력업체 등록", eEn: "Registered as GS Caltex supplier" },
      { m: "11", e: "한화에어로스페이스 협력업체 등록 · 기술등급 T4 취득", eEn: "Registered as Hanwha Aerospace supplier; T4 technology grade obtained" },
    ],
  },
  {
    year: "2019",
    events: [
      { m: "01", e: "KSLV-Ⅱ 3rd Engine Combustion Test System 시험 지원 및 유지보수 다년 계약 체결", eEn: "Multi-year test-support & maintenance contract for the KSLV-II 3rd Engine Combustion Test System", key: true },
      { m: "05", e: "스마트팩토리를 위한 기계학습 알고리즘 개발 착수", eEn: "Began developing machine-learning algorithms for smart factories" },
    ],
  },
  {
    year: "2020",
    events: [
      { m: "02", e: "ISO 9001 · 14001 · 45001 인증 취득", eEn: "ISO 9001 · 14001 · 45001 certifications obtained", key: true },
      { m: "04", e: "기술혁신형 중소기업(Inno-Biz) 인증 · 벤처기업 인증 갱신", eEn: "Inno-Biz certification; venture certification renewed" },
      { m: "09", e: "한양ENG 협력업체 등록", eEn: "Registered as Hanyang ENG supplier" },
    ],
  },
  {
    year: "2021",
    events: [
      { m: "01", e: "FPGA 기반 CEDM 제어 시스템 특허출원 및 등록", eEn: "FPGA-based CEDM control system patent filed and registered", key: true },
      { m: "—", e: "KAI 한국항공우주산업 협력업체 등록", eEn: "Registered as KAI (Korea Aerospace Industries) supplier" },
    ],
  },
  {
    year: "2022",
    events: [
      { m: "08", e: "LIG넥스원 협력업체 등록", eEn: "Registered as LIG Nex1 supplier", key: true },
      { m: "10", e: "기술혁신형 중소기업(Inno-Biz) 인증 갱신", eEn: "Inno-Biz certification renewed" },
    ],
  },
  {
    year: "2023",
    events: [
      { m: "09", e: "NI Korea MIL & AEROSPACE Partner 등록", eEn: "Registered as NI Korea MIL & AEROSPACE Partner", key: true },
    ],
  },
  {
    year: "2024",
    events: [
      { m: "02", e: "유성구 미건테크노월드 1차 407호 본사 이전", eEn: "HQ relocated to Migun Techno World 1, Yuseong-gu", key: true },
      { m: "04", e: "ISO 9001 · 14001 · 45001 인증 갱신", eEn: "ISO 9001 · 14001 · 45001 certifications renewed" },
    ],
  },
];

const CERTS = [
  {
    tag: "ISO 9001",
    name: "품질경영시스템",
    nameEn: "Quality Management",
    desc: "설계·구축 전 과정의 품질을 국제 표준으로 관리합니다. (2020 취득 · 2024 갱신)",
    descEn: "Manages quality across the entire design and build process to international standards. (2020, renewed 2024)",
  },
  {
    tag: "ISO 14001",
    name: "환경경영시스템",
    nameEn: "Environmental Management",
    desc: "사업 전반의 환경 영향을 체계적으로 관리하는 국제 인증입니다.",
    descEn: "An international certification for systematically managing environmental impact across the business.",
  },
  {
    tag: "ISO 45001",
    name: "안전보건경영시스템",
    nameEn: "Occupational H&S",
    desc: "현장 안전과 근로자 보건을 보장하는 국제 표준 인증입니다.",
    descEn: "An international standard ensuring site safety and worker health.",
  },
  {
    tag: "Inno-Biz",
    name: "기술혁신형 중소기업",
    nameEn: "Inno-Biz SME",
    desc: "기술 경쟁력을 인정받은 기술혁신형 중소기업 인증. (2020 · 2022 갱신)",
    descEn: "Technology-innovation SME certification recognizing technical competitiveness. (2020, renewed 2022)",
  },
  {
    tag: "VENTURE",
    name: "벤처기업 인증",
    nameEn: "Venture Business",
    desc: "기술보증 기반 벤처기업 인증을 보유하고 있습니다.",
    descEn: "Holds a venture-business certification based on technology guarantee.",
  },
  {
    tag: "PATENT · T4",
    name: "기술등급 T4 · 특허",
    nameEn: "T4 Grade · Patent",
    desc: "기술등급 T4 취득 및 FPGA 기반 CEDM 제어 시스템 특허 등록.",
    descEn: "T4 technology grade obtained and FPGA-based CEDM control-system patent registered.",
  },
];

export default function CompanyView() {
  const { lang } = useLang();
  const en = lang === "en";
  const t = (ko: React.ReactNode, e: React.ReactNode) => (en ? e : ko);

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="page-hero__crumb">
            <Link href="/">HOME</Link> <span className="accent">/</span>{" "}
            <span>{t("회사소개", "Company")}</span>
          </div>
          <Reveal as="h1">
            {t(
              <>
                기술과 아이디어로
                <br />
                더 나은 <em className="accent">내일</em>을 만듭니다
              </>,
              <>
                Building a better <em className="accent">tomorrow</em>
                <br />
                with technology and ideas
              </>
            )}
          </Reveal>
          <Reveal as="p" className="lead" delay={1}>
            {t(
              "(주)넥시스는 Test Automation, Plant Control, Data Processing & Analysis 설계·구축 전문기업입니다. 시스템 설계, HMI S/W 개발, 전·계장 공사까지 원스톱 통합 솔루션을 제공합니다.",
              "NEXYS Co., Ltd. specializes in designing and building Test Automation, Plant Control, and Data Processing & Analysis systems — a one-stop solution from system design and HMI software to electrical & instrumentation works."
            )}
          </Reveal>
        </div>
      </section>

      {/* GREETING */}
      <section className="section section--ink">
        <div className="wrap">
          <div className="greeting">
            <Reveal className="greeting__media">
              <ParallaxImage
                src="/images/engine.jpg"
                alt={en ? "R&D facility" : "연구소 전경"}
                amount={9}
              />
            </Reveal>
            <Reveal delay={1}>
              <span className="eyebrow">Greeting</span>
              <p className="greeting__statement mt-m">
                {t(
                  <>
                    당신의 아이디어와 기술의 가치를{" "}
                    <em className="accent">믿고 실행하십시오.</em> 넥시스는 당신의
                    가치와 함께합니다.
                  </>,
                  <>
                    <em className="accent">Trust and act on</em> the value of your
                    idea and technology. NEXYS stands with your value.
                  </>
                )}
              </p>
              <div className="greeting__body">
                <p>
                  {t(
                    "(주)넥시스는 다년간 축적된 Knowhow와 독보적인 기술, 최상의 인력을 바탕으로 고객의 아이디어를 구현하고 검증해 온 시험계측 전문기업입니다.",
                    "NEXYS is a test & measurement specialist that has realized and verified our clients' ideas with years of accumulated know-how, distinctive technology and top talent."
                  )}
                </p>
                <p>
                  {t(
                    "국방·항공우주 분야의 HILS·SIL 시스템, 시험 자동화 및 제어계측 엔지니어링을 설계·구축하며, 시스템 설계부터 HMI S/W 개발, 전·계장 공사에 이르는 통합 솔루션을 한 팀에서 완성합니다.",
                    "We design and build HILS·SIL systems, test automation and control & instrumentation engineering for defense and aerospace — completing integrated solutions from system design and HMI software to E&I works, all in one team."
                  )}
                </p>
                <p>
                  {t(
                    "검증되지 않은 위험을 시험실 안에서 끝내고, 핵심 기술의 국산화를 앞당기는 것. 그것이 넥시스가 매일 한 발 더 내딛는 이유입니다.",
                    "Ending unverified risk inside the lab and accelerating the localization of core technology — that is why NEXYS steps forward each day."
                  )}
                </p>
              </div>
              <div className="greeting__sign">
                <b>{t("(주)넥시스", "NEXYS Co., Ltd.")}</b>
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
                {t(
                  <>
                    넥시스를 움직이는
                    <br />
                    세 가지 가치
                  </>,
                  <>
                    Three values that
                    <br />
                    drive NEXYS
                  </>
                )}
              </h2>
            </Reveal>
            <Reveal as="p" className="body-dim" delay={1}>
              {t(
                "가슴 뜨거운 사람들이 함께합니다. 열정과 아이디어, 그리고 소통으로 더 높은 이상을 추구합니다.",
                "Built by people with fire in their hearts — pursuing higher ideals through passion, ideas and communication."
              )}
            </Reveal>
          </div>
          <div className="values">
            {VALUES.map((v, i) => (
              <Reveal as="article" className="vcard" delay={i} key={v.no}>
                <span className="vcard__no">{v.no}</span>
                <h3 className="vcard__title">{v.title}</h3>
                <p className="vcard__kr">{en ? v.krEn : v.kr}</p>
                <p className="vcard__body">{en ? v.bodyEn : v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section section--ink" id="history">
        <div className="wrap">
          <div className="sec-head--split sec-head">
            <Reveal>
              <span className="eyebrow">History — 2017 → 2024</span>
              <h2 className="h-lg mt-m">
                {t(
                  <>
                    설립 이후 멈추지 않은
                    <br />
                    성장의 기록
                  </>,
                  <>
                    A record of growth
                    <br />
                    since our founding
                  </>
                )}
              </h2>
            </Reveal>
            <Reveal as="p" className="body-dim" delay={1}>
              {t(
                "2017년 설립 이후 국방·항공 파트너 등록, 특허, 인증, 다년 시험지원 계약으로 입지를 넓혀 왔습니다.",
                "Since 2017 we have expanded through defense·aerospace partner registrations, patents, certifications and multi-year test-support contracts."
              )}
            </Reveal>
          </div>

          <Timeline rows={TIMELINE} en={en} />
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section section--ink" id="cert">
        <div className="wrap">
          <div className="sec-head--split sec-head">
            <Reveal>
              <span className="eyebrow">Certifications</span>
              <h2 className="h-lg mt-m">
                {t(
                  <>
                    검증된 시스템과
                    <br />
                    기술력의 증명
                  </>,
                  <>
                    Proof of verified
                    <br />
                    systems and capability
                  </>
                )}
              </h2>
            </Reveal>
            <Reveal as="p" className="body-dim" delay={1}>
              {t(
                "국제 표준 경영시스템 인증과 기술혁신 인증, 특허로 품질·환경·안전·기술력을 입증합니다.",
                "International management-system certifications, innovation certifications and patents attest to our quality, environment, safety and technology."
              )}
            </Reveal>
          </div>
          <div className="certs">
            {CERTS.map((c, i) => (
              <Reveal as="article" className="cert" delay={i % 3} key={c.tag}>
                <span className="cert__tag">{c.tag}</span>
                <h3 className="cert__name">{en ? c.nameEn : c.name}</h3>
                <p className="cert__desc">{en ? c.descEn : c.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={t(
          <>
            넥시스의 열정을
            <br />
            직접 경험하십시오.
          </>,
          <>
            Experience the passion
            <br />
            of NEXYS firsthand.
          </>
        )}
      />
    </>
  );
}
