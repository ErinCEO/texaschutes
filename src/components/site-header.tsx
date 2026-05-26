"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { business } from "@/lib/business";

const nav = [
  { href: "/", label: "Home", n: "01" },
  { href: "/installations", label: "Installations", n: "02" },
  { href: "/repairs", label: "Repairs", n: "03" },
  { href: "/products", label: "Products", n: "04" },
  { href: "/projects", label: "Projects", n: "05" },
  { href: "/about", label: "About", n: "06" },
  { href: "/contact", label: "Contact", n: "07" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[var(--ink)] text-white/70 text-[11px] tracking-[0.18em] uppercase">
        <div className="mx-auto max-w-[1400px] px-6 py-2.5 flex items-center justify-between">
          <span className="hidden sm:inline">
            <span className="text-[var(--copper)]">●</span>{" "}
            NFPA-82 Certified · Texas-Owned Since {business.founded}
          </span>
          <a
            href={`tel:${business.phoneE164}`}
            className="inline-flex items-center gap-2 font-medium hover:text-white"
          >
            <Phone className="h-3 w-3" /> {business.phone}
          </a>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-[var(--paper)]/95 backdrop-blur border-b border-[var(--line)]"
            : "bg-[var(--paper)]/0 border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-6 h-[84px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/brand/texas-chutes-logo.png"
              alt="Texas Chutes"
              width={52}
              height={52}
              priority
              className="h-12 w-12 object-contain"
            />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-[19px] font-bold tracking-tight text-[var(--ink)]">
                Texas Chutes
              </span>
              <span className="eyebrow text-[var(--ink-soft)]/70">
                Est. {business.founded} · Canyon Lake, TX
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {nav.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] font-medium text-[var(--ink)] hover:text-[var(--brand)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--ink)] text-white pl-5 pr-2 py-2 text-[13px] font-medium hover:bg-[var(--brand)] transition-colors"
            >
              Schedule Inspection
              <span className="grid place-items-center h-7 w-7 rounded-full bg-white text-[var(--ink)] group-hover:bg-[var(--ink)] group-hover:text-white transition-colors">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            className="lg:hidden p-2 text-[var(--ink)]"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-[var(--paper)] border-b border-[var(--line)]"
          >
            <div className="px-6 py-6 flex flex-col">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between border-b border-[var(--line)] py-4 text-[var(--ink)]"
                >
                  <span className="font-display text-2xl font-semibold">
                    {item.label}
                  </span>
                  <span className="eyebrow text-[var(--ink-soft)]/60">{item.n}</span>
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--ink)] text-white py-3 text-sm font-medium"
              >
                Schedule Inspection
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
