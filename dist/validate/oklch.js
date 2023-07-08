import { oklchRegex } from "../patterns/colorRegex";
import noColor from "./noColor";
export default function isOklch(color) {
    if (noColor(color))
        return false;
    return oklchRegex.test(color);
}
//# sourceMappingURL=oklch.js.map