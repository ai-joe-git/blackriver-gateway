/**
 * MCP Authorization Scopes — Defines permission scopes for each MCP tool.
 *
 * Each tool requires specific scopes to execute. API keys can be configured
 * with a subset of scopes to limit tool access (least-privilege).
 */

// ============ Scope Definitions ============

/** All available MCP scopes */
export const MCP_SCOPE_LIST = [
  "read:health",
  "read:combos",
  "write:combos",
  "read:quota",
  "read:usage",
  "read:models",
  "execute:completions",
  "execute:search",
  "write:budget",
  "write:resilience",
  "pricing:write",
  "read:cache",
  "write:cache",
  "read:compression",
  "write:compression",
  "read:proxies",
] as const;

export type McpScope = (typeof MCP_SCOPE_LIST)[number];

// ============ Tool → Scope Mapping ============

/** Maps each MCP tool to its required scopes */
export const MCP_TOOL_SCOPES: Record<string, readonly McpScope[]> = {
  // Phase 1: Essential Tools
  OMNIROUTE_get_health: ["read:health"],
  OMNIROUTE_list_combos: ["read:combos"],
  OMNIROUTE_get_combo_metrics: ["read:combos"],
  OMNIROUTE_switch_combo: ["write:combos"],
  OMNIROUTE_check_quota: ["read:quota"],
  OMNIROUTE_route_request: ["execute:completions"],
  OMNIROUTE_web_search: ["execute:search"],
  OMNIROUTE_web_fetch: ["execute:search"],
  OMNIROUTE_cost_report: ["read:usage"],
  OMNIROUTE_list_models_catalog: ["read:models"],

  // Phase 2: Advanced Tools
  OMNIROUTE_simulate_route: ["read:health", "read:combos"],
  OMNIROUTE_set_budget_guard: ["write:budget"],
  OMNIROUTE_set_resilience_profile: ["write:resilience"],
  OMNIROUTE_test_combo: ["execute:completions", "read:combos"],
  OMNIROUTE_get_provider_metrics: ["read:health"],
  OMNIROUTE_best_combo_for_task: ["read:combos", "read:health"],
  OMNIROUTE_explain_route: ["read:health", "read:usage"],
  OMNIROUTE_get_session_snapshot: ["read:usage"],
  OMNIROUTE_db_health_check: ["read:health", "write:resilience"],
  OMNIROUTE_sync_pricing: ["pricing:write"],
  OMNIROUTE_cache_stats: ["read:cache"],
  OMNIROUTE_cache_flush: ["write:cache"],
  OMNIROUTE_compression_status: ["read:compression"],
  OMNIROUTE_compression_configure: ["write:compression"],
  OMNIROUTE_set_compression_engine: ["write:compression"],
  OMNIROUTE_list_compression_combos: ["read:compression"],
  OMNIROUTE_compression_combo_stats: ["read:compression"],
  OMNIROUTE_oneproxy_fetch: ["read:proxies"],
  OMNIROUTE_oneproxy_rotate: ["read:proxies"],
  OMNIROUTE_oneproxy_stats: ["read:proxies"],

  // Web-session pool observability (read) + lifecycle (write)
  OMNIROUTE_pool_status: ["read:health"],
  OMNIROUTE_pool_sessions: ["read:health"],
  OMNIROUTE_pool_health: ["read:health"],
  OMNIROUTE_pool_reset: ["write:resilience"],
  OMNIROUTE_pool_warm: ["write:resilience"],
  // Stealth browser pool observability (#3368 PR7)
  OMNIROUTE_browser_pool_status: ["read:health"],
} as const;
