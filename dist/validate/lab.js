import { labRegex } from "../patterns/colorRegex";
import noColor from "./noColor.js";
export default function isLab(color) {
    if (noColor(color))
        return false;
    return labRegex.test(color);
}
//# sourceMappingURL=lab.js.map