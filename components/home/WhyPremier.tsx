"use client";
import { motion } from "framer-motion";
import { DIFFERENTIATORS } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { STAGGER_CONTAINER, STAGGER_ITEM } from "@/lib/animations";

const ICONS: Record<string, string> = {
  integration: "⬡", expertise: "◎", engineering: "⚙", trust: "◈", digital: "◉",
};

export function WhyPremier() {
  return (
    <section className="py-24 bg-[#1A1A2E] blueprint-bg">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading label="Why Premier" title="Why India's Leading Builders Choose Premier" light />
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {DIFFERENTIATORS.map((d) => (
            <motion.div
              key={d.icon}
              variants={STAGGER_ITEM}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-[#C9A84C]/40 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center mx-auto mb-5 text-2xl text-[#C9A84C] group-hover:bg-[#C9A84C]/20 transition-all">
                {ICONS[d.icon]}
              </div>
              <h3 className="text-white font-bold text-base mb-3 leading-tight">{d.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{d.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
