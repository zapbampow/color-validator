import { describe, it } from "node:test";
import assert from "node:assert/strict";
import lch from "../lch.mjs";

describe("lch validation", () => {
  it("should return true for lch", () => {
    // This is returning false for some reason
    /**
     * l = lightness, 0-100 or 0-100%
     * c = chroma, 0-100% or 0-100000 - if over 230, functional max is 230
     * h = hue, 0-360(deg) or 0-400 grad or 0-6.2832 rad or 0-1.0 turn
     *
     */
    assert(lch("lch(0 0 0)"));
    assert(lch("lch(0 100 0)"));
    assert(lch("lch(0 100000 0)"));
    assert(lch("lch(0 100000 360)"));
    assert(lch("lch(0 100000 50000)"));
    assert(lch("lch(100 -100 125)"));
    assert(lch("lch(100% 100 -125)"));
    assert(lch("lch(100% 100 -125 / 0.5)"));
    assert(lch("lch(100% 100 -125 / .5)"));
    assert(lch("lch(100% 100 -125 / 0)"));
    assert(lch("lch(100% 100 -125 / 1)"));
    assert(lch("lch(100% 100 -125 / 25%)"));
  });

  it("should return false for lch", () => {
    assert(!lch("lch(0, 0, 0)")); // commas
    assert(!lch("lch(100 126 126)")); // 126 is out of range
    assert(!lch("lch(100 -126 -126)")); // 126 is out of range
    assert(!lch("lch(100% 900 900)")); // 126 is out of range
    assert(!lch("lch(101 0 0)")); // 101 is out of range
    assert(!lch("lch(101% 0 0)")); // 101 is out of range
    assert(!lch());
    assert(!lch(true));
    assert(!lch(123));
    assert(!lch([]));
    assert(!lch("hsl(0, 0%, 0%)"));
    assert(!lch("lab(0 0 0)"));
    assert(!lch("lch(0, 0, 0)"));
    assert(!lch("oklch(0, 0, 0)"));
    assert(!lch("hcl(0, 0, 0)"));
    assert(!lch("rgb(0, 0, 0)"));
    assert(!lch("#fff"));
    assert(!lch("blue"));
  });
});
