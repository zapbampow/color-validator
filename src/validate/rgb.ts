import regex from "../patterns/colorRegex.js";
import noColor from "./noColor.js";

export default function isRgb(color: string) {
  if (noColor(color)) return false;
  let commas = regex.rgbCommas.test(color);
  let spaces = regex.rgbSpaces.test(color);
  let percent = regex.rgbPercents.test(color);
  return commas || spaces || percent;
}
