import { lchRegex } from "../patterns/colorRegex";
import noColor from "./noColor.js";

export default function isLch(color: string) {
  if (noColor(color)) return false;
  return lchRegex.test(color);
}
