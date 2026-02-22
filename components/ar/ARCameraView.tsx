"use client";
import { useEffect, useRef, useState, useCallback } from "react";

interface ARCameraViewProps {
  onClose: () => void;
  productType: "paver" | "pole";
  paverPattern?: string;
  paverColor?: string;
  poleColor?: string;
  poleHeight?: number;
  lightOn?: boolean;
}

export function ARCameraView({
  onClose,
  productType,
  paverPattern = "herringbone",
  paverColor = "#C4A882",
  poleColor = "#888888",
  poleHeight = 10,
  lightOn = false,
}: ARCameraViewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [cameraReady, setCameraReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /* ── Request camera access ── */
  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: { ideal: "environment" },
            width: { ideal: 1920 },
            height: { ideal: 1080 },
          },
          audio: false,
        });

        if (cancelled) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }

        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err: unknown) {
        if (cancelled) return;
        const e = err instanceof Error ? err : new Error("Unknown error");
        if (e.name === "NotAllowedError") {
          setError(
            "Camera access was denied. Please allow camera permission in your browser settings and try again."
          );
        } else if (e.name === "NotFoundError") {
          setError("No camera found on this device.");
        } else {
          setError("Could not access camera: " + e.message);
        }
      }
    })();

    return () => {
      cancelled = true;
      streamRef.current?.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    };
  }, []);

  /* ── Draw product overlay on canvas ── */
  useEffect(() => {
    if (!cameraReady) return;
    const canvas = overlayRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;

    let animId: number;

    const draw = () => {
      const w = video.videoWidth || window.innerWidth;
      const h = video.videoHeight || window.innerHeight;

      if (canvas.width !== w) canvas.width = w;
      if (canvas.height !== h) canvas.height = h;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);

      if (productType === "paver") {
        drawPaverOverlay(ctx, w, h, paverPattern, paverColor);
      } else {
        drawPoleOverlay(ctx, w, h, poleColor, poleHeight, lightOn);
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, [cameraReady, productType, paverPattern, paverColor, poleColor, poleHeight, lightOn]);

  /* ── Capture screenshot ── */
  const capture = useCallback(() => {
    const video = videoRef.current;
    const overlay = overlayRef.current;
    if (!video || !overlay) return;

    const c = document.createElement("canvas");
    c.width = video.videoWidth;
    c.height = video.videoHeight;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(video, 0, 0);
    ctx.drawImage(overlay, 0, 0);

    const link = document.createElement("a");
    link.download = `premier-ar-${productType}.png`;
    link.href = c.toDataURL("image/png");
    link.click();
  }, [productType]);

  /* ── Error screen ── */
  if (error) {
    return (
      <div className="fixed inset-0 z-[100] bg-[#0D1B2A] flex items-center justify-center p-6">
        <div className="text-center max-w-sm">
          <div className="text-5xl mb-4">⚠</div>
          <h3 className="text-white text-xl font-bold mb-3">
            Camera Access Required
          </h3>
          <p className="text-white/60 mb-6 text-sm leading-relaxed">{error}</p>
          <button
            onClick={onClose}
            className="bg-[#C9A84C] text-[#1A1A2E] font-bold px-6 py-3 rounded-xl"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  /* ── Camera view ── */
  return (
    <div className="fixed inset-0 z-[100] bg-black">
      {/* Loading state */}
      {!cameraReady && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0D1B2A] z-20">
          <div className="text-center">
            <div className="text-5xl mb-4 animate-pulse">📷</div>
            <p className="text-white/60 text-sm">Accessing camera…</p>
          </div>
        </div>
      )}

      {/* Camera feed */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        onLoadedData={() => setCameraReady(true)}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Product overlay */}
      <canvas
        ref={overlayRef}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Top controls */}
      <div className="absolute top-0 left-0 right-0 z-10 p-4 flex items-center justify-between"
           style={{ paddingTop: "max(1rem, env(safe-area-inset-top))" }}>
        <button
          onClick={() => {
            streamRef.current?.getTracks().forEach((t) => t.stop());
            onClose();
          }}
          className="text-white bg-black/50 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center text-lg"
        >
          ✕
        </button>
        <div className="bg-[#C9A84C] text-[#1A1A2E] font-bold text-xs px-3 py-1.5 rounded-full">
          {productType === "paver" ? "PAVCON" : "POLMAX"} AR
        </div>
      </div>

      {/* Bottom controls */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center gap-3 p-6"
        style={{ paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
      >
        {/* Capture button */}
        <button
          onClick={capture}
          className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg border-4 border-white/80 active:scale-95 transition-transform"
          aria-label="Capture photo"
        >
          <div className="w-12 h-12 rounded-full border-2 border-gray-300" />
        </button>
        <p className="text-white/50 text-xs text-center">
          {productType === "paver"
            ? "Point at a flat surface to preview pavers"
            : "Point at a location to preview the pole"}
        </p>
      </div>
    </div>
  );
}

/* ── Drawing helpers ── */

function drawPaverOverlay(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  pattern: string,
  color: string,
) {
  const startY = h * 0.55;
  const rows = 10;
  const tileW = w / 7;
  const tileH = tileW / 2;

  ctx.save();
  ctx.globalAlpha = 0.55;
  ctx.fillStyle = color;

  for (let row = 0; row < rows; row++) {
    const offset =
      pattern === "herringbone"
        ? (row % 2) * (tileW / 2)
        : pattern === "running" && row % 2 === 1
          ? tileW / 2
          : 0;

    for (let col = -1; col < Math.ceil(w / tileW) + 1; col++) {
      const x = col * tileW + offset;
      const y = startY + row * tileH;
      ctx.fillRect(x, y, tileW - 3, tileH - 3);
    }
  }

  ctx.globalAlpha = 1;
  ctx.strokeStyle = "#C9A84C";
  ctx.lineWidth = 2;
  ctx.setLineDash([10, 5]);
  ctx.strokeRect(0, startY, w, h - startY);
  ctx.setLineDash([]);
  ctx.restore();
}

function drawPoleOverlay(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  color: string,
  height: number,
  light: boolean,
) {
  const cx = w / 2;
  const bottom = h * 0.82;
  const poleH = h * 0.5 * Math.min(height / 45, 1);
  const poleW = Math.max(w * 0.015, 8);

  ctx.save();
  ctx.globalAlpha = 0.7;

  // Pole shaft
  ctx.fillStyle = color;
  ctx.fillRect(cx - poleW / 2, bottom - poleH, poleW, poleH);

  // Base plate
  ctx.fillStyle = "#666";
  const baseW = poleW * 4;
  ctx.fillRect(cx - baseW / 2, bottom, baseW, baseW / 5);

  // Lamp head
  ctx.fillStyle = "#C9A84C";
  const lampW = poleW * 5;
  ctx.fillRect(cx - lampW / 2, bottom - poleH - poleW, lampW, poleW * 1.2);

  // Light glow
  if (light) {
    ctx.globalAlpha = 0.25;
    const grad = ctx.createRadialGradient(
      cx, bottom - poleH, poleW,
      cx, bottom - poleH + poleH * 0.6, poleH * 0.6,
    );
    grad.addColorStop(0, "#FFE08A");
    grad.addColorStop(1, "rgba(255,224,138,0)");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(cx, bottom - poleH);
    ctx.lineTo(cx - poleH * 0.5, bottom);
    ctx.lineTo(cx + poleH * 0.5, bottom);
    ctx.closePath();
    ctx.fill();
  }

  ctx.globalAlpha = 1;

  // Placement ring
  ctx.strokeStyle = "#C9A84C";
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 3]);
  ctx.beginPath();
  ctx.ellipse(cx, bottom + baseW / 4, baseW, baseW / 3, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.restore();
}
