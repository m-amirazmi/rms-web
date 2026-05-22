const ROOT_DOMAIN = process.env.NEXT_PUBLIC_ROOT_DOMAIN || "localhost:3000";
const protocol = ROOT_DOMAIN.includes("localhost") ? "http" : "https";

const SUBDOMAIN_MAP = {
  tenant: `rms.${ROOT_DOMAIN}`,
  platform: `rms-platform.${ROOT_DOMAIN}`,
  pos: `rms-pos.${ROOT_DOMAIN}`,
} as const;

type SubdomainKey = keyof typeof SUBDOMAIN_MAP;

export function getSubdomainUrl(key: SubdomainKey, path = "/") {
  return `${protocol}://${SUBDOMAIN_MAP[key]}${path}`;
}
