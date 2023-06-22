import { labRegex } from "../patterns/colorRegex.mjs";
import noColor from "./noColor.mjs";

export default function isLab(color) {
  if (noColor(color)) return false;
  return labRegex.test(color);
}
