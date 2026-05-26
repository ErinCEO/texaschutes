"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/lib/images";

export function PullQuote() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--ink)] text-white py-32 px-6 grain">
      <Image
        src={images.pullQuote}
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover opacity-30"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--ink)]/85 via-[var(--ink)]/65 to-[var(--ink)]/90"
      />

      <div className="relative mx-auto max-w-[1100px] text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[var(--copper)] eyebrow flex items-center justify-center gap-3"
        >
          <span className="h-px w-10 bg-[var(--copper)]" />
          Field report
          <span className="h-px w-10 bg-[var(--copper)]" />
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="mt-10 font-serif text-[clamp(2rem,4.6vw,4.25rem)] leading-[1.08] tracking-tight text-balance"
        >
          <span className="text-[var(--copper)]">&ldquo;</span>
          Top-notch all around. They showed up when they said they would,
          replaced what actually needed replacing, and left the chute room
          cleaner than they found it.
          <span className="text-[var(--copper)]">&rdquo;</span>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 eyebrow text-white/60"
        >
          Property Manager · Texas Multifamily Portfolio
        </motion.div>
      </div>
    </section>
  );
}
