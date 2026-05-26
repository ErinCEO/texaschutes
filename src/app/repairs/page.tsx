import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { CtaBanner } from "@/components/cta-banner";
import { StaggerGroup, StaggerItem, FadeUp } from "@/components/motion-primitives";
import { images } from "@/lib/images";
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
    n: "01",
    icon: DoorClosed,
    title: "Door replacement",
    body: "UL-rated, self-closing stainless steel intake doors for trash, recycling, and linen systems — sized to fit any existing chute opening.",
  },
  {
    n: "02",
    icon: Wrench,
    title: "Hardware rebuilds",
    body: "T-handle assemblies, latch bolts, hinges, gas-shock and hydraulic closers — rebuilt or replaced in a single visit.",
  },
  {
    n: "03",
    icon: Flame,
    title: "Fusible-link inspection",
    body: "Tested and certified per NFPA-82 so your chute closes off the fire risk it was designed to contain.",
  },
  {
    n: "04",
    icon: Cog,
    title: "Discharge door & spring service",
    body: "Tension springs, balance weights, and motorized discharge doors brought back to spec.",
  },
  {
    n: "05",
    icon: SprayCan,
    title: "Corrosion protection",
    body: "Anti-corrosive coatings applied to keep doors closing freely in humid Texas and Gulf Coast environments.",
  },
  {
    n: "06",
    icon: ClipboardList,
    title: "PM programs",
    body: "Scheduled preventative maintenance with written reports — built for facilities teams that need predictable budgets.",
  },
];

export default function RepairsPage() {
  return (
    <>
      <PageHero
        index="03"
        eyebrow="Repairs & maintenance"
        title="When a chute fails, the whole building feels it."
        intro="We carry parts for every major US chute manufacturer and most repairs close out in a single visit. If we don't have it on the truck, we'll have it from the factory by the next."
        bg={images.capabilityRepair}
      />

      <section className="bg-[var(--paper)] py-24 px-6">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-12 gap-12">
          <FadeUp className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src={images.capabilityRepair}
                alt="Technician servicing a chute door"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeUp>

          <div className="lg:col-span-7">
            <StaggerGroup className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
              {repairs.map(({ icon: Icon, n, title, body }) => (
                <StaggerItem key={title} className="border-t border-[var(--line)] pt-5">
                  <div className="flex items-start justify-between">
                    <span className="eyebrow text-[var(--ink-soft)]/60">({n})</span>
                    <Icon className="h-5 w-5 text-[var(--brand)]" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--ink-soft)] leading-relaxed">
                    {body}
                  </p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
