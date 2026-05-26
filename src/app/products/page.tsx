import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { CtaBanner } from "@/components/cta-banner";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Products & Brands",
  description:
    "Authorized provider of Midland Chutes, Century Chutes, and Precision Machinery International Dynetics compactors — all manufactured in the USA.",
};

const brands = [
  {
    name: "Midland Chutes",
    location: "Schiller Park, IL · Since 1976",
    body: "The largest chute manufacturer in the United States, serving all 50 states and shipping internationally. Texas Chutes is an authorized installer.",
    img: images.productMidland,
  },
  {
    name: "Century Chutes",
    location: "USA-manufactured",
    body: "Premium trash, linen, and recycling chute systems engineered for the multifamily and hospitality markets.",
    img: images.productCentury,
  },
  {
    name: "Precision Machinery Systems",
    location: "York, PA · Since 1994",
    body: "Complete in-house fabrication, assembly, paint, and testing for the International Dynetics line of compactors.",
    img: images.productPrecision,
  },
  {
    name: "Midland Automatic Odor Control",
    location: "Industrial-grade aerosol systems",
    body: "Covers spaces up to 2,000 sq ft. Each five-gallon refill renews and extends the system warranty — effectively a lifetime program.",
    img: images.productOdor,
  },
];

const lineup = [
  { model: "International Dynetics 520 Series", category: "Stationary compactor" },
  { model: "Auto-Pak 1830-2000", category: "Vertical / horizontal compactor" },
  { model: "Midland Tri-Sorter System", category: "Multi-stream chute" },
  { model: "Midland UL-B Self-Closing Doors", category: "Intake doors" },
  { model: "Midland Sprinkler Heads & Fusible Links", category: "Fire protection" },
  { model: "Midland Discharge Door Assemblies", category: "Bottom-of-chute" },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        index="04"
        eyebrow="Brands & equipment"
        title="The American-made manufacturers we stand behind."
        intro="We only install equipment we'd put in our own building. Every brand below is engineered, fabricated, and supported here in the United States."
        bg={images.productMidland}
      />

      <section className="bg-[var(--paper)] py-24 px-6">
        <div className="mx-auto max-w-[1400px]">
          <StaggerGroup className="grid gap-12 sm:grid-cols-2">
            {brands.map((b) => (
              <StaggerItem key={b.name}>
                <div className="group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--ink)]">
                    <Image
                      src={b.img}
                      alt={b.name}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/75 via-transparent to-transparent" />
                  </div>
                  <div className="mt-6">
                    <div className="eyebrow text-[var(--ink-soft)]/60">{b.location}</div>
                    <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight">
                      {b.name}
                    </h3>
                    <p className="mt-3 text-[var(--ink-soft)] leading-relaxed max-w-md">
                      {b.body}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-[var(--paper-deep)] py-24 px-6">
        <div className="mx-auto max-w-[1400px]">
          <FadeUp>
            <div className="eyebrow text-[var(--ink-soft)]/60">
              <span className="divider-tick" />
              Equipment lineup
            </div>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-tight leading-[1.05]">
              Cut sheets and brochures on request.
            </h2>
          </FadeUp>

          <div className="mt-12">
            {lineup.map((row, i) => (
              <FadeUp
                key={row.model}
                delay={i * 0.05}
                className="grid grid-cols-12 items-baseline gap-4 border-t border-[var(--line)] py-6"
              >
                <span className="col-span-1 eyebrow text-[var(--ink-soft)]/45">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="col-span-7 font-display text-2xl md:text-3xl font-medium tracking-tight">
                  {row.model}
                </span>
                <span className="col-span-4 text-right text-sm text-[var(--ink-soft)]">
                  {row.category}
                </span>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
