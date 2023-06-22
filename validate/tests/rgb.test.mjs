import { describe, it } from "node:test";
import assert from "node:assert/strict";
import rgb from "../rgb.mjs";

describe("rgb validation", () => {
  it("should return true for rgb", () => {
    assert(rgb("rgb(0, 0, 0)"));
    assert(rgb("rgb(0, 0, 0, 25%)"));
    assert(rgb("rgb(0, 0, 0, .25)"));
    assert(rgb("rgb(0 0 0)"));
    assert(rgb("rgb(0 0 0 / 25%)"));
    assert(rgb("rgb(0 0 0 / .25)"));
    assert(rgb("rgba(0, 0, 0, 25%)"));
    assert(rgb("rgba(0, 0, 0, .25)"));
    assert(rgb("rgba(0 0 0 / 25%)"));
    assert(rgb("rgba(0 0 0 / .25)"));
    assert(rgb("rgb(25% 25% 25%)"));
  });

  it("should return false for rgb", () => {
    assert(!rgb("rgb(0, 0, 0 / 25%)"));
    assert(!rgb("rgb(0, 0, 0 / .25)"));
    assert(!rgb("rgb(0 0 0, 25%)"));
    assert(!rgb("#fff"));
    assert(!rgb("blue"));
    assert(!rgb("hsl(0, 0%, 0%)"));
    assert(!rgb("oklab(0, 0, 0)"));
    assert(!rgb("lch(0, 0, 0)"));
    assert(!rgb("oklch(0, 0, 0)"));
    assert(!rgb("hcl(0, 0, 0)"));
    assert(!rgb());
    assert(!rgb(true));
    assert(!rgb(123));
    assert(!rgb([]));
  });
});
