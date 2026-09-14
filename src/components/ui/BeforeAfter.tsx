"use client";

import { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Drag-to-compare slider. For a polishing company this is the single most
 * persuasive element on the page, so it is keyboard-operable too.
 *
 * Geometry stays LTR in both locales — a left/right wipe reads the same way
 * regardless of script direction. Only the labels swap sides.
 */
export function BeforeAfter({
  before,
  after,
  beforeLabel,
  afterLabel,
  className,
  initial = 50,
}: {
  before: React.ReactNode;
  after: React.ReactNode;
  beforeLabel: string;
  afterLabel: string;
  className?: string;
  initial?: number;
}) {
  const [pos, setPos] = useState(initial);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const next = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    setDragging(true);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    setFromClientX(e.clientX);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 3;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPos((p) => Math.max(0, p - step));
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setPos((p) => Math.min(100, p + step));
    }
    if (e.key === "Home") setPos(0);
    if (e.key === "End") setPos(100);
  };

  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={() => setDragging(false)}
      onPointerCancel={() => setDragging(false)}
      className={cn(
        "relative touch-none overflow-hidden rounded-card select-none",
        dragging ? "cursor-grabbing" : "cursor-grab",
        className,
      )}
    >
      {/* "After" is the full-bleed base layer. */}
      <div className="absolute inset-0">{after}</div>

      {/* "Before" is clipped to the handle position. */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        {before}
      </div>

      {/* Labels sit on their respective sides and fade out as they're covered. */}
      <span
        className="pointer-events-none absolute top-4 left-4 rounded-full bg-black/55 px-3 py-1.5 text-[0.7rem] font-semibold tracking-wide text-white uppercase backdrop-blur transition-opacity duration-200"
        style={{ opacity: pos < 18 ? 0 : 1 }}
      >
        {beforeLabel}
      </span>
      <span
        className="pointer-events-none absolute top-4 right-4 rounded-full bg-black/55 px-3 py-1.5 text-[0.7rem] font-semibold tracking-wide text-gold-3 uppercase backdrop-blur transition-opacity duration-200"
        style={{ opacity: pos > 82 ? 0 : 1 }}
      >
        {afterLabel}
      </span>

      {/* Handle */}
      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-gold/80 shadow-[0_0_18px_rgba(184,134,43,0.7)]"
        style={{ left: `${pos}%` }}
      />
      <button
        type="button"
        role="slider"
        aria-label={`${beforeLabel} / ${afterLabel}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        onKeyDown={onKeyDown}
        className="absolute top-1/2 z-10 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/60 bg-black/60 backdrop-blur transition-transform duration-200 hover:scale-110 focus-visible:scale-110"
        style={{ left: `${pos}%` }}
      >
        <svg viewBox="0 0 24 24" className="size-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 6l-5 6 5 6M15 6l5 6-5 6" />
        </svg>
      </button>
    </div>
  );
}

