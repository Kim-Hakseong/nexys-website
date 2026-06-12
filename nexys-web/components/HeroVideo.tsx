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
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [active, setActive] = useState(0);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReduce(
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false
    );
  }, []);

  useEffect(() => {
    if (reduce) return;
    timers.current.forEach(clearTimeout);
    timers.current = [];
    refs.forEach((r, i) => {
      const v = r.current;
      if (!v) return;
      // React의 muted 속성 직렬화 이슈 우회 — 음소거 자동재생 보장
      v.muted = true;
      v.defaultMuted = true;
      v.setAttribute("muted", "");
      if (i === active) {
        try {
          v.currentTime = 0;
        } catch {
          /* ignore */
        }
        const tryPlay = () => {
          const p = v.play();
          if (p && typeof p.catch === "function") p.catch(() => {});
        };
        tryPlay();
        // 일부 브라우저는 버퍼링/지연으로 첫 시도가 막힘 — 짧게 재시도
        const retries = [300, 900, 1800].map((ms) =>
          setTimeout(() => {
            if (v.paused) tryPlay();
          }, ms)
        );
        timers.current.push(...retries);
      } else {
        v.pause();
      }
    });
    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, reduce]);

  // 일부 브라우저(Safari 저전력/자동재생 차단)에서 막힌 경우, 첫 사용자 상호작용 시 재생
  useEffect(() => {
    if (reduce) return;
    const kick = () => {
      const v = refs[active].current ?? refs[0].current;
      if (v) {
        v.muted = true;
        v.play().catch(() => {});
      }
    };
    const opts = { once: true, passive: true } as AddEventListenerOptions;
    window.addEventListener("pointerdown", kick, opts);
    window.addEventListener("touchstart", kick, opts);
    window.addEventListener("scroll", kick, opts);
    return () => {
      window.removeEventListener("pointerdown", kick);
      window.removeEventListener("touchstart", kick);
      window.removeEventListener("scroll", kick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce]);

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
