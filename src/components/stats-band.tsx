"use client";

import { AnimatedCounter } from "@/components/primitives/animated-counter";
import { FadeUp } from "@/components/motion-primitives";

const stats = [
  { n: 12, suffix: "+", label: "Years in vertical conveyance" },
  { n: 6, suffix: "", label: "States served across the South" },
  { n: 50, suffix: "+", label: "Active service properties" },
  { n: 100, suffix: "%", label: "NFPA-82 compliant installs" },
];

export function StatsBand() {
  return (
    <section className="bg-[var(--ink)] text-white py-24 px-6 grain">
      <div className="mx-auto max-w-[1400px]">
        <FadeUp className="flex items-center gap-3 mb-10">
          <span className="h-px w-10 bg-[var(--copper)]" />
          <span className="eyebrow text-[var(--copper)]">(03) — By the numbers</span>
        </FadeUp>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 lg:gap-x-12">
          {stats.map((s, i) => (
            <FadeUp
              key={s.label}
              delay={i * 0.06}
              className="border-l border-white/15 pl-6"
            >
              <div className="font-display text-[clamp(3rem,7vw,6rem)] font-semibold tracking-tight leading-none">
                <AnimatedCounter to={s.n} suffix={s.suffix} />
              </div>
              <div className="eyebrow text-white/50 mt-4 max-w-[12ch] leading-snug">
                {s.label}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
