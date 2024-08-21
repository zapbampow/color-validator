"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHexNoAlpha = exports.isHexAlpha = void 0;
const colorRegex_js_1 = require("../patterns/colorRegex.js");
const colorRegex_js_2 = require("../patterns/colorRegex.js");
const noColor_js_1 = __importDefault(require("./noColor.js"));
function isHex(color) {
    if ((0, noColor_js_1.default)(color))
        return false;
    return colorRegex_js_1.hexRegex.test(color);
}
exports.default = isHex;
function isHexAlpha(color) {
    if ((0, noColor_js_1.default)(color))
        return false;
    return colorRegex_js_2.hexWithAlphaRegex.test(color);
}
exports.isHexAlpha = isHexAlpha;
function isHexNoAlpha(color) {
    if ((0, noColor_js_1.default)(color))
        return false;
    return colorRegex_js_2.hexNoAlphaRegex.test(color);
}
exports.isHexNoAlpha = isHexNoAlpha;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGV4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZhbGlkYXRlL2hleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw2REFBcUQ7QUFDckQsNkRBQStFO0FBQy9FLDhEQUFtQztBQUVuQyxTQUF3QixLQUFLLENBQUMsS0FBYTtJQUN6QyxJQUFJLElBQUEsb0JBQU8sRUFBQyxLQUFLLENBQUM7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUNqQyxPQUFPLHdCQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzlCLENBQUM7QUFIRCx3QkFHQztBQUVELFNBQWdCLFVBQVUsQ0FBQyxLQUFhO0lBQ3RDLElBQUksSUFBQSxvQkFBTyxFQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQ2pDLE9BQU8saUNBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFIRCxnQ0FHQztBQUVELFNBQWdCLFlBQVksQ0FBQyxLQUFhO0lBQ3hDLElBQUksSUFBQSxvQkFBTyxFQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQ2pDLE9BQU8sK0JBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUhELG9DQUdDIn0=