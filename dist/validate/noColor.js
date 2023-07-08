export default function noColor(color) {
    if (!color)
        return true;
    if (typeof color !== "string")
        return true;
    if (color.length === 0)
        return true;
    return false;
}
//# sourceMappingURL=noColor.js.map