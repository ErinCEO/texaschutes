"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import { business } from "@/lib/business";
import { images } from "@/lib/images";

export function CtaBanner() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative isolate overflow-hidden rounded-[28px] bg-[var(--ink)] text-white p-10 md:p-16 grain"
        >
          <Image
            src={images.cta}
            alt=""
            fill
            sizes="100vw"
            className="absolute inset-0 -z-10 object-cover opacity-25"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-tr from-[var(--ink)] via-[var(--ink)]/70 to-[var(--brand-deep)]/40"
          />

          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-[var(--copper)]" />
            <span className="eyebrow text-[var(--copper)]">
              Free annual inspection
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <h2 className="lg:col-span-7 font-display text-[clamp(2.25rem,5vw,4.5rem)] font-semibold tracking-tight leading-[1.02]">
              Due for your NFPA-82?{" "}
              <span className="font-serif italic text-[var(--copper)]">
                We&apos;ll write the report.
              </span>
            </h2>
            <div className="lg:col-span-5 flex flex-col gap-4 lg:items-end">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white text-[var(--ink)] pl-6 pr-2 py-3 text-sm font-medium hover:bg-[var(--copper)] transition-colors w-fit"
              >
                Schedule a walkthrough
                <span className="grid place-items-center h-9 w-9 rounded-full bg-[var(--ink)] text-white group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
              <a
                href={`tel:${business.phoneE164}`}
                className="inline-flex items-center gap-2 text-white/85 hover:text-white text-sm font-medium w-fit"
              >
                <Phone className="h-4 w-4" /> {business.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
