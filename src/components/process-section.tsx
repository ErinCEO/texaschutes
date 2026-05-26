"use client";

import { FadeUp } from "@/components/motion-primitives";
import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    n: "01",
    title: "Walk the building.",
    body: "We meet your facilities lead, walk every floor, photograph every door, and review the original spec when it exists.",
  },
  {
    n: "02",
    title: "Write the report.",
    body: "You receive a written, photo-backed assessment with NFPA-82 findings and a prioritized scope of work — usually within five business days.",
  },
  {
    n: "03",
    title: "Quote the work.",
    body: "Line-item pricing, parts in stock, schedule built around your tenants. We don't bundle, we don't pad, and we don't sub it out.",
  },
  {
    n: "04",
    title: "Service and document.",
    body: "Our techs perform the work, then leave you with photos, sign-offs, and the paper trail your AHJ wants the next time they ask.",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-[var(--paper-deep)] py-28 px-6">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          index="04"
          eyebrow="The process"
          title={
            <>
              Four steps,{" "}
              <span className="font-serif italic text-[var(--brand)]">no surprises.</span>
            </>
          }
          description="The reason general contractors and property managers keep us on the speed-dial: predictable scope, predictable price, predictable paper trail."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-x-12 gap-y-12">
          {steps.map((s, i) => (
            <FadeUp
              key={s.n}
              delay={(i % 2) * 0.08}
              className="border-t border-[var(--line)] pt-6"
            >
              <div className="flex items-start justify-between gap-8">
                <div>
                  <span className="eyebrow text-[var(--ink-soft)]/60">
                    ({s.n})
                  </span>
                  <h3 className="mt-4 font-display text-3xl md:text-4xl font-semibold tracking-tight text-[var(--ink)]">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[var(--ink-soft)] leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
