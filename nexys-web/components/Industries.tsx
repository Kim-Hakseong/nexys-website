"use client";

import { useState } from "react";
import { asset } from "@/lib/asset";
import { useLang } from "@/lib/i18n";

interface L {
  ko: string;
  en: string;
}
interface Panel {
  title: L;
  num: string;
  label: L;
  cat: L;
  h3: L;
  desc: L;
  img: string;
}
interface Sector {
  key: string;
  label: L;
  small: string;
  panels: Panel[];
}

const SECTORS: Sector[] = [
  {
    key: "defence",
    label: { ko: "국방·항공", en: "Defence" },
    small: "Defence",
    panels: [
      {
        title: { ko: "HILS · SIL", en: "HILS · SIL" },
        num: "01",
        label: { ko: "HILS · SIL", en: "HILS · SIL" },
        cat: { ko: "HILS · SIL", en: "HILS · SIL" },
        h3: { ko: "유·무인기 FLCC HILS", en: "FLCC HILS for UAV / Manned" },
        desc: {
          ko: "비행제어컴퓨터(FLCC/VMC)의 실시간 검증. COTS 기반 단일·다중 PXI 구성과 Reflective Memory 실시간 데이터 공유로 모델과 실장비를 한 환경에서 검증합니다.",
          en: "Real-time verification of flight control computers (FLCC/VMC). COTS-based single/multi-PXI setups with Reflective Memory data sharing validate model and hardware in one environment.",
        },
        img: "/images/thrust-tt.jpg",
      },
      {
        title: { ko: "점검장비", en: "Test Equipment" },
        num: "02",
        label: { ko: "점검장비 · LRU", en: "Test Equipment · LRU" },
        cat: { ko: "점검장비 · LRU", en: "Test Equipment · LRU" },
        h3: { ko: "지상점검장비", en: "Ground Test Equipment" },
        desc: {
          ko: "통신·Digital·Analog 신호 입출력 점검, 1553B·RS422·Discrete 모의 및 실시간 Buffered 데이터 수집·Replay로 LRU 기능을 정밀 검증합니다.",
          en: "Inspects communication/digital/analog I/O, simulates 1553B·RS422·Discrete, and precisely verifies LRU functions with real-time buffered acquisition and replay.",
        },
        img: "/images/lru.jpg",
      },
      {
        title: { ko: "시험 자동화", en: "Test Automation" },
        num: "03",
        label: { ko: "시험 자동화", en: "Test Automation" },
        cat: { ko: "시험 자동화", en: "Test Automation" },
        h3: { ko: "시험 자동화 시스템", en: "Test Automation System" },
        desc: {
          ko: "KF-X 연료리그 등 항공기 계통 통합 시험장치. 운용환경·자세 모사와 실시간 변수 모니터링으로 반복 가능한 검증 환경을 제공합니다.",
          en: "Integrated aircraft-system test rigs such as the KF-X fuel rig. Operating-environment and attitude simulation with real-time monitoring provide a repeatable verification environment.",
        },
        img: "/images/hils-hmi.jpg",
      },
      {
        title: { ko: "추진 시험", en: "Propulsion Test" },
        num: "04",
        label: { ko: "추진 시험", en: "Propulsion Test" },
        cat: { ko: "추진 시험", en: "Propulsion Test" },
        h3: { ko: "전기추진 시험설비", en: "Electric Propulsion Test Rig" },
        desc: {
          ko: "OPPAV Ironbird·150kW 추력시험장치 등 분산전기추진 시스템 성능 검증. 다중 모터 인버터·FPGA 기반 고정밀 제어와 데이터 취득.",
          en: "Performance verification of distributed electric propulsion such as OPPAV Ironbird and the 150kW thrust rig. Multi-motor inverter and FPGA-based high-precision control and acquisition.",
        },
        img: "/images/engine.jpg",
      },
    ],
  },
  {
    key: "energy",
    label: { ko: "원자력·에너지", en: "Nuclear · Energy" },
    small: "Energy",
    panels: [
      {
        title: { ko: "원자력 · 에너지", en: "Nuclear · Energy" },
        num: "01",
        label: { ko: "원자력 · 에너지", en: "Nuclear · Energy" },
        cat: { ko: "원자력 · 에너지", en: "Nuclear · Energy" },
        h3: { ko: "원자력 시험설비", en: "Nuclear Test Facility" },
        desc: {
          ko: "STELLA-II 소듐 열유동 시험장치, 핵연료 집합체 기계특성 시험시설. 최대 100Hz 고속 저장과 펌프·밸브·히터 Interlock 제어를 구축합니다.",
          en: "STELLA-II sodium thermal-hydraulic rig and nuclear fuel assembly mechanical test facility. Up to 100Hz high-speed logging with pump·valve·heater interlock control.",
        },
        img: "/images/plant-energy.jpg",
      },
      {
        title: { ko: "설비 자동화", en: "Plant Automation" },
        num: "02",
        label: { ko: "설비 자동화", en: "Plant Automation" },
        cat: { ko: "설비 자동화", en: "Plant Automation" },
        h3: { ko: "설비 자동화 시스템", en: "Plant Automation System" },
        desc: {
          ko: "공장·설비 자동화 구축. 다중 PLC Ethernet/IP 통합 제어, P&ID 기반 직관적 모니터링과 Alarm·Interlock 관리로 안정적 운용을 지원합니다.",
          en: "Factory and plant automation. Multi-PLC Ethernet/IP integrated control with P&ID-based intuitive monitoring and alarm·interlock management for stable operation.",
        },
        img: "/images/fuelrig.jpg",
      },
      {
        title: { ko: "전계장 공사", en: "E&I Construction" },
        num: "03",
        label: { ko: "전계장 공사", en: "E&I Construction" },
        cat: { ko: "전계장 공사", en: "E&I Construction" },
        h3: { ko: "전기·계장 공사", en: "Electrical & Instrumentation" },
        desc: {
          ko: "전기 설비·Cable·Tray·계측기 설치, 제어판넬·MCC 제작과 시운전. 발사체·추진기관·에너지 분야의 전계장 공사를 일괄 수행합니다.",
          en: "Electrical equipment, cable/tray and instrument installation, control panel/MCC fabrication and commissioning — turnkey E&I works for launch-vehicle, propulsion and energy sectors.",
        },
        img: "/images/piping.jpg",
      },
    ],
  },
];

export default function Industries() {
  const [sectorIdx, setSectorIdx] = useState(0);
  const [panelIdx, setPanelIdx] = useState(0);
  const { lang } = useLang();
  const t = (l: L) => (lang === "en" ? l.en : l.ko);

  const sector = SECTORS[sectorIdx];
  const title = sector.panels[panelIdx] ? t(sector.panels[panelIdx].title) : "";

  return (
    <>
      <div className="ind-head">
        <div>
          <span className="eyebrow">
            {lang === "en" ? "Industries — Applications" : "Industries — 적용 분야"}
          </span>
          <h2 className="ind-title mt-m">
            <span className="lo">{title}</span>
            <span className="accent">.</span>
          </h2>
        </div>
        <span className="ind-count">
          {lang === "en"
            ? "Select a field to expand its work →"
            : "분야를 선택하면 적용 사례가 펼쳐집니다 →"}
        </span>
      </div>

      <div className="ind">
        <div className="ind__toggle">
          {SECTORS.map((s, i) => (
            <button
              key={s.key}
              className={`ind__sector${i === sectorIdx ? " is-active" : ""}`}
              onClick={() => {
                setSectorIdx(i);
                setPanelIdx(0);
              }}
            >
              {t(s.label)}
              <small>{s.small}</small>
            </button>
          ))}
        </div>

        <div className="ind__stage">
          {SECTORS.map((s, si) => (
            <div
              key={s.key}
              className={`ind__set${si === sectorIdx ? " is-active" : ""}`}
            >
              {s.panels.map((p, pi) => {
                const active = si === sectorIdx && pi === panelIdx;
                return (
                  <div
                    key={p.num}
                    className={`ind-panel${active ? " is-active" : ""}`}
                    onMouseEnter={() => si === sectorIdx && setPanelIdx(pi)}
                    onClick={() => {
                      setSectorIdx(si);
                      setPanelIdx(pi);
                    }}
                  >
                    <div className="ph">
                      <img
                        className="ph__img"
                        src={asset(p.img)}
                        alt={t(p.label)}
                        loading="lazy"
                      />
                    </div>
                    <div className="ind-panel__scrim"></div>
                    <span className="ind-panel__num">{p.num}</span>
                    <span className="ind-panel__label">{t(p.label)}</span>
                    <div className="ind-panel__foot">
                      <span className="ind-panel__cat">{t(p.cat)}</span>
                      <h3 className="ind-panel__title">{t(p.h3)}</h3>
                      <p className="ind-panel__desc">{t(p.desc)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
