const DEFAULT_BlackRiver Gateway_BASE_URL = "http://localhost:20128";

type BlackRiver GatewayBaseUrlEnv = {
  BlackRiver Gateway_BASE_URL?: string;
  BASE_URL?: string;
  NEXT_PUBLIC_BASE_URL?: string;
};

function normalizeBaseUrl(value?: string): string | null {
  const trimmed = value?.trim();
  if (!trimmed) return null;
  return trimmed.replace(/\/+$/, "");
}

export function resolveBlackRiver GatewayBaseUrl(env: BlackRiver GatewayBaseUrlEnv = process.env): string {
  return (
    normalizeBaseUrl(env.BlackRiver Gateway_BASE_URL) ||
    normalizeBaseUrl(env.BASE_URL) ||
    normalizeBaseUrl(env.NEXT_PUBLIC_BASE_URL) ||
    DEFAULT_BlackRiver Gateway_BASE_URL
  );
}

export { DEFAULT_BlackRiver Gateway_BASE_URL };
