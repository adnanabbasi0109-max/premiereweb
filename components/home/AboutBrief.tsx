"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { SLIDE_IN_LEFT, SLIDE_IN_RIGHT, FADE_IN_UP, STAGGER_CONTAINER } from "@/lib/animations";

const VALUES = [
  {
    icon: "◈",
    title: "Quality Excellence",
    description: "ISO 9001, 14001, and 45001 certified manufacturing with zero-compromise quality control.",
  },
  {
    icon: "◉",
    title: "Innovation Driven",
    description: "Tempcore technology, Vibro-Compact automation, CNC plasma cutting — engineering at the frontier.",
  },
  {
    icon: "◎",
    title: "Sustainability Focus",
    description: "India's first GreenPro Ecolabel certified TMT manufacturer across all sizes and grades.",
  },
];

export function AboutBrief() {
  return (
    <section className="py-24 bg-[#F5F3F0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            variants={SLIDE_IN_LEFT}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="rounded-2xl overflow-hidden h-[480px] relative"
              style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #16325B 60%, #0D1B2A 100%)" }}
            >
              <div className="absolute inset-0 steel-mesh-bg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-8xl mb-4 opacity-20">⚙</div>
                  <p className="text-[#C9A84C] font-mono text-sm uppercase tracking-widest">Manufacturing Excellence</p>
                  <p className="text-white/40 text-sm mt-2">Unit 1 & Unit 2, Jaipur</p>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 bg-[#C9A84C] text-[#1A1A2E] px-4 py-2 rounded-xl font-bold text-sm">
                Est. 2004 · Jaipur, Rajasthan
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#C9A84C] rounded-2xl opacity-20 -z-10" />
          </motion.div>

          <motion.div
            variants={SLIDE_IN_RIGHT}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.2em]">
              About Premier Bars Limited
            </span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-[#1A1A2E] leading-tight tracking-tight mb-6">
              A Legacy of Precision.
              <br />
              A Future of <span className="text-[#16325B]">Innovation.</span>
            </h2>
            <p className="text-[#1A1A2E]/60 text-lg leading-relaxed mb-6">
              Premier Bars Limited is a steel and infrastructure powerhouse headquartered in Jaipur, Rajasthan.
              Incorporated in 2004, we deliver exceptional quality across six product verticals — from flagship
              TMT Bars to Pre-Engineered Buildings, Telecom Towers, Concrete Pavers, Decorative Poles, and Scaffolding.
            </p>
            <p className="text-[#1A1A2E]/60 text-lg leading-relaxed mb-8">
              With two state-of-the-art manufacturing units and a client roster that includes Tata, L&T, Adani,
              Indus Towers, and Infosys — we engineer the foundations of India&apos;s most ambitious projects.
            </p>
            <Link
              href="/about/overview"
              className="inline-flex items-center gap-2 text-[#16325B] font-bold hover:text-[#C9A84C] transition-colors border-b-2 border-[#16325B]/30 hover:border-[#C9A84C] pb-1"
            >
              Learn More About Us →
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {VALUES.map((v) => (
            <motion.div
              key={v.title}
              variants={FADE_IN_UP}
              className="bg-white rounded-2xl p-8 border border-[#E8E8E8] hover:border-[#C9A84C]/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-4xl text-[#C9A84C] mb-4 group-hover:scale-110 transition-transform">{v.icon}</div>
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">{v.title}</h3>
              <p className="text-[#1A1A2E]/60 leading-relaxed text-sm">{v.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
