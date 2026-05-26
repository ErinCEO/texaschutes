"use client";

import { InfiniteSlider } from "@/components/primitives/infinite-slider";

const projects = [
  "The Star (Texaco Building) — Dallas",
  "Butler Brothers — College Station",
  "Skyloft — Austin",
  "Fairmont — Austin",
  "Ascent Victory Park — Dallas",
  "Kirby Collection — Houston",
  "NRG Stadium — Houston",
  "LVL 29 — Plano",
  "ABIA Terminal Expansion — Austin",
  "Bleu Ciel — Dallas",
  "Baylor Scott & White — Waxahachie",
  "Wilshire Condominiums — Dallas",
  "CityLine Park — Richardson",
  "The Lyndon — San Marcos",
  "Water Institute — Baton Rouge",
  "48 East — Austin",
  "Citron Allen Station — Allen",
];

export function ProjectsMarquee() {
  return (
    <section className="bg-[var(--ink)] text-white border-y border-white/10">
      <div className="mx-auto max-w-[1400px] px-6 py-6 flex items-center gap-6">
        <div className="hidden md:flex items-center gap-3 shrink-0 pr-6 border-r border-white/15">
          <span className="h-px w-8 bg-[var(--copper)]" />
          <span className="eyebrow text-[var(--copper)]">Selected work</span>
        </div>
        <InfiniteSlider gap={48} speed={45} speedOnHover={15} className="flex-1">
          {projects.map((p) => (
            <span
              key={p}
              className="font-display text-xl md:text-2xl text-white/85 whitespace-nowrap"
            >
              {p}
              <span className="ml-12 text-[var(--copper)]/60">/</span>
            </span>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}
