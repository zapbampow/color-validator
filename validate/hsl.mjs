import { hslCommas, hslSpaces } from "../patterns/colorRegex.mjs";
import noColor from "./noColor.mjs";

export default function isHsl(color) {
  if (noColor(color)) return false;
  let commas = hslCommas.test(color);
  let spaces = hslSpaces.test(color);
  return commas || spaces;
}
