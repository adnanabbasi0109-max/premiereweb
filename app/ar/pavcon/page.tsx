"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ARFallback } from "@/components/ar/ARFallback";
import { ARCameraView } from "@/components/ar/ARCameraView";
import Link from "next/link";

const PAVER_PATTERNS = [
  { id: "herringbone", label: "Herringbone", color: "#B8956A", model: "/models/herringbone-pavers.usdz" },
  { id: "basket", label: "Basket Weave", color: "#A0845A", model: "/models/brick-pavers.usdz" },
  { id: "running", label: "Running Bond", color: "#C4A882", model: "/models/brick-pavers.usdz" },
  { id: "stack", label: "Stack Bond", color: "#8B7355", model: "/models/herringbone-pavers.usdz" },
];

const PAVER_COLORS = [
  { id: "natural", label: "Natural", hex: "#8B7355" },
  { id: "charcoal", label: "Charcoal", hex: "#333333" },
  { id: "terracotta", label: "Terracotta", hex: "#8B4A2A" },
  { id: "slate", label: "Slate", hex: "#4A5568" },
];

export default function PavconARPage() {
  const [pattern, setPattern] = useState(PAVER_PATTERNS[0]);
  const [color, setColor] = useState(PAVER_COLORS[0]);
  const [showCamera, setShowCamera] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    setIsIOS(ios);
    const mobile = /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      (navigator.maxTouchPoints > 0 && window.innerWidth < 1024);
    setIsMobile(mobile);
  }, []);

  // Draw paver pattern on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color.hex;

    const W = 80,
      H = 40;
    if (pattern.id === "herringbone") {
      for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 6; col++) {
          ctx.fillRect(col * W + row * 5, row * H, W - 4, H - 4);
        }
      }
    } else {
      for (let row = 0; row < 6; row++) {
        const offset = pattern.id === "running" && row % 2 === 1 ? W / 2 : 0;
        for (let col = -1; col < 8; col++) {
          ctx.fillRect(col * W + offset, row * H, W - 4, H - 4);
        }
      }
    }
  }, [pattern, color]);

  return (
    <main className="bg-[#0D1B2A] min-h-screen">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0D1B2A]/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/brands/pavcon" className="text-white/50 hover:text-white transition-colors text-sm">
              ← PAVCON
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-[#C9A84C] font-bold text-sm">AR Visualiser</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#C9A84C] text-[#1A1A2E] font-bold text-xs px-3 py-1 rounded-full">
              PAVCON AR
            </div>
          </div>
        </div>
      </div>

      <div className="pt-24 pb-12 max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">PAVCON Paver AR Visualiser</h1>
          <p className="text-white/50">Experience our pavers on your actual site</p>
        </div>

        {/* AR Quick Look for iOS / Camera fallback for others */}
        <div className="text-center py-8">
          <div className="flex flex-col items-center gap-4">
            {/* iOS AR Quick Look - native 3D AR with USDZ */}
            {isIOS && (
              <a
                rel="ar"
                href={pattern.model}
                className="bg-[#C9A84C] text-[#1A1A2E] font-bold px-8 py-4 rounded-xl text-lg flex items-center gap-3 mx-auto hover:bg-[#E8D48B] transition-colors"
              >
                <span className="text-2xl">📱</span>
                View in AR
                <img src={pattern.model} hidden alt="" />
              </a>
            )}

            {/* Camera-based AR for all mobile */}
            {isMobile && (
              <button
                onClick={() => setShowCamera(true)}
                className={`font-bold px-8 py-4 rounded-xl text-lg flex items-center gap-3 mx-auto transition-colors ${
                  isIOS
                    ? "border border-white/30 text-white hover:border-[#C9A84C] hover:text-[#C9A84C]"
                    : "bg-[#C9A84C] text-[#1A1A2E] hover:bg-[#E8D48B]"
                }`}
              >
                <span className="text-2xl">📷</span>
                {isIOS ? "Use Camera Instead" : "Launch AR Camera"}
              </button>
            )}

            {/* Desktop fallback */}
            {!isMobile && (
              <ARFallback
                productType="paver"
                paverPattern={pattern.id}
                paverColor={color.hex}
                modelUrl={pattern.model}
              />
            )}
          </div>
        </div>

        {showCamera && (
          <ARCameraView
            onClose={() => setShowCamera(false)}
            productType="paver"
            paverPattern={pattern.id}
            paverColor={color.hex}
          />
        )}

        {/* Preview Panel */}
        <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-white font-bold text-lg mb-6">Paver Preview</h3>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Canvas preview */}
            <canvas
              ref={canvasRef}
              width={480}
              height={240}
              className="rounded-xl border border-white/20 w-full max-w-sm"
            />

            {/* Controls */}
            <div className="flex-1 space-y-6">
              <div>
                <p className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-3">Pattern</p>
                <div className="grid grid-cols-2 gap-2">
                  {PAVER_PATTERNS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setPattern(p)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all border ${
                        pattern.id === p.id
                          ? "bg-[#C9A84C] text-[#1A1A2E] border-[#C9A84C]"
                          : "bg-white/5 text-white/60 border-white/20 hover:border-[#C9A84C]/50"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-3">Colour</p>
                <div className="flex gap-3">
                  {PAVER_COLORS.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setColor(c)}
                      title={c.label}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        color.id === c.id ? "border-[#C9A84C] scale-110" : "border-white/20"
                      }`}
                      style={{ background: c.hex }}
                    />
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-2">
                  Selected: {pattern.label} · {color.label}
                </p>
                <p className="text-white/40 text-xs">PAVCON Concrete Pavers · M40–M50 Grade · IS:15658:2006</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <Link href="/products/concrete-blocks-pavers" className="border border-white/20 text-white font-medium px-6 py-3 rounded-xl hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all text-sm">
            View Product Details
          </Link>
          <Link href="/contact" className="bg-[#C9A84C] text-[#1A1A2E] font-bold px-6 py-3 rounded-xl hover:bg-[#E8D48B] transition-colors text-sm">
            Request Samples
          </Link>
        </div>
      </div>
    </main>
  );
}
