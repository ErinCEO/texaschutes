import Link from "next/link";
import { ArrowRight, Hammer, Wrench, Package, ClipboardCheck } from "lucide-react";
import { services } from "@/lib/business";
import { StaggerGroup, StaggerItem, HoverCard } from "@/components/motion-primitives";

const iconFor = {
  installations: Hammer,
  repairs: Wrench,
  products: Package,
  projects: ClipboardCheck,
} as const;

export function ServiceGrid() {
  return (
    <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mt-12">
      {services.map((svc) => {
        const Icon = iconFor[svc.slug as keyof typeof iconFor];
        return (
          <StaggerItem key={svc.slug}>
            <HoverCard className="group h-full rounded-2xl border border-[var(--line)] bg-white p-6 transition-shadow hover:shadow-lg">
              <div className="h-12 w-12 rounded-xl bg-[var(--brand)]/10 text-[var(--brand)] grid place-items-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-[var(--steel)]">
                {svc.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--steel-soft)] leading-relaxed">
                {svc.blurb}
              </p>
              <Link
                href={`/${svc.slug}`}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand)] group-hover:gap-2 transition-all"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </HoverCard>
          </StaggerItem>
        );
      })}
    </StaggerGroup>
  );
}
