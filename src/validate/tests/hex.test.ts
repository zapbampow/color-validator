import { describe, it } from "node:test";
import assert from "node:assert/strict";
import hex from "../hex";

describe("hex validation function", () => {
  it("should return true for hex", () => {
    assert(hex("#fff"));
    assert(hex("#ffffff"));
    assert(hex("#000"));
    assert(hex("#000000"));
  });

  it("should return false for hex", () => {
    assert(!hex());
    assert(!hex(12));
    assert(!hex(true));
    assert(!hex("#fffff"));
    assert(!hex("#ffff"));
    assert(!hex("#ffffffffff"));
    assert(!hex("#fffff"));
    assert(!hex("#asdfgh"));
    assert(!hex("hsl(0, 0%, 0%)"));
    assert(!hex("rgb(0, 0, 0)"));
    assert(!hex("rgba(0, 0, 0, 0)"));
    assert(!hex("lab(0, 0, 0)"));
    assert(!hex("oklab(0, 0, 0)"));
    assert(!hex("lch(0, 0, 0)"));
    assert(!hex("oklch(0, 0, 0)"));
    assert(!hex("hcl(0, 0, 0)"));
  });
});
