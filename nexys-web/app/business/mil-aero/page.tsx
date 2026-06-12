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
  en: "MIL · Aerospace Tech Center",
  eyebrow: "Business — 기업부설연구소",
  lead: "유·무인기 비행제어 HILS부터 무기체계 점검장비, 탑재 센서·PCB 설계까지. 방산·항공우주 분야의 핵심 시험계측 기술을 연구·개발하는 기업부설연구소입니다.",
  intro:
    "수입 의존도가 높은 HILS·점검장비 플랫폼을 국산 기술로 대체하고, 검증되지 않은 위험을 시험실 안에서 끝내는 것. 넥시스 국방·항공기술 연구소가 매일 한 발 더 내딛는 이유입니다.",
  capabilities: [
    {
      tag: "UAV / MANNED",
      title: "유·무인기",
      sub: "FLCC HILS · 점검장비",
      items: [
        "FLCC HILS 개발",
        "FLCC/VMC Hardware/Software 점검장비 개발",
        "HILS/SIL 및 점검장비 Platform 구축",
      ],
    },
    {
      tag: "WEAPON SYSTEM",
      title: "무기 체계",
      sub: "점검장비 · Interface",
      items: [
        "무기체계 점검장비 개발",
        "다양한 Interface 설계/개발",
        "1553B·RS422·Discrete 신호 모의",
      ],
    },
    {
      tag: "SENSORS · PCB",
      title: "센서 · 회로",
      sub: "Signal Conditioning",
      items: [
        "무기 탑재 센서 설계/개발",
        "다양한 Interface 및 Signal Conditioning",
        "PCB 회로 설계/개발",
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
};

export default function Page() {
  return <BusinessPage {...data} />;
}
