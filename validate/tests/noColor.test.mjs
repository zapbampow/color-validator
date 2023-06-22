import { describe, it } from "node:test";
import assert from "node:assert/strict";
import noColor from "../noColor.mjs";

describe("noColor function", () => {
  it("should return true for undefined", () => {
    assert(noColor(undefined));
  });
  it("should return true for null", () => {
    assert(noColor(null));
  });
  it("should return true for non-string", () => {
    assert(noColor(123));
    assert(noColor(true));
    assert(noColor({}));
    assert(noColor([]));
  });
  it("should return true for empty string", () => {
    assert(noColor(""));
  });
  it("should return false for string", () => {
    assert(!noColor("hello"));
  });
});
