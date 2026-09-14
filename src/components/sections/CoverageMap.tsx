"use client";

import { useEffect, useRef, useState } from "react";
import type { Map as LeafletMap, CircleMarker } from "leaflet";
import "leaflet/dist/leaflet.css";
import { cn, localizeNumber } from "@/lib/utils";
import { areas } from "@/content/areas";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

const GOLD = "#b8862b";
const TEAL = "#0f8a7b";

/**
 * Real map of Riyadh (Leaflet on Esri's light-grey canvas) with one marker per
 * district. Hovering the list beside it highlights the marker; hovering a
 * marker highlights the list row. Leaflet touches `window` on import, so it
 * is loaded inside the effect rather than at module scope.
 */
export function CoverageMap({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const [active, setActive] = useState<string | null>(null);
  const mapEl = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markers = useRef<Record<string, CircleMarker>>({});

  useEffect(() => {
    let cancelled = false;
    let ro: ResizeObserver | undefined;
    const minutes = t("minutes");

    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !mapEl.current || mapRef.current) return;

      const map = L.map(mapEl.current, {
        zoomControl: true,
        scrollWheelZoom: false, // page scroll must not get trapped by the map
        minZoom: 9,
      });
      map.attributionControl.setPrefix("Leaflet");
      mapRef.current = map;

      // Esri's light-grey canvas: keyless, on-theme, attribution required.
      // (CARTO's basemaps now watermark tiles without an API key.)
      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
        {
          maxZoom: 16,
          attribution: "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ",
        },
      ).addTo(map);

      const bounds = L.latLngBounds([]);
      for (const a of areas) {
        const core = a.tier === "core";
        const m = L.circleMarker([a.lat, a.lng], {
          radius: core ? 9 : 7,
          color: "#ffffff",
          weight: 2,
          fillColor: core ? GOLD : TEAL,
          fillOpacity: 0.9,
        })
          .bindTooltip(
            `<strong>${a.name[locale]}</strong><br/>${localizeNumber(a.eta, locale)} ${minutes}`,
            { direction: "top", offset: [0, -10] },
          )
          .on("mouseover", () => setActive(a.id))
          .on("mouseout", () => setActive(null))
          .addTo(map);
        markers.current[a.id] = m;
        bounds.extend([a.lat, a.lng]);
      }

      // Head-office response ring: ~8 km around Al Yasmin.
      L.circle([24.828, 46.649], {
        radius: 8000,
        color: GOLD,
        weight: 1,
        dashArray: "4 6",
        fillColor: GOLD,
        fillOpacity: 0.05,
        interactive: false,
      }).addTo(map);

      // Fit once the container has a real size, and re-fit whenever that size
      // changes (responsive reflow, a tab that was hidden at mount, rotation).
      // Leaflet measures its box at init and never re-measures on its own.
      let fitted = false;
      const fit = () => {
        map.invalidateSize();
        if (mapEl.current && mapEl.current.clientWidth > 0 && !fitted) {
          fitted = true;
          map.fitBounds(bounds.pad(0.12), { maxZoom: 12 });
        }
      };
      ro = new ResizeObserver(fit);
      ro.observe(mapEl.current);
      requestAnimationFrame(fit);
    })();

    return () => {
      cancelled = true;
      ro?.disconnect();
      mapRef.current?.remove();
      mapRef.current = null;
      markers.current = {};
    };
  }, [locale, t]);

  // Reflect list hover on the map.
  useEffect(() => {
    for (const [id, m] of Object.entries(markers.current)) {
      const core = areas.find((a) => a.id === id)?.tier === "core";
      const on = id === active;
      m.setStyle({
        radius: on ? (core ? 13 : 11) : core ? 9 : 7,
        fillOpacity: on ? 1 : 0.9,
      });
      if (on) m.bringToFront();
    }
  }, [active]);

  return (
    <div className="grid gap-3 md:gap-4 lg:grid-cols-5">
      <div className="lg:col-span-3">
        <div className="relative overflow-hidden rounded-card">
          <div
            ref={mapEl}
            className="aspect-[4/5] w-full bg-ink-2 sm:aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[36rem]"
            aria-label={t("sectionCoverageTitle")}
            role="region"
          />
          {/* Legend */}
          <div className="pointer-events-none absolute bottom-4 start-4 z-[500] flex flex-col gap-2 rounded-card bg-white/90 px-4 py-3 backdrop-blur">
            <span className="flex items-center gap-2.5 text-[0.72rem] text-mist">
              <span className="size-2.5 rounded-full" style={{ background: GOLD }} />
              {t("coreDistricts")}
            </span>
            <span className="flex items-center gap-2.5 text-[0.72rem] text-mist">
              <span className="size-2.5 rounded-full" style={{ background: TEAL }} />
              {t("extendedDistricts")}
            </span>
          </div>
        </div>
      </div>

      <div className="lg:col-span-2">
        <ul className="flex max-h-[36rem] flex-col gap-2 overflow-y-auto pe-1 [scrollbar-width:thin]">
          {areas.map((a) => (
            <li key={a.id}>
              <button
                type="button"
                onMouseEnter={() => setActive(a.id)}
                onFocus={() => setActive(a.id)}
                onMouseLeave={() => setActive(null)}
                onBlur={() => setActive(null)}
                onClick={() =>
                  mapRef.current?.flyTo([a.lat, a.lng], 13, { duration: 0.8 })
                }
                className={cn(
                  "flex w-full items-center justify-between gap-4 rounded-card px-4 py-3.5 text-start transition-colors duration-200",
                  active === a.id ? "bg-gold/15" : "bg-ink-2/70 hover:bg-ink-2",
                )}
              >
                <span className="flex items-center gap-3">
                  <span
                    className="size-2.5 shrink-0 rounded-full"
                    style={{ background: a.tier === "core" ? GOLD : TEAL }}
                  />
                  <span>
                    <span className="block font-display text-[0.95rem] font-semibold text-chalk">
                      {a.name[locale]}
                    </span>
                    <span className="mt-0.5 block text-[0.78rem] text-fog">
                      {a.note[locale]}
                    </span>
                  </span>
                </span>
                <span className="shrink-0 font-display text-[0.8rem] font-semibold text-mist tabular-nums">
                  {localizeNumber(a.eta, locale)} {t("minutes")}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
