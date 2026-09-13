# Photography

Every visual on the site is an **image slot** (`src/lib/media.ts`). All 29
slots currently carry a real photograph from this folder, wired through the
`src` argument of each `slot(...)` call. If a slot ever has no `src`,
`<Figure/>` falls back to generated artwork (`<Plate/>`), so removing a file
never breaks a page.

## Replacing a photo with the client's own

1. Overwrite the file here, keeping the same name (e.g. `floor-polishing.jpg`).
2. Update the `alt` text in the matching `slot(...)` call so it describes the
   new picture — alt text is read aloud to screen-reader users and indexed by
   search engines, so it must match what is actually shown.

Recommended export: JPEG, longest edge **2400 px**, quality 80, under ~800 KB.
`next/image` serves responsive AVIF/WebP from these on the fly.

| Slot | Used on | Aspect it renders at |
| --- | --- | --- |
| `floor-polishing` … `annual-contracts` (15) | page hero (tall, bleeds to edge), services hover-preview 4:5, before/after slider 4:3, CTA full-bleed | tall / 4:3 |
| `project-*` (6) | page hero, alternating project rows 16:10, home featured row | wide |
| `post-*` (6) | page hero, journal lead 16:10, journal rows 4:3 thumb | wide |
| `about-story` | about page, beside the company story | 4:5 portrait |

Every inner page hero and every closing CTA carries a photograph — pick the
`media` prop on `<PageHero/>` / `<CtaSection/>` per page.

## Before/after slider

`ShineSection` compares two different photographs: `floor-polishing-before`
(a matte, unfinished industrial hall) against the flagship `floor-polishing`
shot. They are the same *kind* of space, not the same room — the copy says
so. For the client's own pair, shoot both frames from a **locked-off tripod
position** with identical lighting and overwrite both files.

## Sources and licence

All current photographs are from Unsplash under the
[Unsplash License](https://unsplash.com/license) — free for commercial use,
no attribution required. They were chosen by reviewing each image against the
page it appears on. Photo IDs, for provenance:

| Slot | Unsplash photo ID |
| --- | --- |
| `floor-polishing` | `photo-1771531072574-af6ed6b954c0` |
| `marble-restoration` | `photo-1551554781-c46200ea959d` |
| `plumbing` | `photo-1538474705339-e87de81450e8` |
| `leak-detection` | `photo-1660642670168-d2c7a9921d6d` |
| `electrical` | `photo-1544724569-5f546fd6f2b5` |
| `ac-maintenance` | `photo-1718203862467-c33159fdc504` |
| `painting` | `photo-1562259949-e8e7689d7828` |
| `carpentry` | `photo-1687422810663-c316494f725a` |
| `iron-works` | `photo-1504328345606-18bbc8c9d7d1` |
| `ceilings-gypsum` | `photo-1550932372-3080d57e4e74` |
| `deep-cleaning` | `photo-1686178827149-6d55c72d81df` |
| `tank-cleaning` | `photo-1630732347607-3a89a66447e9` |
| `pest-control` | `photo-1581578017093-cd30fce4eeb7` |
| `renovation` | `photo-1517581177682-a085bb7ffb15` |
| `annual-contracts` | `photo-1621905251189-08b45d6a269e` |
| `project-yasmin` | `photo-1757924461488-ef9ad0670978` |
| `project-olaya` | `photo-1621831337128-35676ca30868` |
| `project-hittin` | `photo-1692736933760-8a8a9b8c1b6f` |
| `project-diriyah` | `photo-1567880905822-56f8e06fe630` |
| `project-narjis` | `photo-1667983453881-4992fe86ab1b` |
| `project-sahafa` | `photo-1704040686413-2c607dbd2f06` |
| `post-polish-vs-coating` | `photo-1772209415876-76ea6cbc2f0c` |
| `post-ac-checklist` | `photo-1651474738521-efacfb201039` |
| `post-leak-signs` | `photo-1526898943670-92bfa9f94c12` |
| `post-amc` | `photo-1621905252507-b35492cc74b4` |
| `post-marble-care` | `photo-1550053808-52a75a05955d` |
| `post-sequencing` | `photo-1505798577917-a65157d3320a` |
| `about-story` | `photo-1566041510394-cf7c8fe21800` |
| `floor-polishing-before` | `photo-1694885169342-909981fb408a` |

Reconstruct any source URL as `https://images.unsplash.com/photo-<id>`.
