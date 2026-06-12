"use client";

import { useState } from "react";
import { asset } from "@/lib/asset";

interface Panel {
  title: string; // ind-title 표시값
  num: string;
  label: string;
  cat: string;
  h3: string;
  desc: string;
  img: string;
}
interface Sector {
  key: string;
  label: string;
  small: string;
  panels: Panel[];
}

const SECTORS: Sector[] = [
  {
    key: "defence",
    label: "국방·항공",
    small: "Defence",
    panels: [
      {
        title: "HILS · SIL",
        num: "01",
        label: "HILS · SIL",
        cat: "HILS · SIL",
        h3: "유·무인기 FLCC HILS",
        desc: "비행제어컴퓨터(FLCC/VMC)의 실시간 검증. COTS 기반 단일·다중 PXI 구성과 Reflective Memory 실시간 데이터 공유로 모델과 실장비를 한 환경에서 검증합니다.",
        img: "/images/thrust-tt.jpg",
      },
      {
        title: "점검장비",
        num: "02",
        label: "점검장비 · LRU",
        cat: "점검장비 · LRU",
        h3: "지상점검장비",
        desc: "통신·Digital·Analog 신호 입출력 점검, 1553B·RS422·Discrete 모의 및 실시간 Buffered 데이터 수집·Replay로 LRU 기능을 정밀 검증합니다.",
        img: "/images/lru.jpg",
      },
      {
        title: "시험 자동화",
        num: "03",
        label: "시험 자동화",
        cat: "시험 자동화",
        h3: "시험 자동화 시스템",
        desc: "KF-X 연료리그 등 항공기 계통 통합 시험장치. 운용환경·자세 모사와 실시간 변수 모니터링으로 반복 가능한 검증 환경을 제공합니다.",
        img: "/images/hils-hmi.jpg",
      },
      {
        title: "추진 시험",
        num: "04",
        label: "추진 시험",
        cat: "추진 시험",
        h3: "전기추진 시험설비",
        desc: "OPPAV Ironbird·150kW 추력시험장치 등 분산전기추진 시스템 성능 검증. 다중 모터 인버터·FPGA 기반 고정밀 제어와 데이터 취득.",
        img: "/images/engine.jpg",
      },
    ],
  },
  {
    key: "commercial",
    label: "민수·에너지",
    small: "Commercial",
    panels: [
      {
        title: "원자력 · 에너지",
        num: "01",
        label: "원자력 · 에너지",
        cat: "원자력 · 에너지",
        h3: "원자력 시험설비",
        desc: "STELLA-II 소듐 열유동 시험장치, 핵연료 집합체 기계특성 시험시설. 최대 100Hz 고속 저장과 펌프·밸브·히터 Interlock 제어를 구축합니다.",
        img: "/images/plant-energy.jpg",
      },
      {
        title: "설비 자동화",
        num: "02",
        label: "설비 자동화",
        cat: "설비 자동화",
        h3: "설비 자동화 시스템",
        desc: "공장·설비 자동화 구축. 다중 PLC Ethernet/IP 통합 제어, P&ID 기반 직관적 모니터링과 Alarm·Interlock 관리로 안정적 운용을 지원합니다.",
        img: "/images/fuelrig.jpg",
      },
      {
        title: "전계장 공사",
        num: "03",
        label: "전계장 공사",
        cat: "전계장 공사",
        h3: "전기·계장 공사",
        desc: "전기 설비·Cable·Tray·계측기 설치, 제어판넬·MCC 제작과 시운전. 발사체·추진기관·에너지 분야의 전계장 공사를 일괄 수행합니다.",
        img: "/images/piping.jpg",
      },
    ],
  },
];

export default function Industries() {
  const [sectorIdx, setSectorIdx] = useState(0);
  const [panelIdx, setPanelIdx] = useState(0);

  const sector = SECTORS[sectorIdx];
  const title = sector.panels[panelIdx]?.title ?? "";

  return (
    <>
      <div className="ind-head">
        <div>
          <span className="eyebrow">Industries — 적용 분야</span>
          <h2 className="ind-title mt-m">
            <span className="lo">{title}</span>
            <span className="accent">.</span>
          </h2>
        </div>
        <span className="ind-count">
          분야를 선택하면 적용 사례가 펼쳐집니다 →
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
              {s.label}
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
                        alt={p.label}
                        loading="lazy"
                      />
                    </div>
                    <div className="ind-panel__scrim"></div>
                    <span className="ind-panel__num">{p.num}</span>
                    <span className="ind-panel__label">{p.label}</span>
                    <div className="ind-panel__foot">
                      <span className="ind-panel__cat">{p.cat}</span>
                      <h3 className="ind-panel__title">{p.h3}</h3>
                      <p className="ind-panel__desc">{p.desc}</p>
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
