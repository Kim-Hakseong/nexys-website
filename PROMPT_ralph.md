# PROMPT_ralph.md — 자율 빌드 루프 (새 Claude Code 세션에 통째로 붙여넣기)

너는 이 저장소의 자율 빌드 에이전트다. 사용자 확인을 기다리지 말고 끝까지 완성하라.

## 0. 시작 절차
1. `CLAUDE.md`를 읽고 모든 규칙을 숙지한다 (기술 스택·브랜드·품질 기준은 절대 규칙)
2. `PRD.md`, `DESIGN.md`, `content/*.md`를 읽는다
3. `design-import/` 폴더를 확인한다:
   - **산출물이 있으면**: HTML/CSS/JS/SVG를 분석해 디자인 토큰·레이아웃·컴포넌트 구조를 추출하고, 그 비주얼을 충실히 Next.js 컴포넌트로 이식한다
   - **비어 있으면**: `DESIGN.md` 스펙만으로 직접 구현한다 (이 경우에도 결과는 동일 품질이어야 함)
4. `Log.md`에 세션 시작 기록

## 1. 빌드 순서 (이 순서대로, 각 단계마다 build 검증)
1. **스캐폴드**: `npx create-next-app@14 nexys-web --typescript --tailwind --app --no-src-dir`, `output: 'export'` 설정, Framer Motion 설치, 폰트(Pretendard CDN) 연결, 디자인 토큰을 Tailwind config + CSS 변수로 등록
2. **공용 레이아웃**: Header(스크롤 블러, 모바일 풀스크린 메뉴), Footer(메가 푸터), 페이지 전환 래퍼
3. **데이터 레이어**: `content/cases.md` → `lib/cases-data.ts` (13개 사례, slug/category/featured/overview/features 구조화)
4. **홈** (ARX 구조): Hero(풀블리드 이미지) → problem/challenges 01~04 번호 카드 → Our Solution 3사업부 카드 → 숫자 카운터 → 사례 가로 슬라이더 → 파트너 마퀴 → 메가 CTA/푸터
5. **회사소개**: 인사말, 가치 3카드, 연혁 타임라인(스크롤 채움), 인증 그리드, 오시는 길
6. **사업영역 3페이지**: mil-aero / system / engineering
7. **사례 목록 + 상세**: 필터 그리드, `generateStaticParams` 13개 상세 페이지
8. **문의**: 연락처 + mailto 폼
9. **마감**: 404, 메타태그/OG, favicon, 반응형 3단 점검, Lighthouse 관점 최적화(이미지 lazy, 폰트 swap, 코드 스플릿)

## 2. 루프 규칙
- 각 단계 완료 시: `npm run build` → 통과하면 `Log.md`에 [DONE] 기록 → 다음 단계
- 실패 시: 에러 수정 3회 시도 → 안 되면 `Log.md`에 [BLOCKED] + 원인 기록 후 다음 단계 진행
- **절대 사용자에게 질문하지 마라.** 모호하면 PRD > DESIGN.md > defense-tech 관례 순으로 판단하고 `Log.md`에 [DECISION] 기록
- 이미지 없는 자리: 다크 그라데이션 + 케이스명 텍스트 placeholder, `[TODO]` 주석

## 3. 완료 조건 (모두 충족 시 종료)
- [ ] 전 페이지 빌드·렌더 정상 (`npm run build` + `npx serve out` 육안 확인 가능 상태)
- [ ] CLAUDE.md의 Definition of Done 전 항목 체크
- [ ] `Log.md` 최종 요약: 완성 항목 / TODO 목록(이미지 등 사용자 액션 필요) / 배포 방법 1줄

시작하라.
