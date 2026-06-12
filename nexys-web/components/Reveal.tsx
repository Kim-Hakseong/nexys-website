"use client";

import {
  motion,
  useReducedMotion,
  useInView,
  type HTMLMotionProps,
} from "framer-motion";
import { useEffect, useRef, useState, type ElementType } from "react";

type RevealProps = {
  as?: ElementType;
  delay?: number; // 0..6 (design data-reveal-delay)
} & HTMLMotionProps<"div"> & { [key: string]: unknown };

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Reveal({
  as = "div",
  delay = 0,
  children,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  // 넉넉한 margin(뷰포트 위/아래 240px 확장) + amount:0 → 빠른 플릭 스크롤에도
  // 트리거 누락이 거의 없음. once로 한 번만 재생.
  const inView = useInView(ref, {
    once: true,
    amount: 0,
    margin: "240px 0px 240px 0px",
  });

  // 안전망: IntersectionObserver가 끝내 트리거되지 않아도 일정 시간 후 무조건 노출
  // → 어떤 경우에도 콘텐츠가 영구적으로 숨겨지지 않도록 보장
  const [fallback, setFallback] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setFallback(true), 2200);
    return () => clearTimeout(t);
  }, []);

  const M =
    (motion as unknown as Record<string, ElementType>)[as as string] ??
    motion.div;

  if (reduce) {
    const Plain = as as ElementType;
    return <Plain {...(rest as object)}>{children}</Plain>;
  }

  const show = inView || fallback;

  return (
    <M
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.9, ease: EASE, delay: show ? delay * 0.08 : 0 }}
      {...rest}
    >
      {children}
    </M>
  );
}
