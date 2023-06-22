import { rgbCommas, rgbSpaces } from "../patterns/colorRegex.mjs";
import noColor from "./noColor.mjs";

export default function isRgb(color) {
  if (noColor(color)) return false;
  let commas = rgbCommas.test(color);
  let spaces = rgbSpaces.test(color);
  return commas || spaces;
}
