"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 steel-mesh-bg opacity-30" />

      {/* Animated lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent"
            style={{ top: `${15 + i * 14}%`, left: 0, right: 0 }}
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
        <motion.div
          className="absolute right-10 top-1/4 w-1 bg-[#C9A84C]/20 rounded-full"
          style={{ height: "40vh" }}
          animate={{ scaleY: [0.8, 1.2, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          <Badge variant="gold">GreenPro Certified — First in India</Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl sm:text-6xl lg:text-[5rem] font-extrabold text-white leading-[1.05] tracking-tight mb-6 max-w-5xl mx-auto"
        >
          Engineering the{" "}
          <span className="text-gradient-gold">Backbone</span>
          <br />
          of India&apos;s Infrastructure
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-xl sm:text-2xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Steel. Concrete. Towers. Poles. Structures that endure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/products" variant="primary" size="lg">
            Explore Our Products →
          </Button>
          <Button href="/downloads" variant="outline" size="lg">
            Download Brochure ⬇
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20 pt-10 border-t border-white/10"
        >
          {[
            { val: "3L+", label: "Tonnes Produced" },
            { val: "500+", label: "Clients" },
            { val: "20+", label: "Years" },
            { val: "1000+", label: "Projects" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-[#C9A84C] font-stat">{s.val}</div>
              <div className="text-white/50 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-2xl"
        aria-hidden
      >
        ↓
      </motion.div>
    </section>
  );
}
