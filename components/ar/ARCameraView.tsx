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
  const rows = 14;
  const tileW = w / 7;
  const tileH = tileW / 2;
  const gap = 2;

  ctx.save();

  // Dark ground shadow underneath the pavers
  ctx.globalAlpha = 0.6;
  ctx.fillStyle = "#1a1a1a";
  ctx.fillRect(0, startY, w, h - startY);

  // Draw paver tiles with high opacity
  ctx.globalAlpha = 0.9;

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

      // Main tile color (dark)
      ctx.fillStyle = color;
      ctx.fillRect(x, y, tileW - gap, tileH - gap);

      // Darker edge for depth
      ctx.fillStyle = "rgba(0,0,0,0.3)";
      ctx.fillRect(x, y + tileH - gap - 2, tileW - gap, 2);
      ctx.fillRect(x + tileW - gap - 2, y, 2, tileH - gap);
    }
  }

  // Border outline
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
  const bottom = h * 0.85;
  const poleH = h * 0.55 * Math.min(height / 45, 1);
  const poleW = Math.max(w * 0.02, 10);

  ctx.save();
  ctx.globalAlpha = 0.92;

  // Ground shadow
  ctx.fillStyle = "rgba(0,0,0,0.35)";
  ctx.beginPath();
  ctx.ellipse(cx, bottom + 4, poleW * 6, poleW * 1.5, 0, 0, Math.PI * 2);
  ctx.fill();

  // Pole shaft with gradient for 3D effect
  const shaftGrad = ctx.createLinearGradient(cx - poleW / 2, 0, cx + poleW / 2, 0);
  shaftGrad.addColorStop(0, color);
  shaftGrad.addColorStop(0.3, lightenColor(color, 30));
  shaftGrad.addColorStop(0.7, color);
  shaftGrad.addColorStop(1, darkenColor(color, 40));
  ctx.fillStyle = shaftGrad;
  ctx.fillRect(cx - poleW / 2, bottom - poleH, poleW, poleH);

  // Base plate with 3D look
  const baseW = poleW * 5;
  const baseH = poleW * 1.5;
  ctx.fillStyle = darkenColor(color, 30);
  ctx.beginPath();
  ctx.moveTo(cx - baseW / 2, bottom);
  ctx.lineTo(cx - baseW / 2 + 4, bottom + baseH);
  ctx.lineTo(cx + baseW / 2 - 4, bottom + baseH);
  ctx.lineTo(cx + baseW / 2, bottom);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = lightenColor(color, 10);
  ctx.fillRect(cx - baseW / 2, bottom - 2, baseW, 4);

  // Lamp arm extending to the side
  const armLen = poleW * 6;
  const armY = bottom - poleH;
  ctx.fillStyle = darkenColor(color, 20);
  // Curved arm
  ctx.beginPath();
  ctx.moveTo(cx, armY);
  ctx.quadraticCurveTo(cx + armLen * 0.3, armY - poleW * 2, cx + armLen, armY - poleW);
  ctx.lineTo(cx + armLen, armY - poleW + 4);
  ctx.quadraticCurveTo(cx + armLen * 0.3, armY - poleW * 2 + 4, cx, armY + 4);
  ctx.closePath();
  ctx.fill();

  // Lamp housing (at end of arm)
  const lampX = cx + armLen;
  const lampY = armY - poleW;
  const lampW = poleW * 4;
  const lampH = poleW * 2;

  // Lamp body
  ctx.fillStyle = "#333";
  ctx.beginPath();
  ctx.roundRect(lampX - lampW / 2, lampY - lampH / 2, lampW, lampH, 4);
  ctx.fill();

  // Lamp lens (bottom)
  ctx.fillStyle = light ? "#FFE08A" : "#666";
  ctx.fillRect(lampX - lampW / 2 + 3, lampY + lampH / 2 - 4, lampW - 6, 4);

  // Top cap
  ctx.fillStyle = "#C9A84C";
  ctx.fillRect(lampX - lampW / 2 - 2, lampY - lampH / 2 - 3, lampW + 4, 5);

  // Light cone
  if (light) {
    ctx.globalAlpha = 0.35;
    const grad = ctx.createRadialGradient(
      lampX, lampY + lampH / 2, 2,
      lampX, lampY + lampH / 2 + poleH * 0.7, poleH * 0.5,
    );
    grad.addColorStop(0, "#FFE08A");
    grad.addColorStop(0.5, "rgba(255,224,138,0.15)");
    grad.addColorStop(1, "rgba(255,224,138,0)");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(lampX - lampW / 2, lampY + lampH / 2);
    ctx.lineTo(lampX - poleH * 0.4, bottom);
    ctx.lineTo(lampX + poleH * 0.4, bottom);
    ctx.lineTo(lampX + lampW / 2, lampY + lampH / 2);
    ctx.closePath();
    ctx.fill();

    // Glow around lamp
    ctx.globalAlpha = 0.2;
    const glowGrad = ctx.createRadialGradient(
      lampX, lampY, lampW / 2,
      lampX, lampY, lampW * 2,
    );
    glowGrad.addColorStop(0, "#FFE08A");
    glowGrad.addColorStop(1, "rgba(255,224,138,0)");
    ctx.fillStyle = glowGrad;
    ctx.fillRect(lampX - lampW * 2, lampY - lampW * 2, lampW * 4, lampW * 4);
  }

  ctx.globalAlpha = 1;

  // Placement ring
  ctx.strokeStyle = "#C9A84C";
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 3]);
  ctx.beginPath();
  ctx.ellipse(cx, bottom + baseH / 2 + 4, baseW * 1.2, baseW / 3, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.restore();
}

/* ── Color helpers ── */

function lightenColor(hex: string, amount: number): string {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.min(255, (num >> 16) + amount);
  const g = Math.min(255, ((num >> 8) & 0xff) + amount);
  const b = Math.min(255, (num & 0xff) + amount);
  return `rgb(${r},${g},${b})`;
}

function darkenColor(hex: string, amount: number): string {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.max(0, (num >> 16) - amount);
  const g = Math.max(0, ((num >> 8) & 0xff) - amount);
  const b = Math.max(0, (num & 0xff) - amount);
  return `rgb(${r},${g},${b})`;
}
