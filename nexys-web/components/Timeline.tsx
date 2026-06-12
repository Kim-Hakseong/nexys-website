"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";

export interface TLRow {
  year: string;
  events: { m: string; e: string; eEn: string; key?: boolean }[];
}

export default function Timeline({
  rows,
  en,
}: {
  rows: TLRow[];
  en: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 65%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="timeline timeline--scroll" ref={ref}>
      <div className="timeline__track" aria-hidden="true">
        <motion.div
          className="timeline__fill"
          style={reduce ? { scaleY: 1 } : { scaleY }}
        />
      </div>

      {rows.map((row) => (
        <Reveal className="tl-row" key={row.year}>
          <span className="tl-node" aria-hidden="true" />
          <div className="tl-year">
            {row.year}
            <span className="dot"></span>
          </div>
          <div className="tl-events">
            {row.events.map((ev, i) => (
              <div className={`tl-event${ev.key ? " is-key" : ""}`} key={i}>
                <span className="m">{ev.m}</span>
                <span className="e">{en ? ev.eEn : ev.e}</span>
              </div>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
