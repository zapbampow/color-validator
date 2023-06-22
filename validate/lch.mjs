import { lchRegex } from "../patterns/colorRegex";
import noColor from "./noColor.js";

export default function isLch(color) {
  if (noColor(color)) return false;
  return lchRegex.test(color);
}
