"use client";
import { useState } from "react";

export function CostCalculator() {
  const [area, setArea] = useState("");
  const [floors, setFloors] = useState("");
  const [type, setType] = useState("residential");
  const [result, setResult] = useState<{ tonnes: string; cost: string } | null>(null);

  const calculate = () => {
    const a = parseFloat(area) || 0;
    const f = parseInt(floors) || 1;
    const rate = type === "residential" ? 4.5 : type === "commercial" ? 5.5 : 6.5;
    const tonnes = ((a * f * rate) / 1000).toFixed(1);
    const min = (parseFloat(tonnes) * 55000).toLocaleString("en-IN");
    const max = (parseFloat(tonnes) * 65000).toLocaleString("en-IN");
    setResult({ tonnes, cost: `₹${min} – ₹${max}` });
  };

  return (
    <div className="bg-[#0D1B2A] border border-[#C9A84C]/20 rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/20 border border-[#C9A84C]/40 flex items-center justify-center text-[#C9A84C]">🧮</div>
        <div>
          <h3 className="text-white font-bold text-lg">Steel Requirement Calculator</h3>
          <p className="text-white/40 text-xs">Estimate your TMT bar requirement</p>
        </div>
      </div>
      <div className="space-y-4 mb-6">
        {[
          { label: "Built-up Area (sq. ft.)", value: area, setter: setArea, placeholder: "e.g. 10000" },
          { label: "Number of Floors", value: floors, setter: setFloors, placeholder: "e.g. 5" },
        ].map((f) => (
          <div key={f.label}>
            <label className="block text-white/60 text-sm mb-2">{f.label}</label>
            <input type="number" value={f.value} onChange={(e) => f.setter(e.target.value)} placeholder={f.placeholder} className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C9A84C] transition-colors" />
          </div>
        ))}
        <div>
          <label className="block text-white/60 text-sm mb-2">Construction Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)} className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C9A84C] transition-colors">
            <option value="residential" className="bg-[#1A1A2E]">Residential</option>
            <option value="commercial" className="bg-[#1A1A2E]">Commercial</option>
            <option value="industrial" className="bg-[#1A1A2E]">Industrial / Infrastructure</option>
          </select>
        </div>
        <button onClick={calculate} className="w-full bg-[#C9A84C] text-[#1A1A2E] font-bold py-3 rounded-lg hover:bg-[#E8D48B] transition-colors">Calculate Estimate</button>
      </div>
      {result && (
        <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-xl p-5">
          <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-3">Estimated Requirement</p>
          <div className="grid grid-cols-2 gap-4">
            <div><div className="text-3xl font-bold text-white font-stat">{result.tonnes}T</div><div className="text-white/50 text-xs">TMT Bar Quantity</div></div>
            <div><div className="text-xl font-bold text-[#C9A84C]">{result.cost}</div><div className="text-white/50 text-xs">Approximate Cost</div></div>
          </div>
          <p className="text-white/30 text-xs mt-3">* Indicative estimate. Contact us for precise quotation.</p>
        </div>
      )}
    </div>
  );
}
