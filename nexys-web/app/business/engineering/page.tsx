import type { Metadata } from "next";
import BusinessPage, { type BusinessData } from "@/components/BusinessPage";
import { ENGINEERING_WORKS } from "@/lib/cases-data";

export const metadata: Metadata = {
  title: "엔지니어링 사업부",
  description:
    "(주)넥시스 엔지니어링 사업부 — 공장·설비 자동화, PLC/HMI, 전기·계장 공사, 판넬 제작 및 시운전.",
};

const data: BusinessData = {
  slug: "engineering",
  name: "엔지니어링 사업부",
  en: "Engineering Dept.",
  eyebrow: "Business — Engineering",
  lead: "공장·설비 자동화 설계부터 PLC/HMI 프로그래밍, 전기·계장 공사, 제어판넬·MCC 제작과 시운전까지. 현장의 자동화·전계장을 일괄 수행합니다.",
  intro:
    "발사체·추진기관·에너지 분야의 시험설비를 위한 전·계장 공사와 제어 시스템 구축을 설계부터 시운전까지 원스톱으로 제공합니다.",
  capabilities: [
    {
      tag: "AUTOMATION",
      title: "설비 자동화",
      sub: "Automation System",
      items: ["공장 및 설비 자동화", "자동화 시스템 구축", "통합 제어환경 구축"],
    },
    {
      tag: "PLC · HMI",
      title: "PLC · HMI",
      sub: "Programming",
      items: [
        "PLC Programming",
        "HMI Programming",
        "P&ID 기반 직관적 모니터링",
      ],
    },
    {
      tag: "DESIGN",
      title: "엔지니어링 설계",
      sub: "Engineering Design",
      items: [
        "제어 및 계측 시스템 H/W·S/W 개발",
        "시스템 통합 구축",
        "Alarm·Interlock 설계",
      ],
    },
    {
      tag: "CONSTRUCTION",
      title: "전기·계장 구축",
      sub: "E&I Construction",
      items: [
        "전기 설비 공사",
        "Panel 제작 · Cable/Tray 설치 공사",
        "Sensor 및 계측기 설치",
      ],
    },
  ],
  platforms: [
    "Rockwell Automation",
    "SIEMENS",
    "LS Electric",
    "CIMON",
    "EPICS",
    "Wonderware InTouch",
  ],
  works: ENGINEERING_WORKS,
  relatedSlugs: ["turbo-expander-control", "nuclear-fuel-assembly-test"],
  ctaTitle: (
    <>
      전계장 공사·자동화를
      <br />
      함께 진행하실까요?
    </>
  ),
};

export default function Page() {
  return <BusinessPage {...data} />;
}
