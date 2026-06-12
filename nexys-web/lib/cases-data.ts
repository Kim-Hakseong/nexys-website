// lib/cases-data.ts
// 단일 소스 오브 트루스 — content/cases.md (PDF 카탈로그 원문 기반) 구조화.
// 콘텐츠는 임의 창작 금지. 영문(En)은 한국어 원문의 1차 번역.

export type CaseCategory =
  | "defense"
  | "hils"
  | "propulsion"
  | "nuclear"
  | "engineering";

export interface CaseItem {
  no: string;
  slug: string;
  title: string;
  titleEn: string;
  cat: string; // 카드 카테고리 라벨 (영문 — 공용)
  badge: string;
  desc: string;
  descEn: string;
  image: string;
  figures: string[];
  cats: CaseCategory[];
  featured?: boolean;
  sector: string;
  sectorEn: string;
  division: string;
  divisionEn: string;
  platform: string;
  overviewLead: string;
  overviewLeadEn: string;
  overview: string[];
  overviewEn: string[];
  features: string[];
  featuresEn: string[];
}

const IMG = (f: string) => `/images/${f}`;

export const CASES: CaseItem[] = [
  {
    no: "01",
    slug: "veristand-hils-platform",
    title: "VeriStand HILS Platform",
    titleEn: "VeriStand HILS Platform",
    cat: "Defense · Aerospace",
    badge: "HILS · SIL",
    desc: "COTS 기반 HILS 플랫폼. 단일·다중 PXI 구성과 Reflective Memory 실시간 데이터 공유.",
    descEn:
      "COTS-based HILS platform. Single/multi-PXI configuration with Reflective Memory real-time data sharing.",
    image: IMG("lru.jpg"),
    figures: [IMG("hils-hmi.jpg"), IMG("thrust-tt.jpg")],
    cats: ["defense", "hils"],
    featured: true,
    sector: "국방·항공 / HILS·SIL",
    sectorEn: "Defense·Aerospace / HILS·SIL",
    division: "국방·항공기술 연구소",
    divisionEn: "MIL · Aerospace Tech Center",
    platform: "NI PXI · VeriStand · Reflective Memory",
    overviewLead:
      "COTS(Commercial Off-the-Shelf) 기반의 HILS 플랫폼으로, 요구 규모에 따라 단일 PXI 또는 다중 PXI로 유연하게 구성합니다. 직관적인 시스템 구성과 다양한 모델 적용을 지원합니다.",
    overviewLeadEn:
      "A COTS (Commercial Off-the-Shelf) based HILS platform, flexibly configured as single or multi-PXI according to scale. It supports intuitive system configuration and a wide range of models.",
    overview: [
      "COTS 기반의 HILS 플랫폼 — 요구 규모에 따른 유연한 구성(단일 PXI / 다중 PXI)",
      "직관적인 시스템 구성",
      "C/C++, LabVIEW, Simulink 등 다양한 모델 적용 가능",
    ],
    overviewEn: [
      "COTS-based HILS platform — flexible configuration by scale (single / multi-PXI)",
      "Intuitive system configuration",
      "Supports diverse models including C/C++, LabVIEW and Simulink",
    ],
    features: [
      "실장비 연동 모드 및 모델 연동 모드",
      "Reflective Memory를 통한 실시간 데이터 공유(다중 PXI 구성)",
      "외부 장치 연계 구성(지상통제장치 등)",
      "실시간 Data Logging 및 Data Analysis 지원",
      "다양한 항공전자통신 지원",
    ],
    featuresEn: [
      "Hardware-in-the-loop and model-in-the-loop modes",
      "Real-time data sharing via Reflective Memory (multi-PXI)",
      "Integration with external devices (e.g. ground control station)",
      "Real-time data logging and data analysis",
      "Support for various avionics communications",
    ],
  },
  {
    no: "02",
    slug: "uav-ground-test-equipment",
    title: "무인기 지상점검장비",
    titleEn: "UAV Ground Test Equipment",
    cat: "Defense · Aerospace",
    badge: "FLCC / LRU",
    desc: "통신·Digital·Analog 신호 입출력 점검, 실시간 Buffered 데이터 수집 및 Replay.",
    descEn:
      "Communication/digital/analog I/O inspection with real-time buffered acquisition and replay.",
    image: IMG("hero-wing.jpg"),
    figures: [IMG("lru.jpg"), IMG("pcb.jpg")],
    cats: ["defense"],
    sector: "국방·항공 / 점검장비",
    sectorEn: "Defense·Aerospace / Test Equipment",
    division: "국방·항공기술 연구소",
    divisionEn: "MIL · Aerospace Tech Center",
    platform: "FPGA · Real-Time OS · 1553B · ARINC 429 · CAN",
    overviewLead:
      "무인기 탑재품의 통신/Digital/Analog 신호 입출력을 점검하는 지상점검장비입니다. 데이터 취득·저장 및 신호 모사 기능을 수행합니다.",
    overviewLeadEn:
      "Ground test equipment that inspects communication/digital/analog signal I/O of UAV onboard units, performing data acquisition, storage and signal simulation.",
    overview: [
      "무인기 탑재품의 통신/Digital/Analog 신호 입출력 점검",
      "데이터 취득 및 저장",
      "신호 모사 기능 수행",
    ],
    overviewEn: [
      "Inspection of communication/digital/analog signal I/O of UAV onboard units",
      "Data acquisition and storage",
      "Signal simulation",
    ],
    features: [
      "통합된 ICD 형식을 이용하여 수정 및 변경 용이",
      "실시간 BUFFERED 데이터 수집",
      "사용자가 편집 가능한 데이터 테이블·그래프 디스플레이",
      "실시간 데이터 저장 및 Replay·ASCII Export 지원",
    ],
    featuresEn: [
      "Easy modification using a unified ICD format",
      "Real-time buffered data acquisition",
      "User-editable data tables and graph displays",
      "Real-time data storage, replay and ASCII export",
    ],
  },
  {
    no: "03",
    slug: "kfx-fuel-rig-control",
    title: "KF-X 연료리그시험장치 제어시스템",
    titleEn: "KF-X Fuel Rig Test Control System",
    cat: "Defense · Aerospace",
    badge: "Test Automation",
    desc: "항공기 연료계통 통합 시험장치. 운용환경·자세 모사 및 실시간 변수 모니터링.",
    descEn:
      "Integrated aircraft fuel-system test rig. Operating-environment/attitude simulation with real-time monitoring.",
    image: IMG("hils-hmi.jpg"),
    figures: [IMG("hero-jet.jpg"), IMG("fuelrig.jpg")],
    cats: ["defense", "hils"],
    featured: true,
    sector: "항공 / 연료계통",
    sectorEn: "Aerospace / Fuel System",
    division: "시스템 사업부",
    divisionEn: "System Dept.",
    platform: "LabVIEW · PXI 기반 통합제어",
    overviewLead:
      "항공기 연료계통의 성능을 실장비 없이 검증하는 통합 시험장치입니다. 운용 환경과 자세 조건을 정밀하게 모사하여 연료계통의 성능을 확인하고 평가합니다.",
    overviewLeadEn:
      "An integrated test rig that verifies aircraft fuel-system performance without the actual aircraft. It precisely simulates operating environment and attitude to confirm and evaluate fuel-system performance.",
    overview: [
      "항공기 연료계통의 통합 시험장치",
      "운용 환경·자세 조건 등을 모사하여 항공기 연료계통의 성능 확인 및 평가",
      "기반 설비 및 시험 대상에 대한 통합 제어",
    ],
    overviewEn: [
      "Integrated test rig for the aircraft fuel system",
      "Confirms and evaluates fuel-system performance by simulating operating environment and attitude",
      "Integrated control of the base facility and the unit under test",
    ],
    features: [
      "연료 제어기와의 인터페이스 구성",
      "시험 조건에 맞는 환경 모사",
      "실시간 변수 모니터링",
      "연료 유량·온도·항공기 자세 제어 및 Fault 모사",
    ],
    featuresEn: [
      "Interface with the fuel controller",
      "Environment simulation matched to test conditions",
      "Real-time variable monitoring",
      "Fuel flow/temperature and aircraft-attitude control with fault simulation",
    ],
  },
  {
    no: "04",
    slug: "wmc-test-software",
    title: "무장관리컴퓨터 점검 소프트웨어",
    titleEn: "Weapon Management Computer Test Software",
    cat: "Defense · Aerospace",
    badge: "Defense",
    desc: "회전익기 무장관리컴퓨터 SW 기능 점검. 1553B·RS422·Discrete 신호 모의.",
    descEn:
      "Function testing of rotary-wing weapon management computer SW. 1553B·RS422·Discrete signal simulation.",
    image: IMG("hero-jet.jpg"),
    figures: [IMG("pcb.jpg"), IMG("lru.jpg")],
    cats: ["defense"],
    sector: "국방 / 무기체계",
    sectorEn: "Defense / Weapon System",
    division: "국방·항공기술 연구소",
    divisionEn: "MIL · Aerospace Tech Center",
    platform: "MIL-STD-1553B · RS422 · Discrete I/O",
    overviewLead:
      "회전익 항공기의 무장 관리 컴퓨터에 탑재되는 SW의 기능을 점검하는 장비입니다. 여러 운용 조건 및 환경에서 무장 관리 컴퓨터의 동작을 확인하고 디버그합니다.",
    overviewLeadEn:
      "Equipment that tests the software loaded on the weapon management computer of rotary-wing aircraft, verifying and debugging its operation across diverse conditions and environments.",
    overview: [
      "회전익 항공기 무장 관리 컴퓨터 탑재 SW의 기능 점검 장비",
      "여러 운용 조건·환경에서 무장 관리 컴퓨터의 동작 확인 및 디버그",
    ],
    overviewEn: [
      "Test equipment for the SW on rotary-wing weapon management computers",
      "Verifies and debugs operation across various conditions and environments",
    ],
    features: [
      "1553B, RS422, Discrete 등의 통신 및 신호 모의",
      "연동 장비·전자부품의 통신 및 신호 구현·모의",
      "실제 운용 환경과 유사한 시험환경 구축",
    ],
    featuresEn: [
      "Simulation of 1553B, RS422, Discrete communications and signals",
      "Implementation and simulation of linked equipment and electronic-component signals",
      "A test environment closely resembling actual operation",
    ],
  },
  {
    no: "05",
    slug: "hybrid-propulsion-test",
    title: "복합 추진시스템 시험평가 소프트웨어",
    titleEn: "Hybrid Propulsion Test & Evaluation Software",
    cat: "Propulsion · Test",
    badge: "Propulsion",
    desc: "전기/엔진 복합 추진장치 Iron bird. 10개 모터·엔진 스로틀 제어 및 성능 수집.",
    descEn:
      "Electric/engine hybrid propulsion Iron Bird. Control of 10 motors and engine throttle with performance acquisition.",
    image: IMG("ironbird.jpg"),
    figures: [IMG("engine.jpg"), IMG("thrust-tt.jpg")],
    cats: ["propulsion"],
    sector: "추진 / 시험평가",
    sectorEn: "Propulsion / Test & Evaluation",
    division: "시스템 사업부",
    divisionEn: "System Dept.",
    platform: "UAV CAN · Real-Time · Multi-Motor Control",
    overviewLead:
      "전기 추진 시스템의 추진 시스템 시험장치(Iron Bird)입니다. 전기/엔진 복합 추진장치로, 해양안전 및 관리를 위한 무인 항공기 시스템에 적용됩니다.",
    overviewLeadEn:
      "An Iron Bird test rig for electric propulsion systems. An electric/engine hybrid propulsion unit applied to UAV systems for maritime safety and management.",
    overview: [
      "전기 추진 시스템의 추진 시스템 시험장치(Iron Bird)",
      "전기/엔진 복합 추진장치",
      "해양안전 및 관리를 위한 무인 항공기 시스템",
    ],
    overviewEn: [
      "Iron Bird test rig for electric propulsion systems",
      "Electric/engine hybrid propulsion unit",
      "UAV system for maritime safety and management",
    ],
    features: [
      "UAV CAN 인터페이스",
      "동축반전 제어체계",
      "10개의 추진 모터와 1개의 엔진 스로틀 제어",
      "전압·전류·RPM·온도 등 성능 데이터 수집",
    ],
    featuresEn: [
      "UAV CAN interface",
      "Coaxial counter-rotating control scheme",
      "Control of 10 propulsion motors and one engine throttle",
      "Acquisition of voltage, current, RPM and temperature performance data",
    ],
  },
  {
    no: "06",
    slug: "aircraft-bearing-tester",
    title: "항공기 베어링 성능 시험기",
    titleEn: "Aircraft Bearing Performance Tester",
    cat: "Propulsion · Test",
    badge: "Test Automation",
    desc: "고속 스핀들 모터 기반 내구성 시험. 고속 진동 데이터 획득 및 FFT 도시.",
    descEn:
      "Durability testing on a high-speed spindle motor. High-speed vibration acquisition with FFT plotting.",
    image: IMG("pcb.jpg"),
    figures: [IMG("turbo.jpg"), IMG("engine.jpg")],
    cats: ["propulsion"],
    sector: "항공 / 내구성 시험",
    sectorEn: "Aerospace / Durability Test",
    division: "시스템 사업부",
    divisionEn: "System Dept.",
    platform: "NI DAQ · FFT · P&ID HMI",
    overviewLead:
      "고속 스핀들 모터를 이용하여 회전하는 베어링의 내구성을 시험하는 장비입니다. 시험 조건에 따른 인버터/히터 제어와 온도·압력·진동·유량 실시간 측정을 수행합니다.",
    overviewLeadEn:
      "Equipment that tests the durability of rotating bearings using a high-speed spindle motor, with inverter/heater control by test condition and real-time measurement of temperature, pressure, vibration and flow.",
    overview: [
      "고속 스핀들 모터를 이용한 베어링 내구성 시험 장비",
      "시험 조건에 따른 인버터/히터 제어",
      "온도·압력·진동·유량 실시간 측정",
    ],
    overviewEn: [
      "Bearing durability test equipment using a high-speed spindle motor",
      "Inverter/heater control according to test conditions",
      "Real-time measurement of temperature, pressure, vibration and flow",
    ],
    features: [
      "P&ID 기반 직관적 시험 환경 모니터링",
      "실시간 고속 진동 데이터 획득 및 FFT 그래프 도시",
      "비상 정지 조건 확인·대응, 실시간 Data Save",
      "진동 데이터 기반 회전 주파수 검출",
    ],
    featuresEn: [
      "Intuitive P&ID-based test monitoring",
      "Real-time high-speed vibration acquisition with FFT plotting",
      "Emergency-stop detection/response with real-time data saving",
      "Rotation-frequency detection from vibration data",
    ],
  },
  {
    no: "07",
    slug: "200kg-cargo-drone-hils",
    title: "200kg급 수송드론 HILS",
    titleEn: "200kg-class Cargo Drone HILS",
    cat: "Defense · Aerospace",
    badge: "HILS · SIL",
    desc: "수소연료전지 VTOL 수송드론용 HILS. 지상통제장치와 실시간 연동.",
    descEn:
      "HILS for a hydrogen-fuel-cell VTOL cargo drone. Real-time link with the ground control station.",
    image: IMG("turbo.jpg"),
    figures: [IMG("hero-uav.jpg"), IMG("hils-hmi.jpg")],
    cats: ["defense", "hils"],
    featured: true,
    sector: "무인기 / HILS·SIL",
    sectorEn: "UAV / HILS·SIL",
    division: "국방·항공기술 연구소",
    divisionEn: "MIL · Aerospace Tech Center",
    platform: "NI PXI · Reflective Memory · GCS 연동",
    overviewLead:
      "수소연료전지 기반 VTOL 방식의 200kg급 수송드론용 HILS입니다. 비행모델 수행 및 사용자 파라미터 조작을 지원합니다.",
    overviewLeadEn:
      "A HILS system for a 200kg-class hydrogen-fuel-cell VTOL cargo drone, supporting flight-model execution and user parameter manipulation.",
    overview: [
      "수소연료전지 기반 VTOL 방식의 200kg급 수송드론용 HILS",
      "비행모델 수행 및 사용자 파라미터 조작",
    ],
    overviewEn: [
      "HILS for a 200kg-class hydrogen-fuel-cell VTOL cargo drone",
      "Flight-model execution and user parameter manipulation",
    ],
    features: [
      "실장비 연동 모드 및 모델 연동 모드",
      "Reflective Memory 실시간 데이터 공유",
      "비행 모사를 위한 지상통제장치 실시간 연동",
      "실시간 Data Logging·Analysis",
    ],
    featuresEn: [
      "Hardware-in-the-loop and model-in-the-loop modes",
      "Real-time data sharing via Reflective Memory",
      "Real-time link with the ground control station for flight simulation",
      "Real-time data logging and analysis",
    ],
  },
  {
    no: "08",
    slug: "150kw-thrust-test",
    title: "150kW급 추력시험장치",
    titleEn: "150kW-class Thrust Test Stand",
    cat: "Propulsion · Test",
    badge: "Propulsion",
    desc: "전기추진장치 단일 Pod 추력 시험. RPM·토크 제어모드, 실시간 변수 분석.",
    descEn:
      "Single-pod thrust test of an electric propulsion unit. RPM/torque control modes with real-time analysis.",
    image: IMG("engine.jpg"),
    figures: [IMG("thrust-tt.jpg"), IMG("turbo.jpg")],
    cats: ["propulsion"],
    sector: "추진 / 추력 시험",
    sectorEn: "Propulsion / Thrust Test",
    division: "시스템 사업부",
    divisionEn: "System Dept.",
    platform: "Real-Time · Inverter Control · DAQ",
    overviewLead:
      "150kW급 전기추진장치의 단일 Pod 추력시험 시스템입니다. 2개의 전기추진 모터용 인버터를 제어하는 Real-time 기반 시험시스템입니다.",
    overviewLeadEn:
      "A single-pod thrust test system for a 150kW-class electric propulsion unit — a real-time test system controlling inverters for two electric propulsion motors.",
    overview: [
      "150kW급 전기추진장치의 단일 Pod 추력시험",
      "2개의 전기추진 모터용 인버터 제어",
      "Real-time 기반 시험시스템",
    ],
    overviewEn: [
      "Single-pod thrust test of a 150kW-class electric propulsion unit",
      "Inverter control for two electric propulsion motors",
      "Real-time-based test system",
    ],
    features: [
      "RPM 제어모드",
      "토크 제어모드",
      "실시간 변수 모니터링",
      "데이터 분석",
    ],
    featuresEn: [
      "RPM control mode",
      "Torque control mode",
      "Real-time variable monitoring",
      "Data analysis",
    ],
  },
  {
    no: "09",
    slug: "oppav-ironbird",
    title: "OPPAV Ironbird",
    titleEn: "OPPAV Ironbird",
    cat: "Propulsion · Test",
    badge: "HILS · SIL",
    desc: "분산전기추진시스템 성능검증. 8개 추진 모터 인버터·FPGA 기반 시험 시스템.",
    descEn:
      "Performance verification of distributed electric propulsion. FPGA-based system with 8 motor inverters.",
    image: IMG("thrust-tt.jpg"),
    figures: [IMG("ironbird.jpg"), IMG("engine.jpg")],
    cats: ["propulsion", "hils"],
    featured: true,
    sector: "추진 / 분산전기추진",
    sectorEn: "Propulsion / Distributed Electric",
    division: "국방·항공기술 연구소",
    divisionEn: "MIL · Aerospace Tech Center",
    platform: "FPGA · PLC TCP/IP · Distributed Control",
    overviewLead:
      "분산전기추진시스템의 성능을 검증하는 FPGA 기반 시험시스템입니다. 8개의 추진 모터 인버터와 BMC·Collective Pitch를 제어합니다.",
    overviewLeadEn:
      "An FPGA-based test system that verifies the performance of a distributed electric propulsion system, controlling eight propulsion-motor inverters along with BMC and collective pitch.",
    overview: [
      "분산전기추진시스템 성능검증",
      "8개의 추진 모터 인버터",
      "인버터·BMC·Collective Pitch 제어",
      "FPGA 기반 시험시스템",
    ],
    overviewEn: [
      "Performance verification of a distributed electric propulsion system",
      "Eight propulsion-motor inverters",
      "Control of inverters, BMC and collective pitch",
      "FPGA-based test system",
    ],
    features: [
      "PLC와 TCP/IP 통신을 통한 Data 획득·제어",
      "모든 공정 과정 자동화",
      "설정 창을 이용한 혼합 비율 및 자동 공정 관리",
      "실시간 Data Save / Data Analysis 지원",
    ],
    featuresEn: [
      "Data acquisition and control via TCP/IP with PLC",
      "Full process automation",
      "Mixture-ratio and automatic process management through a settings panel",
      "Real-time data saving and data analysis",
    ],
  },
  {
    no: "10",
    slug: "turbo-expander-control",
    title: "터보 팽창기 제어 시스템",
    titleEn: "Turbo Expander Control System",
    cat: "Engineering · Control",
    badge: "Engineering",
    desc: "다중 PLC Ethernet/IP 통합 제어. P&ID 기반 직관적 모니터링과 Alarm 관리.",
    descEn:
      "Multi-PLC Ethernet/IP integrated control. P&ID-based intuitive monitoring and alarm management.",
    image: IMG("fuelrig.jpg"),
    figures: [IMG("piping.jpg"), IMG("plant-energy.jpg")],
    cats: ["engineering"],
    sector: "에너지 / 설비 제어",
    sectorEn: "Energy / Plant Control",
    division: "엔지니어링 사업부",
    divisionEn: "Engineering Dept.",
    platform: "Multi-PLC · Ethernet/IP · HMI",
    overviewLead:
      "터보팽창기의 운용 환경을 제어하고 모니터링하는 통합 제어 시스템입니다. 터보팽창기 PLC, 유압제어 PLC, Main 환경제어 PLC를 Ethernet/IP 통신으로 구성합니다.",
    overviewLeadEn:
      "An integrated control system that controls and monitors the operating environment of a turbo expander, linking the turbo-expander PLC, hydraulic-control PLC and main environment-control PLC over Ethernet/IP.",
    overview: [
      "터보팽창기 운용 환경 제어 및 모니터링",
      "터보팽창기 PLC / 유압제어 PLC / Main 환경제어 PLC와 Ethernet/IP 통신 구성",
    ],
    overviewEn: [
      "Control and monitoring of the turbo-expander operating environment",
      "Ethernet/IP configuration across turbo-expander, hydraulic-control and main environment-control PLCs",
    ],
    features: [
      "각 장비와 Ethernet/IP 통신을 이용한 통합 제어환경 구축",
      "시스템 Alarm 범위 지정 및 실시간 모니터링",
      "개별 이벤트 저장·확인",
      "P&ID와 그래프 기반 직관적 모니터링",
    ],
    featuresEn: [
      "Integrated control environment via Ethernet/IP with each device",
      "System alarm-range setting and real-time monitoring",
      "Storage and review of individual events",
      "Intuitive monitoring based on P&ID and graphs",
    ],
  },
  {
    no: "11",
    slug: "thrust-test-rig",
    title: "Thrust Test Rig",
    titleEn: "Thrust Test Rig",
    cat: "Propulsion · Test",
    badge: "Propulsion",
    desc: "추력시험장치 성능·특성 평가. PWM·CAN 모터 제어, 개별 센서 캘리브레이션.",
    descEn:
      "Performance/characteristic evaluation of a thrust rig. PWM·CAN motor control with per-sensor calibration.",
    image: IMG("engine.jpg"),
    figures: [IMG("thrust-tt.jpg"), IMG("ironbird.jpg")],
    cats: ["propulsion"],
    sector: "추진 / 추력 시험",
    sectorEn: "Propulsion / Thrust Test",
    division: "시스템 사업부",
    divisionEn: "System Dept.",
    platform: "PWM · CAN · Sensor Calibration",
    overviewLead:
      "추력 시험장치의 성능 및 특성을 평가하는 시스템입니다. 제어 조건 변경과 반복 Test가 가능해 보다 정확한 Test Data를 취득합니다.",
    overviewLeadEn:
      "A system that evaluates the performance and characteristics of a thrust test rig. Adjustable control conditions and repeatable testing yield more accurate test data.",
    overview: [
      "추력 시험장치의 성능 평가 및 특성 평가",
      "제어 조건 변경 및 반복 Test 가능 — 보다 정확한 Test Data 취득",
    ],
    overviewEn: [
      "Performance and characteristic evaluation of a thrust test rig",
      "Adjustable control conditions and repeatable testing for more accurate test data",
    ],
    features: [
      "개별 Sensor Calibration",
      "PWM 및 CAN Communication 기반 Motor 제어",
      "Performance Test·Characteristic Test 지원",
      "Data Analysis 지원",
    ],
    featuresEn: [
      "Per-sensor calibration",
      "Motor control based on PWM and CAN communication",
      "Performance and characteristic testing",
      "Data analysis",
    ],
  },
  {
    no: "12",
    slug: "stella-2",
    title: "STELLA-II 소듐 열유동 종합효과 시험장치",
    titleEn: "STELLA-II Sodium Thermal-Hydraulic Test Facility",
    cat: "Nuclear · Energy",
    badge: "Nuclear · Energy",
    desc: "SFR 원형로 안전계통 성능 입증. 최대 100Hz 고속 저장 및 TrendView 시각화.",
    descEn:
      "Validates SFR prototype-reactor safety systems. Up to 100Hz logging with TrendView visualization.",
    image: IMG("plant-energy.jpg"),
    figures: [IMG("plant-sodium.jpg"), IMG("piping.jpg")],
    cats: ["nuclear"],
    sector: "원자력 / 열유동",
    sectorEn: "Nuclear / Thermal-Hydraulics",
    division: "시스템 사업부",
    divisionEn: "System Dept.",
    platform: "LabVIEW · DCS · PLC · 100Hz DAQ",
    overviewLead:
      "SFR 원형로 안전계통의 성능을 입증하는 LabVIEW 기반 시험장치입니다. 잔열 제거 계통과 일차 열 전달 계통의 상호 영향을 평가합니다.",
    overviewLeadEn:
      "A LabVIEW-based test facility that validates the safety systems of an SFR prototype reactor, evaluating the interaction between the decay-heat-removal and primary heat-transfer systems.",
    overview: [
      "SFR 원형로 안전계통의 성능 입증",
      "잔열 제거 계통과 일차 열 전달 계통의 상호 영향 평가",
    ],
    overviewEn: [
      "Validation of SFR prototype-reactor safety systems",
      "Evaluation of the interaction between decay-heat-removal and primary heat-transfer systems",
    ],
    features: [
      "DCS·PLC 통신으로 데이터 측정 및 실험장치 제어",
      "최대 100Hz 고속 Save & Export",
      "TrendView 실시간 데이터 시각화",
      "펌프·밸브·히터 그룹 제어 및 Interlock",
      "Loop Test·Calibration 데이터 교정",
      "직관적 HMI 디자인",
    ],
    featuresEn: [
      "Data measurement and rig control via DCS·PLC communication",
      "High-speed save & export up to 100Hz",
      "TrendView real-time data visualization",
      "Pump·valve·heater group control and interlock",
      "Loop test and calibration data correction",
      "Intuitive HMI design",
    ],
  },
  {
    no: "13",
    slug: "nuclear-fuel-assembly-test",
    title: "핵연료 집합체 기계적 특성 시험시설",
    titleEn: "Nuclear Fuel Assembly Mechanical Test Facility",
    cat: "Nuclear · Energy",
    badge: "Nuclear · Energy",
    desc: "NI DAQ 기반 구동·측정. 펌프·밸브·히터 제어 및 Interlock, 강력한 분석 기능.",
    descEn:
      "NI DAQ-based drive/measurement. Pump·valve·heater control and interlock with powerful analysis.",
    image: IMG("piping.jpg"),
    figures: [IMG("plant-sodium.jpg"), IMG("plant-energy.jpg")],
    cats: ["nuclear"],
    sector: "원자력 / 기계특성",
    sectorEn: "Nuclear / Mechanical Properties",
    division: "시스템 사업부",
    divisionEn: "System Dept.",
    platform: "NI DAQ · Interlock · Calibration",
    overviewLead:
      "HEATER·VALVE·PUMP를 제어하여 다양한 온도·압력·유량 조건에서 핵연료 집합체의 기계적 특성을 시험하고 데이터를 취득하는 시설입니다.",
    overviewLeadEn:
      "A facility that controls heaters, valves and pumps to test the mechanical properties of nuclear fuel assemblies and acquire data under various temperature, pressure and flow conditions.",
    overview: [
      "HEATER·VALVE·PUMP 제어를 통한 온도·압력·유량 조건 구현",
      "핵연료 집합체의 기계적 특성 테스트 및 데이터 취득",
    ],
    overviewEn: [
      "Temperature/pressure/flow conditions created via heater·valve·pump control",
      "Mechanical-property testing of nuclear fuel assemblies and data acquisition",
    ],
    features: [
      "NI DAQ 기반 실험장치 구동·데이터 측정",
      "펌프·밸브·히터 제어 및 Interlock",
      "Loop Test·Calibration 데이터 교정",
      "측정값 변환식 적용",
      "실시간 모니터링, 저장 및 강력한 분석 기능",
    ],
    featuresEn: [
      "NI DAQ-based rig drive and data measurement",
      "Pump·valve·heater control and interlock",
      "Loop test and calibration data correction",
      "Application of measurement conversion formulas",
      "Real-time monitoring, storage and powerful analysis",
    ],
  },
];

export const CATEGORY_LABELS: Record<CaseCategory, string> = {
  defense: "국방·항공",
  hils: "HILS·SIL",
  propulsion: "추진·시험",
  nuclear: "원자력·에너지",
  engineering: "엔지니어링",
};

export const FILTERS: {
  cat: "all" | CaseCategory;
  label: string;
  labelEn: string;
}[] = [
  { cat: "all", label: "전체", labelEn: "All" },
  { cat: "defense", label: "국방·항공", labelEn: "Defense·Aerospace" },
  { cat: "hils", label: "HILS·SIL", labelEn: "HILS·SIL" },
  { cat: "propulsion", label: "추진·시험", labelEn: "Propulsion·Test" },
  { cat: "nuclear", label: "원자력·에너지", labelEn: "Nuclear·Energy" },
  { cat: "engineering", label: "엔지니어링", labelEn: "Engineering" },
];

export function getCase(slug: string): CaseItem | undefined {
  return CASES.find((c) => c.slug === slug);
}

export function getFeatured(): CaseItem[] {
  return CASES.filter((c) => c.featured);
}

export function getRelated(slug: string, limit = 3): CaseItem[] {
  const self = getCase(slug);
  if (!self) return CASES.slice(0, limit);
  const scored = CASES.filter((c) => c.slug !== slug).map((c) => ({
    c,
    score: c.cats.filter((x) => self.cats.includes(x)).length,
  }));
  scored.sort((a, b) => b.score - a.score || a.c.no.localeCompare(b.c.no));
  return scored.slice(0, limit).map((s) => s.c);
}

export const ENGINEERING_WORKS: string[] = [
  "LNG 극저온 열교환기 시험장치",
  "연소시험설비 고주파 센서용 인터페이스 판넬 제작·설치",
  "추진기관 공급계통 액체유량 특성시험장치",
  "단일봉 실험장치 MCC 제작·설치",
  "POSV 전기·계장·제어 설치 공사",
  "지상연소시험장 제어판넬 제작 및 전계장 공사·시운전",
  "열교환기시스템 전계장 구축",
  "KF-X 연료계통 통합리그 시험장비 RCS MCC 제작",
];

export const ENGINEERING_WORKS_EN: string[] = [
  "LNG cryogenic heat-exchanger test rig",
  "Fabrication/installation of high-frequency sensor interface panels for combustion test facilities",
  "Liquid flow characteristic test rig for propulsion supply systems",
  "Single-rod experiment apparatus MCC fabrication & installation",
  "POSV electrical/instrumentation/control installation works",
  "Ground combustion test site control-panel fabrication, E&I works & commissioning",
  "E&I construction for heat-exchanger systems",
  "KF-X fuel-system integrated rig test-equipment RCS MCC fabrication",
];
