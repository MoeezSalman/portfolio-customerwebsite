# Photography

Every photograph on the site is an **image slot** (`src/lib/media.ts`): a
stable id that is also the filename here, bilingual alt text, and the path.
Content files reference slots with `photo("<id>", alt)`. All 57 files
are real photographs; the generated `<Plate/>` art is only a fallback.

## Replacing a photo with the client's own

1. Overwrite the file here, keeping the same name (e.g. `salon-marble.jpg`).
2. Update the `alt` text in the matching `photo(...)` call so it describes
   the new picture.

Recommended export: JPEG, longest edge **2000 px**, quality ~75, under
~400 KB. `next/image` serves responsive AVIF/WebP from these on the fly.

## Naming

Files are named by what they show, not where they are used, because most
are used in several places: `marble-*`, `tiles-*`, `granite*`, `terrazzo*`
for surfaces; `villa-*`, `mosque-*`, `lobby-*`, `warehouse-*`,
`showroom-*` for places; `machine-*` for equipment; `*-worn`, `*-stained`,
`*-cracked`, `before-hall` for the "before" side of the sliders.

## Before/after sliders

Each service and project pairs a `before` slot with its main photo. They are
the same *kind* of surface, not the same room. For the client's own pairs,
shoot both frames from a **locked-off tripod position** with identical
lighting and overwrite both files.

## Sources and licence

Photographs are from Unsplash ([Unsplash License](https://unsplash.com/license))
and Pexels ([Pexels License](https://www.pexels.com/license/)) — both free for
commercial use, no attribution required. Each was reviewed against the page it
appears on. Provenance:

| File | Source | ID |
| --- | --- | --- |
| `bathroom-dark` | Unsplash | `photo-1756079664354-34944e001f6d` |
| `bathroom-marble` | Pexels | `8146152` |
| `before-hall` | Unsplash | `photo-1694885169342-909981fb408a` |
| `corridor-geometric` | Unsplash | `photo-1563219125-1db796e20ff2` |
| `corridor-grand` | Pexels | `7045766` |
| `gallery-reflect` | Unsplash | `photo-1774021792172-5f78c2e17ca8` |
| `granite` | Unsplash | `photo-1628977614615-f5f4068361ed` |
| `granite-tiles` | Unsplash | `photo-1534503442463-e0ddba45cf4c` |
| `hallway-warm` | Pexels | `7412599` |
| `kitchen-granite` | Unsplash | `photo-1778936317494-246b9262bbaf` |
| `kitchen-marble` | Unsplash | `photo-1758448755927-e5c5ae14790c` |
| `lobby-columns` | Unsplash | `photo-1712766822486-735e74543eda` |
| `lobby-grand` | Unsplash | `photo-1742844552193-2fd3425cd26d` |
| `lobby-office` | Pexels | `164586` |
| `lobby-reception` | Unsplash | `photo-1758448500688-3ababa93fd67` |
| `lobby-steps` | Unsplash | `photo-1723516908282-b3c795e9416a` |
| `machine-grinder` | Pexels | `39105478` |
| `machine-hand-grinder` | Unsplash | `photo-1736435364319-34c139cd3ccb` |
| `machine-handle` | Unsplash | `photo-1786539861527-ef6552d05c78` |
| `machine-in-hall` | Unsplash | `photo-1744681984533-ce43dce4cc70` |
| `machine-operator` | Unsplash | `photo-1668786710595-afc9d92f304e` |
| `machine-rideon` | Unsplash | `photo-1784622526600-d5551dc99cc9` |
| `machine-rideon-front` | Unsplash | `photo-1784622526658-61103c3ad820` |
| `machine-rideon-side` | Unsplash | `photo-1784622526556-add0b02a24b6` |
| `machine-vacuum` | Pexels | `6196579` |
| `man-thobe` | Unsplash | `photo-1784400340406-6df3756e1ba1` |
| `marble-black-white` | Unsplash | `photo-1588606805498-5c212783a722` |
| `marble-checker` | Unsplash | `photo-1684793314416-6bebc53929cc` |
| `marble-columns-sun` | Unsplash | `photo-1600328604921-300918f36018` |
| `marble-cracked` | Unsplash | `photo-1550053808-52a75a05955d` |
| `marble-pattern-corridor` | Unsplash | `photo-1708191891522-cfcf4223ccb3` |
| `marble-stained` | Unsplash | `photo-1515895309288-a3815ab7cf81` |
| `marble-star` | Unsplash | `photo-1718653159346-d286be354382` |
| `marble-sunlight` | Unsplash | `photo-1754437958878-b9d38859925a` |
| `marble-texture` | Unsplash | `photo-1551554781-c46200ea959d` |
| `marble-white` | Unsplash | `photo-1566041510394-cf7c8fe21800` |
| `marble-white-texture` | Unsplash | `photo-1694376329556-cf1ba3610960` |
| `mosque-columns` | Unsplash | `photo-1771335392380-d97a85bcccfe` |
| `mosque-courtyard` | Unsplash | `photo-1567215378181-6ecf3590646f` |
| `mosque-gold-hall` | Unsplash | `photo-1786343237737-87b73ea5d504` |
| `mosque-prayer-hall` | Unsplash | `photo-1653048825380-0eecb9580edc` |
| `salon-marble` | Unsplash | `photo-1706629503586-2731f65587ae` |
| `spa-hammam` | Unsplash | `photo-1737455339797-36bf591cec31` |
| `showroom-white` | Unsplash | `photo-1774021794777-4ada1deaf41f` |
| `stairs-marble` | Unsplash | `photo-1781047884697-53a3dc4d7eee` |
| `team-at-work` | Unsplash | `photo-1772209415876-76ea6cbc2f0c` |
| `terrazzo` | Unsplash | `photo-1771575521341-415ec739be67` |
| `terrazzo-black` | Unsplash | `photo-1763965780173-a94955ed16c7` |
| `tiles-geometric` | Pexels | `15273824` |
| `tiles-white` | Unsplash | `photo-1580398562556-d33329a0f29b` |
| `tiles-worn` | Unsplash | `photo-1584354273341-3eb96574e5be` |
| `villa-entrance` | Unsplash | `photo-1774940578514-28b165796456` |
| `villa-hall` | Unsplash | `photo-1780147343308-7ede77816ee6` |
| `villa-living` | Unsplash | `photo-1782803432396-e168aa0e54a1` |
| `villa-lounge` | Unsplash | `photo-1758448500596-ce0e0239f1be` |
| `warehouse-epoxy` | Pexels | `36230779` |
| `warehouse-shine` | Unsplash | `photo-1771531072574-af6ed6b954c0` |

Reconstruct a source URL as `https://images.unsplash.com/<id>` or
`https://www.pexels.com/photo/<id>/`.
