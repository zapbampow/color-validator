import regex from "../patterns/colorRegex.js";
import noColor from "./noColor.js";

export default function isLch(color: string) {
  if (noColor(color)) return false;
  return regex.lch.test(color);
}
