import { describe, it } from "node:test";
import assert from "node:assert/strict";
import hex, { isHexAlpha, isHexNoAlpha } from "../hex";

describe("hex validation function", () => {
  it("should return true for hex", () => {
    assert(hex("#fff"));
    assert(hex("#ffff"));
    assert(hex("#ffffff"));
    assert(hex("#ffffffff"));
    assert(hex("#000"));
    assert(hex("#0000"));
    assert(hex("#000000"));
    assert(hex("#00000000"));
  });

  it("should return false for hex", () => {
    assert(!hex());
    assert(!hex(12));
    assert(!hex(true));
    assert(!hex("#fffffff"));
    assert(!hex("#fffffffff"));
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

describe("hexAlpha validation function", () => {
  it("should return true for hexAlpha", () => {
    assert(isHexAlpha("#ffff"));
    assert(isHexAlpha("#ffffffff"));
    assert(isHexAlpha("#0000"));
    assert(isHexAlpha("#00000000"));
  });

  it("should return false for hexAlpha", () => {
    assert(!isHexAlpha("fff"));
    assert(!isHexAlpha("ffffff"));
    assert(!isHexAlpha("fffffff"));
    assert(!isHexAlpha("000"));
    assert(!isHexAlpha("000000"));
    assert(!isHexAlpha("0000000"));
  });
});

describe("hexNoAlpha validation function", () => {
  it("should return true for hexNoAlpha", () => {
    assert(isHexNoAlpha("#fff"));
    assert(isHexNoAlpha("#ffffff"));
    assert(isHexNoAlpha("#000"));
    assert(isHexNoAlpha("#000000"));
  });

  it("should return false for hexNoAlpha", () => {
    assert(!isHexNoAlpha("ffff"));
    assert(!isHexNoAlpha("fffff"));
    assert(!isHexNoAlpha("ffffffff"));
    assert(!isHexNoAlpha("0000"));
    assert(!isHexNoAlpha("00000"));
    assert(!isHexNoAlpha("00000000"));
  });
});
