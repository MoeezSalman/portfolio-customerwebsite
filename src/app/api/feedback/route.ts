import {
  FEEDBACK_LIMITS,
  maskPhone,
  validateFeedback,
  type Feedback,
} from "@/lib/feedback";

/**
 * Feedback wall API.
 *
 * Storage is Upstash Redis over its REST API (the free "Redis" store from
 * the Vercel Marketplace sets these variables automatically). When the
 * variables are absent the API still answers, but reports `storage: "local"`
 * so the client keeps the visitor's own posts in their browser instead.
 *
 * Phone numbers are stored in full (they are leads for the client) but only
 * ever leave this handler masked.
 */
const KEY = "shinepro:feedback";
const URL_ = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
const TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;
const hasStore = Boolean(URL_ && TOKEN);

type Stored = Feedback & { phone: string };

async function redis<T = unknown>(command: (string | number)[]): Promise<T> {
  const res = await fetch(URL_!, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(command),
    cache: "no-store",
  });
  const json = (await res.json()) as { result?: T; error?: string };
  if (!res.ok || json.error) throw new Error(json.error ?? `Redis ${res.status}`);
  return json.result as T;
}

/** Strip the raw phone before anything reaches the browser. */
function publicView(item: Stored): Feedback {
  const { phone, ...rest } = item;
  return { ...rest, author: rest.author || maskPhone(phone) };
}

export async function GET() {
  if (!hasStore) return Response.json({ storage: "local", items: [] });
  try {
    const raw = await redis<string[]>(["LRANGE", KEY, 0, FEEDBACK_LIMITS.maxShown - 1]);
    const items = raw
      .map((s) => {
        try {
          return publicView(JSON.parse(s) as Stored);
        } catch {
          return null;
        }
      })
      .filter((x): x is Feedback => x !== null);
    return Response.json({ storage: "redis", items }, { headers: { "Cache-Control": "no-store" } });
  } catch (err) {
    console.error("feedback GET", err);
    return Response.json({ storage: "local", items: [] });
  }
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, field: "message" }, { status: 400 });
  }
  const v = validateFeedback(body);
  if (!v.ok) return Response.json({ ok: false, field: v.field }, { status: 400 });

  const item: Stored = {
    id: `u-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
    message: v.message,
    author: maskPhone(v.phone),
    phone: v.phone,
    rating: v.rating,
    createdAt: new Date().toISOString(),
    source: "user",
  };

  if (!hasStore) {
    // No shared store yet: hand the clean record back for the browser to keep.
    return Response.json({ ok: true, storage: "local", item: publicView(item) });
  }

  try {
    // One post per minute per address keeps the wall from being flooded.
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "anon";
    const allowed = await redis<string | null>(["SET", `shinepro:rl:${ip}`, "1", "EX", 60, "NX"]);
    if (allowed === null) return Response.json({ ok: false, field: "rate" }, { status: 429 });

    await redis(["LPUSH", KEY, JSON.stringify(item)]);
    await redis(["LTRIM", KEY, 0, 199]);
    return Response.json({ ok: true, storage: "redis", item: publicView(item) });
  } catch (err) {
    console.error("feedback POST", err);
    return Response.json({ ok: true, storage: "local", item: publicView(item) });
  }
}
