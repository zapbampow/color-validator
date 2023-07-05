import hex from "../validate/hex.mjs";
import rgb from "../validate/rgb.mjs";
import hsl from "../validate/hsl.mjs";

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

  throw new Error("Invalid color");
}
