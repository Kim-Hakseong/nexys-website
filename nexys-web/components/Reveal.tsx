"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ElementType } from "react";

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
  const M =
    (motion as unknown as Record<string, ElementType>)[as as string] ??
    motion.div;

  if (reduce) {
    const Plain = as as ElementType;
    return <Plain {...(rest as object)}>{children}</Plain>;
  }

  return (
    <M
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay: delay * 0.08 }}
      {...rest}
    >
      {children}
    </M>
  );
}
