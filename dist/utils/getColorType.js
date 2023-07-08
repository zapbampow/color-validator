import hex from "../validate/hex";
import rgb from "../validate/rgb";
import hsl from "../validate/hsl";
import lab from "../validate/lab";
import oklab from "../validate/oklab";
import lch from "../validate/lch";
import oklch from "../validate/oklch";
import named from "../validate/named";
export default function getColorType(color) {
    if (!color) {
        throw new Error("No color provided");
    }
    if (typeof color !== "string") {
        throw new Error("Color must be a string");
    }
    if (hex(color))
        return "hex";
    if (rgb(color))
        return "rgb";
    if (hsl(color))
        return "hsl";
    if (lab(color))
        return "lab";
    if (oklab(color))
        return "oklab";
    if (lch(color))
        return "lch";
    if (oklch(color))
        return "oklch";
    if (named(color))
        return "named";
    throw new Error("Invalid color");
}
//# sourceMappingURL=getColorType.js.map