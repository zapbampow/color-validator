import { oklabRegex } from "../patterns/colorRegex";
import noColor from "./noColor";
export default function isOklab(color) {
    if (noColor(color))
        return false;
    return oklabRegex.test(color);
}
//# sourceMappingURL=oklab.js.map