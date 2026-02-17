import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Careers | Premier Bars Limited",
  description: "Join Premier Bars Limited — career opportunities in manufacturing, engineering, sales, and sustainability across Jaipur.",
};

const OPENINGS = [
  { role: "Senior Structural Engineer — PEB Division", dept: "Engineering", location: "Mahindra World City, Jaipur", type: "Full-time", experience: "5-8 years" },
  { role: "Production Manager — TMT Rolling Mill", dept: "Manufacturing", location: "Bagru Extension, Jaipur", type: "Full-time", experience: "8-12 years" },
  { role: "Area Sales Manager — Rajasthan", dept: "Sales", location: "Jaipur (Travel required)", type: "Full-time", experience: "3-6 years" },
  { role: "Quality Control Engineer", dept: "Quality", location: "Bagru Extension, Jaipur", type: "Full-time", experience: "2-5 years" },
  { role: "Sustainability & ESG Analyst", dept: "Corporate Affairs", location: "Jaipur (Hybrid)", type: "Full-time", experience: "2-4 years" },
];

const BENEFITS = [
  { title: "Competitive CTC", desc: "Market-benchmarked compensation with performance-linked variable pay." },
  { title: "Health Insurance", desc: "Group mediclaim cover for employee and family — ₹5 lakh base cover." },
  { title: "Skill Development", desc: "Annual learning budget, technical certifications, and external training sponsorship." },
  { title: "Career Growth", desc: "Structured career tracks across engineering, operations, and commercial functions." },
];

const DEPT_COLORS: Record<string, string> = {
  Engineering: "bg-blue-500/20 text-blue-300",
  Manufacturing: "bg-orange-500/20 text-orange-300",
  Sales: "bg-green-500/20 text-green-300",
  Quality: "bg-purple-500/20 text-purple-300",
  "Corporate Affairs": "bg-[#C9A84C]/20 text-[#C9A84C]",
};

export default function CareersPage() {
  return (
    <main className="bg-[#1A1A2E] min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <Breadcrumbs items={[{ label: "Careers" }]} />
        <SectionHeading label="Careers" title="Build Your Career in Steel." light className="mt-8" />

        <div className="grid lg:grid-cols-4 gap-6 mt-12 mb-16">
          {BENEFITS.map((b) => (
            <div key={b.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-[#C9A84C] font-bold mb-2">{b.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-white font-bold text-2xl mb-6">Current Openings</h3>
        <div className="space-y-4">
          {OPENINGS.map((job) => (
            <div key={job.role} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#C9A84C]/30 transition-all flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${DEPT_COLORS[job.dept] || "bg-white/10 text-white/60"}`}>{job.dept}</span>
                  <span className="text-white/30 text-xs">{job.type}</span>
                </div>
                <h4 className="text-white font-bold text-lg">{job.role}</h4>
                <p className="text-white/40 text-sm mt-1">{job.location} · {job.experience} experience</p>
              </div>
              <a
                href={`mailto:careers@premierbars.com?subject=Application: ${encodeURIComponent(job.role)}`}
                className="shrink-0 border border-[#C9A84C]/50 text-[#C9A84C] font-semibold px-6 py-2.5 rounded-xl hover:bg-[#C9A84C] hover:text-[#1A1A2E] transition-all text-sm"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#16325B]/40 border border-white/10 rounded-2xl p-8 text-center">
          <p className="text-white/70 mb-2">Don't see a matching role?</p>
          <p className="text-white/40 text-sm mb-4">Send your CV to <a href="mailto:careers@premierbars.com" className="text-[#C9A84C] hover:underline">careers@premierbars.com</a> with the subject line "Speculative Application" and we'll keep you in mind for future openings.</p>
        </div>
      </div>
    </main>
  );
}
