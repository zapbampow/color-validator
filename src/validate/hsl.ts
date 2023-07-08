import { hslCommas, hslSpaces } from "../patterns/colorRegex.js";
import noColor from "./noColor.js";

export default function isHsl(color: string) {
  if (noColor(color)) return false;
  let commas = hslCommas.test(color);
  let spaces = hslSpaces.test(color);
  return commas || spaces;
}
