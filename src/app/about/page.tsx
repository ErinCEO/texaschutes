import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { CtaBanner } from "@/components/cta-banner";
import { StatsBand } from "@/components/stats-band";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { images } from "@/lib/images";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "About Texas Chutes",
  description:
    "Family-owned, NFPA-82 trained, and built around long relationships with general contractors and facilities teams across the Gulf South.",
};

const promises = [
  {
    n: "01",
    title: "Show up.",
    body: "We schedule tightly, call before we're late, and arrive in clearly marked trucks.",
  },
  {
    n: "02",
    title: "Tell the truth.",
    body: "If a door doesn't need replacing, we service it instead. The honest answer is always cheaper than the wrong one.",
  },
  {
    n: "03",
    title: "Document everything.",
    body: "Floor-by-floor photo reports for every inspection — so you have a paper trail when the AHJ asks.",
  },
  {
    n: "04",
    title: "Stand behind it.",
    body: "Every install carries the full manufacturer warranty. We answer the phone when something doesn't go as planned.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        index="06"
        eyebrow="About us"
        title={`Family-owned. NFPA-82 trained. Since ${business.founded}.`}
        intro="Texas Chutes is a family-owned company headquartered in Canyon Lake, Texas. We install, service, and inspect trash, recycle, and linen chute systems for high-rises, hospitals, hotels, schools, and multifamily properties."
        bg={images.about}
      />

      <section className="bg-[var(--paper)] py-24 px-6">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-12 gap-12 items-start">
          <FadeUp className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src={images.team}
                alt="Construction team reviewing plans on site"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeUp>

          <div className="lg:col-span-7">
            <FadeUp>
              <div className="eyebrow text-[var(--ink-soft)]/60">
                <span className="divider-tick" />
                Operating principles
              </div>
              <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-tight leading-[1.05]">
                Four promises{" "}
                <span className="font-serif italic text-[var(--brand)]">
                  we keep.
                </span>
              </h2>
            </FadeUp>

            <StaggerGroup className="mt-12 space-y-2">
              {promises.map((p) => (
                <StaggerItem
                  key={p.n}
                  className="grid grid-cols-12 gap-4 border-t border-[var(--line)] py-6"
                >
                  <span className="col-span-2 eyebrow text-[var(--ink-soft)]/45">
                    ({p.n})
                  </span>
                  <div className="col-span-10">
                    <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[var(--ink-soft)] leading-relaxed max-w-xl">
                      {p.body}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      <StatsBand />
      <CtaBanner />
    </>
  );
}
