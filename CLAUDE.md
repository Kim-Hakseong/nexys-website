# CLAUDE.md — NEXYS 홈페이지 리뉴얼 빌드 헌법

이 문서는 이 프로젝트에서 작업하는 모든 Claude Code 세션이 반드시 따라야 하는 규칙이다.

## 프로젝트 한 줄 정의
(주)넥시스(i-nexys.com) 기업 홈페이지 완전 리뉴얼. 방산·항공우주 Test Automation / HILS·SIL / 제어계측 전문기업의 프리미엄 defense-tech 웹사이트.

## 기술 스택 (고정 — 변경 금지)
- **Next.js 14 (App Router) + TypeScript + Tailwind CSS**
- **정적 export** (`output: 'export'`) — 어떤 호스팅(Vercel, Cloudflare Pages, 일반 웹호스팅)에도 배포 가능해야 함
- 애니메이션: **Framer Motion** (스크롤 트리거, 페이지 전환)
- 디자인 방향은 ARX Robotics 클론(레드 치환). 화려한 파티클/3D 지양 — ARX식 절제된 스크롤 reveal·가로 슬라이더·풀블리드 이미지 위주. three.js 불필요
- **금지**: LangChain/LangGraph(해당 없음이지만 명시), jQuery, 무거운 UI 킷(MUI 등), CMS 연동(Phase 1은 콘텐츠 하드코딩)

## 디자인 소스 오브 트루스
1. `design-import/` 폴더에 Claude Design이 만든 HTML/CSS/에셋이 들어온다 → **이것이 비주얼의 1차 기준**
2. `design-import/`가 비어 있으면 `DESIGN.md`의 디자인 시스템 스펙대로 직접 구현한다
3. 충돌 시 우선순위: design-import > DESIGN.md > 임의 판단

## 콘텐츠 소스 오브 트루스
- `content/` 폴더의 마크다운 파일들 (PDF 카탈로그에서 추출·정리됨)
- 콘텐츠를 임의로 창작하지 마라. 회사 연혁, 사례, 파트너명은 `content/`에 있는 그대로만 사용
- placeholder가 필요하면 `[TODO: 실제 이미지/문구 교체]` 주석을 남겨라

## 브랜드 (절대 규칙)
- 메인 컬러: **레드 #E60012**, 블랙, 화이트
- 기본 베이스: 블랙(#0A0A0A 계열) 배경 + 레드 포인트 + 화이트 텍스트
- 슬로건: **"Trust Your Idea & Technology"**
- 회사명 표기: 국문 "(주)넥시스", 영문 "NEXYS — New Experiment System"

## 품질 기준 (Definition of Done)
- [ ] `npm run build` 에러 0, 경고 최소화
- [ ] 모바일(375px) / 태블릿(768px) / 데스크톱(1440px) 모두 레이아웃 깨짐 없음
- [ ] Lighthouse 기준: Performance 90+, Accessibility 90+, SEO 90+ 목표
- [ ] 모든 페이지에 메타태그(title, description, OG) 존재
- [ ] 한국어 콘텐츠 기준. 영문은 Phase 2 (i18n 구조만 준비, 구현은 안 함)
- [ ] 이미지는 next/image 대신 일반 `<img>` + 명시적 width/height (정적 export 호환)
- [ ] 폼은 mailto 링크 또는 정적 처리 (백엔드 없음)

## 작업 규칙
- 모든 변경 후 `npm run build`로 검증
- 커밋 단위: 페이지/섹션 단위로 작게
- 작업 내용은 반드시 `Log.md`에 append (날짜, 작업, 결정사항, 남은 일)
- 막히면 3회 시도 후 Log.md에 BLOCKED 항목 남기고 다음 작업으로 진행
- 사용자 확인을 기다리지 말 것 — PRD와 이 문서 안에서 자율 판단

## 디렉토리 구조 (목표)
```
nexys-web/
├── app/
│   ├── layout.tsx, page.tsx            # 홈
│   ├── company/page.tsx                 # 회사소개 (개요·가치·연혁·인증)
│   ├── business/
│   │   ├── mil-aero/page.tsx            # 국방·항공기술 연구소
│   │   ├── system/page.tsx              # 시스템 사업부
│   │   └── engineering/page.tsx         # 엔지니어링 사업부
│   ├── cases/page.tsx                   # 구축 사례 (필터 그리드)
│   ├── cases/[slug]/page.tsx            # 사례 상세 (generateStaticParams)
│   └── contact/page.tsx
├── components/                          # Header, Footer, Hero, CaseCard...
├── lib/cases-data.ts                    # content/cases.md → 구조화 데이터
├── public/images/
└── design-import/                       # Claude Design 산출물 (역수입)
```
