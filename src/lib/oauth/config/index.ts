/**
 * OAuth CLI Configuration
 *
 * Provides server credentials for OAuth CLI services to communicate
 * with the running BlackRiver Gateway server when saving tokens.
 */

import { getRuntimePorts } from "@/lib/runtime/ports";

interface ServerCredentials {
  server: string;
  token: string;
  userId: string;
}

function getDefaultApiServer() {
  const { dashboardPort } = getRuntimePorts();
  return `http://localhost:${dashboardPort}`;
}

/**
 * Get server credentials from environment variables.
 * Used by OAuth CLI services to save tokens to the running server.
 */
export function getServerCredentials(): ServerCredentials {
  return {
    server: process.env.BlackRiver Gateway_SERVER || process.env.SERVER_URL || getDefaultApiServer(),
    token: process.env.BlackRiver Gateway_TOKEN || process.env.CLI_TOKEN || "",
    userId: process.env.BlackRiver Gateway_USER_ID || process.env.CLI_USER_ID || "cli",
  };
}
