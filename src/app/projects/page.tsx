import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { CtaBanner } from "@/components/cta-banner";
import { StaggerGroup, StaggerItem, HoverCard } from "@/components/motion-primitives";
import { Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of chute and compactor projects Texas Chutes has installed and serviced across Texas, Louisiana, and the wider Gulf South.",
};

// TODO: drop real project photos into /public/projects/<slug>.jpg and add `image: '/projects/<slug>.jpg'` to enable.
const projects = [
  { name: "The Star (Historic Texaco Building)", city: "Dallas, TX", type: "Mixed-Use Renovation" },
  { name: "Butler Brothers Building", city: "College Station, TX", type: "Adaptive Reuse" },
  { name: "Skyloft", city: "Austin, TX", type: "Student High-Rise" },
  { name: "Mainstreet Lofts", city: "Dallas, TX", type: "Residential Tower" },
  { name: "Fairmont", city: "Austin, TX", type: "Hotel" },
  { name: "Ascent Victory Park", city: "Dallas, TX", type: "Luxury Residential" },
  { name: "Kirby Collection Apartments", city: "Houston, TX", type: "Mixed-Use" },
  { name: "Wilshire Condominiums", city: "Dallas & Houston, TX", type: "Condominium" },
  { name: "NRG Stadium", city: "Houston, TX", type: "Stadium" },
  { name: "LVL 29", city: "Plano, TX", type: "Residential Tower" },
  { name: "ABIA Terminal Expansion", city: "Austin, TX", type: "Airport" },
  { name: "Bleu Ciel", city: "Dallas, TX", type: "Luxury Residential" },
  { name: "Baylor Scott & White Medical Center", city: "Waxahachie & Austin, TX", type: "Hospital" },
  { name: "Homewood Suites", city: "Austin, TX", type: "Hotel" },
  { name: "48 East", city: "Austin, TX", type: "Mixed-Use" },
  { name: "Citron Allen Station", city: "Allen, TX", type: "Multifamily" },
  { name: "Alexan Capitol", city: "Austin, TX", type: "Multifamily" },
  { name: "CityLine Park", city: "Richardson, TX", type: "Multifamily" },
  { name: "The Lyndon at Springtown", city: "San Marcos, TX", type: "Multifamily" },
  { name: "Park West Apartments", city: "TX", type: "Multifamily" },
  { name: "Water Institute", city: "Baton Rouge, LA", type: "Research Facility" },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="px-4 pt-16 pb-12 bg-white border-b border-[var(--line)]">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Selected work"
            title="Buildings we've built chutes into."
            description="A snapshot of projects we've installed, retrofitted, or maintained across the South — from luxury condos to medical centers and Texas-sized stadiums."
          />
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <StaggerItem key={`${p.name}-${p.city}`}>
                <HoverCard className="group h-full rounded-2xl overflow-hidden border border-[var(--line)] bg-white">
                  <div
                    className="diagonal-stripes h-40 relative"
                    aria-hidden
                  >
                    <div className="absolute inset-0 bg-[var(--steel)]/70 grid place-items-center">
                      <Building2 className="h-10 w-10 text-white/80" />
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-[var(--steel-soft)]">
                      {p.type}
                    </div>
                    <h3 className="mt-1 font-[family-name:var(--font-display)] text-lg font-bold text-[var(--steel)] leading-tight">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--steel-soft)]">{p.city}</p>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
