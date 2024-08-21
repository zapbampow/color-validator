import regex from "../patterns/colorRegex.js";
import noColor from "./noColor.js";

export default function isLab(color: string) {
  if (noColor(color)) return false;
  return regex.lab.test(color);
}
