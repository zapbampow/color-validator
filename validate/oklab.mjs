import { oklabRegex } from "../patterns/colorRegex";
import noColor from "./noColor.mjs";

export default function isOklab(color) {
  if (noColor(color)) return false;
  return oklabRegex.test(color);
}
