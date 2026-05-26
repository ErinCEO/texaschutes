import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceGrid } from "@/components/service-grid";
import { CtaBanner } from "@/components/cta-banner";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { CheckCircle2, MapPin } from "lucide-react";
import { business } from "@/lib/business";

const valueProps = [
  "NFPA-82 trained technicians on every job",
  "Authorized installer for Midland & Century Chutes",
  "Parts in stock for every major US chute manufacturer",
  "Floor-by-floor inspection reports with photos",
  "Compactor service, repair, and replacement",
  "Family-owned and operated — call the owner directly",
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What we do"
            title="A complete chute partner — from blueprint to annual inspection."
            description="Whether you're spec'ing a new building or keeping a 30-year-old system in fighting shape, our team handles every step in-house."
          />
          <ServiceGrid />
        </div>
      </section>

      <section className="px-4 py-20 bg-white border-y border-[var(--line)]">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[var(--steel-soft)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
              Why building owners call us
            </div>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--steel)]">
              Built around the codes that keep your residents safe.
            </h2>
            <p className="mt-4 text-[var(--steel-soft)] leading-relaxed">
              Every chute door we install is UL-rated and self-closing. Every
              inspection follows NFPA-82. And every repair is logged, so your
              facilities team has a paper trail when the AHJ comes calling.
            </p>
          </FadeUp>

          <StaggerGroup className="grid sm:grid-cols-2 gap-3">
            {valueProps.map((v) => (
              <StaggerItem
                key={v}
                className="flex items-start gap-3 rounded-xl border border-[var(--line)] bg-[var(--sand)] p-4"
              >
                <CheckCircle2 className="h-5 w-5 mt-0.5 text-[var(--brand)] shrink-0" />
                <span className="text-sm text-[var(--steel)] leading-snug">{v}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Service area"
            title="Six states, one phone number."
            description="Headquartered in Canyon Lake, Texas, and routing techs across the Gulf South."
          />
          <StaggerGroup className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {business.serviceArea.map((s) => (
              <StaggerItem
                key={s}
                className="flex items-center gap-2 rounded-xl border border-[var(--line)] bg-white p-4"
              >
                <MapPin className="h-4 w-4 text-[var(--brand)]" />
                <span className="text-sm font-semibold text-[var(--steel)]">{s}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
