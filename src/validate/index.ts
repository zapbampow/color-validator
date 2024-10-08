import hex, { isHexAlpha, isHexNoAlpha } from "./hex.js";
import rgb from "./rgb.js";
import hsl from "./hsl.js";
import lab from "./lab.js";
import lch from "./lch.js";
import oklab from "./oklab.js";
import oklch from "./oklch.js";
import named from "./named.js";
import keyword from "./keyword.js";

function isColor(color: string) {
  return (
    hex(color) ||
    rgb(color) ||
    hsl(color) ||
    lab(color) ||
    lch(color) ||
    oklab(color) ||
    oklch(color) ||
    named(color)
  );
}

function isColorOrKeyword(color: string) {
  return isColor(color) || keyword(color);
}

export default {
  color: isColor,
  colorOrKeyword: isColorOrKeyword,
  hex,
  hexAlpha: isHexAlpha,
  hexNoAlpha: isHexNoAlpha,
  rgb,
  hsl,
  lab,
  lch,
  oklab,
  oklch,
  named,
  keyword,
};
