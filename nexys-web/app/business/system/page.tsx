import type { Metadata } from "next";
import BusinessPage, { type BusinessData } from "@/components/BusinessPage";

export const metadata: Metadata = {
  title: "시스템 사업부",
  description:
    "(주)넥시스 시스템 사업부 — Test Automation 설계, 분산제어(DCS), 데이터 취득(DAQ), 시험지원·유지보수.",
};

const data: BusinessData = {
  slug: "system",
  name: "시스템 사업부",
  nameEn: "System Dept.",
  en: "System Dept.",
  eyebrow: "Business — System",
  eyebrowEn: "Business — System",
  lead: "Test Automation 시스템 설계부터 분산 제어, 데이터 취득·분석, 시험지원·유지보수까지. 제어·계측 시스템의 H/W·S/W를 한 팀에서 통합 구축합니다.",
  leadEn: "From test-automation system design to distributed control, data acquisition/analysis and test support — we integrate the hardware and software of control & measurement systems in one team.",
  intro: "고객의 시험 요구를 정확히 재현하는 자동화 시스템을 설계하고, 고속·고정밀 데이터 취득과 분석으로 신뢰할 수 있는 결과를 제공합니다.",
  introEn: "We design automation systems that precisely reproduce our clients' test requirements, delivering trustworthy results through high-speed, high-precision data acquisition and analysis.",
  capabilities: [
    {
      tag: "TEST AUTOMATION",
      title: "시험 자동화",
      titleEn: "Test Automation",
      sub: "Test Automation System",
      subEn: "Test Automation System",
      items: [
        "Test Automation System 설계",
        "제어 및 계측 시스템 H/W·S/W 개발",
        "시스템 통합 구축",
      ],
      itemsEn: [
        "Test Automation System design",
        "Control & measurement HW·SW development",
        "System integration & build",
      ],
    },
    {
      tag: "DCS",
      title: "분산 제어",
      titleEn: "Distributed Control",
      sub: "Distributed Control System",
      subEn: "Distributed Control System",
      items: [
        "분산된 시스템 제어",
        "Stand Alone (RT Based) 구성",
        "다양한 Module 지원",
      ],
      itemsEn: [
        "Distributed system control",
        "Stand-alone (RT-based) configuration",
        "Support for various modules",
      ],
    },
    {
      tag: "DAQ",
      title: "데이터 취득",
      titleEn: "Data Acquisition",
      sub: "Data Acquisition",
      subEn: "Data Acquisition",
      items: ["데이터 측정 및 분석", "검사 및 시험 시스템", "각종 센서 계측"],
      itemsEn: [
        "Data measurement & analysis",
        "Inspection & test systems",
        "Measurement of various sensors",
      ],
    },
    {
      tag: "SUPPORT",
      title: "시험지원 · 유지보수",
      titleEn: "Support · Maintenance",
      sub: "Test Support & Maintenance",
      subEn: "Test Support & Maintenance",
      items: [
        "시스템 성능테스트 시험지원",
        "시스템 유지보수 및 관리",
        "다년 유지보수 계약 운영",
      ],
      itemsEn: [
        "Performance-test support",
        "System maintenance & management",
        "Multi-year maintenance contracts",
      ],
    },
  ],
  relatedSlugs: ["kfx-fuel-rig-control", "stella-2", "150kw-thrust-test"],
  ctaTitle: (
    <>
      자동화 시험 시스템을
      <br />
      구축하시겠습니까?
    </>
  ),
  ctaTitleEn: (
    <>
      Ready to build an
      <br />
      automated test system?
    </>
  ),
};

export default function Page() {
  return <BusinessPage {...data} />;
}
