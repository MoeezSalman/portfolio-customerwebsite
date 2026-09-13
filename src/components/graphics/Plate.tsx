import { cn } from "@/lib/utils";
import { seedOf, type PlateKind } from "@/lib/media";

/**
 * Generated artwork for an image slot that has no photograph yet.
 *
 * Pure SVG, no hooks — safe in Server Components. Filter ids are derived from
 * the slot id so two plates on the same page never collide.
 */
export function Plate({
  id,
  kind,
  className,
}: {
  id: string;
  kind: PlateKind;
  className?: string;
}) {
  const seed = seedOf(id);
  const u = `pl-${id.replace(/[^a-z0-9]/gi, "")}`;

  return (
    <svg
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className={cn("h-full w-full", className)}
    >
      <defs>
        <linearGradient id={`${u}-base`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0b0e15" />
          <stop offset="55%" stopColor="#11151f" />
          <stop offset="100%" stopColor="#080a10" />
        </linearGradient>

        <linearGradient id={`${u}-gold`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8a6524" />
          <stop offset="42%" stopColor="#e6c079" />
          <stop offset="70%" stopColor="#fff3d6" />
          <stop offset="100%" stopColor="#c99b45" />
        </linearGradient>

        <linearGradient id={`${u}-aqua`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#0e6d64" />
          <stop offset="50%" stopColor="#4fe7d4" />
          <stop offset="100%" stopColor="#1fb5a5" />
        </linearGradient>

        {/* Diagonal specular sweep shared by every kind. */}
        <linearGradient id={`${u}-sheen`} x1="0" y1="0" x2="1" y2="0.6">
          <stop offset="0%" stopColor="#fff" stopOpacity="0" />
          <stop offset="45%" stopColor="#fff" stopOpacity="0.13" />
          <stop offset="55%" stopColor="#fff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>

        <radialGradient id={`${u}-vig`} cx="0.5" cy="0.42" r="0.78">
          <stop offset="0%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.62" />
        </radialGradient>

        {kind === "marble" && (
          <filter id={`${u}-f`} x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.011 0.042"
              numOctaves="5"
              seed={seed}
              result="n"
            />
            {/* Squeeze the noise into a narrow band -> wispy veins. */}
            <feColorMatrix
              in="n"
              type="matrix"
              values="0 0 0 0 1
                      0 0 0 0 1
                      0 0 0 0 1
                      1.9 0 0 0 -0.72"
            />
            <feGaussianBlur stdDeviation="0.6" />
          </filter>
        )}

        {kind === "metal" && (
          <filter id={`${u}-f`} x="0" y="0" width="100%" height="100%">
            {/* Frequency stretched on X only = brushed grain. */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.002 1.1"
              numOctaves="2"
              seed={seed}
              result="n"
            />
            <feColorMatrix
              in="n"
              type="matrix"
              values="0 0 0 0 1
                      0 0 0 0 1
                      0 0 0 0 1
                      0.5 0 0 0 -0.14"
            />
          </filter>
        )}

        {kind === "water" && (
          <filter id={`${u}-f`} x="-15%" y="-15%" width="130%" height="130%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.016"
              numOctaves="3"
              seed={seed}
              result="n"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="n"
              scale="46"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feGaussianBlur stdDeviation="0.7" />
          </filter>
        )}

        {kind === "spark" && (
          <filter id={`${u}-f`} x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
      </defs>

      <rect width="800" height="600" fill={`url(#${u}-base)`} />

      {kind === "marble" && <MarbleBody u={u} seed={seed} />}
      {kind === "metal" && <MetalBody u={u} />}
      {kind === "water" && <WaterBody u={u} seed={seed} />}
      {kind === "spark" && <SparkBody u={u} seed={seed} />}
      {kind === "schematic" && <SchematicBody u={u} seed={seed} />}

      <rect width="800" height="600" fill={`url(#${u}-vig)`} />
    </svg>
  );
}

/* ----------------------------- bodies ----------------------------- */

function MarbleBody({ u, seed }: { u: string; seed: number }) {
  return (
    <>
      {/* Veining: the filtered rect paints only where the noise clears alpha. */}
      <g opacity="0.55">
        <rect
          width="800"
          height="600"
          filter={`url(#${u}-f)`}
          fill={`url(#${u}-gold)`}
        />
      </g>
      {/* A second, offset pass at lower opacity gives depth to the stone. */}
      <g opacity="0.22" transform={`translate(${(seed % 40) - 20} 18) scale(1.1)`}>
        <rect
          width="800"
          height="600"
          filter={`url(#${u}-f)`}
          fill="#ffffff"
        />
      </g>
      <rect width="800" height="600" fill={`url(#${u}-sheen)`} />
    </>
  );
}

function MetalBody({ u }: { u: string }) {
  return (
    <>
      <rect width="800" height="600" fill="#1a1f2b" />
      <rect width="800" height="600" filter={`url(#${u}-f)`} fill="#aab3c4" opacity="0.35" />
      {/* Broad specular band across the brushed grain. */}
      <rect width="800" height="600" fill={`url(#${u}-sheen)`} />
      <g opacity="0.5">
        <rect y="248" width="800" height="3" fill={`url(#${u}-gold)`} opacity="0.7" />
        <rect y="352" width="800" height="1.5" fill="#4fe7d4" opacity="0.4" />
      </g>
    </>
  );
}

function WaterBody({ u, seed }: { u: string; seed: number }) {
  const rings = Array.from({ length: 9 }, (_, i) => 60 + i * 46);
  return (
    <>
      <g filter={`url(#${u}-f)`} opacity="0.75">
        {rings.map((r, i) => (
          <circle
            key={r}
            cx={350 + ((seed + i * 37) % 120)}
            cy={300}
            r={r}
            fill="none"
            stroke={`url(#${u}-aqua)`}
            strokeWidth={i % 3 === 0 ? 2.4 : 1.2}
            opacity={1 - i * 0.08}
          />
        ))}
      </g>
      <rect width="800" height="600" fill={`url(#${u}-sheen)`} opacity="0.6" />
    </>
  );
}

function SparkBody({ u, seed }: { u: string; seed: number }) {
  const rays = Array.from({ length: 28 }, (_, i) => {
    const a = (i / 28) * Math.PI * 2 + (seed % 100) / 100;
    const len = 150 + ((seed * (i + 3)) % 190);
    return {
      x2: 400 + Math.cos(a) * len,
      y2: 300 + Math.sin(a) * len * 0.78,
      o: 0.15 + ((seed * (i + 7)) % 60) / 100,
    };
  });
  return (
    <>
      <g filter={`url(#${u}-f)`}>
        {rays.map((r, i) => (
          <line
            key={i}
            x1="400"
            y1="300"
            x2={r.x2}
            y2={r.y2}
            stroke={i % 4 === 0 ? "#e6c079" : "#4fe7d4"}
            strokeWidth={i % 5 === 0 ? 2 : 1}
            opacity={r.o}
            strokeLinecap="round"
          />
        ))}
        <circle cx="400" cy="300" r="7" fill="#fff3d6" />
        <circle cx="400" cy="300" r="26" fill="none" stroke="#e6c079" strokeWidth="1" opacity="0.5" />
      </g>
      <rect width="800" height="600" fill={`url(#${u}-sheen)`} opacity="0.5" />
    </>
  );
}

function SchematicBody({ u, seed }: { u: string; seed: number }) {
  const cols = Array.from({ length: 17 }, (_, i) => i * 50);
  const rows = Array.from({ length: 13 }, (_, i) => i * 50);
  const bars = Array.from({ length: 6 }, (_, i) => ({
    y: 150 + i * 52,
    x: 120 + ((seed * (i + 2)) % 130),
    w: 150 + ((seed * (i + 5)) % 330),
  }));

  return (
    <>
      <g stroke="#222736" strokeWidth="1" opacity="0.8">
        {cols.map((x) => (
          <line key={`c${x}`} x1={x} y1="0" x2={x} y2="600" />
        ))}
        {rows.map((y) => (
          <line key={`r${y}`} x1="0" y1={y} x2="800" y2={y} />
        ))}
      </g>

      {/* Gantt-ish technical bars — reads as a programme or a section detail. */}
      <g>
        {bars.map((b, i) => (
          <g key={i}>
            <rect
              x={b.x}
              y={b.y}
              width={b.w}
              height="12"
              rx="6"
              fill={i % 2 ? "#1fb5a5" : "#c99b45"}
              opacity="0.55"
            />
            <rect x={b.x} y={b.y} width="4" height="12" rx="2" fill="#fff3d6" opacity="0.8" />
          </g>
        ))}
      </g>

      {/* Dimension line with arrow ticks. */}
      <g stroke="#98a0b3" strokeWidth="1" opacity="0.7">
        <line x1="120" y1="500" x2="680" y2="500" />
        <line x1="120" y1="492" x2="120" y2="508" />
        <line x1="680" y1="492" x2="680" y2="508" />
      </g>
      <circle cx="680" cy="140" r="46" fill="none" stroke="#e6c079" strokeWidth="1.2" opacity="0.5" />
      <line x1="634" y1="140" x2="726" y2="140" stroke="#e6c079" strokeWidth="1" opacity="0.4" />
      <line x1="680" y1="94" x2="680" y2="186" stroke="#e6c079" strokeWidth="1" opacity="0.4" />
      <rect width="800" height="600" fill={`url(#${u}-sheen)`} opacity="0.35" />
    </>
  );
}
