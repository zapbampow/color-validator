"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHexNoAlpha = exports.isHexAlpha = void 0;
const colorRegex_js_1 = __importDefault(require("../patterns/colorRegex.js"));
const noColor_js_1 = __importDefault(require("./noColor.js"));
function isHex(color) {
    if ((0, noColor_js_1.default)(color))
        return false;
    return colorRegex_js_1.default.hex.test(color);
}
exports.default = isHex;
function isHexAlpha(color) {
    if ((0, noColor_js_1.default)(color))
        return false;
    return colorRegex_js_1.default.hexWithAlpha.test(color);
}
exports.isHexAlpha = isHexAlpha;
function isHexNoAlpha(color) {
    if ((0, noColor_js_1.default)(color))
        return false;
    return colorRegex_js_1.default.hexNoAlpha.test(color);
}
exports.isHexNoAlpha = isHexNoAlpha;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGV4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZhbGlkYXRlL2hleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw4RUFBOEM7QUFDOUMsOERBQW1DO0FBRW5DLFNBQXdCLEtBQUssQ0FBQyxLQUFhO0lBQ3pDLElBQUksSUFBQSxvQkFBTyxFQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQ2pDLE9BQU8sdUJBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9CLENBQUM7QUFIRCx3QkFHQztBQUVELFNBQWdCLFVBQVUsQ0FBQyxLQUFhO0lBQ3RDLElBQUksSUFBQSxvQkFBTyxFQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQ2pDLE9BQU8sdUJBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3hDLENBQUM7QUFIRCxnQ0FHQztBQUVELFNBQWdCLFlBQVksQ0FBQyxLQUFhO0lBQ3hDLElBQUksSUFBQSxvQkFBTyxFQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQ2pDLE9BQU8sdUJBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RDLENBQUM7QUFIRCxvQ0FHQyJ9