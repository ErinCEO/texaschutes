import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { CtaBanner } from "@/components/cta-banner";
import { StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import {
  DoorClosed,
  Wrench,
  Cog,
  Flame,
  SprayCan,
  ClipboardList,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Chute Repairs & Maintenance",
  description:
    "Door replacement, latch and spring rebuilds, fusible-link checks, discharge-door service, and preventative maintenance programs for trash, recycle, and linen chutes.",
};

const repairs = [
  {
    icon: DoorClosed,
    title: "Door replacement",
    body: "UL-rated, self-closing stainless steel intake doors for trash, recycling, and linen systems — sized to fit any existing chute opening.",
  },
  {
    icon: Wrench,
    title: "Hardware rebuilds",
    body: "T-handle assemblies, latch bolts, hinges, gas-shock and hydraulic closers — rebuilt or replaced in a single visit.",
  },
  {
    icon: Flame,
    title: "Fusible-link inspection",
    body: "Tested and certified per NFPA-82 so your chute closes off the fire risk it was designed to contain.",
  },
  {
    icon: Cog,
    title: "Discharge door & spring service",
    body: "Tension springs, balance weights, and motorized discharge doors brought back to spec.",
  },
  {
    icon: SprayCan,
    title: "Lubrication & corrosion protection",
    body: "Anti-corrosive coatings applied to keep doors closing freely in humid Texas and Gulf Coast environments.",
  },
  {
    icon: ClipboardList,
    title: "PM programs",
    body: "Scheduled preventative maintenance with written reports — built for facilities teams that need predictable budgets.",
  },
];

export default function RepairsPage() {
  return (
    <>
      <section className="px-4 pt-16 pb-12 bg-white border-b border-[var(--line)]">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Repairs & maintenance"
            title="When a chute fails, the whole building feels it."
            description="We carry parts for every major US chute manufacturer and most repairs are completed in a single visit. If we don't have it on the truck, we'll source it from the factory."
          />
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {repairs.map(({ icon: Icon, title, body }) => (
              <StaggerItem
                key={title}
                className="rounded-2xl border border-[var(--line)] bg-white p-6"
              >
                <div className="h-12 w-12 rounded-xl bg-[var(--brand)]/10 text-[var(--brand)] grid place-items-center">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl font-bold text-[var(--steel)]">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-[var(--steel-soft)] leading-relaxed">
                  {body}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
