export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const dsn = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;
    if (dsn) {
      await import("@sentry/nextjs").then((S) => S.init({ dsn, tracesSampleRate: 0.1 }));
    }
  }
}
