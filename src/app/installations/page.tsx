import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { CtaBanner } from "@/components/cta-banner";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Chute Installations",
  description:
    "Turn-key installation of Midland and Century Chutes systems, compactors, and Midland automatic odor control — for high-rise, hospital, hotel, and multifamily projects.",
};

const phases = [
  {
    step: "01",
    title: "Spec & coordination",
    body: "We work from the architect's drawings to size doors, intake floors, and discharge configurations, then coordinate with the GC and MEP trades.",
  },
  {
    step: "02",
    title: "Delivery & installation",
    body: "Sections, doors, and accessories are staged floor-by-floor. Our crews handle hoisting, alignment, fire-stopping interfaces, and door commissioning.",
  },
  {
    step: "03",
    title: "Test, commission, hand-off",
    body: "Every door is tested, fusible links verified, and the system is walked with the owner. You leave with a complete O&M manual.",
  },
];

const offerings = [
  "Trash chute systems (gravity & sprinklered)",
  "Recycling chute systems",
  "Linen chute systems",
  "Tri-sorter and bi-sorter configurations",
  "Midland Automatic Odor Control (covers up to 2,000 sq ft)",
  "International Dynetics 520 Series compactors",
  "Auto-Pak 1830-2000 horizontal & vertical compactors",
  "Sprinklered intake doors and washdown systems",
];

export default function InstallationsPage() {
  return (
    <>
      <section className="px-4 pt-16 pb-12 bg-white border-b border-[var(--line)]">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="New construction"
            title="Engineered chute systems, installed on schedule."
            description="We've been the chute trade for general contractors across six states since 2013. Our scope is tight, our crews are clean, and our chutes work on day one."
          />
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-3 gap-5">
          {phases.map((p) => (
            <FadeUp
              key={p.step}
              className="rounded-2xl border border-[var(--line)] bg-white p-6"
            >
              <div className="font-[family-name:var(--font-display)] text-5xl font-bold text-[var(--brand)]/30">
                {p.step}
              </div>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-bold text-[var(--steel)]">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--steel-soft)] leading-relaxed">
                {p.body}
              </p>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 bg-white border-y border-[var(--line)]">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-start">
          <FadeUp>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight text-[var(--steel)]">
              What we install
            </h2>
            <p className="mt-4 text-[var(--steel-soft)] leading-relaxed">
              We&apos;re an authorized installer for Midland Chutes and Century Chutes,
              and we partner with Precision Machinery Systems for International
              Dynetics compactors. Every system we install is built in the United
              States.
            </p>
          </FadeUp>
          <StaggerGroup className="grid sm:grid-cols-2 gap-3">
            {offerings.map((o) => (
              <StaggerItem
                key={o}
                className="flex items-start gap-3 rounded-xl border border-[var(--line)] bg-[var(--sand)] p-4"
              >
                <CheckCircle2 className="h-5 w-5 mt-0.5 text-[var(--brand)] shrink-0" />
                <span className="text-sm text-[var(--steel)] leading-snug">{o}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
