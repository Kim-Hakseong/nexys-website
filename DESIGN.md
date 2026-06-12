# DESIGN.md — NEXYS 디자인 시스템 (ARX Robotics 클론 기준)

> design-import/에 Claude Design 산출물이 있으면 그것이 비주얼의 1차 기준. 이 문서는 산출물을 해석하고 빈 곳을 메우는 기준이며, 전체 방향은 "ARX Robotics 클론 + 레드 치환"이다.

## 1. 디자인 방향 (한 문장)
**arx-robotics.com의 레이아웃·폰트·인터랙션을 그대로 차용하고, ARX의 그린/올리브 포인트 컬러만 넥시스 레드 #E60012로 치환한다.** 새 디자인을 발명하지 않는다.

## 2. ARX에서 가져오는 핵심 (소스 오브 트루스)
- **컬러 운용**: 순블랙 단일 X. 다크 섹션 + 오프화이트 라이트 섹션을 번갈아 쓰는 ARX식 리듬. 레드는 CTA/라벨/강조선/hover에만 희소하게
- **타이포**: 지오메트릭 산세리프(Inter 또는 Manrope), 초대형 볼드 헤드라인, 대문자 섹션 라벨 + wide letter-spacing
- **레이아웃**: 넓은 마진, 풀블리드 이미지 카드, 좌우 비대칭 텍스트/이미지 블록
- **내러티브**: problem → 01~04 번호 카드 challenges → solution → 가로 슬라이더(industries/products)
- **인터랙션**: 차분한 스크롤 reveal, 가로 슬라이더, sticky 헤더(스크롤 시 채워짐), 메가 푸터. 화려한 파티클보다 절제된 고급 전환

## 3. 컬러 토큰
```css
--nx-red:        #E60012;  /* ARX의 그린 포인트를 대체 — CTA, 라벨, 강조선, hover */
--nx-red-dark:   #B3000E;
--nx-black:      #0B0B0C;  /* 다크 섹션 배경 */
--nx-black-soft: #141417;  /* 다크 카드 */
--nx-off-white:  #F4F3F0;  /* 라이트 섹션 배경 (ARX식 오프화이트) */
--nx-ink:        #111114;  /* 라이트 섹션 본문 텍스트 */
--nx-gray-500:   #8A8A90;  /* 보조 텍스트 */
--nx-white:      #FAFAFA;  /* 다크 섹션 본문 */
--nx-line:       rgba(255,255,255,0.10); /* 다크 보더 */
```
- 레드는 전체 면적 5% 이하. ARX가 그린을 쓰던 자리에만 정확히 대입.

## 4. 타이포그래피
- 폰트: 영문/숫자 Inter or Manrope, 국문 Pretendard (혼용, weight 매칭)
- 히어로 H1: clamp(2.75rem, 6.5vw, 6rem), weight 700~800, letter-spacing -0.02em
- 섹션 라벨: 12~13px, uppercase, letter-spacing 0.18em (다크=레드, 라이트=ink)
- 번호 라벨(01~04): 대형, 얇은 weight 또는 아웃라인 느낌 (ARX challenges 카드 차용)
- 본문: 16~18px, line-height 1.7

## 5. 컴포넌트 스펙 (ARX 거동 기준)
- **Header**: 투명/오버레이 시작 → 스크롤 시 배경 채워지며 sticky. 우측 메뉴, 모바일 햄버거 → 풀스크린 오버레이
- **버튼**: Primary = 레드 채움/화이트, Secondary = 보더/텍스트 → hover 시 채움. ARX의 버튼 형태(약간의 radius 허용, 군용 각짐 강제 안 함)를 따른다 — 산출물 기준
- **카드**: 풀블리드 이미지 + 오버레이 텍스트(ARX 솔루션/산업 카드). hover 시 이미지 scale + 레드 라벨 등장
- **가로 슬라이더**: 사례/산업 섹션. 드래그/화살표, 스냅, 모바일 스와이프
- **타임라인(회사소개)**: ARX엔 없는 섹션 — DESIGN 톤 유지하며 세로 타임라인, 진행 라인은 레드
- **숫자 카운터**: 스크롤 진입 시 count-up
- **메가 푸터**: ARX식 멀티컬럼 + 연락처 + 슬로건

## 6. 모션 규칙
- 섹션 진입: opacity 0→1 + y 24px→0, 0.6s ease-out, 1회
- 슬라이더/이미지 hover: transform/opacity만, 60fps
- `prefers-reduced-motion: reduce` 존중
- ARX 톤 = 절제. 과한 파티클·번쩍임 금지

## 7. 반응형
- mobile <640 / tablet 640~1024 / desktop >1024
- 히어로 clamp 유동, 풀블리드 카드 1→2→다열, 가로 슬라이더는 모바일 1.2장 노출 스냅
- 모바일 메뉴: ARX식 풀스크린 오버레이

## 8. 주의
- ARX는 다크+라이트 혼합이다. "전부 블랙" 금지 — 라이트 섹션을 반드시 끼워 ARX 리듬을 재현.
- 그린 계열 컬러 절대 금지. ARX의 그린이 있던 모든 자리는 #E60012.
