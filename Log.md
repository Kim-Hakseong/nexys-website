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

## 2026-06-12 — 세션 1 (추가 2): 메인 영상/구조 개편
- [DONE] 히어로 배경: 정적 무인기 이미지 → **영상 2종 시퀀스**(hero-1 A_cinematic → hero-2 NI PXI → 반복). ffmpeg로 H.264/CRF30 최적화(각 ~0.8–0.9MB), 포스터 이미지 + prefers-reduced-motion 시 정지 이미지. `HeroVideo` 컴포넌트
- [DECISION] gif 대신 MP4 video 채택 — 동일 품질에서 용량 1/10 수준, 웹 최적화
- [DONE] 메인 "The Problem" 섹션 제거 → 히어로 다음 바로 Today's Challenges
- [DONE] 메인 사례 슬라이더 카드 클릭이 상세로 이동하지 않던 버그 수정 (setPointerCapture가 클릭을 track으로 가로채던 문제 → 문서 레벨 포인터 리스너 + 변위 임계값으로 교체)
- [DONE] 헤더 '사업영역' → `/business` 개요 페이지로 변경. 시스템/엔지니어링/국방항공 3개 사업부 카드 → 각 페이지로 이동 (`BusinessIndexView`)
- [DECISION] 원본 mp4(etc/*.mp4)는 .gitignore — 최적화본은 public/videos에 포함

## 2026-06-12 — 세션 1 (추가 3): 히어로 영상 진단 + 사례 상세 Perigee 스타일 개편
- [확인] 히어로 영상은 라이브에서 정상 재생·순환(hero-1→hero-2) 검증됨. "사진 그대로"로 보인 원인: 사용자가 지정한 clip A(A_cinematic_aerial)가 기존 정적 이미지(hero-uav)와 **동일한 드론 장면**(움직이는 버전)이라 첫 ~10초가 같아 보임. 자동재생 차단 브라우저(Safari 저전력 등)에선 포스터(=같은 드론 프레임)로 멈춤
- [DONE] 자동재생 강건화: muted/defaultMuted 명시 + 상호작용 폴백 + 0.3/0.9/1.8s 재시도
- [DONE] **구축사례 상세 페이지 Perigee 스타일 전면 개편**(13개 공통 템플릿):
  - 시네마틱 풀블리드 패럴럭스 히어로(스크롤 시 이미지 scale/parallax, 타이틀 모핑 페이드, 대형 케이스번호 워터마크)
  - 초대형 디스플레이 타이포 + 넉넉한 여백, sticky 라벨 개요
  - 기술 사양 스펙시트(key-value), 시스템 구성/특징 넘버드 리스트(스크롤 reveal)
  - 풀블리드 패럴럭스 피규어 3컷 인터리브
  - Framer Motion useScroll/useTransform 사용, prefers-reduced-motion 대응, KO/EN 유지

## 2026-06-12 — 세션 1 (추가 4): 사례 상세 롤백 + 히어로 영상→애니메이션 WebP
- [DONE] 구축사례 상세 Perigee 개편 **롤백** — 이전(detail-hero/스펙콜/연관사례) 디자인으로 복구, cx- CSS 제거
- [DONE] 히어로 배경: `<video>` 자동재생이 일부 브라우저(Safari 등)에서 차단되어 첫 프레임(=옛 사진과 동일 드론)으로 멈추던 문제 → **애니메이션 WebP**로 교체(`<img>`라 자동재생 정책 영향 없음, 무조건 재생). A(8s)→B(10s) 시퀀스 합본, 480×270/8fps, 803KB. hero-*.mp4/HeroVideo 제거
- [DECISION] GIF은 같은 화질에서 14~17MB로 과대 → 동일 방식이지만 용량 1/18인 애니메이션 WebP 채택(브라우저 지원 동일하게 광범위)

## 2026-06-12 — 세션 1 (추가 5): 히어로 여백/노출 버그 + 레드 축소 + 헤더 영문·가운데
- [DONE] 히어로 우측 여백: heroDrift(좌우 팬) → heroZoom(가운데 원점 줌)으로 교체, inset:0/100%/object-position center → 항상 꽉 채움
- [DONE] **히어로/챌린지 텍스트 미노출 버그 해결**: Reveal을 Framer whileInView → 강건한 IntersectionObserver 방식으로 재작성. SSR/JS미실행 시 항상 보임, 상단(뷰포트 근처) 콘텐츠는 즉시 표시(깜빡임 없음), 1.6s 안전망. (사용자 Chrome에서 히어로 텍스트가 opacity:0로 멈춰있던 문제)
- [DONE] 레드(#E60012) 축소: 텍스트 강조 `.accent`/`em.accent` → inherit(다크=화이트), Industries 타이틀 `.ind-title` → 화이트(점 포함). 버튼/뱃지 등 기능 레드는 유지
- [DONE] 상단 메뉴 영문 통일(Company/Business/Work/Contact/Inquiry) + **가운데 정렬**(로고 좌 / 메뉴 중앙 / Inquiry·KO/EN·IG 우)
- [DONE] 타이포 정제: eyebrow 자간 .14→.22em

## 2026-06-12 — 세션 1 (추가 6): 메인 구조 개편 + 스크롤 인터랙션
- [DONE] 히어로 서브카피 첫 문장("실장비 없이 검증하고...") 삭제
- [DONE] 메인 섹션 순서 교체: Today's Challenges ↔ Industries (이제 히어로 다음 Industries)
- [DONE] Industries를 제시 코드 스타일로 전면 변경: 분야 탭(국방·항공우주/에너지·산업) + 좌측 세로 인터랙티브 리스트(hover시 desc 확장·레드 마커) + 우측 sticky 비주얼 패널(이미지·태그·스펙칩·사례 링크). 실제 13개 사례 데이터/링크 사용
- [DONE] 이미지 스크롤 모핑(parallax): `ParallaxImage`(Framer useScroll) — 챌린지 미디어, 회사소개 인사말 이미지에 적용
- [DONE] 회사소개 History 타임라인 스크롤 인터랙티브: 스크롤 진행에 따라 좌측 레드 라인이 채워짐(`Timeline` + useScroll scaleY) + 연도 노드

## 2026-06-12 — 세션 1 (추가 7): 내부 페이지 제목 크기
- [DONE] Company/Business/Work/Contact의 `.page-hero h1` 크기 축소(clamp 104→58px) — 너무 커서 균형 조정

## 2026-06-12 — 세션 1 (추가 8): Work 제목 정리 + Company/Work 다크 통일
- [DONE] Work(사례) 페이지 제목에서 개수 "13개의" 제거(향후 추가 대비, 카운트 미표기 방침) — KO "검증된 시스템" / EN "Field-proven systems we built"
- [DONE] Company(인사말·연혁), Work(사례 그리드)의 흰색/페이퍼 섹션을 black으로 통일. 라이트용 컴포넌트(greeting/filter/gcard) 다크 배경 글자색 보정(흰색 계열). 카테고리 라벨·뱃지의 포인트색만 유지

## 2026-06-12 — 세션 1 (추가 9): 포인트 컬러 변경
- [DECISION] #E60012가 너무 강렬 → #350a03(테스트) 거쳐 **#7a1020(와인/버건디)** 로 확정
- [DONE] `--red`/`--red-bright`/`--red-deep` + 하드코딩 rgba(230,0,18) + favicon/og/tailwind 토큰 전부 일괄 치환
- 참고: #350a03은 검정 배경에서 포인트가 거의 안 보여 반려, #7a1020로 가시성·절제 균형

## 2026-06-12 — 세션 1 (추가 10): 모바일 햄버거 메뉴
- [DONE] **버그 수정**: 원본 CSS 규칙 순서 문제로 `.burger`가 모바일에서도 display:none → 메뉴 접근 불가였음. `.site-header .burger` 특이도 상향으로 우측 상단 표시
- [DONE] 모바일 메뉴를 풀스크린 오버레이 → **헤더 아래로 펼쳐지는 드롭다운(트리식)** 으로 변경(스택형 항목+번호, KO/EN·Instagram·연락처 포함). 헤더 z-index 상향으로 로고/X 유지

## 2026-06-12 — 세션 1 (추가 11): 용어 변경
- [DONE] 사이트 전체 "방산" → "국방" 치환 (홈/회사소개/연혁/국방·항공기술 연구소/메타/공통문구). [NOTE] perl 치환 시 `-C` 플래그가 바이트/문자 불일치를 유발 → 플래그 없이 바이트 치환으로 해결

### 현재 라이브
- https://kim-hakseong.github.io/nexys-website/ — main 푸시 시 GitHub Actions 자동 배포
- 미해결 TODO: 상담 위젯 실시간/카카오 실제 연동, 실제 사진·파트너 로고 교체, 카카오맵 정식 임베드 (OG PNG·파비콘은 완료)

## 2026-06-13 — Today's Challenges 외부 고해상도 이미지 적용
- [DONE] 항목별 이미지를 프로젝트 시안 → **Unsplash 고해상도(상업적 무료, 출처표기 불필요)** 로 교체, 새 파일명 chal-1~4.jpg(1600px 최적화, 합계 1.4MB)
  - 01 비용·위험 → F-16 편대(Zg91t26xbrg) / 02 통합검증 복잡성 → 스위치·케이블(T-IN5o3kxyA) / 03 반복성·데이터 → 광섬유 데이터(JyRTi3LoQnc) / 04 국산화 → PCB(AEboEnOlpLc)
- [NOTE] Unsplash License(상업적 사용 자유, attribution 불필요). 일부 사진은 Unsplash+ 유료라 다운로드 차단됨 → 무료 가능한 것으로 선별
- [DONE] 03/04 이미지 재교체(주제 적합도 개선): 03 반복성·데이터 → 오실로스코프·계측기 측정(Pexels 132700), 04 국산화 → 엔지니어 회로기판 작업(Pexels 9242279). (기존 03 광섬유/04 PCB는 주제와 거리감)
- [DONE] 04 추가 교체(완성도): 정면 얼굴 부담 → 손 납땜(chal-4c) → **정밀 프로브로 복잡한 보드 측정**(chal-4d, Pexels 6755135, 다크·전문적)으로 확정
- [NOTE] **CDN 캐시 이슈**: 같은 파일명으로 이미지 재업로드 시 GitHub Pages 엣지 캐시가 옛 이미지 유지(강력새로고침으로도 안 바뀜). 해결 = **새 파일명 사용**(chal-3b/4b/4c/4d 등). 이후 이미지 교체는 새 파일명 원칙

## 2026-06-13 — 헤더 NI Official Alliance 배지
- [DONE] 인스타그램 아이콘 우측에 NI 배지 추가 → 이미지 배지 → **HTML/CSS 재제작**(녹색 NI 마크 + 'Official Alliance' 텍스트는 상단 탭 폰트 JetBrains Mono, 둥근 pill 테두리, 약 1.8배). `ni-mark.png`

## 2026-06-13 — 무인기 지상점검장비 이미지 교체
- [DONE] 케이스02(무인기 지상점검장비)의 image + figures 전부를 **점검장비 구성 다이어그램**(`uav-gte-diagram.png`)으로 교체 → 카드/슬라이더/Industries/연관/상세 전체 반영

## 2026-06-13 — 브라우저 탭 파비콘 교체
- [DONE] 파비콘을 **NXS/NEXYS 원형 로고**(`favicon-nxs.png`, 512px)로 교체. icon/apple/shortcut 갱신. (파비콘은 브라우저가 강하게 캐싱 → 탭 닫았다 열기 권장)

## 2026-06-13 — SEO / AEO / GEO 최적화 (화면 변화 0, 비가시 영역만)
- [확인] 빌드 방식은 이미 SSG(output:'export') — 전 페이지 정적 사전렌더
- [DONE] JSON-LD 구조화 데이터(Schema.org): 레이아웃에 Organization+WebSite(@graph), 페이지별 BreadcrumbList, 사례 상세 Service, 사례목록 ItemList — `lib/seo.ts` + `components/JsonLd.tsx`
- [DONE] 페이지별 canonical(alternates) 추가, OG 이미지 SVG→PNG(1200×630, og.png)로 교체
- [DONE] GEO: `/llms.txt` `/llms-full.txt`(route handler, env-aware URL), robots에 AI 크롤러 명시 허용(GPTBot/ClaudeBot/PerplexityBot/Google-Extended 등), sitemap lastmod + 실서빙 origin 사용
- [DECISION] FAQ 스키마는 보이는 FAQ 콘텐츠가 없어 정책상 생략(화면 불변 유지). 영문 /en 분리는 추후 옵션
- [TODO/운영] 도메인 i-nexys.com 이전 시 NEXT_PUBLIC_SITE_ORIGIN 변경, Google Search Console·Bing 등록 + 사이트맵 제출
