import namedColors from "../patterns/namedColors.js";
import noColor from "./noColor.js";
export default function isNamed(color) {
    if (noColor(color))
        return false;
    return namedColors[color?.toLowerCase()] !== undefined;
}
//# sourceMappingURL=named.js.map