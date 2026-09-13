import { cn } from "@/lib/utils";

export type IconName =
  // service icons
  | "sparkle"
  | "gem"
  | "pipe"
  | "radar"
  | "bolt"
  | "wind"
  | "roller"
  | "saw"
  | "anvil"
  | "layers"
  | "droplet"
  | "tank"
  | "bug"
  | "blueprint"
  | "calendar"
  // ui icons
  | "arrow"
  | "check"
  | "shield"
  | "clock"
  | "tag"
  | "leaf"
  | "phone"
  | "mail"
  | "pin"
  | "star"
  | "plus"
  | "menu"
  | "close"
  | "chevron"
  | "whatsapp"
  | "instagram"
  | "x"
  | "tiktok";

const paths: Record<IconName, React.ReactNode> = {
  sparkle: (
    <>
      <path d="M12 3l1.9 5.4L19.5 10l-5.6 1.6L12 17l-1.9-5.4L4.5 10l5.6-1.6L12 3Z" />
      <path d="M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
    </>
  ),
  gem: (
    <>
      <path d="M6 3h12l3.5 5.5L12 21 2.5 8.5 6 3Z" />
      <path d="M2.5 8.5h19M9 3l-1.5 5.5L12 21l4.5-12.5L15 3" />
    </>
  ),
  pipe: (
    <>
      <path d="M3 8h6a3 3 0 0 1 3 3v2a3 3 0 0 0 3 3h6" />
      <rect x="2" y="5.5" width="3.5" height="5" rx="1" />
      <rect x="18.5" y="13.5" width="3.5" height="5" rx="1" />
      <path d="M11 9.5h2.5" />
    </>
  ),
  radar: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" />
      <path d="M12 12l6.5-4.5" />
    </>
  ),
  bolt: <path d="M13.5 2.5L5 13.5h6L10.5 21.5 19 10.5h-6l.5-8Z" />,
  wind: (
    <>
      <path d="M3 8h11a3 3 0 1 0-3-3" />
      <path d="M3 12h15a3 3 0 1 1-3 3" />
      <path d="M3 16h8" />
    </>
  ),
  roller: (
    <>
      <rect x="3" y="4" width="13" height="6" rx="2" />
      <path d="M16 7h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-7v3" />
      <rect x="10" y="16" width="4" height="5" rx="1.2" />
    </>
  ),
  saw: (
    <>
      <path d="M3 15l3-3 2 2 2-2 2 2 2-2 2 2 3-3" />
      <path d="M3 15v3a2 2 0 0 0 2 2h12" />
      <path d="M19 11l2-6-5 2" />
    </>
  ),
  anvil: (
    <>
      <path d="M4 8h10l3 3h4v2a4 4 0 0 1-4 4H9l-2-3H4a2 2 0 0 1 0-6Z" />
      <path d="M9 17v2h8v2H7v-2" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5Z" />
      <path d="M3 13l9 5 9-5" />
      <path d="M3 17.5l9 5 9-5" opacity="0.6" />
    </>
  ),
  droplet: <path d="M12 3s6 6.5 6 10.5a6 6 0 1 1-12 0C6 9.5 12 3 12 3Z" />,
  tank: (
    <>
      <rect x="4" y="6" width="16" height="14" rx="3" />
      <path d="M4 12c3 2 5-2 8 0s5 2 8 0" />
      <path d="M8 6V3h8v3" />
    </>
  ),
  bug: (
    <>
      <rect x="7" y="8" width="10" height="12" rx="5" />
      <path d="M7 12H3M21 12h-4M7 17l-3.5 2M21 17l-3.5-2M7 12l-3-3M20 9l-3 3" />
      <path d="M9.5 8l-1-3M14.5 8l1-3" />
    </>
  ),
  blueprint: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 9v11M15 9v11" opacity="0.7" />
      <path d="M12 12.5h3v4h-3z" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <path d="M8 14h2M14 14h2M8 17.5h2M14 17.5h2" />
    </>
  ),
  arrow: <path d="M5 12h13m-5-6l6 6-6 6" />,
  check: <path d="M4.5 12.5l5 5 10-11" />,
  shield: (
    <>
      <path d="M12 2.5l8 3v6c0 5-3.4 8.8-8 10-4.6-1.2-8-5-8-10v-6l8-3Z" />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.5l3.5 2" />
    </>
  ),
  tag: (
    <>
      <path d="M3 11V4h7l11 11-7 7L3 11Z" />
      <circle cx="7.5" cy="7.5" r="1.6" />
    </>
  ),
  leaf: (
    <>
      <path d="M20 4C9 4 4 9 4 16a4 4 0 0 0 4 4c7 0 12-5 12-16Z" />
      <path d="M4 20c4-8 8-11 13-13" />
    </>
  ),
  phone: (
    <path d="M6 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4 5.2 2 2 0 0 1 6 3Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M3.5 7.5l8.5 6 8.5-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  star: (
    <path d="M12 3.5l2.6 5.6 6 .8-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6L3.4 9.9l6-.8L12 3.5Z" />
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  menu: <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  chevron: <path d="M9 5l7 7-7 7" />,
  whatsapp: (
    <path d="M3.5 20.5l1.3-4.6A8.3 8.3 0 1 1 8.4 19l-4.9 1.5Zm5.6-4.9c2.6 1.6 4 1.9 5.6.7.8-.6 1-1.7.7-2.1-.3-.4-1.7-1-2-.9-.3.1-.6.8-.9.9-.3.1-1-.3-1.8-1.1-.8-.8-1.2-1.5-1.1-1.8.1-.3.8-.6.9-.9.1-.3-.5-1.7-.9-2-.4-.3-1.5-.1-2.1.7-1.2 1.6-.9 3 .7 5.6Z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1.1" />
    </>
  ),
  x: <path d="M4 4l16 16M20 4L4 20" />,
  tiktok: (
    <path d="M14 3v10.5a3.5 3.5 0 1 1-3-3.46V13a1 1 0 1 0 1 1V3h2c.4 2.2 1.9 3.7 4 4v2c-2.1-.1-3.7-.8-5-2Z" />
  ),
};

export function Icon({
  name,
  className,
  strokeWidth = 1.6,
  filled = false,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
  filled?: boolean;
}) {
  const solid = filled || name === "star" || name === "whatsapp" || name === "tiktok";
  return (
    <svg
      viewBox="0 0 24 24"
      fill={solid ? "currentColor" : "none"}
      stroke={solid ? "none" : "currentColor"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("size-6 shrink-0", className)}
    >
      {paths[name]}
    </svg>
  );
}
