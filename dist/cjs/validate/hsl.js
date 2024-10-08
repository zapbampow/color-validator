"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colorRegex_js_1 = __importDefault(require("../patterns/colorRegex.js"));
const noColor_js_1 = __importDefault(require("./noColor.js"));
function isHsl(color) {
    if ((0, noColor_js_1.default)(color))
        return false;
    let commas = colorRegex_js_1.default.hslCommas.test(color);
    let spaces = colorRegex_js_1.default.hslSpaces.test(color);
    return commas || spaces;
}
exports.default = isHsl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHNsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZhbGlkYXRlL2hzbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhFQUE4QztBQUM5Qyw4REFBbUM7QUFFbkMsU0FBd0IsS0FBSyxDQUFDLEtBQWE7SUFDekMsSUFBSSxJQUFBLG9CQUFPLEVBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDakMsSUFBSSxNQUFNLEdBQUcsdUJBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLElBQUksTUFBTSxHQUFHLHVCQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxPQUFPLE1BQU0sSUFBSSxNQUFNLENBQUM7QUFDMUIsQ0FBQztBQUxELHdCQUtDIn0=