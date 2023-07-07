import hex from "../validate/hex.mjs";
import rgb from "../validate/rgb.mjs";
import hsl from "../validate/hsl.mjs";
import lab from "../validate/lab.mjs";
import oklab from "../validate/oklab.mjs";
import lch from "../validate/lch.mjs";
import oklch from "../validate/oklch.mjs";
import named from "../validate/named.mjs";

export default function getColorType(color) {
  if (!color) {
    throw new Error("No color provided");
  }

  if (typeof color !== "string") {
    throw new Error("Color must be a string");
  }

  if (hex(color)) return "hex";
  if (rgb(color)) return "rgb";
  if (hsl(color)) return "hsl";
  if (lab(color)) return "lab";
  if (oklab(color)) return "oklab";
  if (lch(color)) return "lch";
  if (oklch(color)) return "oklch";
  if (named(color)) return "named";

  throw new Error("Invalid color");
}
