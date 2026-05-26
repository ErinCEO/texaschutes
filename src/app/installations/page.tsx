import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { CtaBanner } from "@/components/cta-banner";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Chute Installations",
  description:
    "Turn-key installation of Midland and Century Chutes systems, compactors, and Midland automatic odor control — for high-rise, hospital, hotel, and multifamily projects.",
};

const phases = [
  {
    step: "01",
    title: "Spec & coordination",
    body: "We work from the architect's drawings to size doors, intake floors, and discharge configurations — then coordinate with the GC and MEP trades.",
  },
  {
    step: "02",
    title: "Delivery & installation",
    body: "Sections, doors, and accessories are staged floor-by-floor. Our crews handle hoisting, alignment, fire-stopping interfaces, and door commissioning.",
  },
  {
    step: "03",
    title: "Test, commission, hand-off",
    body: "Every door is tested, fusible links verified, and the system walked with the owner. You leave with a complete O&M manual.",
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
      <PageHero
        index="02"
        eyebrow="New construction"
        title="Engineered chute systems, installed on schedule."
        intro="We've been the chute trade for general contractors across six states since 2013. Scope is tight, crews are clean, and the chutes work on day one."
        bg={images.capabilityInstall}
      />

      <section className="bg-[var(--paper)] py-24 px-6">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-3 gap-x-8 gap-y-12">
            {phases.map((p, i) => (
              <FadeUp key={p.step} delay={i * 0.08} className="border-t border-[var(--line)] pt-6">
                <span className="font-display text-7xl font-semibold text-[var(--brand)]/25 leading-none">
                  {p.step}
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-[var(--ink-soft)] leading-relaxed max-w-sm">
                  {p.body}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--paper-deep)] py-24 px-6">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-12 gap-12 items-start">
          <FadeUp className="lg:col-span-5">
            <div className="eyebrow text-[var(--ink-soft)]/60">
              <span className="divider-tick" />
              What we install
            </div>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-tight leading-[1.05]">
              The full vertical-conveyance lineup —{" "}
              <span className="font-serif italic text-[var(--brand)]">all American-made.</span>
            </h2>
            <p className="mt-5 text-[var(--ink-soft)] leading-relaxed max-w-md">
              We&apos;re an authorized installer for Midland Chutes and Century Chutes, and we
              partner with Precision Machinery for International Dynetics compactors. Every
              system we install is built in the United States.
            </p>
          </FadeUp>

          <StaggerGroup className="lg:col-span-7 grid sm:grid-cols-2 gap-y-2">
            {offerings.map((o, i) => (
              <StaggerItem
                key={o}
                className="flex items-baseline gap-4 border-b border-[var(--line)] py-5"
              >
                <span className="eyebrow text-[var(--ink-soft)]/45 w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg md:text-xl font-medium">
                  {o}
                </span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-[var(--ink)] py-2">
        <div className="relative aspect-[21/9]">
          <Image
            src={images.capabilityInstall}
            alt="Construction site showing vertical chute installation"
            fill
            sizes="100vw"
            className="object-cover opacity-80"
          />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
