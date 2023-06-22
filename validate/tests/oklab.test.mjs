import { describe, it } from "node:test";
import assert from "node:assert/strict";
import oklab from "../oklab.mjs";

describe("oklab validation", () => {
  it("should return true for oklab", () => {
    // This is returning false for some reason
    assert(oklab("oklab(0 0 0)"));
    assert(oklab("oklab(100 -100 125)"));
    assert(oklab("oklab(100% 100 -125)"));
    assert(oklab("oklab(100% 100 -125 / 0.5)"));
    assert(oklab("oklab(100% 100 -125 / .5)"));
    assert(oklab("oklab(100% 100 -125 / 25%)"));
  });

  it("should return false for oklab", () => {
    assert(!oklab("oklab(0, 0, 0)")); // commas
    assert(!oklab("oklab(100 126 126)")); // 126 is out of range
    assert(!oklab("oklab(100 -126 -126)")); // 126 is out of range
    assert(!oklab("oklab(100% 900 900)")); // 126 is out of range
    assert(!oklab("oklab(101 0 0)")); // 101 is out of range
    assert(!oklab("oklab(101% 0 0)")); // 101 is out of range
    assert(!oklab());
    assert(!oklab(true));
    assert(!oklab(123));
    assert(!oklab([]));
    assert(!oklab("hsl(0, 0%, 0%)"));
    assert(!oklab("lab(0 0 0)"));
    assert(!oklab("oklab(0, 0, 0)"));
    assert(!oklab("lch(0, 0, 0)"));
    assert(!oklab("oklch(0, 0, 0)"));
    assert(!oklab("hcl(0, 0, 0)"));
    assert(!oklab("rgb(0, 0, 0)"));
    assert(!oklab("#fff"));
    assert(!oklab("blue"));
  });
});
