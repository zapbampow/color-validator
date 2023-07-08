import { hslCommas, hslSpaces } from "../patterns/colorRegex";
import noColor from "./noColor.js";
export default function isHsl(color) {
    if (noColor(color))
        return false;
    let commas = hslCommas.test(color);
    let spaces = hslSpaces.test(color);
    return commas || spaces;
}
//# sourceMappingURL=hsl.js.map