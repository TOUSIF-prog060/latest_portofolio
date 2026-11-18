import { NextResponse } from "next/server";
import { site } from "@/lib/content";

type FormSubmitResponse = {
  success?: string | boolean;
  message?: string;
};

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // FormSubmit rejects server-side calls that arrive without a Referer/Origin,
  // so mirror the site's own origin on the outbound request.
  const origin = req.headers.get("origin") ?? site.url;

  let res: Response;
  try {
    res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(site.links.email)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Referer: origin,
        Origin: origin,
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `New project inquiry from ${name} — ${site.name} portfolio`,
        _template: "table",
      }),
    });
  } catch {
    return NextResponse.json({ error: "Could not reach the mail service" }, { status: 502 });
  }

  // FormSubmit answers 200 even when it refuses to send, so the body is the
  // only reliable signal — never trust the status code alone here.
  const data: FormSubmitResponse = await res.json().catch(() => ({}));
  const delivered =
    res.ok && (data.success === true || String(data.success).toLowerCase() === "true");

  if (!delivered) {
    console.error("[contact] delivery failed:", res.status, data);
    return NextResponse.json({ error: data.message ?? "Delivery failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
