import { hexRegex } from "../patterns/colorRegex.mjs";
import noColor from "./noColor.mjs";

export default function isHex(color) {
  if (noColor(color)) return false;
  return hexRegex.test(color);
}
