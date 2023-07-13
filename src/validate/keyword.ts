import noColor from "./noColor.js";

export default function isKeyword(color: string) {
  if (noColor(color)) return false;

  let keywords = [
    "currentColor",
    "currentcolor",
    "inherit",
    "initial",
    "revert",
    "transparent",
    "unset",
  ];

  return keywords.includes(color);
}
