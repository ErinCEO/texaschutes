"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { business } from "@/lib/business";
import { Button } from "@/components/ui/button";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/repairs", label: "Repairs" },
  { href: "/installations", label: "Installations" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-[var(--line)]">
      <div className="bg-[var(--steel)] text-white text-xs">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
          <span className="hidden sm:inline tracking-wide">
            NFPA-82 compliant · Family-owned · Serving the Gulf South since {business.founded}
          </span>
          <a
            href={`tel:${business.phoneE164}`}
            className="inline-flex items-center gap-1.5 font-semibold hover:text-[var(--brand)] ml-auto"
          >
            <Phone className="h-3.5 w-3.5" /> {business.phone}
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/texas-chutes-logo.png"
            alt="Texas Chutes logo"
            width={56}
            height={56}
            priority
            className="h-12 w-12 object-contain"
          />
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-bold tracking-tight text-[var(--steel)]">
              Texas Chutes
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--steel-soft)]">
              Trash · Recycle · Linen
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-[var(--steel)] hover:text-[var(--brand)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" size="md">
            Free Inspection
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="lg:hidden p-2 text-[var(--steel)]"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-[var(--line)] overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-[var(--steel)] hover:bg-[var(--sand)] rounded-md"
                >
                  {item.label}
                </Link>
              ))}
              <Button href="/contact" className="mt-2">
                Free Inspection
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
