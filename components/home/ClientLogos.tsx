import { LogoMarquee } from "@/components/shared/LogoMarquee";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ClientLogos() {
  return (
    <section className="py-20 bg-[#0D1B2A]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading label="Trusted By" title="Trusted by India's Industry Leaders" light />
        <LogoMarquee />
      </div>
    </section>
  );
}
