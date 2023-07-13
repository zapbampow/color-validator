import { describe, it } from "node:test";
import assert from "node:assert/strict";
import hasAlpha from "../hasAlpha.js";

describe("hasAlpha", () => {
  it("should return true if the color has an alpha channel", () => {
    assert(hasAlpha("#00000000"));
    assert(hasAlpha("#000000ff"));
    assert(hasAlpha("#0000"));
    assert(hasAlpha("#ffff"));

    assert(hasAlpha("rgb(0 0 0 / 0.5)"));
    assert(hasAlpha("rgb(0 0 0 / 50%)"));
    assert(hasAlpha("rgb(0, 0, 0, 50%)"));
    assert(hasAlpha("rgb(0, 0, 0, .5)"));

    assert(hasAlpha("hsl(0 0% 0% / 0.5)"));
    assert(hasAlpha("hsl(0 0% 0% / .5)"));
    assert(hasAlpha("hsl(0, 0%, 0%, .5)"));
    assert(hasAlpha("hsl(0, 0%, 0%, 0.5)"));
    assert(hasAlpha("hsl(0, 0%, 0%, 50%)"));

    assert(hasAlpha("lab(100% 100 -125 / 0.5)"));
    assert(hasAlpha("lab(100% 100 -125 / .5)"));
    assert(hasAlpha("lab(100% 100 -125 / 25%)"));

    assert(hasAlpha("oklab(100% 100 -125 / 0.5)"));
    assert(hasAlpha("oklab(100% 100 -125 / .5)"));
    assert(hasAlpha("oklab(100% 100 -125 / 25%)"));

    assert(hasAlpha("lch(0.5 100 100 / 0.5)"));
    assert(hasAlpha("lch(0.5 100 100 / .5)"));
    assert(hasAlpha("lch(0.5 100 100 / 0)"));
    assert(hasAlpha("lch(0.5 100 100 / 1)"));
    assert(hasAlpha("lch(0.5 100 100 / 0%)"));

    assert(hasAlpha("oklch(0.5 100 100 / 0.5)"));
    assert(hasAlpha("oklch(0.5 100 100 / .5)"));
    assert(hasAlpha("oklch(0.5 100 100 / 0)"));
    assert(hasAlpha("oklch(0.5 100 100 / 1)"));
    assert(hasAlpha("oklch(0.5 100 100 / 0%)"));
    assert(hasAlpha("oklch(0.5 100 100 / 100%)"));
    assert(hasAlpha("oklch(0.5 100 100 / 99.99%)"));
  });

  it("should return false if the color does not have an alpha channel", () => {
    assert(!hasAlpha("#000"));
    assert(!hasAlpha("#000000"));
    assert(!hasAlpha("rgb(0 0 0)"));
    assert(!hasAlpha("rgb(0, 0, 0)"));
    assert(!hasAlpha("hsl(0 0% 0%)"));
    assert(!hasAlpha("hsl(0, 0%, 0%)"));
    assert(!hasAlpha("lab(100% 100 -125)"));
    assert(!hasAlpha("oklab(100% 100 -125)"));
    assert(!hasAlpha("lch(0.5 100 100)"));
    assert(!hasAlpha("oklch(0.5 100 100)"));
  });
});
