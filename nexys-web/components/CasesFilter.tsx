"use client";

import { useState } from "react";
import Link from "next/link";
import { CASES, FILTERS, type CaseCategory } from "@/lib/cases-data";
import { asset } from "@/lib/asset";
import { useLang } from "@/lib/i18n";

export default function CasesFilter() {
  const [active, setActive] = useState<"all" | CaseCategory>("all");
  const { lang } = useLang();
  const en = lang === "en";

  return (
    <>
      <div className="filter">
        {FILTERS.map((f) => (
          <button
            key={f.cat}
            className={active === f.cat ? "is-active" : undefined}
            onClick={() => setActive(f.cat)}
          >
            {en ? f.labelEn : f.label}
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
                    alt={en ? c.titleEn : c.title}
                    loading="lazy"
                  />
                </div>
                <span className="gcard__badge">{c.badge}</span>
                <span className="gcard__no">{c.no}</span>
              </div>
              <div className="gcard__body">
                <span className="gcard__cat">{c.cat}</span>
                <h3 className="gcard__title">{en ? c.titleEn : c.title}</h3>
                <p className="gcard__desc">{en ? c.descEn : c.desc}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
