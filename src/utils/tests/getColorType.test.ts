import { describe, it } from "node:test";
import assert from "node:assert/strict";
import getColorType from "../getColorType.js";

describe("throws errors on invalid inputs", () => {
  it("should throw error when no color provided", () => {
    assert.throws(() => getColorType());
  });

  it("should throw error when not a string", () => {
    assert.throws(() => getColorType(123));
    assert.throws(() => getColorType({}));
    assert.throws(() => getColorType([]));
    assert.throws(() => getColorType(true));
    assert.throws(() => getColorType(null));
    assert.throws(() => getColorType(undefined));
  });
});

describe("hex is hex", () => {
  it('should return "hex"', () => {
    assert.equal(getColorType("#000"), "hex");
    assert.equal(getColorType("#000000"), "hex");
    assert.equal(getColorType("#fff"), "hex");
    assert.equal(getColorType("#ffffff"), "hex");
  });

  it("should throw error on invalid hex color", () => {
    assert.throws(() => getColorType("#0000"));
    assert.throws(() => getColorType("#0000000"));
    assert.throws(() => getColorType("#ffff"));
    assert.throws(() => getColorType("#fffffff"));
  });

  it("should not return 'hex' on other color types", () => {
    assert.notEqual(getColorType("rgb(0,0,0)"), "hex");
    assert.notEqual(getColorType("rgba(0,0,0,0)"), "hex");
    assert.notEqual(getColorType("hsl(0 0% 0%)"), "hex");
  });
});

describe("rgb is rgb", () => {
  it('should return "rgb"', () => {
    assert.equal(getColorType("rgb(0, 0, 0)"), "rgb");
    assert.equal(getColorType("rgb(0, 0, 0, 0)"), "rgb");
    assert.equal(getColorType("rgb(0, 0, 0, .5)"), "rgb");
    assert.equal(getColorType("rgb(0, 0, 0, 0.5)"), "rgb");
    assert.equal(getColorType("rgb(0, 0, 0, 1)"), "rgb");
    assert.equal(getColorType("rgb(0, 0, 0, 20%)"), "rgb");
    assert.equal(getColorType("rgb(255 255 255)"), "rgb");
    assert.equal(getColorType("rgb(255 255 255 / 1)"), "rgb");
    assert.equal(getColorType("rgb(255 255 255 / 0.5)"), "rgb");
    assert.equal(getColorType("rgb(255 255 255 / .5)"), "rgb");
    assert.equal(getColorType("rgb(255 255 255 / 20%)"), "rgb");
  });

  it("should throw error on invalid rgb color", () => {
    assert.throws(() => getColorType("rgb(0,0,0"));
    assert.throws(() => getColorType("rgb(0,0,0 / 0)"));
    assert.throws(() => getColorType("rgb(255 255 255, 0.5"));
  });

  it("should not return 'rgb' on other color types", () => {
    assert.notEqual(getColorType("#000"), "rgb");
    assert.notEqual(getColorType("hsl(0 0% 0%)"), "rgb");
  });
});

describe("hsl is hsl", () => {
  it('should return "rgb"', () => {
    assert.equal(getColorType("hsl(0, 0%, 0%)"), "hsl");
    assert.equal(getColorType("hsl(0, 0%, 0%, 25%)"), "hsl");
    assert.equal(getColorType("hsl(0, 0%, 0%, .25)"), "hsl");
    assert.equal(getColorType("hsl(20deg, 0%, 0%, 0.25)"), "hsl");
    assert.equal(getColorType("hsl(.2turn, 0%, 0%, 0.25)"), "hsl");
    assert.equal(getColorType("hsl(0 0% 0%)"), "hsl");
    assert.equal(getColorType("hsl(0 0% 0% / 25%)"), "hsl");
    assert.equal(getColorType("hsl(0 0% 0% / .25)"), "hsl");
    assert.equal(getColorType("hsl(20deg 0% 0% / 0.25)"), "hsl");
    assert.equal(getColorType("hsl(.2turn 0% 0% / 0.25)"), "hsl");
    assert.equal(getColorType("hsl(20 100% 100% / 1)"), "hsl");
    assert.equal(getColorType("hsla(0, 0%, 0%, 25%)"), "hsl");
    assert.equal(getColorType("hsla(0, 0%, 0%, .25)"), "hsl");
    assert.equal(getColorType("hsla(20 0% 0% / 0.25)"), "hsl");
    assert.equal(getColorType("hsla(.2turn 0% 0% / 0.25)"), "hsl");
  });

  it("should throw error on invalid hsl color", () => {
    assert.throws(() => getColorType("hsl(0 0 0"));
    assert.throws(() => getColorType("hsl(0,0%,0%"));
    assert.throws(() => getColorType("hsl(0,0%,0%"));
    assert.throws(() => getColorType("hsl(0 0 0)"));
    assert.throws(() => getColorType("hsl(0,0%,0% / 0)"));
    assert.throws(() => getColorType("hsl(0 0%%, 50%)"));
  });

  it("should not return 'hsl' on other color types", () => {
    assert.notEqual(getColorType("#000"), "hsl");
    assert.notEqual(getColorType("rgb(0 0 0)"), "hsl");
  });
});

describe("lab is lab", () => {
  it('should return "lab"', () => {
    assert.equal(getColorType("lab(0 0 0)"), "lab");
    assert.equal(getColorType("lab(100 -100 125)"), "lab");
    assert.equal(getColorType("lab(100% 100 -125)"), "lab");
    assert.equal(getColorType("lab(100% 100 -125 / 0.5)"), "lab");
    assert.equal(getColorType("lab(100% 100 -125 / .5)"), "lab");
    assert.equal(getColorType("lab(100% 100 -125 / 25%)"), "lab");
    assert.equal(getColorType("lab(.5% .5% -.5% / 25%)"), "lab");
  });

  it("should throw error on invalid lab color", () => {
    assert.throws(() => getColorType("lab(0 0 0"));
    assert.throws(() => getColorType("lab(0 0)"));
    assert.throws(() => getColorType("lab(0 0 0 0)"));
    assert.throws(() => getColorType("lab(0, 0, 0"));
    assert.throws(() => getColorType("lab(0 126 0"));
    assert.throws(() => getColorType("lab(100% 0 0 / )")); // missing alpha after slash
  });

  it("should not return 'lab' on other color types", () => {
    assert.notEqual(getColorType("hsl(0, 0%, 0%)"), "lab");
    assert.notEqual(getColorType("oklab(0 0 0)"), "lab");
    assert.notEqual(getColorType("lch(0 0 0)"), "lab");
    assert.notEqual(getColorType("oklch(0 0 0)"), "lab");
    assert.notEqual(getColorType("rgb(0, 0, 0)"), "lab");
    assert.notEqual(getColorType("#fff"), "lab");
    assert.notEqual(getColorType("blue"), "lab");
  });
});

describe("oklab is oklab", () => {
  it('should return "oklab"', () => {
    assert.equal(getColorType("oklab(0 0 0)"), "oklab");
    assert.equal(getColorType("oklab(100 -100 125)"), "oklab");
    assert.equal(getColorType("oklab(100% 100 -125)"), "oklab");
    assert.equal(getColorType("oklab(100% 100 -125 / 0.5)"), "oklab");
    assert.equal(getColorType("oklab(100% 100 -125 / .5)"), "oklab");
    assert.equal(getColorType("oklab(100% 100 -125 / 25%)"), "oklab");
    assert.equal(getColorType("oklab(.5% .5% -.5% / 25%)"), "oklab");
  });

  it("should throw error on invalid oklab color", () => {
    assert.throws(() => getColorType("oklab(0 0 0"));
    assert.throws(() => getColorType("oklab(0 0)"));
    assert.throws(() => getColorType("oklab(0 0 0 0)"));
    assert.throws(() => getColorType("oklab(0, 0, 0"));
    assert.throws(() => getColorType("oklab(0 126 0"));
    assert.throws(() => getColorType("oklab(100% 0 0 / )")); // missing alpha after slash
  });

  it("should not return 'oklab' on other color types", () => {
    assert.notEqual(getColorType("hsl(0, 0%, 0%)"), "oklab");
    assert.notEqual(getColorType("lab(0 0 0)"), "oklab");
    assert.notEqual(getColorType("lch(0 0 0)"), "oklab");
    assert.notEqual(getColorType("oklch(0 0 0)"), "oklab");
    assert.notEqual(getColorType("rgb(0, 0, 0)"), "oklab");
    assert.notEqual(getColorType("#fff"), "oklab");
    assert.notEqual(getColorType("blue"), "oklab");
  });
});

describe("lch is lch", () => {
  it('should return "lch"', () => {
    assert.equal(getColorType("lch(0 0 0)"), "lch");
    assert.equal(getColorType("lch(0 100 0)"), "lch");
    assert.equal(getColorType("lch(0 230 0)"), "lch");
    assert.equal(getColorType("lch(0 0 360)"), "lch");
    assert.equal(getColorType("lch(0 0 360deg)"), "lch");
    assert.equal(getColorType("lch(0 0 360rad)"), "lch");
    assert.equal(getColorType("lch(0 0 360grad)"), "lch");
    assert.equal(getColorType("lch(0 0 360turn)"), "lch");
    assert.equal(getColorType("lch(.5 100 -100)"), "lch");
    assert.equal(getColorType("lch(.5 100 100)"), "lch");
    assert.equal(getColorType("lch(0.5 100 100)"), "lch");
    assert.equal(getColorType("lch(0.5 100 100 / 0.5)"), "lch");
    assert.equal(getColorType("lch(0.5 100 100 / 0)"), "lch");
    assert.equal(getColorType("lch(0.5 100 100 / 1)"), "lch");
    assert.equal(getColorType("lch(0.5 100 100 / 0%)"), "lch");
    assert.equal(getColorType("lch(0.5 100 100 / 100%)"), "lch");
    assert.equal(getColorType("lch(0.5 100 100 / 99.99%)"), "lch");
  });

  it("should throw error on invalid lch color", () => {
    assert.throws(() => getColorType("lch(0, 0, 0)")); // commas
    assert.throws(() => getColorType("lch(100 231 100)")); // 231 is out of range
    assert.throws(() => getColorType("lch(100 -1 100)")); // negative not allowed
    assert.throws(() => getColorType("lch(100 1 100 / )")); // negative not allowed
    assert.throws(() => getColorType("lch(100% 900 900)")); // 900 is out of range
    assert.throws(() => getColorType("lch(101 0 0)")); // 101 is out of range
    assert.throws(() => getColorType("lch(101% 0 0)")); // 101 is out of range
  });

  it("should not return 'lch' on other color types", () => {
    assert.notEqual(getColorType("hsl(0, 0%, 0%)"), "lch");
    assert.notEqual(getColorType("lab(0 0 0)"), "lch");
    assert.notEqual(getColorType("oklch(0 0 0)"), "lch");
    assert.notEqual(getColorType("rgb(0, 0, 0)"), "lch");
    assert.notEqual(getColorType("#fff"), "lch");
    assert.notEqual(getColorType("blue"), "lch");
  });
});

describe("oklch is oklch", () => {
  it('should return "oklch"', () => {
    assert.equal(getColorType("oklch(0 0 0)"), "oklch");
    assert.equal(getColorType("oklch(0 100 0)"), "oklch");
    assert.equal(getColorType("oklch(0 230 0)"), "oklch");
    assert.equal(getColorType("oklch(0 0 360)"), "oklch");
    assert.equal(getColorType("oklch(0 0 360deg)"), "oklch");
    assert.equal(getColorType("oklch(0 0 360rad)"), "oklch");
    assert.equal(getColorType("oklch(0 0 360grad)"), "oklch");
    assert.equal(getColorType("oklch(0 0 360turn)"), "oklch");
    assert.equal(getColorType("oklch(.5 100 -100)"), "oklch");
    assert.equal(getColorType("oklch(.5 100 100)"), "oklch");
    assert.equal(getColorType("oklch(0.5 100 100)"), "oklch");
    assert.equal(getColorType("oklch(0.5 100 100 / 0.5)"), "oklch");
    assert.equal(getColorType("oklch(0.5 100 100 / 0)"), "oklch");
    assert.equal(getColorType("oklch(0.5 100 100 / 1)"), "oklch");
    assert.equal(getColorType("oklch(0.5 100 100 / 0%)"), "oklch");
    assert.equal(getColorType("oklch(0.5 100 100 / 100%)"), "oklch");
    assert.equal(getColorType("oklch(0.5 100 100 / 99.99%)"), "oklch");
  });

  it("should throw error on invalid oklch color", () => {
    assert.throws(() => getColorType("oklch(0, 0, 0)")); // commas
    assert.throws(() => getColorType("oklch(100 231 100)")); // 231 is out of range
    assert.throws(() => getColorType("oklch(100 -1 100)")); // negative not allowed
    assert.throws(() => getColorType("oklch(100 1 100 / )")); // negative not allowed
    assert.throws(() => getColorType("oklch(100% 900 900)")); // 900 is out of range
    assert.throws(() => getColorType("oklch(101 0 0)")); // 101 is out of range
    assert.throws(() => getColorType("oklch(101% 0 0)")); // 101 is out of range
  });

  it("should not return 'oklch' on other color types", () => {
    assert.notEqual(getColorType("hsl(0, 0%, 0%)"), "oklch");
    assert.notEqual(getColorType("lab(0 0 0)"), "oklch");
    assert.notEqual(getColorType("lch(0 0 0)"), "oklch");
    assert.notEqual(getColorType("rgb(0, 0, 0)"), "oklch");
    assert.notEqual(getColorType("#fff"), "oklch");
    assert.notEqual(getColorType("blue"), "oklch");
  });
});

describe("named color is named", () => {
  it("should return 'named'", () => {
    assert.equal(getColorType("blue"), "named");
    assert.equal(getColorType("red"), "named");
    assert.equal(getColorType("seagreen"), "named");
    assert.equal(getColorType("skyblue"), "named");
  });

  it("should return an error for invalid named colors", () => {
    assert.throws(() => getColorType("blu"));
    assert.throws(() => getColorType("redish"));
    assert.throws(() => getColorType("transparent"));
  });

  it("should not return 'named' on other color types", () => {
    assert.notEqual(getColorType("hsl(0, 0%, 0%)"), "named");
    assert.notEqual(getColorType("lab(0 0 0)"), "named");
    assert.notEqual(getColorType("lch(0 0 0)"), "named");
    assert.notEqual(getColorType("oklch(0 0 0)"), "named");
    assert.notEqual(getColorType("rgb(0, 0, 0)"), "named");
    assert.notEqual(getColorType("#fff"), "named");
  });
});
