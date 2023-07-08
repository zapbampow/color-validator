import hex from "../validate/hex.js";
import rgb from "../validate/rgb.js";
import hsl from "../validate/hsl.js";
import lab from "../validate/lab.js";
import oklab from "../validate/oklab.js";
import lch from "../validate/lch.js";
import oklch from "../validate/oklch.js";
import named from "../validate/named.js";

export default function getColorType(color: string) {
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
