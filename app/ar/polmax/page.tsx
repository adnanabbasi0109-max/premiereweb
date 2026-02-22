"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const POLE_TYPES = [
  { id: "decorative", label: "Decorative Urban", height: 8, model: "/models/street-lamp-1.usdz" },
  { id: "street", label: "Street Light", height: 10, model: "/models/street-lamp-2.usdz" },
  { id: "octagonal", label: "Octagonal", height: 12, model: "/models/street-lamp-1.usdz" },
  { id: "high-mast", label: "High-Mast", height: 30, model: "/models/street-lamp-2.usdz" },
];

export default function PolmaxARPage() {
  const [poleType, setPoleType] = useState(POLE_TYPES[0]);
  const [isMobile, setIsMobile] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    const mobile =
      /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(ua) ||
      (navigator.maxTouchPoints > 0 && window.innerWidth < 1024);
    const ios = /iPhone|iPad|iPod/i.test(ua) || (navigator.maxTouchPoints > 0 && /Macintosh/i.test(ua));
    setIsMobile(mobile);
    setIsIOS(ios);
  }, []);

  return (
    <main className="bg-[#0D1B2A] min-h-screen">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0D1B2A]/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/brands/polmax" className="text-white/50 hover:text-white transition-colors text-sm">
            ← POLMAX
          </Link>
          <div className="bg-[#C9A84C] text-[#1A1A2E] font-bold text-xs px-3 py-1 rounded-full">
            POLMAX AR
          </div>
        </div>
      </div>

      <div className="pt-24 pb-12 max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white mb-2">POLMAX Pole AR Visualiser</h1>
          <p className="text-white/50">Place real 3D poles in your street, garden, or site</p>
        </div>

        {/* Pole type selector */}
        <div className="max-w-md mx-auto mb-10">
          <p className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-3 text-center">
            Select Pole Type
          </p>
          <div className="grid grid-cols-2 gap-2">
            {POLE_TYPES.map((p) => (
              <button
                key={p.id}
                onClick={() => setPoleType(p)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all border ${
                  poleType.id === p.id
                    ? "bg-[#C9A84C] text-[#1A1A2E] border-[#C9A84C]"
                    : "bg-white/5 text-white/60 border-white/20 hover:border-[#C9A84C]/50"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* AR button */}
        <div className="text-center py-6">
          {isIOS || isMobile ? (
            <div className="flex flex-col items-center gap-4">
              <motion.a
                rel="ar"
                href={poleType.model}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#C9A84C] text-[#1A1A2E] font-bold px-10 py-5 rounded-2xl text-lg flex items-center gap-3 mx-auto hover:bg-[#E8D48B] transition-colors shadow-lg shadow-[#C9A84C]/20"
              >
                <span className="text-2xl">📱</span>
                View in AR
                {/* Required hidden img for AR Quick Look */}
                <img src={poleType.model} hidden alt="" />
              </motion.a>
              <p className="text-white/40 text-sm max-w-xs">
                Opens your camera with a real 3D model — place it on any surface
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4 py-8">
              <div className="text-6xl mb-2">📱</div>
              <h3 className="text-white text-xl font-bold">Open on your iPhone or iPad</h3>
              <p className="text-white/50 max-w-sm text-sm">
                AR uses your device camera to place a real 3D model of POLMAX poles
                in your environment. Visit this page on an iOS device for the full experience.
              </p>
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 mt-2">
                <span className="text-2xl">🔗</span>
                <div className="text-left">
                  <p className="text-white text-sm font-semibold">Visit on mobile</p>
                  <p className="text-white/40 text-xs break-all">{typeof window !== "undefined" ? window.location.href : ""}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Info card */}
        <div className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="bg-[#C9A84C]/10 rounded-xl p-3 shrink-0">
              <span className="text-2xl">🔦</span>
            </div>
            <div>
              <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-2">
                Selected: {poleType.label}
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                POLMAX Tubular Poles · Hot-Dip Galvanized · IS:2062 E250
              </p>
              <p className="text-white/30 text-xs mt-2">
                The 3D model will open in your camera. Point at a flat surface and tap to place.
                You can move, rotate, and scale the pole.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <Link href="/products/tubular-decorative-poles" className="border border-white/20 text-white font-medium px-6 py-3 rounded-xl hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all text-sm">
            View Product Details
          </Link>
          <Link href="/contact" className="bg-[#C9A84C] text-[#1A1A2E] font-bold px-6 py-3 rounded-xl hover:bg-[#E8D48B] transition-colors text-sm">
            Get a Quote
          </Link>
        </div>
      </div>
    </main>
  );
}
