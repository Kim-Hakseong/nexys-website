"use client";

import { useEffect, useRef, useState } from "react";

export default function CountUp({
  to,
  duration = 1300,
}: {
  to: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const finish = () => {
      done.current = true;
      setVal(to);
    };

    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      finish();
      return;
    }
    if (!("IntersectionObserver" in window)) {
      finish();
      return;
    }

    const animate = () => {
      if (done.current) return;
      done.current = true;
      let t0: number | null = null;
      const step = (ts: number) => {
        if (t0 === null) t0 = ts;
        const p = Math.min((ts - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(to * eased));
        if (p < 1) requestAnimationFrame(step);
        else setVal(to);
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animate();
            io.disconnect();
          }
        });
      },
      // 넉넉한 rootMargin + threshold 0 → 빠른 스크롤에도 트리거 누락 최소화
      { threshold: 0, rootMargin: "200px 0px 200px 0px" }
    );
    io.observe(el);

    // 안전망: 끝내 트리거 안 돼도 최종값은 반드시 노출
    const fallback = setTimeout(() => {
      if (!done.current) finish();
    }, 2200);

    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, [to, duration]);

  return <span ref={ref}>{val}</span>;
}
