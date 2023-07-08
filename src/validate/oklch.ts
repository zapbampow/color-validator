import { oklchRegex } from "../patterns/colorRegex.js";
import noColor from "./noColor.js";

export default function isOklch(color: string) {
  if (noColor(color)) return false;
  return oklchRegex.test(color);
}
