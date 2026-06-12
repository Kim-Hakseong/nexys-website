# design-import/ — Claude Design 산출물 투입 폴더

1. `CLAUDE_DESIGN_PROMPT.md`의 프롬프트로 Claude Design에서 디자인 생성
2. 산출물(HTML/CSS/JS/SVG/이미지)을 이 폴더에 그대로 복사
3. 여러 Variant를 비교했다면 채택한 것만 넣기 (혼선 방지)
4. PROMPT_ralph.md로 Claude Code 실행 → 이 폴더를 비주얼 기준으로 Next.js 이식

비어 있으면 Claude Code가 DESIGN.md 스펙만으로 직접 구현한다.
