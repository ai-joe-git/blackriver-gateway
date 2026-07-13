import test from "node:test";
import assert from "node:assert/strict";
import { OMNIROUTE_RESPONSE_HEADERS } from "../../src/shared/constants/headers.ts";
import { buildomnirouteResponseMetaHeaders } from "../../src/domain/omnirouteResponseMeta.ts";

test("headers constant exposes the fallback-attempts key", () => {
  assert.equal(
    OMNIROUTE_RESPONSE_HEADERS.fallbackAttempts,
    "X-OmniRoute-Fallback-Attempts"
  );
});

test("buildomnirouteResponseMetaHeaders emits the fallback-attempts count when > 0", () => {
  const h = buildomnirouteResponseMetaHeaders({ model: "gpt", provider: "openai", fallbackAttempts: 2 });
  assert.equal(h["X-OmniRoute-Fallback-Attempts"], "2");
});

test("buildomnirouteResponseMetaHeaders omits the header when 0 / absent", () => {
  const none = buildomnirouteResponseMetaHeaders({ model: "gpt" });
  assert.equal(none["X-OmniRoute-Fallback-Attempts"], undefined);
  const zero = buildomnirouteResponseMetaHeaders({ model: "gpt", fallbackAttempts: 0 });
  assert.equal(zero["X-OmniRoute-Fallback-Attempts"], undefined);
});
