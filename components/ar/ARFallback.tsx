"use client";
import { useRef, useState, useEffect } from "react";
import { ARCameraView } from "./ARCameraView";

interface ARFallbackProps {
  productType: "paver" | "pole";
  paverPattern?: string;
  paverColor?: string;
  poleColor?: string;
  poleHeight?: number;
  lightOn?: boolean;
  modelUrl?: string;
}

export function ARFallback({
  productType,
  paverPattern,
  paverColor,
  poleColor,
  poleHeight,
  lightOn,
  modelUrl,
}: ARFallbackProps) {
  const [image, setImage] = useState<string | null>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [hasCamera, setHasCamera] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [pageUrl, setPageUrl] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Detect mobile/tablet and camera availability
  useEffect(() => {
    const mobile =
      /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      (navigator.maxTouchPoints > 0 && window.innerWidth < 1024);
    setIsMobile(mobile);
    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    setIsIOS(ios);
    setPageUrl(window.location.href);

    const checkCamera = async () => {
      try {
        if (typeof navigator.mediaDevices?.getUserMedia === "function") {
          const devices = await navigator.mediaDevices.enumerateDevices();
          const videoInputs = devices.filter((d) => d.kind === "videoinput");
          setHasCamera(videoInputs.length > 0);
        }
      } catch {
        setHasCamera(false);
      }
    };
    checkCamera();
  }, []);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setImage(ev.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  if (showCamera) {
    return (
      <ARCameraView
        onClose={() => setShowCamera(false)}
        productType={productType}
        paverPattern={paverPattern}
        paverColor={paverColor}
        poleColor={poleColor}
        poleHeight={poleHeight}
        lightOn={lightOn}
      />
    );
  }

  const productLabel =
    productType === "paver" ? "PAVCON pavers" : "POLMAX poles";

  return (
    <div className="text-center space-y-6 py-12">
      {/* ── Mobile / Tablet: camera-first experience ── */}
      {isMobile ? (
        <>
          <div className="text-6xl mb-4">📸</div>
          <h3 className="text-white text-2xl font-bold">AR Visualisation</h3>
          <p className="text-white/60 max-w-md mx-auto">
            Use your camera to see {productLabel} in your real environment, or
            upload a photo instead.
          </p>

          {!image ? (
            <div className="flex flex-col items-center gap-4">
              {/* iOS AR Quick Look with USDZ */}
              {isIOS && modelUrl && (
                <a
                  rel="ar"
                  href={modelUrl}
                  className="bg-[#C9A84C] text-[#1A1A2E] font-bold px-8 py-4 rounded-xl hover:bg-[#E8D48B] transition-colors text-lg flex items-center gap-3"
                >
                  <span className="text-2xl">📱</span>
                  View in AR
                  <img src={modelUrl} hidden alt="" />
                </a>
              )}

              {hasCamera && (
                <button
                  onClick={() => setShowCamera(true)}
                  className={`font-bold px-8 py-4 rounded-xl transition-colors text-lg flex items-center gap-3 ${
                    isIOS && modelUrl
                      ? "border border-white/30 text-white hover:border-[#C9A84C] hover:text-[#C9A84C]"
                      : "bg-[#C9A84C] text-[#1A1A2E] hover:bg-[#E8D48B]"
                  }`}
                >
                  <span className="text-2xl">📷</span>
                  {isIOS && modelUrl ? "Use Camera Instead" : "Launch AR Camera"}
                </button>
              )}

              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                onChange={handleUpload}
                className="hidden"
              />
              <button
                onClick={() => inputRef.current?.click()}
                className={`font-bold px-8 py-4 rounded-xl transition-colors text-lg ${
                  hasCamera
                    ? "border border-white/30 text-white hover:border-[#C9A84C] hover:text-[#C9A84C]"
                    : "bg-[#C9A84C] text-[#1A1A2E] hover:bg-[#E8D48B]"
                }`}
              >
                Upload Photo
              </button>
            </div>
          ) : (
            <UploadedImageView
              image={image}
              productType={productType}
              hasCamera={hasCamera}
              onClear={() => setImage(null)}
              onCamera={() => {
                setImage(null);
                setShowCamera(true);
              }}
            />
          )}
        </>
      ) : (
        /* ── Desktop / Laptop: nudge toward phone/tablet ── */
        <>
          <div className="text-6xl mb-4">📱</div>
          <h3 className="text-white text-2xl font-bold">
            Best on Phone or Tablet
          </h3>
          <p className="text-white/60 max-w-md mx-auto">
            For the full AR camera experience, open this page on your phone or
            tablet. You&apos;ll be able to point your camera at any surface and see{" "}
            {productLabel} in real time.
          </p>

          {/* QR-style hint */}
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 mt-2">
            <span className="text-3xl">🔗</span>
            <div className="text-left">
              <p className="text-white text-sm font-semibold">
                Visit this page on your mobile device
              </p>
              <p className="text-white/40 text-xs break-all">
                {pageUrl}
              </p>
            </div>
          </div>

          {/* Still offer photo upload as fallback on desktop */}
          <div className="pt-4">
            <p className="text-white/40 text-sm mb-4">
              Or upload a photo to preview {productLabel} on your site
            </p>
            {!image ? (
              <>
                <input
                  ref={inputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleUpload}
                  className="hidden"
                />
                <button
                  onClick={() => inputRef.current?.click()}
                  className="border border-white/30 text-white font-bold px-8 py-4 rounded-xl hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors text-lg"
                >
                  Upload Photo
                </button>
              </>
            ) : (
              <UploadedImageView
                image={image}
                productType={productType}
                hasCamera={false}
                onClear={() => setImage(null)}
                onCamera={() => {}}
              />
            )}
          </div>
        </>
      )}
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}

/* ── Shared uploaded-image preview ── */

function UploadedImageView({
  image,
  productType,
  hasCamera,
  onClear,
  onCamera,
}: {
  image: string;
  productType: "paver" | "pole";
  hasCamera: boolean;
  onClear: () => void;
  onCamera: () => void;
}) {
  return (
    <div className="relative inline-block max-w-lg w-full">
      <img src={image} alt="Your site" className="rounded-2xl w-full" />
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
      <div className="mt-4 flex flex-wrap gap-3 justify-center">
        {hasCamera && (
          <button
            onClick={onCamera}
            className="border border-white/30 text-white px-5 py-2 rounded-xl hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all text-sm flex items-center gap-2"
          >
            <span>📷</span> Use Camera Instead
          </button>
        )}
        <button
          onClick={onClear}
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
          Save Image
        </button>
      </div>
    </div>
  );
}
