"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colorRegex_js_1 = require("../patterns/colorRegex.js");
const noColor_js_1 = __importDefault(require("./noColor.js"));
function isRgb(color) {
    if ((0, noColor_js_1.default)(color))
        return false;
    let commas = colorRegex_js_1.rgbCommas.test(color);
    let spaces = colorRegex_js_1.rgbSpaces.test(color);
    let percent = colorRegex_js_1.rgbPercents.test(color);
    return commas || spaces || percent;
}
exports.default = isRgb;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmdiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZhbGlkYXRlL3JnYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDZEQUE4RTtBQUM5RSw4REFBbUM7QUFFbkMsU0FBd0IsS0FBSyxDQUFDLEtBQWE7SUFDekMsSUFBSSxJQUFBLG9CQUFPLEVBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDakMsSUFBSSxNQUFNLEdBQUcseUJBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsSUFBSSxNQUFNLEdBQUcseUJBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsSUFBSSxPQUFPLEdBQUcsMkJBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsT0FBTyxNQUFNLElBQUksTUFBTSxJQUFJLE9BQU8sQ0FBQztBQUNyQyxDQUFDO0FBTkQsd0JBTUMifQ==