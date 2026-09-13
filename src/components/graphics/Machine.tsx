import { cn } from "@/lib/utils";
import type { Equipment } from "@/content/equipment";

type Glyph = Equipment["glyph"];

/**
 * Hand-drawn technical line-art of each machine in the fleet.
 *
 * Drawn rather than photographed on purpose: it keeps the equipment pages
 * visually consistent, works at any size, and costs nothing to load.
 * Strokes inherit `currentColor`; accents use the gold/aqua tokens.
 */
export function Machine({
  glyph,
  className,
  accent = "gold",
}: {
  glyph: Glyph;
  className?: string;
  accent?: "gold" | "aqua";
}) {
  const hot = accent === "gold" ? "var(--color-gold)" : "var(--color-aqua)";

  return (
    <svg
      viewBox="0 0 240 180"
      fill="none"
      aria-hidden="true"
      className={cn("h-full w-full", className)}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Ground / datum line — present on every drawing for a technical feel. */}
      <line
        x1="18"
        y1="156"
        x2="222"
        y2="156"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.28"
        strokeDasharray="4 5"
      />
      <g stroke="currentColor" strokeWidth="1.6">
        {glyph === "grinder" && <Grinder hot={hot} />}
        {glyph === "polisher" && <Polisher hot={hot} />}
        {glyph === "vacuum" && <Vacuum hot={hot} />}
        {glyph === "meter" && <Meter hot={hot} />}
        {glyph === "camera" && <Camera hot={hot} />}
        {glyph === "jetter" && <Jetter hot={hot} />}
        {glyph === "gauge" && <Gauge hot={hot} />}
        {glyph === "locator" && <Locator hot={hot} />}
        {glyph === "thermal" && <Thermal hot={hot} />}
        {glyph === "sprayer" && <Sprayer hot={hot} />}
        {glyph === "saw" && <Saw hot={hot} />}
        {glyph === "welder" && <Welder hot={hot} />}
        {glyph === "level" && <Level hot={hot} />}
        {glyph === "extractor" && <Extractor hot={hot} />}
      </g>
    </svg>
  );
}

type P = { hot: string };

/* Planetary floor grinder — shroud plate with three counter-rotating heads. */
function Grinder({ hot }: P) {
  return (
    <>
      <path d="M62 152h96a10 10 0 0 0 10-10v-12H52v12a10 10 0 0 0 10 10Z" />
      <rect x="74" y="92" width="62" height="38" rx="6" />
      <path d="M136 104h18l30-46" />
      <path d="M178 50h26" strokeWidth="3" stroke={hot} />
      <circle cx="82" cy="140" r="9" stroke={hot} strokeWidth="1.4" />
      <circle cx="110" cy="140" r="9" stroke={hot} strokeWidth="1.4" />
      <circle cx="138" cy="140" r="9" stroke={hot} strokeWidth="1.4" />
      <circle cx="82" cy="140" r="3" fill={hot} stroke="none" />
      <circle cx="110" cy="140" r="3" fill={hot} stroke="none" />
      <circle cx="138" cy="140" r="3" fill={hot} stroke="none" />
      {/* Dust port to the extractor. */}
      <path d="M52 118H34a8 8 0 0 0-8 8v14" strokeDasharray="3 4" opacity="0.8" />
      <rect x="88" y="100" width="34" height="10" rx="3" opacity="0.55" />
    </>
  );
}

/* High-speed rotary polisher — single weighted disc, long handle. */
function Polisher({ hot }: P) {
  return (
    <>
      <ellipse cx="104" cy="140" rx="46" ry="13" />
      <path d="M58 140v-9a46 13 0 0 1 92 0v9" />
      <rect x="86" y="98" width="36" height="26" rx="6" />
      <path d="M122 108l40-52" />
      <path d="M154 62l24-8" strokeWidth="3" stroke={hot} />
      <circle cx="104" cy="131" r="18" stroke={hot} strokeWidth="1.4" opacity="0.9" />
      <circle cx="104" cy="131" r="6" stroke={hot} strokeWidth="1.2" opacity="0.6" />
      {/* Rotation indicator. */}
      <path d="M150 122a48 48 0 0 1-14 12" stroke={hot} strokeWidth="1.2" opacity="0.7" />
      <path d="M136 134l7 1-2-7" stroke={hot} strokeWidth="1.2" opacity="0.7" />
    </>
  );
}

/* HEPA dust extractor — drum, motor head, hose. */
function Vacuum({ hot }: P) {
  return (
    <>
      <rect x="76" y="72" width="70" height="72" rx="8" />
      <path d="M76 92h70" />
      <rect x="88" y="54" width="46" height="20" rx="6" />
      <circle cx="88" cy="150" r="7" />
      <circle cx="134" cy="150" r="7" />
      <path d="M146 104c26 0 34-14 34-28s-10-22-22-22" strokeDasharray="5 5" stroke={hot} />
      <path d="M158 54h-16v10h16" stroke={hot} />
      {/* Filter indication. */}
      <path d="M88 106h46M88 116h46M88 126h46" opacity="0.42" strokeWidth="1.2" />
      <rect x="98" y="60" width="26" height="8" rx="3" fill={hot} stroke="none" opacity="0.75" />
    </>
  );
}

/* Handheld digital meter with probe. */
function Meter({ hot }: P) {
  return (
    <>
      <rect x="82" y="46" width="72" height="104" rx="10" />
      <rect x="94" y="58" width="48" height="30" rx="4" stroke={hot} />
      <path d="M100 74h10l4-8 5 14 4-6h13" stroke={hot} strokeWidth="1.4" />
      <circle cx="103" cy="106" r="6" />
      <circle cx="133" cy="106" r="6" />
      <rect x="96" y="124" width="44" height="8" rx="4" opacity="0.5" />
      <path d="M154 78h28l14-26" strokeDasharray="4 4" opacity="0.85" />
      <path d="M196 52l6-10" strokeWidth="3" stroke={hot} />
    </>
  );
}

/* CCTV drain camera — reel, monitor, camera head on a push rod. */
function Camera({ hot }: P) {
  return (
    <>
      <circle cx="88" cy="106" r="38" />
      <circle cx="88" cy="106" r="22" opacity="0.55" />
      <circle cx="88" cy="106" r="8" />
      <rect x="140" y="60" width="62" height="46" rx="6" />
      <rect x="148" y="68" width="46" height="30" rx="3" stroke={hot} opacity="0.9" />
      <path d="M126 106h14" />
      <path d="M88 144c0 8 22 12 50 12h40" strokeDasharray="5 5" stroke={hot} />
      <rect x="178" y="150" width="20" height="12" rx="5" stroke={hot} />
      <circle cx="188" cy="156" r="3" fill={hot} stroke="none" />
      {/* Sonde pulse. */}
      <path d="M204 150c5-4 5-8 0-12" stroke={hot} strokeWidth="1.2" opacity="0.7" />
    </>
  );
}

/* Hydro jetter — pump frame, engine, hose reel, reverse nozzle. */
function Jetter({ hot }: P) {
  return (
    <>
      <path d="M54 148V96h84v52" />
      <rect x="66" y="70" width="48" height="30" rx="5" />
      <circle cx="150" cy="112" r="26" />
      <circle cx="150" cy="112" r="12" opacity="0.5" />
      <circle cx="70" cy="150" r="7" />
      <circle cx="124" cy="150" r="7" />
      <path d="M176 112h22" stroke={hot} />
      <path d="M198 106h14a6 6 0 0 1 0 12h-14z" stroke={hot} />
      {/* Reverse-facing jets. */}
      <path d="M196 104l-12-8M196 120l-12 8M198 112h-16" stroke={hot} strokeWidth="1.3" opacity="0.85" />
      <path d="M78 82h24" opacity="0.5" />
    </>
  );
}

/* Refrigerant manifold — twin dials and three hoses. */
function Gauge({ hot }: P) {
  return (
    <>
      <rect x="84" y="88" width="72" height="26" rx="6" />
      <circle cx="80" cy="72" r="30" />
      <circle cx="160" cy="72" r="30" />
      <circle cx="80" cy="72" r="21" opacity="0.42" />
      <circle cx="160" cy="72" r="21" opacity="0.42" />
      <path d="M80 72l12-14" stroke={hot} strokeWidth="2" />
      <path d="M160 72l-14-10" stroke={hot} strokeWidth="2" />
      <circle cx="80" cy="72" r="3" fill={hot} stroke="none" />
      <circle cx="160" cy="72" r="3" fill={hot} stroke="none" />
      <path d="M92 114c0 20-14 26-28 34M120 114v36M148 114c0 20 14 26 28 34" strokeDasharray="5 4" opacity="0.85" />
      <path d="M60 150h10M115 150h10M170 150h10" stroke={hot} strokeWidth="3" />
    </>
  );
}

/* Pipe / cable locator wand sweeping a buried service. */
function Locator({ hot }: P) {
  return (
    <>
      <path d="M120 40v78" />
      <rect x="100" y="34" width="40" height="26" rx="6" />
      <rect x="108" y="42" width="24" height="10" rx="2" stroke={hot} />
      <path d="M96 122h48" strokeWidth="2" />
      <path d="M120 118v10" />
      {/* Buried service + detection arcs. */}
      <path d="M40 152h160" strokeDasharray="6 6" opacity="0.5" />
      <circle cx="120" cy="152" r="6" stroke={hot} />
      <path d="M100 146a28 28 0 0 1 40 0" stroke={hot} strokeWidth="1.2" opacity="0.75" />
      <path d="M88 138a48 48 0 0 1 64 0" stroke={hot} strokeWidth="1.2" opacity="0.5" />
      <path d="M76 130a68 68 0 0 1 88 0" stroke={hot} strokeWidth="1.2" opacity="0.3" />
    </>
  );
}

/* Thermal imager — pistol grip, lens, screen, heat signature. */
function Thermal({ hot }: P) {
  return (
    <>
      <path d="M70 58h76a8 8 0 0 1 8 8v42a8 8 0 0 1-8 8h-34l-6 30H84l6-30H70a8 8 0 0 1-8-8V66a8 8 0 0 1 8-8Z" />
      <rect x="76" y="70" width="42" height="34" rx="4" stroke={hot} />
      <circle cx="140" cy="86" r="14" />
      <circle cx="140" cy="86" r="7" stroke={hot} opacity="0.8" />
      {/* Heat gradient bars on the screen. */}
      <path d="M82 96h30M82 88h24M82 80h16" stroke={hot} strokeWidth="1.4" opacity="0.8" />
      <path d="M170 74c8 6 8 18 0 24M186 66c14 10 14 30 0 40" stroke={hot} strokeWidth="1.2" opacity="0.6" />
    </>
  );
}

/* Airless sprayer / ULV fogger — tank, pump, gun with spray cone. */
function Sprayer({ hot }: P) {
  return (
    <>
      <rect x="52" y="84" width="52" height="60" rx="8" />
      <path d="M52 100h52" opacity="0.5" />
      <rect x="64" y="66" width="28" height="18" rx="5" />
      <circle cx="64" cy="150" r="6" />
      <circle cx="94" cy="150" r="6" />
      <path d="M104 106c22 0 26-18 40-18" strokeDasharray="5 4" />
      <path d="M144 78h22v20h-22z" />
      <path d="M150 98v14h-8" />
      <path d="M166 88h10" stroke={hot} strokeWidth="2" />
      {/* Spray cone. */}
      <path d="M178 88l30-18M178 88l30 18M178 88h34" stroke={hot} strokeWidth="1.3" opacity="0.8" />
      <path d="M204 76l4-2M206 88h4M204 100l4 2" stroke={hot} strokeWidth="1.2" opacity="0.5" />
    </>
  );
}

/* Plunge track saw riding a guide rail. */
function Saw({ hot }: P) {
  return (
    <>
      <path d="M44 140h152" strokeWidth="2" />
      <path d="M44 140v-8h152v8" opacity="0.55" />
      <rect x="88" y="76" width="66" height="40" rx="7" />
      <path d="M154 92h24" />
      <path d="M178 84h16v16h-16z" stroke={hot} />
      <circle cx="112" cy="116" r="26" opacity="0.85" />
      <circle cx="112" cy="116" r="5" />
      {/* Blade teeth. */}
      <path
        d="M112 90v6M134 112h6M112 136v-6M90 112h-6M128 96l-4 4M128 132l-4-4M96 132l4-4M96 96l4 4"
        stroke={hot}
        strokeWidth="1.4"
      />
      <path d="M88 100H66" opacity="0.5" />
    </>
  );
}

/* Inverter welder — case, dials, torch, arc. */
function Welder({ hot }: P) {
  return (
    <>
      <rect x="46" y="74" width="84" height="62" rx="8" />
      <path d="M62 66h52" />
      <circle cx="70" cy="96" r="9" />
      <circle cx="98" cy="96" r="9" />
      <path d="M70 96l5-6M98 96l6 4" stroke={hot} strokeWidth="1.6" />
      <rect x="60" y="116" width="56" height="8" rx="4" opacity="0.5" />
      <path d="M130 106c26 0 30 14 42 22" strokeDasharray="5 4" />
      <path d="M172 128l18 12" strokeWidth="3" />
      <path d="M190 140l-8 12" stroke={hot} strokeWidth="2" />
      {/* Arc flash. */}
      <path d="M178 154l-6 8M186 156l2 10M194 152l8 6" stroke={hot} strokeWidth="1.4" opacity="0.85" />
      <circle cx="184" cy="152" r="3" fill={hot} stroke="none" />
    </>
  );
}

/* Rotary laser level on a tripod, projecting a datum. */
function Level({ hot }: P) {
  return (
    <>
      <path d="M120 104v34M120 138l-26 18M120 138l26 18" />
      <rect x="98" y="66" width="44" height="38" rx="7" />
      <rect x="108" y="56" width="24" height="10" rx="4" />
      <circle cx="120" cy="86" r="9" stroke={hot} />
      <circle cx="120" cy="86" r="3" fill={hot} stroke="none" />
      {/* Projected datum line. */}
      <path d="M30 86h62M148 86h62" stroke={hot} strokeWidth="1.4" strokeDasharray="10 5" opacity="0.85" />
      <path d="M30 86l8-4M30 86l8 4M210 86l-8-4M210 86l-8 4" stroke={hot} strokeWidth="1.2" opacity="0.6" />
      <path d="M94 156h52" opacity="0.45" />
    </>
  );
}

/* Hot-water extraction unit — tank, hose, wand with vacuum head. */
function Extractor({ hot }: P) {
  return (
    <>
      <rect x="48" y="78" width="58" height="66" rx="9" />
      <path d="M48 98h58" opacity="0.5" />
      <rect x="62" y="62" width="30" height="16" rx="5" />
      <circle cx="60" cy="150" r="6" />
      <circle cx="94" cy="150" r="6" />
      <path d="M106 100c34 0 30-32 54-32" strokeDasharray="5 4" stroke={hot} />
      <path d="M160 68v62" strokeWidth="2" />
      <path d="M144 130h34a4 4 0 0 1 4 4v8h-42v-8a4 4 0 0 1 4-4Z" />
      <path d="M140 142h46" strokeWidth="2" stroke={hot} />
      {/* Steam. */}
      <path d="M168 56c6-6 0-12 6-18M182 60c6-6 0-12 6-18" stroke={hot} strokeWidth="1.2" opacity="0.6" />
      <path d="M62 112h30M62 122h30" opacity="0.4" strokeWidth="1.2" />
    </>
  );
}
