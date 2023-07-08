import { oklchRegex } from "../patterns/colorRegex";
import noColor from "./noColor";

export default function isOklch(color: string) {
  if (noColor(color)) return false;
  return oklchRegex.test(color);
}
