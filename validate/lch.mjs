import { lchRegex } from "../patterns/colorRegex.mjs";
import noColor from "./noColor.mjs";

export default function isLch(color) {
  if (noColor(color)) return false;
  return lchRegex.test(color);
}
