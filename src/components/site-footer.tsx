import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { business } from "@/lib/business";
import { NapBlock } from "@/components/nap-block";

const cols = [
  {
    title: "Services",
    links: [
      { href: "/installations", label: "New Installations" },
      { href: "/repairs", label: "Repairs & Maintenance" },
      { href: "/products", label: "Products & Brands" },
      { href: "/projects", label: "Selected Projects" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: `tel:${business.phoneE164}`, label: business.phone },
      { href: `mailto:${business.email}`, label: business.email },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-[var(--ink)] text-white grain">
      <div className="diagonal-stripes h-1.5" aria-hidden />
      <div className="mx-auto max-w-[1400px] px-6 pt-20 pb-12">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/brand/texas-chutes-logo.png"
                alt=""
                width={56}
                height={56}
                className="h-14 w-14 object-contain bg-white rounded p-1"
              />
              <span className="font-display text-2xl font-semibold tracking-tight">
                {business.legalName}
              </span>
            </Link>
            <p className="mt-6 max-w-md font-serif italic text-[clamp(1.5rem,2.5vw,2rem)] leading-snug text-white/85">
              Trash, recycle, and linen chute systems —{" "}
              <span className="text-[var(--copper)]">engineered, installed, and inspected</span>{" "}
              across the Gulf South.
            </p>
            <Link
              href="/contact"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white text-[var(--ink)] pl-6 pr-2 py-3 text-sm font-medium hover:bg-[var(--copper)] transition-colors"
            >
              Start a project
              <span className="grid place-items-center h-9 w-9 rounded-full bg-[var(--ink)] text-white group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <h3 className="eyebrow text-white/50">Services</h3>
            <ul className="mt-5 space-y-3.5">
              {cols[0].links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-base text-white/85 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h3 className="eyebrow text-white/50">Reach us</h3>
            <ul className="mt-5 space-y-3.5">
              {cols[1].links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-base text-white/85 hover:text-white break-all"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-white/[0.04] border border-white/10 p-6">
          <div className="[&_*]:text-white/80 [&_a:hover]:text-white">
            <NapBlock />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-white/55">
          <span>
            © {new Date().getFullYear()} {business.legalName}. NFPA-82 compliant chute service.
          </span>
          <span className="eyebrow">Canyon Lake · Austin · Dallas · Houston · New Orleans</span>
        </div>
      </div>
    </footer>
  );
}
