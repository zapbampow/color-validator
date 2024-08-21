import regex from "./patterns/colorRegex.js";
import getColorType from "./utils/getColorType.js";
import hasAlpha from "./utils/hasAlpha.js";
import validate from "./validate/index.js";

export default validate;
export { getColorType, hasAlpha, regex };
