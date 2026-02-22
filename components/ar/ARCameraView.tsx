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

/* ── Multi-colour palettes keyed by colour option ── */
const PALETTES: Record<string, string[]> = {
  natural: [
    "#C4A882", "#B8956A", "#D2B48C", "#C8AA78",
    "#8B7355", "#A08B6A", "#BCA580", "#9E8E70",
    "#808080", "#8C8C8C", "#787878", "#707070",
    "#C07850", "#B86B40", "#CC8060", "#BC7848",
    "#6B7B8B", "#5A6A7A", "#657585", "#7B8B9B",
  ],
  charcoal: [
    "#505050", "#585858", "#4A4A4A", "#606060",
    "#3A3A3A", "#444444", "#555555", "#484848",
    "#6B6B6B", "#737373", "#636363", "#5B5B5B",
    "#808080", "#8C8C8C", "#787878", "#707070",
    "#4A5568", "#555E6E", "#3D4A5C", "#5A6575",
  ],
  terracotta: [
    "#C07850", "#B86B40", "#CC8060", "#D09068",
    "#A05530", "#B06038", "#D88860", "#C47048",
    "#8B4A2A", "#9E5A38", "#A46040", "#7B4020",
    "#C4A882", "#B8956A", "#BCA580", "#D2B48C",
    "#808080", "#787878", "#6B6B6B", "#8C8C8C",
  ],
  slate: [
    "#6B7B8B", "#5A6A7A", "#7B8B9B", "#657585",
    "#4A5568", "#556070", "#667080", "#5B6878",
    "#808090", "#7080A0", "#8090A0", "#6878A0",
    "#505060", "#585868", "#4A4A58", "#606068",
    "#8C8C8C", "#787878", "#707070", "#808080",
  ],
};

export function ARCameraView({
  onClose,
  productType,
  paverPattern = "herringbone",
  paverColor = "natural",
  poleColor = "#888888",
  poleHeight = 10,
  lightOn = false,
}: ARCameraViewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [cameraReady, setCameraReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(true);

  /* ── Placement refs (no re-renders on drag) ── */
  const posRef = useRef({ x: 0.5, y: 0.62 });
  const scaleRef = useRef(1.0);
  const lastPinchDistRef = useRef<number | null>(null);
  const patternRef = useRef(paverPattern);
  const colorRef = useRef(paverColor);

  // Keep refs in sync with props
  useEffect(() => { patternRef.current = paverPattern; }, [paverPattern]);
  useEffect(() => { colorRef.current = paverColor; }, [paverColor]);

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
        if (cancelled) { stream.getTracks().forEach((t) => t.stop()); return; }
        streamRef.current = stream;
        if (videoRef.current) videoRef.current.srcObject = stream;
      } catch (err: unknown) {
        if (cancelled) return;
        const e = err instanceof Error ? err : new Error("Unknown error");
        if (e.name === "NotAllowedError")
          setError("Camera access was denied. Please allow camera permission in your browser settings and try again.");
        else if (e.name === "NotFoundError")
          setError("No camera found on this device.");
        else
          setError("Could not access camera: " + e.message);
      }
    })();
    return () => {
      cancelled = true;
      streamRef.current?.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    };
  }, []);

  /* ── Touch & mouse event handlers ── */
  useEffect(() => {
    const canvas = overlayRef.current;
    if (!canvas) return;

    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      if (e.touches.length === 1) {
        const rect = canvas.getBoundingClientRect();
        posRef.current = {
          x: clamp(e.touches[0].clientX / rect.width, 0.1, 0.9),
          y: clamp(e.touches[0].clientY / rect.height, 0.1, 0.9),
        };
        setShowHint(false);
      } else if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        lastPinchDistRef.current = Math.sqrt(dx * dx + dy * dy);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      if (e.touches.length === 1) {
        const rect = canvas.getBoundingClientRect();
        posRef.current = {
          x: clamp(e.touches[0].clientX / rect.width, 0.1, 0.9),
          y: clamp(e.touches[0].clientY / rect.height, 0.1, 0.9),
        };
      } else if (e.touches.length === 2 && lastPinchDistRef.current !== null) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        scaleRef.current = clamp(scaleRef.current * (dist / lastPinchDistRef.current), 0.3, 3);
        lastPinchDistRef.current = dist;
      }
    };

    const handleTouchEnd = () => {
      lastPinchDistRef.current = null;
    };

    // Mouse events for desktop
    let mouseDown = false;
    const handleMouseDown = (e: MouseEvent) => {
      mouseDown = true;
      const rect = canvas.getBoundingClientRect();
      posRef.current = {
        x: clamp(e.clientX / rect.width, 0.1, 0.9),
        y: clamp(e.clientY / rect.height, 0.1, 0.9),
      };
      setShowHint(false);
    };
    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseDown) return;
      const rect = canvas.getBoundingClientRect();
      posRef.current = {
        x: clamp(e.clientX / rect.width, 0.1, 0.9),
        y: clamp(e.clientY / rect.height, 0.1, 0.9),
      };
    };
    const handleMouseUp = () => { mouseDown = false; };
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      scaleRef.current = clamp(scaleRef.current + (e.deltaY > 0 ? -0.06 : 0.06), 0.3, 3);
    };

    canvas.addEventListener("touchstart", handleTouchStart, { passive: false });
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
    canvas.addEventListener("touchend", handleTouchEnd);
    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mouseleave", handleMouseUp);
    canvas.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleTouchEnd);
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mouseleave", handleMouseUp);
      canvas.removeEventListener("wheel", handleWheel);
    };
  }, []);

  /* ── Draw overlay on animation frame ── */
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
      if (!ctx) { animId = requestAnimationFrame(draw); return; }
      ctx.clearRect(0, 0, w, h);

      if (productType === "paver") {
        const palette = PALETTES[colorRef.current] || PALETTES.natural;
        drawPaverOverlay(ctx, w, h, patternRef.current, palette, posRef.current, scaleRef.current);
      } else {
        drawPoleOverlay(ctx, w, h, poleColor, poleHeight, lightOn);
      }

      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animId);
  }, [cameraReady, productType, poleColor, poleHeight, lightOn]);

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
          <div className="text-5xl mb-4">⚠️</div>
          <h3 className="text-white text-xl font-bold mb-3">Camera Access Required</h3>
          <p className="text-white/60 mb-6 text-sm leading-relaxed">{error}</p>
          <button onClick={onClose} className="bg-[#C9A84C] text-[#1A1A2E] font-bold px-6 py-3 rounded-xl">
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

      {/* Product overlay canvas */}
      <canvas
        ref={overlayRef}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ touchAction: "none" }}
      />

      {/* Top bar */}
      <div
        className="absolute top-0 left-0 right-0 z-10 p-4 flex items-center justify-between"
        style={{ paddingTop: "max(1rem, env(safe-area-inset-top))" }}
      >
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

      {/* Instructions hint */}
      {showHint && cameraReady && (
        <div className="absolute top-20 left-0 right-0 z-10 flex justify-center pointer-events-none">
          <div className="bg-black/70 backdrop-blur-sm text-white text-sm px-6 py-3 rounded-2xl max-w-xs text-center animate-pulse">
            <p className="font-semibold mb-1">Tap &amp; drag to place pavers</p>
            <p className="text-white/60 text-xs">Pinch to resize · Tap the button below to capture</p>
          </div>
        </div>
      )}

      {/* Bottom controls */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center gap-3 p-6"
        style={{ paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
      >
        <button
          onClick={capture}
          className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg border-4 border-white/80 active:scale-95 transition-transform"
          aria-label="Capture photo"
        >
          <div className="w-12 h-12 rounded-full border-2 border-gray-300" />
        </button>
        <p className="text-white/50 text-xs text-center">
          {productType === "paver"
            ? "Drag to place pavers anywhere"
            : "Point at a location to preview the pole"}
        </p>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════
   Drawing helpers
   ════════════════════════════════════════════════ */

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

/* ── Multi-colour paver overlay with perspective ── */
function drawPaverOverlay(
  ctx: CanvasRenderingContext2D,
  canvasW: number,
  canvasH: number,
  pattern: string,
  palette: string[],
  pos: { x: number; y: number },
  scale: number,
) {
  const cx = pos.x * canvasW;
  const cy = pos.y * canvasH;

  const baseSize = Math.min(canvasW, canvasH) * 0.55 * scale;
  const ow = baseSize;
  const oh = baseSize * 0.7;

  // Perspective trapezoid (narrower at top, wider at bottom = ground plane feel)
  const persp = oh * 0.12;
  const tl = { x: cx - ow / 2 + persp, y: cy - oh / 2 };
  const tr = { x: cx + ow / 2 - persp, y: cy - oh / 2 };
  const bl = { x: cx - ow / 2 - persp, y: cy + oh / 2 };
  const br = { x: cx + ow / 2 + persp, y: cy + oh / 2 };

  ctx.save();

  // Drop shadow beneath the overlay
  ctx.save();
  ctx.globalAlpha = 0.25;
  ctx.fillStyle = "#000";
  ctx.beginPath();
  ctx.moveTo(bl.x + 4, bl.y + 8);
  ctx.lineTo(br.x + 4, br.y + 8);
  ctx.lineTo(tr.x + 4, tr.y + 8);
  ctx.lineTo(tl.x + 4, tl.y + 8);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  // Clip to trapezoid
  ctx.beginPath();
  ctx.moveTo(tl.x, tl.y);
  ctx.lineTo(tr.x, tr.y);
  ctx.lineTo(br.x, br.y);
  ctx.lineTo(bl.x, bl.y);
  ctx.closePath();
  ctx.clip();

  // Grout / mortar background
  ctx.fillStyle = "#1C1C1C";
  ctx.fillRect(cx - ow - persp, cy - oh, (ow + persp) * 2, oh * 2);

  // Brick dimensions
  const brickW = ow / 8;
  const brickH = brickW * 0.48;
  const gap = Math.max(1.5, brickW * 0.055);

  const startX = cx - ow / 2 - brickW * 2;
  const startY = cy - oh / 2 - brickH;
  const rows = Math.ceil(oh / brickH) + 3;
  const cols = Math.ceil(ow / brickW) + 5;

  for (let row = 0; row < rows; row++) {
    let offset = 0;
    if (pattern === "herringbone") offset = (row % 2) * (brickW * 0.5);
    else if (pattern === "running") offset = (row % 2) * (brickW * 0.5);
    else if (pattern === "basket") offset = (row % 2) * brickW;
    // stack = no offset

    for (let col = 0; col < cols; col++) {
      const bx = startX + col * brickW + offset;
      const by = startY + row * brickH;

      // Deterministic colour from palette
      const idx = ((row * 7 + col * 13 + row * col * 3) % palette.length + palette.length) % palette.length;
      ctx.fillStyle = palette[idx];
      ctx.fillRect(bx + gap / 2, by + gap / 2, brickW - gap, brickH - gap);

      // Top-edge highlight
      ctx.fillStyle = "rgba(255,255,255,0.07)";
      ctx.fillRect(bx + gap / 2, by + gap / 2, brickW - gap, 1.5);

      // Bottom-edge shadow
      ctx.fillStyle = "rgba(0,0,0,0.14)";
      ctx.fillRect(bx + gap / 2, by + brickH - gap / 2 - 1.5, brickW - gap, 1.5);
    }
  }

  ctx.restore();

  // Border around the trapezoid
  ctx.strokeStyle = "rgba(201,168,76,0.5)";
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 4]);
  ctx.beginPath();
  ctx.moveTo(tl.x, tl.y);
  ctx.lineTo(tr.x, tr.y);
  ctx.lineTo(br.x, br.y);
  ctx.lineTo(bl.x, bl.y);
  ctx.closePath();
  ctx.stroke();
  ctx.setLineDash([]);
}

/* ── Pole overlay (unchanged from original) ── */
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

  // Pole shaft
  const shaftGrad = ctx.createLinearGradient(cx - poleW / 2, 0, cx + poleW / 2, 0);
  shaftGrad.addColorStop(0, color);
  shaftGrad.addColorStop(0.3, lightenColor(color, 30));
  shaftGrad.addColorStop(0.7, color);
  shaftGrad.addColorStop(1, darkenColor(color, 40));
  ctx.fillStyle = shaftGrad;
  ctx.fillRect(cx - poleW / 2, bottom - poleH, poleW, poleH);

  // Base plate
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

  // Lamp arm
  const armLen = poleW * 6;
  const armY = bottom - poleH;
  ctx.fillStyle = darkenColor(color, 20);
  ctx.beginPath();
  ctx.moveTo(cx, armY);
  ctx.quadraticCurveTo(cx + armLen * 0.3, armY - poleW * 2, cx + armLen, armY - poleW);
  ctx.lineTo(cx + armLen, armY - poleW + 4);
  ctx.quadraticCurveTo(cx + armLen * 0.3, armY - poleW * 2 + 4, cx, armY + 4);
  ctx.closePath();
  ctx.fill();

  // Lamp housing
  const lampX = cx + armLen;
  const lampY = armY - poleW;
  const lampW = poleW * 4;
  const lampH = poleW * 2;
  ctx.fillStyle = "#333";
  ctx.beginPath();
  ctx.roundRect(lampX - lampW / 2, lampY - lampH / 2, lampW, lampH, 4);
  ctx.fill();
  ctx.fillStyle = light ? "#FFE08A" : "#666";
  ctx.fillRect(lampX - lampW / 2 + 3, lampY + lampH / 2 - 4, lampW - 6, 4);
  ctx.fillStyle = "#C9A84C";
  ctx.fillRect(lampX - lampW / 2 - 2, lampY - lampH / 2 - 3, lampW + 4, 5);

  // Light cone
  if (light) {
    ctx.globalAlpha = 0.35;
    const grad = ctx.createRadialGradient(lampX, lampY + lampH / 2, 2, lampX, lampY + lampH / 2 + poleH * 0.7, poleH * 0.5);
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

    ctx.globalAlpha = 0.2;
    const glowGrad = ctx.createRadialGradient(lampX, lampY, lampW / 2, lampX, lampY, lampW * 2);
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

/* ── Colour helpers ── */
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
