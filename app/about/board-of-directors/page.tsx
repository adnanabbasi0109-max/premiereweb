import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Board of Directors | Premier Bars Limited",
  description: "Meet the leadership team driving Premier Bars Limited's vision.",
};

const DIRECTORS = [
  { name: "Mr. Rajesh Kumar Agarwal", designation: "Chairman & Managing Director", bio: "With over 25 years in the steel and infrastructure industry, Mr. Agarwal founded Premier Bars Limited in 2004 with a vision to create world-class infrastructure materials. Under his leadership, the company has grown into a six-vertical powerhouse." },
  { name: "Mr. Suresh Agarwal", designation: "Whole-time Director — Operations", bio: "Overseeing manufacturing operations across both units, Mr. Suresh Agarwal ensures Premier's production processes maintain the highest standards of quality, safety, and efficiency." },
  { name: "Ms. Priya Sharma", designation: "Independent Director", bio: "A chartered accountant with 20+ years of experience in corporate finance and governance, Ms. Sharma brings rigorous financial oversight and strategic guidance to the board." },
  { name: "Mr. Anil Mehta", designation: "Independent Director", bio: "A civil engineer and infrastructure specialist with deep expertise in large-scale project delivery, Mr. Mehta advises on technical strategy and market development." },
];

export default function BoardPage() {
  return (
    <main className="bg-[#1A1A2E] min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <Breadcrumbs items={[{ label: "About", href: "/about/overview" }, { label: "Board of Directors" }]} />
        <SectionHeading label="Leadership" title="The Minds Behind the Mission" light className="mt-8" />
        <div className="grid sm:grid-cols-2 gap-8">
          {DIRECTORS.map((d) => (
            <div key={d.name} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#C9A84C]/40 transition-all">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#C9A84C]/30 to-[#16325B]/30 border-2 border-[#C9A84C]/40 flex items-center justify-center text-3xl font-bold text-[#C9A84C] mb-6">
                {d.name.charAt(0)}
              </div>
              <h3 className="text-white text-xl font-bold mb-1">{d.name}</h3>
              <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-wider mb-4">{d.designation}</p>
              <p className="text-white/60 leading-relaxed text-sm">{d.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
