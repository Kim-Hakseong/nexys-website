# content/cases.md — 시스템 구축 사례 13건 (PDF 원문 기반)

> 카테고리 분류는 사이트 필터용으로 새로 부여. slug는 URL용.

---

## 사례 01 — VeriStand HILS Platform
- slug: `veristand-hils-platform` / 분류: HILS·SIL / Featured: ✅
- 개요: COTS(Commercial Off-the-Shelf) 기반의 HILS 플랫폼. 요구 규모에 따른 유연한 구성(단일 PXI 또는 다중 PXI). 직관적인 시스템 구성. C/C++, LabVIEW, Simulink 등 다양한 모델 적용 가능
- 특징: 실장비 연동 모드 및 모델 연동 모드 / Reflective Memory를 통한 실시간 데이터 공유(다중 PXI 구성) / 외부 장치 연계 구성(지상통제장치 등) / 실시간 Data Logging 및 Data Analysis 지원 / 다양한 항공전자통신 지원
- 이미지: 다중 PXI 구성, 단일 PXI 구성(이동형)

## 사례 02 — 무인기 지상점검장비
- slug: `uav-ground-test-equipment` / 분류: 점검장비
- 개요: 무인기 탑재품의 통신/Digital/Analog 신호 입출력 점검을 위한 장비. 데이터 취득 및 저장, 신호 모사 기능 수행
- 특징: 통합된 ICD 형식을 이용하여 수정 및 변경 용이 / 실시간 BUFFERED 데이터 수집 / 사용자가 편집 가능한 데이터 테이블·그래프 디스플레이 / 실시간 데이터 저장 및 Replay·ASCII Export 지원
- 키워드: Serial, CAN, MIL-STD-1553B, ARINC 429, Analog I/O, Digital I/O, Real-Time OS, FPGA

## 사례 03 — KF-X 연료리그시험장치 제어시스템
- slug: `kfx-fuel-rig-control` / 분류: HILS·SIL / Featured: ✅
- 개요: 항공기 연료계통의 통합 시험장치. 운용 환경·자세 조건 등을 모사하여 항공기 연료계통의 성능 확인 및 평가. 기반 설비 및 시험 대상에 대한 통합 제어
- 특징: 연료 제어기와 인터페이스 / 시험 조건에 맞는 환경 모사 / 실시간 변수 모니터링 / 연료 유량·온도·항공기 자세 제어·Fault 모사

## 사례 04 — 무장관리컴퓨터 점검소프트웨어
- slug: `wmc-test-software` / 분류: 점검장비
- 개요: 회전익 항공기의 무장 관리 컴퓨터에 탑재되는 SW의 기능을 점검하기 위한 장비. 여러 운용 조건 및 환경에서 무장 관리 컴퓨터의 동작 확인 및 디버그 목적
- 특징: 무장 관리 컴퓨터 운용에 필요한 1553B, RS422, Discrete 등의 통신 및 신호 모의 / 연동 장비·전자부품의 통신 및 신호 구현·모의 / 실제 운용 환경과 유사한 시험환경 구축

## 사례 05 — 복합 추진시스템 시험평가 소프트웨어
- slug: `hybrid-propulsion-test` / 분류: 추진·추력
- 개요: 전기 추진 시스템의 추진 시스템 시험장치(Iron Bird). 전기/엔진 복합 추진장치. 해양안전 및 관리를 위한 무인 항공기 시스템
- 특징: UAV CAN 인터페이스 / 동축반전 제어체계 / 10개의 추진 모터와 1개의 엔진 스로틀 제어 / 전압·전류·RPM·온도 등 성능 데이터 수집

## 사례 06 — 항공기 베어링 성능 시험기
- slug: `aircraft-bearing-tester` / 분류: 점검장비
- 개요: 고속 스핀들 모터를 이용하여 회전하는 베어링의 내구성을 시험하는 장비. 시험 조건에 따른 인버터/히터 제어. 온도·압력·진동·유량 실시간 측정
- 특징: P&ID 기반 직관적 시험 환경 모니터링 / 실시간 고속 진동 데이터 획득 및 FFT 그래프 도시 / 비상 정지 조건 확인·대응, 실시간 Data Save / 진동 데이터 기반 회전 주파수 검출

## 사례 07 — 200kg급 수송드론 HILS
- slug: `200kg-cargo-drone-hils` / 분류: HILS·SIL / Featured: ✅
- 개요: 수소연료전지 기반 VTOL 방식의 200kg급 수송드론용 HILS. 비행모델 수행 및 사용자 파라미터 조작
- 특징: 실장비 연동 모드 및 모델 연동 모드 / Reflective Memory 실시간 데이터 공유 / 비행 모사를 위한 지상통제장치 실시간 연동 / 실시간 Data Logging·Analysis

## 사례 08 — 150kW급 추력시험장치
- slug: `150kw-thrust-test` / 분류: 추진·추력
- 개요: 150kW급 전기추진장치의 단일 Pod 추력시험. 2개의 전기추진 모터용 인버터 제어. Real-time 기반 시험시스템
- 특징: RPM 제어모드 / 토크 제어모드 / 실시간 변수 모니터링 / 데이터 분석

## 사례 09 — OPPAV Ironbird
- slug: `oppav-ironbird` / 분류: 추진·추력 / Featured: ✅
- 개요: 분산전기추진시스템 성능검증. 8개의 추진 모터 인버터. 인버터·BMC·Collective Pitch 제어. FPGA 기반 시험시스템
- 특징: PLC와 TCP/IP 통신을 통한 Data 획득·제어 / 모든 공정 과정 자동화 / 설정 창을 이용한 혼합 비율 및 자동 공정 관리 / 실시간 Data Save / Data Analysis 지원

## 사례 10 — 터보 팽창기 제어 시스템
- slug: `turbo-expander-control` / 분류: 원자력·에너지
- 개요: 터보팽창기 운용 환경 제어 및 모니터링. 터보팽창기 PLC / 유압제어 PLC / Main 환경제어 PLC와 Ethernet IP 통신 구성
- 특징: 각 장비와 Ethernet IP 통신을 이용한 통합 제어환경 구축 / 시스템 Alarm 범위 지정 및 실시간 모니터링 / 개별 이벤트 저장·확인 / P&ID와 그래프 기반 직관적 모니터링

## 사례 11 — Thrust Test Rig
- slug: `thrust-test-rig` / 분류: 추진·추력
- 개요: 추력 시험장치의 성능 평가 및 특성 평가. 제어 조건 변경 및 반복 Test 가능 — 보다 정확한 Test Data 취득
- 특징: 개별 Sensor Calibration / PWM 및 CAN Communication 기반 Motor 제어 / Performance Test·Characteristic Test 지원 / Data Analysis 지원

## 사례 12 — STELLA-II (소듐 열유동 종합효과 시험장치)
- slug: `stella-2` / 분류: 원자력·에너지
- 개요: SFR 원형로 안전계통의 성능 입증. 잔열 제거 계통과 일차 열 전달 계통의 상호 영향 평가
- 특징(LabVIEW 기반): DCS·PLC 통신으로 데이터 측정 및 실험장치 제어 / 최대 100Hz 고속 Save & Export / TrendView 실시간 데이터 시각화 / 펌프·밸브·히터 그룹 제어 및 Interlock / Loop Test·Calibration 데이터 교정 / 직관적 HMI 디자인

## 사례 13 — 핵연료 집합체 기계적 특성 시험 시설
- slug: `nuclear-fuel-assembly-test` / 분류: 원자력·에너지
- 개요: HEATER·VALVE·PUMP를 컨트롤하여 다양한 온도·압력·유량 조건에서 핵연료 집합체의 기계적 특성을 테스트하고 데이터를 취득
- 특징: NI DAQ 기반 실험장치 구동·데이터 측정 / 펌프·밸브·히터 제어 및 Interlock / Loop Test·Calibration 데이터 교정 / 측정값 변환식 적용 / 실시간 모니터링, 저장 및 강력한 분석 기능

---

## 엔지니어링 사업부 공사 실적 (목록)
- LNG 극저온 열교환기 시험장치
- 연소시험설비 고주파 센서용 인터페이스 판넬 제작/설치
- 추진기관 공급계통 액체유량 특성시험장치
- 단일봉 실험장치 MCC 제작·설치
- POSV 전기/계장/제어 설치 공사
- 지상연소시험장 제어판넬 제작 및 전계장공사/시운전
- 열교환기시스템 전계장 구축
- KF-X 연료계통 통합리그 시험장비 RCS MCC 제작
