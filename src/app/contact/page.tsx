import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { NapBlock } from "@/components/nap-block";
import { FadeUp } from "@/components/motion-primitives";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/business";
import { Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call Texas Chutes at (830) 964-3102 to schedule a free NFPA-82 inspection or a service estimate. Headquartered in Canyon Lake, TX.",
};

export default function ContactPage() {
  return (
    <>
      <section className="px-4 pt-16 pb-12 bg-white border-b border-[var(--line)]">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Get in touch"
            title="Tell us about your building."
            description="The fastest way to get a quote, a service call, or your free annual inspection on the calendar is to give us a ring."
          />
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-5 gap-10">
          <FadeUp className="lg:col-span-3">
            <div className="rounded-2xl border border-[var(--line)] bg-white p-8">
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--steel)]">
                Talk to a real person.
              </h3>
              <p className="mt-2 text-[var(--steel-soft)]">
                Calls go straight to our office during business hours. Off-hours,
                leave a message — we return every voicemail.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <a
                  href={`tel:${business.phoneE164}`}
                  className="group rounded-xl border border-[var(--line)] p-5 hover:border-[var(--brand)] hover:bg-[var(--sand)] transition-colors"
                >
                  <Phone className="h-5 w-5 text-[var(--brand)]" />
                  <div className="mt-3 text-xs uppercase tracking-[0.14em] text-[var(--steel-soft)]">
                    Call
                  </div>
                  <div className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--steel)] mt-1">
                    {business.phone}
                  </div>
                </a>
                <a
                  href={`mailto:${business.email}`}
                  className="group rounded-xl border border-[var(--line)] p-5 hover:border-[var(--brand)] hover:bg-[var(--sand)] transition-colors"
                >
                  <Mail className="h-5 w-5 text-[var(--brand)]" />
                  <div className="mt-3 text-xs uppercase tracking-[0.14em] text-[var(--steel-soft)]">
                    Email
                  </div>
                  <div className="font-[family-name:var(--font-display)] text-base font-bold text-[var(--steel)] mt-1 break-all">
                    {business.email}
                  </div>
                </a>
              </div>

              <div className="mt-8 rounded-xl bg-[var(--sand)] border border-dashed border-[var(--line)] p-5 text-sm text-[var(--steel-soft)]">
                <strong className="text-[var(--steel)]">Form coming soon.</strong>{" "}
                We&apos;re finalizing the email backend — for now, please call or
                email and we&apos;ll respond same business day.
              </div>

              <div className="mt-6">
                <Button href={`tel:${business.phoneE164}`} size="lg">
                  Call {business.phone}
                </Button>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1} className="lg:col-span-2">
            <NapBlock variant="card" />
            <div className="mt-5 rounded-2xl overflow-hidden border border-[var(--line)]">
              <iframe
                title="Texas Chutes — Canyon Lake, TX"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  `${business.streetAddress}, ${business.addressLocality}, ${business.addressRegion} ${business.postalCode}`,
                )}&output=embed`}
                width="100%"
                height="280"
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
