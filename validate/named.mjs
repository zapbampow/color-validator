import namedColors from "../patterns/namedColors";

export default function isNamed(color) {
  if (noColor(color)) return false;
  return namedColors[color?.toLowerCase()] !== undefined;
}
