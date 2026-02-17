import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "About Premier Bars Limited | Company Overview",
  description: "Learn about Premier Bars Limited — India's leading steel and infrastructure manufacturer since 2004.",
};

export default function AboutOverviewPage() {
  return (
    <main className="bg-[#1A1A2E] min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <Breadcrumbs items={[{ label: "About" }, { label: "Overview" }]} />
        <SectionHeading label="About Us" title="Steel Meets Vision" light className="mt-8" />
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-white/70 text-lg leading-relaxed">
            <p>Premier Bars Limited is a steel and infrastructure powerhouse headquartered in Jaipur, Rajasthan. Incorporated in 2004, we have grown from a single induction furnace to one of India's most diversified infrastructure materials manufacturers.</p>
            <p>We operate across six product verticals — TMT Bars, Pre-Engineered Buildings, Transmission Towers, Concrete Blocks &amp; Pavers, Tubular Decorative Poles, and Scaffolding — serving India's top developers, contractors, telecom operators, and government bodies.</p>
            <p>Our client roster includes Tata Group, L&amp;T, Adani, Infosys, Indus Towers, Manipal, HPCL, and Transrail — companies that hold their suppliers to the same standards they hold themselves.</p>
          </div>
          <div className="space-y-8">
            <div className="bg-white/5 border border-[#C9A84C]/20 rounded-2xl p-8">
              <h3 className="text-[#C9A84C] font-bold uppercase tracking-widest text-xs mb-4">Our Mission</h3>
              <p className="text-white text-lg leading-relaxed">To be India's most trusted partner in steel and infrastructure — delivering high-quality, competitively engineered solutions that empower developers, contractors, and municipalities to build safer, smarter, and more sustainable projects.</p>
            </div>
            <div className="bg-white/5 border border-[#C9A84C]/20 rounded-2xl p-8">
              <h3 className="text-[#C9A84C] font-bold uppercase tracking-widest text-xs mb-4">Our Vision</h3>
              <p className="text-white text-lg leading-relaxed">To lead the transformation of India's infrastructure landscape through sustainable materials, precision engineering, and large-scale innovation — building a future that is resilient, efficient, and environmentally responsible.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
