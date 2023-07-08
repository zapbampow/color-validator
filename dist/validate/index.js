import hex from "./hex";
import rgb from "./rgb";
import hsl from "./hsl";
import lab from "./lab";
import lch from "./lch";
import oklab from "./oklab";
import oklch from "./oklch";
import named from "./named";
function isColor(color) {
    return (hex(color) ||
        rgb(color) ||
        hsl(color) ||
        lab(color) ||
        lch(color) ||
        oklab(color) ||
        oklch(color) ||
        named(color));
}
export default {
    color: isColor,
    hex,
    rgb,
    hsl,
    lab,
    lch,
    oklab,
    oklch,
    named,
};
//# sourceMappingURL=index.js.map