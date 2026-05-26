import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { CtaBanner } from "@/components/cta-banner";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { Factory, ShieldCheck, Wind, Recycle } from "lucide-react";

export const metadata: Metadata = {
  title: "Products & Brands",
  description:
    "Authorized provider of Midland Chutes, Century Chutes, and Precision Machinery International Dynetics compactors — all manufactured in the USA.",
};

const brands = [
  {
    icon: Factory,
    name: "Midland Chutes",
    location: "Schiller Park, IL · Since 1976",
    body: "The largest chute manufacturer in the United States, serving all 50 states and shipping internationally. Texas Chutes is an authorized installer.",
  },
  {
    icon: Recycle,
    name: "Century Chutes",
    location: "USA-manufactured",
    body: "Premium trash, linen, and recycling chute systems engineered for the multifamily and hospitality markets.",
  },
  {
    icon: ShieldCheck,
    name: "Precision Machinery Systems",
    location: "York, PA · Since 1994",
    body: "Complete in-house fabrication, assembly, paint, and testing for the International Dynetics line of compactors.",
  },
  {
    icon: Wind,
    name: "Midland Automatic Odor Control",
    location: "Industrial-grade aerosol systems",
    body: "Covers spaces up to 2,000 sq ft. Each five-gallon refill renews and extends the system warranty — effectively a lifetime program.",
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
      <section className="px-4 pt-16 pb-12 bg-white border-b border-[var(--line)]">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Brands & equipment"
            title="The American-made manufacturers we stand behind."
            description="We only install equipment we'd put in our own building. Every brand below is engineered, fabricated, and supported here in the United States."
          />
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <StaggerGroup className="grid gap-5 sm:grid-cols-2">
            {brands.map(({ icon: Icon, name, location, body }) => (
              <StaggerItem
                key={name}
                className="rounded-2xl border border-[var(--line)] bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-[var(--brand)]/10 text-[var(--brand)] grid place-items-center shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--steel)]">
                      {name}
                    </h3>
                    <div className="text-xs uppercase tracking-[0.14em] text-[var(--steel-soft)] mt-0.5">
                      {location}
                    </div>
                    <p className="mt-3 text-sm text-[var(--steel-soft)] leading-relaxed">
                      {body}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="px-4 py-16 bg-white border-y border-[var(--line)]">
        <div className="mx-auto max-w-7xl">
          <FadeUp>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight text-[var(--steel)]">
              Lineup at a glance
            </h2>
            <p className="mt-3 text-[var(--steel-soft)] max-w-2xl">
              Spec sheets and brochures available on request — call us and we&apos;ll send
              the right cut sheet for your project.
            </p>
          </FadeUp>
          <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--line)]">
            <table className="w-full text-left text-sm">
              <thead className="bg-[var(--sand)] text-[var(--steel-soft)] uppercase tracking-[0.14em] text-xs">
                <tr>
                  <th className="px-5 py-3 font-medium">Model</th>
                  <th className="px-5 py-3 font-medium">Category</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[var(--line)]">
                {lineup.map((row) => (
                  <tr key={row.model}>
                    <td className="px-5 py-4 font-medium text-[var(--steel)]">
                      {row.model}
                    </td>
                    <td className="px-5 py-4 text-[var(--steel-soft)]">
                      {row.category}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
