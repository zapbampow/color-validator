import hex from "./hex.mjs";
import rgb from "./rgb.mjs";
import hsl from "./hsl.mjs";
import lab from "./lab.mjs";
import lch from "./lch.mjs";
import oklab from "./oklab.mjs";
import oklch from "./oklch.mjs";
import named from "./named.mjs";

function isColor(color) {
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

export default {
  color: isColor,
  hex,
  rgb,
  hsl,
  lab,
  lch,
  oklab,
  oklch,
  named,
};
