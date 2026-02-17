"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { STATS } from "@/lib/constants";

function Counter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const num = parseInt(value.replace(/\D/g, ""), 10);
    const suffix = value.replace(/[0-9]/g, "");
    const duration = 1800;
    const step = (timestamp: number, startTime: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(`${Math.floor(eased * num)}${suffix}`);
      if (progress < 1) requestAnimationFrame((t) => step(t, startTime));
    };
    requestAnimationFrame((t) => step(t, t));
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center px-6 py-8">
      <div className="text-4xl lg:text-5xl font-bold text-[#C9A84C] font-stat mb-2">{displayed}</div>
      <div className="text-white/60 text-sm uppercase tracking-widest font-medium">{label}</div>
    </div>
  );
}

export function StatsCounter() {
  return (
    <section className="bg-[#1A1A2E] steel-mesh-bg border-y border-[#C9A84C]/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-x divide-white/10">
          {STATS.map((s) => (
            <Counter key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
