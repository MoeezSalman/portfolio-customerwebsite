"use client";

import { cn } from "@/lib/utils";

/**
 * Seamless infinite strip. The track holds two identical copies and translates
 * by exactly 50% of its width, so the loop point is invisible. In RTL the track
 * overflows to the left, so the travel direction flips with the script.
 */
export function Marquee({
  children,
  className,
  reverse = false,
  speed = 38,
  pauseOnHover = true,
}: {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  /** Seconds for one full pass. */
  speed?: number;
  pauseOnHover?: boolean;
}) {
  return (
    <div className={cn("mask-fade-x group relative overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max",
          reverse
            ? "animate-marquee-rev rtl:animate-marquee"
            : "animate-marquee rtl:animate-marquee-rev",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true" inert>
          {children}
        </div>
      </div>
    </div>
  );
}
