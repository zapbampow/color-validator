import { describe, it } from "node:test";
import assert from "node:assert/strict";
import hsl from "../hsl";

describe("hsl validation", () => {
  it("should return true for hsl", () => {
    assert(hsl("hsl(0, 0%, 0%)"));
    assert(hsl("hsl(0, 0%, 0%, 25%)"));
    assert(hsl("hsl(0, 0%, 0%, .25)"));
    assert(hsl("hsl(20deg, 0%, 0%, 0.25)"));
    assert(hsl("hsl(.2turn, 0%, 0%, 0.25)"));
    assert(hsl("hsl(0 0% 0%)"));
    assert(hsl("hsl(0 0% 0% / 25%)"));
    assert(hsl("hsl(0 0% 0% / .25)"));
    assert(hsl("hsl(20deg 0% 0% / 0.25)"));
    assert(hsl("hsl(.2turn 0% 0% / 0.25)"));
    assert(hsl("hsl(20 100% 100% / 1)"));
    assert(hsl("hsla(0, 0%, 0%, 25%)"));
    assert(hsl("hsla(0, 0%, 0%, .25)"));
    assert(hsl("hsla(20 0% 0% / 0.25)"));
    assert(hsl("hsla(.2turn 0% 0% / 0.25)"));
  });

  it("should return false for hsl", () => {
    assert(!hsl("hsl(0, 0%, 0% / 25%)"));
    assert(!hsl("hsl(0, 0%, 0% / .25)"));
    assert(!hsl("hsl(20deg 0% 0%, 0.25)"));
    assert(!hsl("hsla(.2turn 0% 0%, 0.25)"));
    assert(!hsl("hsla(20, 100%, 100%, / 1)"));
    assert(!hsl("#fff"));
    assert(!hsl("#ffffff"));
    assert(!hsl("rgb(0, 0, 0)"));
    assert(!hsl("rgba(0, 0, 0, 0)"));
    assert(!hsl("lab(0, 0, 0)"));
    assert(!hsl("oklab(0, 0, 0)"));
    assert(!hsl("lch(0, 0, 0)"));
    assert(!hsl("oklch(0, 0, 0)"));
    assert(!hsl("hcl(0, 0, 0)"));
    assert(!hsl("Chocolate"));
    assert(!hsl());
    assert(!hsl(true));
    assert(!hsl(123));
    assert(!hsl([]));
  });
});
