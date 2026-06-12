"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CASES } from "@/lib/cases-data";
import { asset } from "@/lib/asset";

export default function CaseSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [barStyle, setBarStyle] = useState({ width: "20%", left: "0%" });
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const drag = useRef({ down: false, startX: 0, startScroll: 0, moved: 0 });

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    const ratio = max > 0 ? track.scrollLeft / max : 0;
    const vis = Math.max(0.12, track.clientWidth / track.scrollWidth);
    setBarStyle({
      width: vis * 100 + "%",
      left: ratio * (100 - vis * 100) + "%",
    });
    setAtStart(track.scrollLeft <= 2);
    setAtEnd(track.scrollLeft >= max - 2);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const stepSize = () => {
    const track = trackRef.current;
    if (!track) return 320;
    const card = track.querySelector(".case-card");
    if (!card) return 320;
    const gap = parseFloat(getComputedStyle(track).columnGap || "22");
    return (card as HTMLElement).getBoundingClientRect().width + gap;
  };

  const go = (dir: number) =>
    trackRef.current?.scrollBy({ left: dir * stepSize(), behavior: "smooth" });

  return (
    <div className="slider">
      <div
        className="slider__track"
        ref={trackRef}
        onScroll={() => requestAnimationFrame(update)}
        onPointerDown={(e) => {
          const t = trackRef.current!;
          drag.current = {
            down: true,
            startX: e.clientX,
            startScroll: t.scrollLeft,
            moved: 0,
          };
          t.classList.add("dragging");
          t.setPointerCapture(e.pointerId);
        }}
        onPointerMove={(e) => {
          if (!drag.current.down) return;
          const dx = e.clientX - drag.current.startX;
          drag.current.moved += Math.abs(dx);
          trackRef.current!.scrollLeft = drag.current.startScroll - dx;
        }}
        onPointerUp={() => {
          drag.current.down = false;
          trackRef.current?.classList.remove("dragging");
        }}
        onPointerCancel={() => {
          drag.current.down = false;
          trackRef.current?.classList.remove("dragging");
        }}
        onClickCapture={(e) => {
          if (drag.current.moved > 8) e.preventDefault();
        }}
      >
        {CASES.map((c) => (
          <Link
            key={c.slug}
            className="case-card"
            href={`/cases/${c.slug}`}
            draggable={false}
          >
            <div className="case-card__media">
              <div className="ph">
                <img
                  className="ph__img"
                  src={asset(c.image)}
                  alt={c.title}
                  loading="lazy"
                  draggable={false}
                />
              </div>
              <span className="case-card__badge">{c.badge}</span>
              <span className="case-card__no">{c.no}</span>
            </div>
            <div className="case-card__body">
              <span className="case-card__cat">{c.cat}</span>
              <h3 className="case-card__title">{c.title}</h3>
              <p className="case-card__desc">{c.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="slider__nav">
        <div className="slider__progress">
          <span style={barStyle}></span>
        </div>
        <div className="slider__btns">
          <button
            className="sld-btn"
            aria-label="이전"
            disabled={atStart}
            onClick={() => go(-1)}
          >
            ←
          </button>
          <button
            className="sld-btn"
            aria-label="다음"
            disabled={atEnd}
            onClick={() => go(1)}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
