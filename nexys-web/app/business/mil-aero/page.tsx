import type { Metadata } from "next";
import BusinessPage, { type BusinessData } from "@/components/BusinessPage";

export const metadata: Metadata = {
  title: "국방·항공기술 연구소",
  description:
    "(주)넥시스 국방·항공기술 연구소 — 유/무인기 FLCC HILS, HILS/SIL 플랫폼, 무기체계 점검장비, 센서·PCB 설계.",
};

const data: BusinessData = {
  slug: "mil-aero",
  name: "국방·항공기술 연구소",
  nameEn: "MIL · Aerospace Tech Center",
  en: "MIL · Aerospace Tech Center",
  eyebrow: "Business — 기업부설연구소",
  eyebrowEn: "Business — In-house R&D Institute",
  lead: "유·무인기 비행제어 HILS부터 무기체계 점검장비, 탑재 센서·PCB 설계까지. 국방·항공우주 분야의 핵심 시험계측 기술을 연구·개발하는 기업부설연구소입니다.",
  leadEn: "From flight-control HILS for UAV/manned aircraft to weapon-system test equipment and onboard sensor/PCB design — an in-house R&D institute developing core test & measurement technology for defense and aerospace.",
  intro: "수입 의존도가 높은 HILS·점검장비 플랫폼을 국산 기술로 대체하고, 검증되지 않은 위험을 시험실 안에서 끝내는 것. 넥시스 국방·항공기술 연구소가 매일 한 발 더 내딛는 이유입니다.",
  introEn: "Replacing import-dependent HILS and test-equipment platforms with domestic technology, and ending unverified risk inside the lab — that is why the NEXYS MIL·Aerospace Tech Center steps forward every day.",
  capabilities: [
    {
      tag: "UAV / MANNED",
      title: "유·무인기",
      titleEn: "UAV / Manned",
      sub: "FLCC HILS · 점검장비",
      subEn: "FLCC HILS · Test Equipment",
      items: [
        "FLCC HILS 개발",
        "FLCC/VMC Hardware/Software 점검장비 개발",
        "HILS/SIL 및 점검장비 Platform 구축",
      ],
      itemsEn: [
        "FLCC HILS development",
        "FLCC/VMC hardware/software test equipment",
        "HILS/SIL and test-equipment platform build",
      ],
    },
    {
      tag: "WEAPON SYSTEM",
      title: "무기 체계",
      titleEn: "Weapon System",
      sub: "점검장비 · Interface",
      subEn: "Test Equipment · Interface",
      items: [
        "무기체계 점검장비 개발",
        "다양한 Interface 설계/개발",
        "1553B·RS422·Discrete 신호 모의",
      ],
      itemsEn: [
        "Weapon-system test equipment",
        "Design/development of various interfaces",
        "1553B·RS422·Discrete signal simulation",
      ],
    },
    {
      tag: "SENSORS · PCB",
      title: "센서 · 회로",
      titleEn: "Sensors · PCB",
      sub: "Signal Conditioning",
      subEn: "Signal Conditioning",
      items: [
        "무기 탑재 센서 설계/개발",
        "다양한 Interface 및 Signal Conditioning",
        "PCB 회로 설계/개발",
      ],
      itemsEn: [
        "Weapon-mounted sensor design/development",
        "Various interfaces and signal conditioning",
        "PCB circuit design/development",
      ],
    },
  ],
  relatedSlugs: [
    "veristand-hils-platform",
    "200kg-cargo-drone-hils",
    "uav-ground-test-equipment",
  ],
  ctaTitle: (
    <>
      국산 HILS·점검장비가
      <br />
      필요하신가요?
    </>
  ),
  ctaTitleEn: (
    <>
      Need domestic HILS
      <br />
      or test equipment?
    </>
  ),
};

export default function Page() {
  return <BusinessPage {...data} />;
}
