"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ARFallback } from "@/components/ar/ARFallback";
import { ARCameraView } from "@/components/ar/ARCameraView";

const POLE_TYPES = [
  { id: "decorative", label: "Decorative Urban", height: 8, color: "#888888" },
  { id: "street", label: "Street Light", height: 10, color: "#999999" },
  { id: "octagonal", label: "Octagonal", height: 12, color: "#777777" },
  { id: "high-mast", label: "High-Mast", height: 30, color: "#AAAAAA" },
];

export default function PolmaxARPage() {
  const [arSupported, setArSupported] = useState<boolean | null>(null);
  const [poleType, setPoleType] = useState(POLE_TYPES[0]);
  const [lightOn, setLightOn] = useState(false);
  const [height, setHeight] = useState(10);
  const [showCamera, setShowCamera] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const check = async () => {
      if (typeof navigator !== "undefined" && "xr" in navigator) {
        try {
          const supported = await (navigator as unknown as { xr: { isSessionSupported: (m: string) => Promise<boolean> } }).xr.isSessionSupported("immersive-ar");
          setArSupported(supported);
        } catch {
          setArSupported(false);
        }
      } else {
        setArSupported(false);
      }
    };
    check();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const cx = canvas.width / 2;
    const bottom = canvas.height - 20;
    const poleH = Math.min((height / 45) * (canvas.height - 60), canvas.height - 60);
    const poleW = poleType.id === "octagonal" ? 12 : 10;

    // Draw pole
    ctx.fillStyle = poleType.color;
    ctx.fillRect(cx - poleW / 2, bottom - poleH, poleW, poleH);

    // Draw base plate
    ctx.fillStyle = "#666";
    ctx.fillRect(cx - 20, bottom, 40, 8);

    // Draw lamp head
    ctx.fillStyle = "#C9A84C";
    ctx.beginPath();
    if (poleType.id === "decorative") {
      ctx.arc(cx - 20, bottom - poleH + 5, 15, 0, Math.PI * 2);
    } else {
      ctx.rect(cx - 25, bottom - poleH - 10, 50, 15);
    }
    ctx.fill();

    // Draw light cone
    if (lightOn) {
      ctx.save();
      ctx.globalAlpha = 0.3;
      const grad = ctx.createRadialGradient(
        cx, bottom - poleH, 5,
        cx, bottom - poleH + 80, 80
      );
      grad.addColorStop(0, "#FFE08A");
      grad.addColorStop(1, "rgba(255,224,138,0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(cx, bottom - poleH);
      ctx.lineTo(cx - 80, bottom);
      ctx.lineTo(cx + 80, bottom);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
  }, [poleType, height, lightOn]);

  return (
    <main className="bg-[#0D1B2A] min-h-screen">
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
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">POLMAX Pole AR Visualiser</h1>
          <p className="text-white/50">Visualise our poles in your street, garden, or site</p>
        </div>

        {arSupported === null && (
          <div className="text-center py-16 text-white/50">Checking AR support...</div>
        )}

        {arSupported === false && (
          <ARFallback
            productType="pole"
            poleColor={poleType.color}
            poleHeight={height}
            lightOn={lightOn}
          />
        )}

        {arSupported === true && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">▲</div>
            <h3 className="text-white text-xl font-bold mb-4">AR Mode Ready</h3>
            <p className="text-white/60 mb-6">Tap your screen to place a pole in your environment</p>
            <button
              onClick={() => setShowCamera(true)}
              className="bg-[#C9A84C] text-[#1A1A2E] font-bold px-8 py-4 rounded-xl text-lg flex items-center gap-3 mx-auto"
            >
              <span className="text-2xl">📷</span>
              Launch AR Camera
            </button>
          </div>
        )}

        {showCamera && (
          <ARCameraView
            onClose={() => setShowCamera(false)}
            productType="pole"
            poleColor={poleType.color}
            poleHeight={height}
            lightOn={lightOn}
          />
        )}

        {/* Preview Panel */}
        <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-white font-bold text-lg mb-6">Pole Preview</h3>
          <div className="flex flex-col md:flex-row gap-8">
            <canvas
              ref={canvasRef}
              width={240}
              height={400}
              className="rounded-xl border border-white/20 bg-gradient-to-b from-[#1A1A2E] to-[#0D1B2A]"
            />
            <div className="flex-1 space-y-6">
              <div>
                <p className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-3">Pole Type</p>
                <div className="grid grid-cols-2 gap-2">
                  {POLE_TYPES.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => { setPoleType(p); setHeight(p.height); }}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all border ${
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
              <div>
                <p className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-3">
                  Height: <span className="text-[#C9A84C]">{height}m</span>
                </p>
                <input
                  type="range"
                  min={6}
                  max={45}
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full accent-[#C9A84C]"
                />
                <div className="flex justify-between text-white/30 text-xs mt-1">
                  <span>6m</span><span>45m</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-white/60 text-sm font-semibold uppercase tracking-wider">Light Simulation</p>
                <button
                  onClick={() => setLightOn((l) => !l)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                    lightOn
                      ? "bg-[#C9A84C] text-[#1A1A2E] border-[#C9A84C]"
                      : "bg-white/5 text-white/60 border-white/20"
                  }`}
                >
                  {lightOn ? "ON" : "OFF"}
                </button>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-2">
                  {poleType.label} · {height}m
                </p>
                <p className="text-white/40 text-xs">POLMAX Poles · Hot-Dip Galvanized · IS:2062 E250</p>
              </div>
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
