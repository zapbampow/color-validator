import { oklabRegex } from "../patterns/colorRegex.js";
import noColor from "./noColor.js";

export default function isOklab(color: string) {
  if (noColor(color)) return false;
  return oklabRegex.test(color);
}
