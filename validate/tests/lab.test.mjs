import { describe, it } from "node:test";
import assert from "node:assert/strict";
import lab from "../lab.mjs";

describe("lab validation", () => {
  it("should return true for lab", () => {
    // This is returning false for some reason
    assert(lab("lab(0 0 0)"));
    assert(lab("lab(100 -100 125)"));
    assert(lab("lab(100% 100 -125)"));
    assert(lab("lab(100% 100 -125 / 0.5)"));
    assert(lab("lab(100% 100 -125 / .5)"));
    assert(lab("lab(100% 100 -125 / 25%)"));
    assert(lab("lab(.5% .5% -.5% / 25%)"));
  });

  it("should return false for lab", () => {
    assert(!lab("lab(0, 0, 0)")); // commas
    assert(!lab("lab(100 126 126)")); // 126 is out of range
    assert(!lab("lab(100 -126 -126)")); // 126 is out of range
    assert(!lab("lab(100% 900 900)")); // 126 is out of range
    assert(!lab("lab(101 0 0)")); // 101 is out of range
    assert(!lab("lab(101% 0 0)")); // 101 is out of range
    assert(!lab("lab(100% 0 0 / )")); // missing alpha after slash
    assert(!lab());
    assert(!lab(true));
    assert(!lab(123));
    assert(!lab([]));
    assert(!lab("hsl(0, 0%, 0%)"));
    assert(!lab("oklab(0 0 0)"));
    assert(!lab("lch(0, 0, 0)"));
    assert(!lab("oklch(0, 0, 0)"));
    assert(!lab("hcl(0, 0, 0)"));
    assert(!lab("rgb(0, 0, 0)"));
    assert(!lab("#fff"));
    assert(!lab("blue"));
  });
});
