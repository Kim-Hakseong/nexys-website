import type { Metadata } from "next";
import BusinessPage, { type BusinessData } from "@/components/BusinessPage";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/seo";
import { asset } from "@/lib/asset";
import { ENGINEERING_WORKS, ENGINEERING_WORKS_EN } from "@/lib/cases-data";

export const metadata: Metadata = {
  title: "엔지니어링 사업부",
  description:
    "(주)넥시스 엔지니어링 사업부 — 공장·설비 자동화, PLC/HMI, 전기·계장 공사, 판넬 제작 및 시운전.",
  alternates: { canonical: asset("/business/engineering/") },
};

const data: BusinessData = {
  slug: "engineering",
  name: "엔지니어링 사업부",
  nameEn: "Engineering Dept.",
  en: "Engineering Dept.",
  eyebrow: "Business — Engineering",
  eyebrowEn: "Business — Engineering",
  lead: "공장·설비 자동화 설계부터 PLC/HMI 프로그래밍, 전기·계장 공사, 제어판넬·MCC 제작과 시운전까지. 현장의 자동화·전계장을 일괄 수행합니다.",
  leadEn: "From factory/plant automation design to PLC/HMI programming, electrical & instrumentation works, control-panel/MCC fabrication and commissioning — we deliver turnkey automation and E&I on site.",
  intro: "발사체·추진기관·에너지 분야의 시험설비를 위한 전·계장 공사와 제어 시스템 구축을 설계부터 시운전까지 원스톱으로 제공합니다.",
  introEn: "We provide one-stop E&I works and control-system construction for test facilities in the launch-vehicle, propulsion and energy sectors — from design through commissioning.",
  capabilities: [
    {
      tag: "AUTOMATION",
      title: "설비 자동화",
      titleEn: "Plant Automation",
      sub: "Automation System",
      subEn: "Automation System",
      items: ["공장 및 설비 자동화", "자동화 시스템 구축", "통합 제어환경 구축"],
      itemsEn: [
        "Factory & plant automation",
        "Automation system build",
        "Integrated control environment",
      ],
    },
    {
      tag: "PLC · HMI",
      title: "PLC · HMI",
      titleEn: "PLC · HMI",
      sub: "Programming",
      subEn: "Programming",
      items: ["PLC Programming", "HMI Programming", "P&ID 기반 직관적 모니터링"],
      itemsEn: [
        "PLC programming",
        "HMI programming",
        "Intuitive P&ID-based monitoring",
      ],
    },
    {
      tag: "DESIGN",
      title: "엔지니어링 설계",
      titleEn: "Engineering Design",
      sub: "Engineering Design",
      subEn: "Engineering Design",
      items: [
        "제어 및 계측 시스템 H/W·S/W 개발",
        "시스템 통합 구축",
        "Alarm·Interlock 설계",
      ],
      itemsEn: [
        "Control & measurement HW·SW development",
        "System integration & build",
        "Alarm & interlock design",
      ],
    },
    {
      tag: "CONSTRUCTION",
      title: "전기·계장 구축",
      titleEn: "E&I Construction",
      sub: "E&I Construction",
      subEn: "E&I Construction",
      items: [
        "전기 설비 공사",
        "Panel 제작 · Cable/Tray 설치 공사",
        "Sensor 및 계측기 설치",
      ],
      itemsEn: [
        "Electrical equipment works",
        "Panel fabrication, cable/tray installation",
        "Sensor & instrument installation",
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
  worksEn: ENGINEERING_WORKS_EN,
  relatedSlugs: ["turbo-expander-control", "nuclear-fuel-assembly-test"],
  ctaTitle: (
    <>
      전계장 공사·자동화를
      <br />
      함께 진행하실까요?
    </>
  ),
  ctaTitleEn: (
    <>
      Let&apos;s plan your E&amp;I
      <br />
      and automation works.
    </>
  ),
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "홈", path: "/" },
          { name: "사업영역", path: "/business/" },
          { name: data.name, path: "/business/engineering/" },
        ])}
      />
      <BusinessPage {...data} />
    </>
  );
}
