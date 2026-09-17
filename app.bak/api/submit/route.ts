export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    body = {};
  }

  const webhook = process.env.WEBHOOK_URL_CONTACT;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...((body as Record<string, unknown>) || {}), receivedAt: new Date().toISOString() }),
      });
    } catch (e) {
      console.error("webhook forward failed", e);
    }
  } else {
    console.log("[/api/submit] offline success", body);
  }

  return Response.json({ ok: true });
}
