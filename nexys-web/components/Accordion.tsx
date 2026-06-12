"use client";

import { useEffect, useRef, useState } from "react";

export interface AccItem {
  no: string;
  label: string;
  body: string;
}

export default function Accordion({ items }: { items: AccItem[] }) {
  const [open, setOpen] = useState(0);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [heights, setHeights] = useState<number[]>([]);

  const measure = () => {
    setHeights(panelRefs.current.map((p) => p?.scrollHeight ?? 0));
  };

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="accordion">
      {items.map((it, i) => {
        const isOpen = i === open;
        return (
          <div key={it.no} className={`acc-item${isOpen ? " is-open" : ""}`}>
            <button
              className="acc-head"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span className="acc-no">{it.no}</span>
              <span className="acc-label">{it.label}</span>
              <span className="acc-ico"></span>
            </button>
            <div
              className="acc-panel"
              style={{ maxHeight: isOpen ? (heights[i] ?? 600) : 0 }}
            >
              <div
                className="acc-panel-inner"
                ref={(el) => {
                  panelRefs.current[i] = el;
                }}
              >
                {it.body}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
