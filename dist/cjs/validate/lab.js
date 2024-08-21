"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colorRegex_js_1 = __importDefault(require("../patterns/colorRegex.js"));
const noColor_js_1 = __importDefault(require("./noColor.js"));
function isLab(color) {
    if ((0, noColor_js_1.default)(color))
        return false;
    return colorRegex_js_1.default.lab.test(color);
}
exports.default = isLab;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZhbGlkYXRlL2xhYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhFQUE4QztBQUM5Qyw4REFBbUM7QUFFbkMsU0FBd0IsS0FBSyxDQUFDLEtBQWE7SUFDekMsSUFBSSxJQUFBLG9CQUFPLEVBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDakMsT0FBTyx1QkFBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQUhELHdCQUdDIn0=