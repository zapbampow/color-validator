import regex from "../patterns/colorRegex.js";
import noColor from "./noColor.js";

export default function isHsl(color: string) {
  if (noColor(color)) return false;
  let commas = regex.hslCommas.test(color);
  let spaces = regex.hslSpaces.test(color);
  return commas || spaces;
}
