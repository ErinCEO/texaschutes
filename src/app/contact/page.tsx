import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { NapBlock } from "@/components/nap-block";
import { FadeUp } from "@/components/motion-primitives";
import { business } from "@/lib/business";
import { images } from "@/lib/images";
import { Phone, Mail, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call Texas Chutes at (830) 964-3102 to schedule a free NFPA-82 inspection or a service estimate. Headquartered in Canyon Lake, TX.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        index="07"
        eyebrow="Get in touch"
        title="Tell us about your building."
        intro="The fastest way to get a quote, a service call, or your free annual inspection on the calendar is a phone call."
        bg={images.contact}
      />

      <section className="bg-[var(--paper)] py-24 px-6">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-12 gap-10">
          <FadeUp className="lg:col-span-7">
            <div className="rounded-2xl bg-[var(--ink)] text-white p-10 md:p-14 grain">
              <div className="eyebrow text-[var(--copper)]">
                <span className="divider-tick" />
                Direct line
              </div>
              <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-tight leading-[1.02]">
                Talk to a real person.
              </h2>
              <p className="mt-4 text-white/70 max-w-lg leading-relaxed">
                Calls go straight to our office during business hours. Off-hours,
                leave a message — every voicemail gets a return call the next
                business day.
              </p>

              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                <a
                  href={`tel:${business.phoneE164}`}
                  className="group rounded-xl border border-white/15 p-6 hover:border-[var(--copper)] hover:bg-white/[0.03] transition-colors"
                >
                  <Phone className="h-5 w-5 text-[var(--copper)]" />
                  <div className="mt-5 eyebrow text-white/55">Call us</div>
                  <div className="font-display text-2xl font-semibold mt-2">
                    {business.phone}
                  </div>
                </a>
                <a
                  href={`mailto:${business.email}`}
                  className="group rounded-xl border border-white/15 p-6 hover:border-[var(--copper)] hover:bg-white/[0.03] transition-colors"
                >
                  <Mail className="h-5 w-5 text-[var(--copper)]" />
                  <div className="mt-5 eyebrow text-white/55">Email</div>
                  <div className="font-display text-xl font-semibold mt-2 break-all">
                    {business.email}
                  </div>
                </a>
              </div>

              <div className="mt-10 rounded-xl bg-white/[0.04] border border-dashed border-white/15 p-5 text-sm text-white/70">
                <strong className="text-white">Form coming soon.</strong> The
                contact form is being finalized — for now please call or email
                and you&apos;ll have a response the same business day.
              </div>

              <a
                href={`tel:${business.phoneE164}`}
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white text-[var(--ink)] pl-6 pr-2 py-3 text-sm font-medium hover:bg-[var(--copper)] transition-colors"
              >
                Call {business.phone}
                <span className="grid place-items-center h-9 w-9 rounded-full bg-[var(--ink)] text-white group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={0.1} className="lg:col-span-5">
            <NapBlock variant="card" />
            <div className="mt-5 rounded-2xl overflow-hidden border border-[var(--line)]">
              <iframe
                title="Texas Chutes — Canyon Lake, TX"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  `${business.streetAddress}, ${business.addressLocality}, ${business.addressRegion} ${business.postalCode}`,
                )}&output=embed`}
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
