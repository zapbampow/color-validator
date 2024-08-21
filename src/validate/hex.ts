import regex from "../patterns/colorRegex.js";
import noColor from "./noColor.js";

export default function isHex(color: string) {
  if (noColor(color)) return false;
  return regex.hex.test(color);
}

export function isHexAlpha(color: string) {
  if (noColor(color)) return false;
  return regex.hexWithAlpha.test(color);
}

export function isHexNoAlpha(color: string) {
  if (noColor(color)) return false;
  return regex.hexNoAlpha.test(color);
}
