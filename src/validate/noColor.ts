export default function noColor(color: string) {
  if (!color) return true;
  if (typeof color !== "string") return true;
  if (color.length === 0) return true;
  return false;
}
