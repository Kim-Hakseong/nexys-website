"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { asset } from "@/lib/asset";

/**
 * 스크롤에 따라 이미지가 위/아래로 시차 이동(parallax)하는 모핑 효과.
 * `.ph` 박스를 직접 렌더 — 기존 <div class="ph"><img class="ph__img"></div> 대체용.
 */
export default function ParallaxImage({
  src,
  alt = "",
  className,
  amount = 8,
}: {
  src: string;
  alt?: string;
  className?: string;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${amount}%`, `${amount}%`]
  );

  return (
    <div ref={ref} className={`ph ph--px${className ? " " + className : ""}`}>
      <motion.img
        className="ph__img"
        src={asset(src)}
        alt={alt}
        loading="lazy"
        style={
          reduce
            ? undefined
            : { y, top: "-12%", height: "124%", bottom: "auto" }
        }
      />
    </div>
  );
}
