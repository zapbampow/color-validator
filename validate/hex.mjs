import { hexRegex } from "../patterns";
import noColor from "./noColor";

export default function isHex(color) {
  if (noColor(color)) return false;
  return hexRegex.test(color);
}
