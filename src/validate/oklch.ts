import regex from "../patterns/colorRegex.js";
import noColor from "./noColor.js";

export default function isOklch(color: string) {
  if (noColor(color)) return false;
  return regex.oklch.test(color);
}
