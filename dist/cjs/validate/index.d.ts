import hex, { isHexAlpha, isHexNoAlpha } from "./hex.js";
import rgb from "./rgb.js";
import hsl from "./hsl.js";
import lab from "./lab.js";
import lch from "./lch.js";
import oklab from "./oklab.js";
import oklch from "./oklch.js";
import named from "./named.js";
import keyword from "./keyword.js";
declare function isColor(color: string): boolean;
declare function isColorOrKeyword(color: string): boolean;
declare const _default: {
    color: typeof isColor;
    colorOrKeyword: typeof isColorOrKeyword;
    hex: typeof hex;
    hexAlpha: typeof isHexAlpha;
    hexNoAlpha: typeof isHexNoAlpha;
    rgb: typeof rgb;
    hsl: typeof hsl;
    lab: typeof lab;
    lch: typeof lch;
    oklab: typeof oklab;
    oklch: typeof oklch;
    named: typeof named;
    keyword: typeof keyword;
};
export default _default;
