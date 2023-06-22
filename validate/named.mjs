import namedColors from "../patterns/namedColors.mjs";
import noColor from "./noColor.mjs";

export default function isNamed(color) {
  if (noColor(color)) return false;
  return namedColors[color?.toLowerCase()] !== undefined;
}
