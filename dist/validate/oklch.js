import { oklchRegex } from "../patterns/colorRegex.js";
import noColor from "./noColor.js";
export default function isOklch(color) {
    if (noColor(color))
        return false;
    return oklchRegex.test(color);
}
//# sourceMappingURL=oklch.js.map