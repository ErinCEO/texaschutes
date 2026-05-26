"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { RevealLines } from "@/components/primitives/reveal-text";

export function PageHero({
  index,
  eyebrow,
  title,
  intro,
  bg,
  bgAlt,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode | string;
  intro?: string;
  bg: string;
  bgAlt?: string;
}) {
  const titleLines = Array.isArray(title) ? title : [title];
  return (
    <section className="relative isolate overflow-hidden bg-[var(--ink)] text-white grain">
      <Image
        src={bg}
        alt={bgAlt ?? ""}
        fill
        sizes="100vw"
        priority
        className="absolute inset-0 -z-20 object-cover opacity-50"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--ink)]/85 via-[var(--ink)]/75 to-[var(--ink)]"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 pt-36 pb-28">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-12 bg-[var(--copper)]" />
          <span className="eyebrow text-[var(--copper)]">
            ({index}) — {eyebrow}
          </span>
        </motion.div>

        <h1 className="mt-8 font-display font-semibold tracking-tight text-[clamp(2.75rem,8vw,8rem)] leading-[0.95]">
          <RevealLines lines={titleLines} />
        </h1>

        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 max-w-2xl text-lg leading-relaxed text-white/75"
          >
            {intro}
          </motion.p>
        )}
      </div>
    </section>
  );
}
