"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { images } from "@/lib/images";
import { SectionHeading } from "@/components/section-heading";

const capabilities = [
  {
    n: "01",
    title: "New construction",
    body: "Turn-key trash, recycle, and linen chute systems engineered with Midland and Century — installed on the GC's schedule.",
    href: "/installations",
    img: images.capabilityInstall,
    alt: "Vertical chute system being installed inside a high-rise core",
  },
  {
    n: "02",
    title: "Service & repair",
    body: "Door swaps, latch and spring rebuilds, fusible link inspections, and discharge-door overhauls — usually one visit.",
    href: "/repairs",
    img: images.capabilityRepair,
    alt: "Technician servicing a chute door with hand tools",
  },
  {
    n: "03",
    title: "Annual inspections",
    body: "NFPA-82 floor-by-floor walks with written reports and a clear, photo-backed proposal for anything that needs work.",
    href: "/projects",
    img: images.capabilityInspection,
    alt: "Inspector checking a chute door with a clipboard",
  },
  {
    n: "04",
    title: "Compactors & odor control",
    body: "International Dynetics compactors and the Midland Automatic Odor Control system — fabricated, installed, and serviced.",
    href: "/products",
    img: images.capabilityCompactor,
    alt: "Industrial waste compactor unit at building loading dock",
  },
];

export function CapabilitiesSection() {
  return (
    <section className="bg-[var(--paper)] py-28 px-6">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          index="02"
          eyebrow="Capabilities"
          title={
            <>
              Every step of the chute lifecycle,{" "}
              <span className="font-serif italic text-[var(--brand)]">
                under one roof.
              </span>
            </>
          }
          description="From the architect's first set of drawings to the inspection report you file with the AHJ, our crews handle it. No subs, no hand-offs."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {capabilities.map((c, i) => (
            <CapabilityCard key={c.title} c={c} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({
  c,
  reverse,
}: {
  c: (typeof capabilities)[number];
  reverse: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className="group"
    >
      <Link href={c.href} className="block">
        <div className="relative overflow-hidden rounded-2xl bg-[var(--ink)] aspect-[5/3]">
          <Image
            src={c.img}
            alt={c.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/85 via-[var(--ink)]/20 to-transparent" />
          <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
            <span className="eyebrow text-white/70">({c.n})</span>
            <span className="grid place-items-center h-10 w-10 rounded-full bg-white/15 text-white backdrop-blur transition-all group-hover:bg-white group-hover:text-[var(--ink)] group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight">
              {c.title}
            </h3>
          </div>
        </div>
        <p className="mt-5 text-[var(--ink-soft)] leading-relaxed max-w-md">
          {c.body}
        </p>
      </Link>
    </motion.div>
  );
}
