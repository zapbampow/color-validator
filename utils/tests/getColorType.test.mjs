import { describe, it } from "node:test";
import assert from "node:assert/strict";
import getColorType from "../getColorType.mjs";

describe("throws errors on invalid inputs", () => {
  it("should throw error when no color provided", () => {
    assert.throws(() => getColorType());
  });

  it("should throw error when not a string", () => {
    assert.throws(() => getColorType(123), Error);
    assert.throws(() => getColorType({}), Error);
    assert.throws(() => getColorType([]), Error);
    assert.throws(() => getColorType(true), Error);
    assert.throws(() => getColorType(null), Error);
    assert.throws(() => getColorType(undefined), Error);
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
