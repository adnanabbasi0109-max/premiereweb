"use client";
import { motion } from "framer-motion";
import { TIMELINE } from "@/lib/timeline";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Timeline() {
  return (
    <section className="py-24 bg-[#F5F3F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading label="Our Journey" title="Two Decades of Building India" subtitle="From a single induction furnace in 2004 to six product verticals serving India's top builders." />
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#C9A84C]/30 md:-translate-x-1/2" />
          <div className="space-y-0">
            {TIMELINE.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className={`md:flex md:items-start md:gap-8 relative ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`md:w-1/2 pl-12 md:pl-0 pb-8 md:pb-12 ${isEven ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                    <div className="text-[#C9A84C] font-mono font-bold text-2xl mb-2">{item.year}</div>
                    <h3 className="text-[#1A1A2E] font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-[#1A1A2E]/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 top-2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#1A1A2E] border-2 border-[#C9A84C] flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-[#C9A84C]" />
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
