import { labRegex } from "../patterns/colorRegex";
import noColor from "./noColor.js";

export default function isLab(color: string) {
  if (noColor(color)) return false;
  return labRegex.test(color);
}
