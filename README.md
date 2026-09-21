# Jalibalat — جلي البلاط

Bilingual (Arabic default / English) marketing site for a Riyadh floor
polishing company. Next.js 16, React 19, Tailwind CSS 4. Fully static apart
from one small API route for the feedback wall.

## Run it locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev        # http://localhost:3000  (redirects to /ar)
```

## Build for production

```bash
npm install
npm run build
npm start          # serves the production build on port 3000
```

## Deploy

**Static hosting (cPanel, Nginx, any web space):**

```bash
npm install
npm run build:static   # writes plain HTML/CSS/JS into out/
```

Upload the *contents* of `out/` to the web root. Nothing runs on the server.
An `.htaccess` is included for Apache; on Nginx add `error_page 404 /404.html;`.
Set `NEXT_PUBLIC_SITE_URL=https://your-domain.com` before building so the
sitemap and canonical links carry the real domain. In this mode the feedback
wall keeps each visitor's posts in their own browser (there is no API).


**Vercel (recommended, zero configuration):** import the folder or the Git
repository, framework preset "Next.js", no build settings to change. Every
push to `main` redeploys.

**Any Node host:** run `npm run build` then `npm start` behind your reverse
proxy (Nginx, Caddy, etc.). The app listens on `PORT` (default 3000).

### Environment variables (all optional)

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public origin for canonical links, sitemap and structured data, e.g. `https://jalibalat.com`. Defaults to the current Vercel URL. |
| `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN` | Shared storage for the home-page feedback wall (free Upstash Redis; on Vercel add it from Storage → Marketplace and the variables are set for you). Without them each visitor's posts are kept in their own browser. |

## Where things live

| What | File |
| --- | --- |
| Name, phone, WhatsApp, email, address, head-office coordinates | `src/content/site.ts` |
| Services, prices, FAQs per service | `src/content/services.ts` |
| Machines | `src/content/equipment.ts` |
| Projects (before/after pairs) | `src/content/projects.ts` |
| Tips articles | `src/content/posts.ts` |
| Districts on the coverage map | `src/content/areas.ts` |
| Seed reviews on the feedback wall | `src/lib/feedback.ts` |
| Every UI label in both languages | `src/i18n/dictionaries.ts` |
| Photographs (swap by overwriting the file, keep the name) | `public/images/` — see its README |
| Logo | `public/brand/logo.png`, `public/brand/mark.png`; favicon in `src/app/icon.png` |

Every text lives once as `{ en: "…", ar: "…" }`, so editing content never
touches components.
