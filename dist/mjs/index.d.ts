import validate from "./validate/index.js";
import { hexRegex, hslCommas, hslSpaces, rgbCommas, rgbSpaces, labRegex, oklabRegex, lchRegex, oklchRegex } from "./patterns/colorRegex.js";
import getColorType from "./utils/getColorType.js";
import hasAlpha from "./utils/hasAlpha.js";
export default validate;
export { hexRegex, hslCommas, hslSpaces, rgbCommas, rgbSpaces, labRegex, oklabRegex, lchRegex, oklchRegex, getColorType, hasAlpha, };
