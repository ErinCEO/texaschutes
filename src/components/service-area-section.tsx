"use client";

import { motion } from "framer-motion";
import { business } from "@/lib/business";
import { SectionHeading } from "@/components/section-heading";

export function ServiceAreaSection() {
  return (
    <section className="bg-[var(--ink)] text-white py-28 px-6">
      <div className="mx-auto max-w-[1400px] grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionHeading
            index="05"
            eyebrow="Coverage"
            tone="dark"
            title={
              <>
                Six states.{" "}
                <span className="font-serif italic text-[var(--copper)]">
                  One phone number.
                </span>
              </>
            }
            description="Headquartered in Canyon Lake, Texas — routing trucks daily across the Gulf South. We don't subcontract. The crew that walks your building is the crew that does the work."
          />
        </div>
        <div className="lg:col-span-7">
          <ul className="grid sm:grid-cols-2 gap-x-10">
            {business.serviceArea.map((s, i) => (
              <motion.li
                key={s}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                className="flex items-baseline justify-between border-b border-white/12 py-5"
              >
                <span className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
                  {s}
                </span>
                <span className="eyebrow text-[var(--copper)]/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
