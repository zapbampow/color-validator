import { hexRegex } from "../patterns/colorRegex.js";
import { hexWithAlphaRegex, hexNoAlphaRegex } from "../patterns/colorRegex.js";
import noColor from "./noColor.js";

export default function isHex(color: string) {
  if (noColor(color)) return false;
  return hexRegex.test(color);
}

export function isHexAlpha(color: string) {
  if (noColor(color)) return false;
  return hexWithAlphaRegex.test(color);
}

export function isHexNoAlpha(color: string) {
  if (noColor(color)) return false;
  return hexNoAlphaRegex.test(color);
}
