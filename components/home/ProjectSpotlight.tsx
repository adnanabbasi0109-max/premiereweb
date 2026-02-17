"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { STAGGER_CONTAINER, STAGGER_ITEM } from "@/lib/animations";

const PROJECTS = [
  {
    id: "p1",
    name: "Jaipur Metro Rail Extension",
    location: "Jaipur, Rajasthan",
    products: ["TMT Bars — Fe550D"],
    outcome: "Supplied 12,000+ tonnes of Fe550D TMT bars for the Phase 2 metro rail extension, enabling faster construction in seismic Zone III.",
    gradient: "from-[#1A1A2E] to-[#16325B]",
  },
  {
    id: "p2",
    name: "Indus Towers — Pan-India Rollout",
    location: "Multiple States",
    products: ["Lattice Towers", "Tubular Poles"],
    outcome: "Fabricated and installed 2,000+ telecom towers across 12 states for Indus Towers, supporting India's 4G/5G nationwide rollout.",
    gradient: "from-[#16325B] to-[#0D1B2A]",
  },
  {
    id: "p3",
    name: "Smart City Streetscaping",
    location: "Rajasthan Smart Cities",
    products: ["POLMAX Decorative Poles", "PAVCON Pavers"],
    outcome: "Delivered 1,500 decorative poles and 50,000 sq. m. of PAVCON pavers for three Rajasthan smart city projects under AMRUT 2.0.",
    gradient: "from-[#2C2C2C] to-[#1A1A2E]",
  },
];

export function ProjectSpotlight() {
  return (
    <section className="py-24 bg-[#F5F3F0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <SectionHeading label="Project Spotlight" title="Infrastructure That Speaks for Itself" align="left" className="mb-0" />
          <Link href="/blog" className="text-[#16325B] font-semibold text-sm border-b-2 border-[#C9A84C] pb-0.5 hover:text-[#C9A84C] transition-colors flex-shrink-0">
            View All Projects →
          </Link>
        </div>
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {PROJECTS.map((p) => (
            <motion.div key={p.id} variants={STAGGER_ITEM} className="group rounded-2xl overflow-hidden border border-[#E8E8E8] hover:shadow-2xl transition-all duration-300">
              <div className={`h-52 bg-gradient-to-br ${p.gradient} relative flex items-end p-6`}>
                <div className="absolute inset-0 steel-mesh-bg opacity-20" />
                <div className="relative">
                  <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-1">{p.location}</p>
                  <h3 className="text-white text-xl font-bold leading-tight">{p.name}</h3>
                </div>
              </div>
              <div className="bg-white p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.products.map((prod) => (
                    <span key={prod} className="text-xs bg-[#F5F3F0] border border-[#E8E8E8] text-[#16325B] font-semibold px-2.5 py-1 rounded-full">{prod}</span>
                  ))}
                </div>
                <p className="text-[#1A1A2E]/60 text-sm leading-relaxed">{p.outcome}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
