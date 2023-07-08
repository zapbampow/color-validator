import { hexRegex } from "../patterns/colorRegex.js";
import noColor from "./noColor.js";

export default function isHex(color: string) {
  if (noColor(color)) return false;
  return hexRegex.test(color);
}
