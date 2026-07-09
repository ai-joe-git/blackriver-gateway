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
  BlackRiver Gateway_get_health: ["read:health"],
  BlackRiver Gateway_list_combos: ["read:combos"],
  BlackRiver Gateway_get_combo_metrics: ["read:combos"],
  BlackRiver Gateway_switch_combo: ["write:combos"],
  BlackRiver Gateway_check_quota: ["read:quota"],
  BlackRiver Gateway_route_request: ["execute:completions"],
  BlackRiver Gateway_web_search: ["execute:search"],
  BlackRiver Gateway_web_fetch: ["execute:search"],
  BlackRiver Gateway_cost_report: ["read:usage"],
  BlackRiver Gateway_list_models_catalog: ["read:models"],

  // Phase 2: Advanced Tools
  BlackRiver Gateway_simulate_route: ["read:health", "read:combos"],
  BlackRiver Gateway_set_budget_guard: ["write:budget"],
  BlackRiver Gateway_set_resilience_profile: ["write:resilience"],
  BlackRiver Gateway_test_combo: ["execute:completions", "read:combos"],
  BlackRiver Gateway_get_provider_metrics: ["read:health"],
  BlackRiver Gateway_best_combo_for_task: ["read:combos", "read:health"],
  BlackRiver Gateway_explain_route: ["read:health", "read:usage"],
  BlackRiver Gateway_get_session_snapshot: ["read:usage"],
  BlackRiver Gateway_db_health_check: ["read:health", "write:resilience"],
  BlackRiver Gateway_sync_pricing: ["pricing:write"],
  BlackRiver Gateway_cache_stats: ["read:cache"],
  BlackRiver Gateway_cache_flush: ["write:cache"],
  BlackRiver Gateway_compression_status: ["read:compression"],
  BlackRiver Gateway_compression_configure: ["write:compression"],
  BlackRiver Gateway_set_compression_engine: ["write:compression"],
  BlackRiver Gateway_list_compression_combos: ["read:compression"],
  BlackRiver Gateway_compression_combo_stats: ["read:compression"],
  BlackRiver Gateway_oneproxy_fetch: ["read:proxies"],
  BlackRiver Gateway_oneproxy_rotate: ["read:proxies"],
  BlackRiver Gateway_oneproxy_stats: ["read:proxies"],

  // Web-session pool observability (read) + lifecycle (write)
  BlackRiver Gateway_pool_status: ["read:health"],
  BlackRiver Gateway_pool_sessions: ["read:health"],
  BlackRiver Gateway_pool_health: ["read:health"],
  BlackRiver Gateway_pool_reset: ["write:resilience"],
  BlackRiver Gateway_pool_warm: ["write:resilience"],
  // Stealth browser pool observability (#3368 PR7)
  BlackRiver Gateway_browser_pool_status: ["read:health"],
} as const;
