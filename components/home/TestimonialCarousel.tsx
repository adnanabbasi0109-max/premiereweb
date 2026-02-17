"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/lib/testimonials";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const t = TESTIMONIALS[index];

  return (
    <section className="py-24 bg-[#1A1A2E]">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading label="Testimonials" title="What Our Partners Say" light />
        <div className="relative">
          <div className="text-[200px] leading-none text-[#C9A84C]/10 font-serif absolute -top-16 left-0 select-none" aria-hidden>
            &ldquo;
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14"
            >
              <p className="text-white/80 text-xl md:text-2xl leading-relaxed italic mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 flex items-center justify-center text-[#C9A84C] font-bold text-lg">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-bold">{t.author}</div>
                  <div className="text-white/50 text-sm">{t.designation}, {t.company}</div>
                  <div className="text-[#C9A84C] text-xs mt-0.5">{t.location}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={() => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} className="w-10 h-10 rounded-full border border-white/20 text-white/50 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all" aria-label="Previous">←</button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setIndex(i)} className={`h-2 rounded-full transition-all ${i === index ? "bg-[#C9A84C] w-6" : "bg-white/20 w-2"}`} aria-label={`Testimonial ${i + 1}`} />
              ))}
            </div>
            <button onClick={() => setIndex((i) => (i + 1) % TESTIMONIALS.length)} className="w-10 h-10 rounded-full border border-white/20 text-white/50 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all" aria-label="Next">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
