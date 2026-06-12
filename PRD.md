# PRD — NEXYS 홈페이지 리뉴얼

## 1. 목적
- 기존 i-nexys.com(구형 한국 중소기업 스타일)을 **글로벌 defense-tech 수준의 프리미엄 사이트**로 교체
- 핵심 타깃: ① 방산/항공우주 대기업·연구소 발주 담당자(LIG넥스원, 한화에어로, KAI, ADD, KARI 등) ② 협력사 등록 심사자 ③ 채용 후보자
- 핵심 메시지: "HILS/SIL·시험자동화 분야에서 검증된 기술 파트너" — 신뢰·실적·기술력

## 2. 성공 기준
- 첫 화면 3초 안에 "방산·항공우주 시험 솔루션 기업"임이 전달됨
- 13개 구축 사례가 탐색 가능한 포트폴리오로 정리됨
- 모바일에서 데스크톱과 동등한 경험
- 발주처가 "이 회사 견적 요청해보자"로 이어지는 명확한 Contact 동선

## 3. 사이트맵 & 페이지 요구사항

### 3.1 홈 `/`
| 섹션 | 요구사항 |
|---|---|
| Hero | 풀스크린 블랙, 네트워크/파티클 모티프(NXS 로고의 빛나는 라인 느낌), "Trust Your Idea & Technology" 대형 타이포, 서브카피 3줄(Military & Aerospace Test Solution / HILS·SIL System / Test Automation & Engineering), CTA 2개(사례 보기, 문의하기) |
| 핵심 역량 3카드 | 시스템 사업부 / 엔지니어링 사업부 / 국방·항공기술 연구소 — hover 시 레드 글로우, 클릭 시 각 사업부 페이지 |
| 숫자 카운터 | 업력(2017~, 자동계산), 구축 사례 13+, 주요 파트너 15+, 인증(ISO 9001/14001/45001, Inno-Biz, 벤처기업) — 스크롤 진입 시 count-up |
| Featured 사례 | 대표 4개(VeriStand HILS Platform, KF-X 연료리그, 200kg 수송드론 HILS, OPPAV Ironbird) 가로 스크롤 or 그리드 카드 |
| 파트너 로고 월 | 국방·항공 파트너 / 그 외 파트너 2단, 무한 마퀴 스크롤 |
| Contact CTA | 레드 배경 풀폭 밴드 + 연락처 |

### 3.2 회사소개 `/company`
- 개요(content/company.md 인사말), 3대 가치 PASSION·IDEA·COMMUNICATION (아이콘 카드)
- **연혁 타임라인**: 2017→2024 세로 타임라인, 스크롤 따라 레드 라인이 채워지는 인터랙션
- 인증·등록 배지 그리드 (ISO 3종, Inno-Biz, 벤처기업, 기술등급 T4, 협력업체 등록들)
- 오시는 길: 주소 + 지도 embed(카카오맵 or 구글맵 iframe) + TEL/FAX/Email

### 3.3 사업영역 (3페이지)
- `/business/mil-aero` 국방·항공기술 연구소: 유/무인기 FLCC HILS, 점검장비, HILS/SIL 플랫폼, 무기체계 점검장비, PCB/센서 설계
- `/business/system` 시스템 사업부: Test Automation 설계, DCS, DAQ, 시험지원·유지보수
- `/business/engineering` 엔지니어링 사업부: 공장·설비 자동화, PLC/HMI, 전기·계장 공사, 판넬 제작 + 공사실적 리스트 + 주요 플랫폼(Rockwell, Siemens, LS Electric, CIMON, EPICS, Wonderware)
- 각 페이지: 히어로 + 역량 다이어그램(기존 PDF의 원형 다이어그램을 모던하게 재해석) + 관련 사례 링크

### 3.4 구축 사례 `/cases`
- 13개 사례 카드 그리드. 필터 칩: 전체 / HILS·SIL / 점검장비 / 추진·추력 / 원자력·에너지
- 카드: 썸네일(placeholder 가능) + 제목 + 카테고리 태그 + 1줄 요약
- 상세 `/cases/[slug]`: 시스템 개요, 시스템 특징(불릿), 이미지 영역, 이전/다음 내비
- 데이터는 `lib/cases-data.ts` 단일 소스 (content/cases.md 기반)

### 3.5 문의 `/contact`
- 연락처 카드(TEL 042-932-0213, FAX 042-932-0214, master@i-nexys.com)
- 주소: 대전광역시 유성구 테크노2로 199, 미건테크노월드 1차 407호
- 간단 문의 폼(이름/소속/이메일/내용) → mailto: 링크로 처리 (백엔드 없음)

## 4. 공통 요구사항
- 고정 헤더: 스크롤 시 블랙 반투명 blur, 현재 페이지 레드 인디케이터, 모바일 햄버거(풀스크린 오버레이 메뉴)
- 푸터: 사이트맵 + 회사정보 + 슬로건
- 페이지 전환·섹션 진입 시 fade/slide 애니메이션 (Framer Motion, `prefers-reduced-motion` 존중)
- 404 페이지
- favicon, OG 이미지 placeholder

## 5. Out of Scope (Phase 1에서 안 함)
- 영문 페이지 (구조만 i18n-ready)
- CMS / 뉴스 게시판
- 채용 페이지
- 백엔드 폼 처리

## 6. 콘텐츠 매핑
모든 텍스트는 `content/` 폴더 참조:
- `content/company.md` — 회사 개요, 가치, 연혁, 인증
- `content/cases.md` — 13개 구축 사례 전문
- `content/partners.md` — 파트너 목록, 플랫폼, 연락처
