import Link from "next/link";
import Image from "next/image";
import { business } from "@/lib/business";
import { NapBlock } from "@/components/nap-block";

const cols = [
  {
    title: "Services",
    links: [
      { href: "/installations", label: "New Installations" },
      { href: "/repairs", label: "Repairs & Maintenance" },
      { href: "/products", label: "Products & Brands" },
      { href: "/projects", label: "Projects" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-[var(--steel)] text-white">
      <div className="diagonal-stripes h-2" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/brand/texas-chutes-logo.png"
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 object-contain bg-white rounded p-1"
            />
            <span className="text-lg font-bold tracking-tight">
              {business.legalName}
            </span>
          </Link>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            {business.description}
          </p>
          <div className="mt-6 bg-white/5 rounded-xl p-5 border border-white/10">
            <div className="[&_*]:text-white/80 [&_a:hover]:text-white">
              <NapBlock />
            </div>
          </div>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <h3 className="text-xs uppercase tracking-[0.18em] text-white/60">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/85 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <span>
            © {new Date().getFullYear()} {business.legalName}. All rights reserved.
          </span>
          <span>NFPA-82 compliant chute service · Canyon Lake, TX</span>
        </div>
      </div>
    </footer>
  );
}
