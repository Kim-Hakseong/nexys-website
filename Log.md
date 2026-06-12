# Log.md — 작업 로그

> Claude Code 세션은 모든 작업·결정·블로커를 여기에 append 한다.

## 2026-06-12 — 세션 1 (자율 빌드, Claude Code)

### 시작
- CLAUDE.md / PRD.md / DESIGN.md / content/*.md / design-import 전체 분석 완료
- design-import에 완성도 높은 정적 산출물(HTML 5종 + 통합 styles.css 674줄 + main.js 214줄 + 이미지 14종)이 존재 → **비주얼 1차 기준**으로 채택
- [DECISION] Tailwind는 툴체인으로 유지하되, design-import의 styles.css를 `app/globals.css`로 충실히 이식(디자인 소스 오브 트루스). 토큰/레이아웃을 임의 재발명하지 않음 (DESIGN.md §1 "새 디자인 발명 금지")
- [DECISION] create-next-app 대신 수동 스캐폴드(Node 25 + 비대화형 결정성 확보). 스택 고정: Next 14 App Router + TS + Tailwind + Framer Motion + `output:'export'`
- [DECISION] main.js 인터랙션(헤더 스크롤·모바일 메뉴·아코디언·Industries 가로 아코디언·사례 슬라이더 드래그·필터·count-up·문의폼)을 React 클라이언트 컴포넌트로 이식. 스크롤 reveal은 Framer Motion 사용
- [DECISION] 사업영역 3페이지(mil-aero/system/engineering)는 design-import에 없음 → company.md 조직 콘텐츠 + 기존 디자인 클래스로 신규 구성 (PRD 3.3 충족)
- [DECISION] 앱은 `nexys-web/` 하위 폴더에 구성(CLAUDE.md 목표 구조 및 PROMPT_ralph 1단계 준수). 배포 시 루트 디렉토리=nexys-web

### 빌드 결과 (모든 단계 [DONE])
- [DONE] 스캐폴드: Next 14.2.35 + TS + Tailwind 3.4 + Framer Motion 11 + `output:'export'`, Pretendard/Archivo/JetBrains Mono CDN 연결, design-import styles.css → `app/globals.css` 이식, 이미지 14종 → `public/images/`, 로고 → `public/logo.png`
- [DONE] 공용 레이아웃: `Header`(스크롤 블러·모바일 풀스크린 오버레이 메뉴·현재경로 인디케이터), `Footer`(메가 푸터). `Reveal`(Framer Motion 스크롤 인, prefers-reduced-motion 존중)
- [DONE] 데이터 레이어: `lib/cases-data.ts` (13개 사례 — slug/no/category/featured/overview/features/meta/related), `lib/site.ts`
- [DONE] 홈: Hero(풀블리드) → Problem → Challenges(아코디언) → Industries(가로 아코디언+섹터 토글) → 사례 슬라이더(드래그+버튼+프로그레스) → 숫자 count-up → 파트너 마퀴 → 메가 CTA
- [DONE] 회사소개 `/company`: 인사말 · 가치 3카드 · 연혁 타임라인(2017→2024) · 인증 6그리드
- [DONE] 사업영역 3페이지: `/business/mil-aero` `/business/system` `/business/engineering` (company.md 조직 콘텐츠 기반)
- [DONE] 사례: `/cases` 필터 그리드(6칩) + 엔지니어링 공사 실적 + `/cases/[slug]` 13개 상세(generateStaticParams, 이전/다음 내비, 연관 사례)
- [DONE] 문의 `/contact`: ARX 3단 블록 + mailto 폼(유형/내용) + 구글맵 iframe
- [DONE] 마감: 404, 전 페이지 메타(title/description/OG), favicon.svg, og.svg, sitemap.xml, robots.txt
- [DONE] `npm run build` 에러 0 · 25개 정적 페이지 export 성공
- [DONE] 육안 검증(headless Chrome): 홈/사례/상세/문의/사업영역 데스크톱 1440px + 모바일 375px 레이아웃 정상

### 남은 TODO (사용자 액션 필요 — 빌드와 무관)
- [TODO] 실제 사진/도면 이미지 교체: 현재 `public/images/*.jpg`는 design-import의 시안 이미지. 실제 시험설비 사진 확보 시 동일 파일명으로 교체하면 즉시 반영
- [TODO] 파트너 로고 이미지: 현재 텍스트 로고 마퀴. 로고 PNG 확보 시 `public/images/partners/`에 배치 후 마퀴 교체
- [TODO] `content/partners.md`의 "DEUNDEUN(드든)" 정확한 사명 확인
- [TODO] 카카오맵 정식 임베드(현재 구글맵 iframe) — 필요 시 카카오 지도 키로 교체
- [TODO] OG 이미지: 현재 `og.svg` 자동생성. 브랜드 키비주얼 확정 시 1200×630 PNG로 교체 권장

### 배포 방법 (1줄)
정적 export이므로 호스팅 루트 디렉토리를 `nexys-web`, 빌드 `npm run build`, 출력 `out`으로 지정(또는 `nexys-web/out`을 정적 호스팅에 업로드). Vercel/Cloudflare Pages/일반 웹호스팅 모두 호환.

## 2026-06-12 — 세션 1 (추가): GitHub Pages 자동 배포
- [DONE] 퍼블릭 저장소 생성·푸시: https://github.com/Kim-Hakseong/nexys-website
- [DONE] GitHub Actions 자동 배포 워크플로우(`.github/workflows/deploy.yml`): main 푸시 시 빌드→Pages 배포
- [DECISION] Pages는 `/nexys-website` 서브경로 서빙 → `lib/asset.ts` + `NEXT_PUBLIC_BASE_PATH`로 basePath/assetPrefix 및 raw 자산(이미지/로고/favicon/OG) 경로 보정. `public/.nojekyll` 추가
- [DONE] 라이브 검증: https://kim-hakseong.github.io/nexys-website/ — 홈/사례/상세/CSS/이미지 전부 200, 육안 렌더 정상
- 참고: 콘텐츠/디자인 수정 후 `git push`만 하면 자동 재배포됨

## 2026-06-12 — 세션 1 (추가): 기능 요청 반영
- [DONE] 빠른 스크롤 시 섹션 미표시 버그 수정 (Reveal/CountUp 트리거 강건화 + 안전망)
- [DONE] Industries 섹터 "민수·에너지" → "원자력·에너지" 변경 (small 라벨 Energy)
- [DONE] 메인 히어로 "Trust Your Idea & Technology" 폰트 크기 절반 (.hero .display clamp 46→23 / 154→77)
- [DONE] **KO/EN 언어 전환** (전체 사이트 영문 완역, 기본값 KO):
  - `lib/i18n.tsx` LangProvider(localStorage 영속) + useLang/useT
  - 모든 페이지를 server(metadata)+client view로 분리, cases-data/회사 연혁/사업부 데이터에 En 필드 추가
  - 헤더 KO/EN 토글 + Instagram 픽토그램(https://www.instagram.com/nexyskorea/), 모바일 메뉴에도 배치
  - 검증: 토글 시 nav/히어로/사례/필터/연혁 등 전 영역 영문 전환 + 페이지 이동 후 언어 유지 확인
- [DONE] 우측 하단 고정 상담 위젯(`ConsultWidget`) — '...' FAB → 팝업(실시간 문의 / 카카오톡 상담 / 이메일 문의). **UI만**, 실시간·카카오 실제 연동은 TODO(`data-todo`)
- [TODO] 상담 위젯 실시간 채팅 / 카카오톡 채널 실제 연동 (현재 모양만)
