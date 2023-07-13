import { describe, it } from "node:test";
import assert from "node:assert/strict";
import oklch from "../oklch";

describe("oklch validation", () => {
  it("should return true for oklch", () => {
    // This is returning false for some reason
    /**
     * l = lightness, 0-100 or 0-100%
     * c = chroma, 0-100% or 0-230 - if over 230, functional max is 230, although browsers will accept much higher
     * h = hue, 0-360(deg) or 0-400 grad or 0-6.2832 rad or 0-1.0 turn
     *
     */
    assert(oklch("oklch(0 0 0)"));
    assert(oklch("oklch(0 100 0)"));
    assert(oklch("oklch(0 230 0)"));
    assert(oklch("oklch(0 0 360)"));
    assert(oklch("oklch(0 0 360deg)"));
    assert(oklch("oklch(0 0 360rad)"));
    assert(oklch("oklch(0 0 360grad)"));
    assert(oklch("oklch(0 0 360turn)"));
    assert(oklch("oklch(.5 100 -100)"));
    assert(oklch("oklch(.5 100 100)"));
    assert(oklch("oklch(0.5 100 100)"));
    assert(oklch("oklch(0.5 100 100 / 0.5)"));
    assert(oklch("oklch(0.5 100 100 / .5)"));
    assert(oklch("oklch(0.5 100 100 / 0)"));
    assert(oklch("oklch(0.5 100 100 / 1)"));
    assert(oklch("oklch(0.5 100 100 / 0%)"));
    assert(oklch("oklch(0.5 100 100 / 100%)"));
    assert(oklch("oklch(0.5 100 100 / 99.99%)"));
  });

  it("should return false for oklch", () => {
    assert(!oklch("oklch(0, 0, 0)")); // commas
    assert(!oklch("oklch(100 231 100)")); // 231 is out of range
    assert(!oklch("oklch(100 -1 100)")); // negative not allowed
    assert(!oklch("oklch(100 1 100 / )")); // negative not allowed
    assert(!oklch("oklch(100% 900 900)")); // 900 is out of range
    assert(!oklch("oklch(101 0 0)")); // 101 is out of range
    assert(!oklch("oklch(101% 0 0)")); // 101 is out of range
    assert(!oklch());
    assert(!oklch(true));
    assert(!oklch(123));
    assert(!oklch([]));
    assert(!oklch("hsl(0, 0%, 0%)"));
    assert(!oklch("lab(0 0 0)"));
    assert(!oklch("oklab(0 0 0)"));
    assert(!oklch("lch(0, 0, 0)"));
    assert(!oklch("hcl(0, 0, 0)"));
    assert(!oklch("rgb(0, 0, 0)"));
    assert(!oklch("#fff"));
    assert(!oklch("blue"));
  });
});
