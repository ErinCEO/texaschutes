"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import { business } from "@/lib/business";
import { images } from "@/lib/images";
import { RevealLines } from "@/components/primitives/reveal-text";
import { ScrollCue } from "@/components/primitives/scroll-cue";
import { AnimatedCounter } from "@/components/primitives/animated-counter";

export function Hero() {
  return (
    <section className="relative isolate min-h-[92vh] flex items-end overflow-hidden bg-[var(--ink)] text-white grain">
      <Image
        src={images.hero}
        alt={images.heroAlt}
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover opacity-65"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/85 to-[var(--ink)]/30"
      />
      <div aria-hidden className="absolute inset-0 -z-10 hero-grid opacity-30" />

      <div className="relative mx-auto max-w-[1400px] w-full px-6 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-px w-12 bg-[var(--copper)]" />
          <span className="eyebrow text-[var(--copper)]">
            (01) — Vertical Conveyance, Code-First
          </span>
        </motion.div>

        <h1 className="font-display font-semibold tracking-tight text-[clamp(2.75rem,9vw,9rem)] leading-[0.92]">
          <RevealLines
            lines={[
              <span key="a">Chutes built</span>,
              <span key="b" className="italic font-serif text-[var(--copper)]">
                for the buildings
              </span>,
              <span key="c">that don&apos;t stop.</span>,
            ]}
          />
        </h1>

        <div className="mt-14 grid lg:grid-cols-12 gap-10 items-end">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="lg:col-span-5 text-lg text-white/75 leading-relaxed max-w-md"
          >
            Texas Chutes installs, services, and inspects trash, recycling, and
            linen chute systems for high-rises, hospitals, hotels, and
            multifamily projects from the Hill Country to the Gulf Coast.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="lg:col-span-4 flex flex-wrap gap-3"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white text-[var(--ink)] pl-6 pr-2 py-2.5 text-sm font-medium hover:bg-[var(--copper)] transition-colors"
            >
              Book a free inspection
              <span className="grid place-items-center h-8 w-8 rounded-full bg-[var(--ink)] text-white transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
            <a
              href={`tel:${business.phoneE164}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 text-white pl-5 pr-5 py-2.5 text-sm font-medium hover:border-white hover:bg-white/5"
            >
              <Phone className="h-4 w-4" />
              {business.phone}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="lg:col-span-3 lg:justify-self-end flex items-end gap-8"
          >
            <Stat n={12} suffix="+" label="Years in service" />
            <Stat n={6} label="States covered" />
            <Stat n={50} suffix="+" label="Active properties" />
          </motion.div>
        </div>

        <div className="mt-16 flex items-center justify-between">
          <div className="eyebrow text-white/40">
            <span className="divider-tick" />
            Canyon Lake · Austin · Dallas · Houston · New Orleans
          </div>
          <ScrollCue />
        </div>
      </div>
    </section>
  );
}

function Stat({
  n,
  suffix = "",
  label,
}: {
  n: number;
  suffix?: string;
  label: string;
}) {
  return (
    <div>
      <div className="font-display text-4xl font-semibold text-white">
        <AnimatedCounter to={n} suffix={suffix} />
      </div>
      <div className="eyebrow text-white/40 mt-2 max-w-[100px] leading-tight">
        {label}
      </div>
    </div>
  );
}
