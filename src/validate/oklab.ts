import regex from "../patterns/colorRegex.js";
import noColor from "./noColor.js";

export default function isOklab(color: string) {
  if (noColor(color)) return false;
  return regex.oklab.test(color);
}
