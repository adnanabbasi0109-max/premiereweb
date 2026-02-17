"use client";
import { useRef, useState } from "react";

interface ARFallbackProps {
  productType: "paver" | "pole";
}

export function ARFallback({ productType }: ARFallbackProps) {
  const [image, setImage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setImage(ev.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="text-center space-y-6 py-12">
      <div className="text-6xl mb-4">📸</div>
      <h3 className="text-white text-2xl font-bold">Photo Visualisation Mode</h3>
      <p className="text-white/60 max-w-md mx-auto">
        Your device doesn't support AR. Upload a photo of your site to visualise{" "}
        {productType === "paver" ? "PAVCON pavers" : "POLMAX poles"} in your space.
      </p>
      {!image ? (
        <div>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="hidden"
          />
          <button
            onClick={() => inputRef.current?.click()}
            className="bg-[#C9A84C] text-[#1A1A2E] font-bold px-8 py-4 rounded-xl hover:bg-[#E8D48B] transition-colors text-lg"
          >
            Upload Photo
          </button>
        </div>
      ) : (
        <div className="relative inline-block max-w-lg w-full">
          <img src={image} alt="Your site" className="rounded-2xl w-full" />
          {/* Overlay placeholder */}
          <div
            className="absolute inset-0 flex items-end justify-center pb-8"
            style={{ background: "rgba(0,0,0,0.1)" }}
          >
            <div
              className={`${
                productType === "paver"
                  ? "w-64 h-40 bg-[#8B7355]/60 border-2 border-[#C9A84C]"
                  : "w-8 h-48 bg-[#888]/60 border-2 border-[#C9A84C]"
              } rounded backdrop-blur-sm flex items-center justify-center text-white text-xs font-bold cursor-move`}
            >
              {productType === "paver" ? "Paver Overlay" : "Pole Overlay"}
            </div>
          </div>
          <div className="mt-4 flex gap-3 justify-center">
            <button
              onClick={() => setImage(null)}
              className="border border-white/30 text-white px-5 py-2 rounded-xl hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all text-sm"
            >
              Upload New Photo
            </button>
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.download = "premier-ar-preview.png";
                link.href = image;
                link.click();
              }}
              className="bg-[#C9A84C] text-[#1A1A2E] font-bold px-5 py-2 rounded-xl hover:bg-[#E8D48B] transition-colors text-sm"
            >
              ⬇ Save Image
            </button>
          </div>
        </div>
      )}
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}
