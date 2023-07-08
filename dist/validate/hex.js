import { hexRegex } from "../patterns/colorRegex";
import noColor from "./noColor.js";
export default function isHex(color) {
    if (noColor(color))
        return false;
    return hexRegex.test(color);
}
//# sourceMappingURL=hex.js.map