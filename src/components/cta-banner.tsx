import { Button } from "@/components/ui/button";
import { business } from "@/lib/business";
import { FadeUp } from "@/components/motion-primitives";

export function CtaBanner() {
  return (
    <section className="px-4 my-20">
      <FadeUp className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--steel)] text-white p-10 lg:p-14">
          <div className="absolute inset-0 hero-grid opacity-30" aria-hidden />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[var(--brand)]/30 blur-3xl" aria-hidden />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-4xl font-bold tracking-tight">
                Due for your NFPA-82 inspection?
              </h2>
              <p className="mt-3 text-white/75 max-w-lg">
                Annual chute inspections are complimentary for our service customers.
                We&apos;ll send a written floor-by-floor report with photos and a
                proposal for any required repairs.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button href="/contact" size="lg">
                Request inspection
              </Button>
              <Button
                href={`tel:${business.phoneE164}`}
                variant="outline"
                size="lg"
                className="bg-transparent border-white/30 text-white hover:text-white hover:border-white"
              >
                {business.phone}
              </Button>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
