import { Hero } from "@/components/hero";
import { ProjectsMarquee } from "@/components/projects-marquee";
import { CapabilitiesSection } from "@/components/capabilities-section";
import { StatsBand } from "@/components/stats-band";
import { ProcessSection } from "@/components/process-section";
import { PullQuote } from "@/components/pull-quote";
import { ServiceAreaSection } from "@/components/service-area-section";
import { CtaBanner } from "@/components/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsMarquee />
      <CapabilitiesSection />
      <StatsBand />
      <ProcessSection />
      <PullQuote />
      <ServiceAreaSection />
      <CtaBanner />
    </>
  );
}
