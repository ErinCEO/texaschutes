import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { CtaBanner } from "@/components/cta-banner";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { Users, ShieldCheck, Hammer, MapPinned } from "lucide-react";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "About Texas Chutes",
  description:
    "Family-owned, NFPA-82 trained, and built around long relationships with general contractors and facilities teams across the Gulf South.",
};

const values = [
  {
    icon: Users,
    title: "Family-owned",
    body: "Same family, same phone number, same crew leaders since 2013. When you call, you get the person who can actually solve it.",
  },
  {
    icon: ShieldCheck,
    title: "Code-first",
    body: "NFPA-82 is the floor, not the ceiling. We write our specs and PM programs to keep your AHJ happy without surprises.",
  },
  {
    icon: Hammer,
    title: "USA-made",
    body: "Every manufacturer we represent — Midland, Century, Precision — builds their equipment here in the United States.",
  },
  {
    icon: MapPinned,
    title: "Regional reach",
    body: "Texas, Louisiana, Oklahoma, Arkansas, Tennessee, and Georgia. One company, one standard of work, across the South.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="px-4 pt-16 pb-12 bg-white border-b border-[var(--line)]">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-start">
          <SectionHeading
            eyebrow="About us"
            title={`We've been the people you call about chutes since ${business.founded}.`}
            description="Texas Chutes is a family-owned company headquartered in Canyon Lake, Texas. We install, service, and inspect trash, recycle, and linen chute systems for high-rises, hospitals, hotels, schools, and multifamily properties."
          />
          <FadeUp className="rounded-2xl border border-[var(--line)] bg-[var(--sand)] p-6">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--steel)]">
              What we promise
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[var(--steel-soft)] leading-relaxed">
              <li>
                <strong className="text-[var(--steel)]">Show up.</strong> We schedule
                tightly and call before we&apos;re late.
              </li>
              <li>
                <strong className="text-[var(--steel)]">Tell the truth.</strong> If a
                door doesn&apos;t need replacing, we&apos;ll service it instead.
              </li>
              <li>
                <strong className="text-[var(--steel)]">Document everything.</strong>{" "}
                Floor-by-floor photo reports for every inspection.
              </li>
              <li>
                <strong className="text-[var(--steel)]">Stand behind it.</strong>{" "}
                Every install carries the full manufacturer warranty.
              </li>
            </ul>
          </FadeUp>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, body }) => (
              <StaggerItem
                key={title}
                className="rounded-2xl border border-[var(--line)] bg-white p-6"
              >
                <div className="h-12 w-12 rounded-xl bg-[var(--brand)]/10 text-[var(--brand)] grid place-items-center">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-bold text-[var(--steel)]">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-[var(--steel-soft)] leading-relaxed">
                  {body}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
