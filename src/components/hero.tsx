"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Wrench, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/business";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--steel)] text-white">
      <div className="absolute inset-0 hero-grid opacity-30" aria-hidden />
      <div
        className="absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-[var(--brand)]/20 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-24 lg:pt-28 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
            Family-owned · Est. {business.founded}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 font-[family-name:var(--font-display)] text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02]"
          >
            Chute systems that
            <span className="block text-[var(--brand)]">stay code-ready.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-2xl text-lg text-white/75 leading-relaxed"
          >
            Texas Chutes installs, services, and inspects trash, recycling, and
            linen chute systems for high-rises, hospitals, hotels, and multifamily
            properties across the Gulf South. NFPA-82 compliant, every door.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button href="/contact" size="lg">
              Schedule a free inspection
            </Button>
            <Button
              href={`tel:${business.phoneE164}`}
              variant="outline"
              size="lg"
              className="bg-transparent text-white border-white/30 hover:text-white hover:border-white"
            >
              Call {business.phone}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 grid grid-cols-3 max-w-md gap-6 text-sm"
          >
            {[
              { n: "12+", l: "Years in service" },
              { n: "6", l: "States served" },
              { n: "50+", l: "Active properties" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-[family-name:var(--font-display)] font-bold text-white">
                  {s.n}
                </div>
                <div className="text-white/60 mt-1 leading-tight">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-5"
        >
          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <div className="diagonal-stripes h-1.5 rounded-full mb-5" aria-hidden />
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold">
              What we cover
            </h3>
            <ul className="mt-4 space-y-4">
              {[
                {
                  icon: Building2,
                  title: "New construction",
                  body: "Turnkey chute systems engineered with Midland and Century Chutes.",
                },
                {
                  icon: Wrench,
                  title: "Service & repair",
                  body: "Doors, latches, fusible links, springs, discharge doors, and full PM programs.",
                },
                {
                  icon: ShieldCheck,
                  title: "Annual inspections",
                  body: "Floor-by-floor NFPA-82 reports — at no cost to existing customers.",
                },
              ].map(({ icon: Icon, title, body }) => (
                <li key={title} className="flex gap-3">
                  <div className="h-9 w-9 shrink-0 rounded-md bg-[var(--brand)]/15 text-[var(--brand)] grid place-items-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">{title}</div>
                    <div className="text-sm text-white/70">{body}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
