# NEXYS 홈페이지 리뉴얼

(주)넥시스(i-nexys.com) 기업 홈페이지 완전 리뉴얼 — 방산·항공우주 Test Automation / HILS·SIL 전문기업의 프리미엄 defense-tech 웹사이트. **ARX Robotics 스타일 + 넥시스 레드(#E60012) 치환.**

완성된 Next.js 앱은 **[`nexys-web/`](./nexys-web)** 폴더에 있다.

## 빠른 시작 (개발/빌드)
```bash
cd nexys-web
npm install
npm run dev      # 개발 서버 http://localhost:3000
npm run build    # 정적 export → nexys-web/out/
npm run serve    # 빌드 결과 미리보기 (npx serve out)
```

## 기술 스택
- **Next.js 14 (App Router) + TypeScript + Tailwind + Framer Motion**
- **정적 export** (`output: 'export'`) — Vercel / Cloudflare Pages / 일반 웹호스팅 어디든 배포 가능
- 디자인은 `design-import/`의 산출물(통합 styles.css)을 충실히 이식

## 페이지
- `/` 홈 (Hero · Problem · Challenges 아코디언 · Industries 가로 아코디언 · 사례 슬라이더 · 숫자 카운터 · 파트너 마퀴 · CTA)
- `/company` 회사소개 (인사말 · 가치 3카드 · 연혁 타임라인 · 인증 그리드)
- `/business/mil-aero` · `/business/system` · `/business/engineering` 사업영역 3페이지
- `/cases` 구축 사례 (필터 그리드) + `/cases/[slug]` 13개 상세
- `/contact` 문의 (3단 ARX 블록 + mailto 폼 + 지도)
- `/404`, sitemap.xml, robots.txt, OG 이미지

## 배포 방법 (1줄)
정적 사이트이므로 호스팅의 **루트 디렉토리를 `nexys-web`** 으로 지정하고 빌드 명령 `npm run build`, 출력 디렉토리 `out` 으로 설정하면 된다. (또는 `nexys-web/out`을 그대로 정적 호스팅에 업로드)

자세한 작업 내역·남은 TODO는 [`Log.md`](./Log.md) 참고.

---

## (원본) 하네스 워크플로우
1. **Claude Design**: `CLAUDE_DESIGN_PROMPT.md`의 프롬프트 + PDF 카탈로그 + 레퍼런스 URL 첨부 → 프로토타입 생성 (Variant A~D로 여러 버전 비교 가능)
2. 채택한 산출물을 `design-import/`에 넣기
3. **Claude Code**: 이 폴더에서 새 세션 열고 `PROMPT_ralph.md` 내용 통째로 붙여넣기 → 자율 빌드
4. 완료 후 `Log.md`의 TODO(실제 이미지·로고 교체 등) 처리 → 배포

## 파일 구성
- CLAUDE.md — 빌드 헌법 (스택·브랜드·품질 기준)
- PRD.md — 페이지별 요구사항
- DESIGN.md — 디자인 시스템 (design-import 없을 때의 기준)
- CLAUDE_DESIGN_PROMPT.md — Claude Design용 프롬프트 + Variant 4종
- PROMPT_ralph.md — 자율 빌드 루프
- content/ — PDF 카탈로그에서 추출한 콘텐츠 (소스 오브 트루스)
- design-import/ — 디자인 산출물 투입 폴더
- Log.md — 작업 로그

## 레퍼런스 (Claude Design·Code 양쪽에 첨부 권장)
- https://www.arx-robotics.com/ 와 https://www.arx-robotics.com/mithra-os (**주 레퍼런스 — 레이아웃·폰트·인터랙션 클론 대상**)
- https://www.realtimewave.co.kr/ (경쟁사 — 정보구조 참고)
- 기존 사이트: https://www.i-nexys.com/ + 넥시스 카탈로그 PDF
