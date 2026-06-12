"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";

// 순서: hero-1(A_cinematic_aerial) → hero-2(NI PXI) → 반복
const CLIPS = ["/videos/hero-1.mp4", "/videos/hero-2.mp4"];
const POSTER = "/videos/hero-poster.jpg";

export default function HeroVideo() {
  const v0 = useRef<HTMLVideoElement>(null);
  const v1 = useRef<HTMLVideoElement>(null);
  const refs = [v0, v1];
  const [active, setActive] = useState(0);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReduce(
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false
    );
  }, []);

  useEffect(() => {
    if (reduce) return;
    refs.forEach((r, i) => {
      const v = r.current;
      if (!v) return;
      if (i === active) {
        try {
          v.currentTime = 0;
        } catch {
          /* ignore */
        }
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, reduce]);

  // 모션 최소화 설정 시 정지 포스터 이미지만 노출
  if (reduce) {
    return (
      <img className="hero__img is-active" src={asset(POSTER)} alt="" aria-hidden="true" />
    );
  }

  return (
    <>
      {CLIPS.map((c, i) => (
        <video
          key={c}
          ref={refs[i]}
          className={`hero__img${i === active ? " is-active" : ""}`}
          src={asset(c)}
          poster={i === 0 ? asset(POSTER) : undefined}
          muted
          autoPlay={i === 0}
          playsInline
          preload="auto"
          aria-hidden="true"
          onEnded={() => setActive((i + 1) % CLIPS.length)}
        />
      ))}
    </>
  );
}
