import { describe, it } from "node:test";
import assert from "node:assert/strict";
import named from "../named.mjs";

describe("named color validation function", () => {
  it("should return true for named", () => {
    assert(named("Chocolate"));
    assert(named("chocolate"));
    assert(named("CHOCOLATE"));
    assert(named("cornsilk"));
    assert(named("Cornsilk"));
  });

  it("should return false for named", () => {
    assert(!named("chocolatey"));
    assert(!named("CHOCOLATEY"));
    assert(!named(123));
    assert(!named("hsl(0, 0%, 0%)"));
    assert(!named(undefined));
    assert(!named(true));
  });
});
