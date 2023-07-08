import { rgbCommas, rgbSpaces, rgbPercents } from "../patterns/colorRegex.js";
import noColor from "./noColor.js";

export default function isRgb(color: string) {
  if (noColor(color)) return false;
  let commas = rgbCommas.test(color);
  let spaces = rgbSpaces.test(color);
  let percent = rgbPercents.test(color);
  return commas || spaces || percent;
}
