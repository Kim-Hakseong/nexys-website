"use client";

import { useState } from "react";
import Link from "next/link";
import { CASES, FILTERS, type CaseCategory } from "@/lib/cases-data";
import { asset } from "@/lib/asset";

export default function CasesFilter() {
  const [active, setActive] = useState<"all" | CaseCategory>("all");

  return (
    <>
      <div className="filter">
        {FILTERS.map((f) => (
          <button
            key={f.cat}
            className={active === f.cat ? "is-active" : undefined}
            onClick={() => setActive(f.cat)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="case-grid">
        {CASES.map((c) => {
          const show =
            active === "all" || c.cats.includes(active as CaseCategory);
          return (
            <Link
              key={c.slug}
              className={`gcard${show ? "" : " hidden"}`}
              href={`/cases/${c.slug}`}
            >
              <div className="gcard__media">
                <div className="ph">
                  <img
                    className="ph__img"
                    src={asset(c.image)}
                    alt={c.title}
                    loading="lazy"
                  />
                </div>
                <span className="gcard__badge">{c.badge}</span>
                <span className="gcard__no">{c.no}</span>
              </div>
              <div className="gcard__body">
                <span className="gcard__cat">{c.cat}</span>
                <h3 className="gcard__title">{c.title}</h3>
                <p className="gcard__desc">{c.desc}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
