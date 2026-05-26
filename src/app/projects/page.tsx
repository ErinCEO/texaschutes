import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { CtaBanner } from "@/components/cta-banner";
import { StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of chute and compactor projects Texas Chutes has installed and serviced across Texas, Louisiana, and the wider Gulf South.",
};

const projects = [
  { name: "The Star", sub: "Historic Texaco Building", city: "Dallas, TX", type: "Mixed-Use Renovation", img: images.proj01 },
  { name: "Butler Brothers Building", sub: "Adaptive Reuse", city: "College Station, TX", type: "Historic Conversion", img: images.proj02 },
  { name: "Skyloft", sub: "High-Rise Residential", city: "Austin, TX", type: "Student Housing", img: images.proj03 },
  { name: "Mainstreet Lofts", sub: "Residential Tower", city: "Dallas, TX", type: "Luxury Residential", img: images.proj04 },
  { name: "Fairmont", sub: "Hospitality", city: "Austin, TX", type: "Hotel", img: images.proj05 },
  { name: "Ascent Victory Park", sub: "Luxury Residential", city: "Dallas, TX", type: "High-Rise", img: images.proj06 },
  { name: "Kirby Collection", sub: "Mixed-Use", city: "Houston, TX", type: "Apartments", img: images.proj07 },
  { name: "Wilshire Condominiums", sub: "Condominium", city: "Dallas & Houston, TX", type: "Multi-Site", img: images.proj08 },
  { name: "NRG Stadium", sub: "Sports Facility", city: "Houston, TX", type: "Stadium", img: images.proj09 },
  { name: "LVL 29", sub: "Residential Tower", city: "Plano, TX", type: "High-Rise", img: images.proj10 },
  { name: "ABIA Terminal Expansion", sub: "Aviation", city: "Austin, TX", type: "Airport", img: images.proj11 },
  { name: "Bleu Ciel", sub: "Luxury Residential", city: "Dallas, TX", type: "High-Rise", img: images.proj12 },
  { name: "Baylor Scott & White", sub: "Medical Center", city: "Waxahachie & Austin, TX", type: "Hospital", img: images.proj13 },
  { name: "Homewood Suites", sub: "Hospitality", city: "Austin, TX", type: "Hotel", img: images.proj14 },
  { name: "48 East", sub: "Mixed-Use", city: "Austin, TX", type: "Apartments + Retail", img: images.proj15 },
  { name: "Citron Allen Station", sub: "Multifamily", city: "Allen, TX", type: "Residential", img: images.proj16 },
  { name: "Alexan Capitol", sub: "Multifamily", city: "Austin, TX", type: "Residential", img: images.proj17 },
  { name: "CityLine Park", sub: "Multifamily", city: "Richardson, TX", type: "Residential", img: images.proj18 },
  { name: "The Lyndon at Springtown", sub: "Multifamily", city: "San Marcos, TX", type: "Residential", img: images.proj19 },
  { name: "Park West Apartments", sub: "Multifamily", city: "Texas", type: "Residential", img: images.proj20 },
  { name: "Water Institute", sub: "Research Facility", city: "Baton Rouge, LA", type: "Institutional", img: images.proj21 },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        index="05"
        eyebrow="Selected work"
        title="Buildings we've built chutes into."
        intro="A snapshot of properties we've installed, retrofitted, or maintained across Texas, Louisiana, and the wider South — from medical centers to Texas-sized stadiums."
        bg={images.hero}
      />

      <section className="px-6 py-24 bg-[var(--paper)]">
        <div className="mx-auto max-w-[1400px]">
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <StaggerItem key={`${p.name}-${p.city}`}>
                <div className="group h-full">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[var(--ink)]">
                    <Image
                      src={p.img}
                      alt={`${p.name} — ${p.city}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/85 via-transparent to-transparent" />
                    <div className="absolute top-5 left-5 right-5 flex items-start justify-between text-white">
                      <span className="eyebrow text-white/70">{p.type}</span>
                      <span className="eyebrow text-[var(--copper)]/80">{p.city}</span>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <div className="eyebrow text-white/55">{p.sub}</div>
                      <h3 className="mt-2 font-display text-2xl md:text-[26px] font-semibold leading-tight">
                        {p.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
