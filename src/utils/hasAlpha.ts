import regex from "../patterns/colorRegex.js";
import { isHexAlpha } from "../validate/hex.js";
import noColor from "../validate/noColor.js";

export default function hasAlpha(color: string) {
  if (noColor(color)) return false;

  let endsWithAlphaPattern = regex.endsWithAlpha.test(color);
  let hasFourCommaChannels = color.split(",").length === 4;
  let isSplitWithSlash = color.split("/").length === 2;
  let hasAlphaChannel =
    endsWithAlphaPattern && (hasFourCommaChannels || isSplitWithSlash);

  return hasAlphaChannel || isHexAlpha(color);
}
