// middleware.ts
import { type NextRequest, NextResponse } from "next/server";

const ROOT_DOMAIN = process.env.NEXT_PUBLIC_ROOT_DOMAIN || "localhost:3000";

const SUBDOMAIN_MAP: Record<string, string> = {
  tenant: `rms.${ROOT_DOMAIN}`,
  platform: `rms-platform.${ROOT_DOMAIN}`,
  pos: `rms-pos.${ROOT_DOMAIN}`,
};

// Reverse map: "rms.localhost:3000" -> "tenant"
const HOSTNAME_TO_PREFIX = Object.fromEntries(
  Object.entries(SUBDOMAIN_MAP).map(([prefix, domain]) => [domain, prefix]),
);

export default (req: NextRequest) => {
  const url = req.nextUrl.clone();
  const hostname = req.headers.get("host") || "";
  const pathname = url.pathname;

  // ── 1. SUBDOMAIN → INTERNAL REWRITE ───────────────────────────────
  // rms.localhost:3000/dashboard  →  internally render /tenant/dashboard
  const prefix = HOSTNAME_TO_PREFIX[hostname];

  if (prefix) {
    url.pathname = `/${prefix}${pathname}`;
    return NextResponse.rewrite(url);
  }

  // ── 2. PATH PREFIX → SUBDOMAIN REDIRECT ───────────────────────────
  // localhost:3000/tenant/dashboard  →  rms.localhost:3000/dashboard
  const segments = pathname.split("/").filter(Boolean);
  const [firstSegment, ...rest] = segments;

  if (firstSegment && SUBDOMAIN_MAP[firstSegment]) {
    const targetDomain = SUBDOMAIN_MAP[firstSegment];
    const remainingPath = rest.length ? `/${rest.join("/")}` : "/";

    // Use http for local, https for production
    const protocol = ROOT_DOMAIN.includes("localhost") ? "http" : "https";
    return NextResponse.redirect(
      new URL(`${protocol}://${targetDomain}${remainingPath}`),
    );
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api).*)"],
};
