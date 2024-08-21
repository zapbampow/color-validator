"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hex_js_1 = __importDefault(require("../validate/hex.js"));
const rgb_js_1 = __importDefault(require("../validate/rgb.js"));
const hsl_js_1 = __importDefault(require("../validate/hsl.js"));
const lab_js_1 = __importDefault(require("../validate/lab.js"));
const oklab_js_1 = __importDefault(require("../validate/oklab.js"));
const lch_js_1 = __importDefault(require("../validate/lch.js"));
const oklch_js_1 = __importDefault(require("../validate/oklch.js"));
const named_js_1 = __importDefault(require("../validate/named.js"));
function getColorType(color) {
    if (!color) {
        throw new Error("No color provided");
    }
    if (typeof color !== "string") {
        throw new Error("Color must be a string");
    }
    if ((0, hex_js_1.default)(color))
        return "hex";
    if ((0, rgb_js_1.default)(color))
        return "rgb";
    if ((0, hsl_js_1.default)(color))
        return "hsl";
    if ((0, lab_js_1.default)(color))
        return "lab";
    if ((0, oklab_js_1.default)(color))
        return "oklab";
    if ((0, lch_js_1.default)(color))
        return "lch";
    if ((0, oklch_js_1.default)(color))
        return "oklch";
    if ((0, named_js_1.default)(color))
        return "named";
    throw new Error("Invalid color");
}
exports.default = getColorType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Q29sb3JUeXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2dldENvbG9yVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdFQUFxQztBQUNyQyxnRUFBcUM7QUFDckMsZ0VBQXFDO0FBQ3JDLGdFQUFxQztBQUNyQyxvRUFBeUM7QUFDekMsZ0VBQXFDO0FBQ3JDLG9FQUF5QztBQUN6QyxvRUFBeUM7QUFFekMsU0FBd0IsWUFBWSxDQUFDLEtBQWE7SUFDaEQsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztLQUN0QztJQUVELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQzdCLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztLQUMzQztJQUVELElBQUksSUFBQSxnQkFBRyxFQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQzdCLElBQUksSUFBQSxnQkFBRyxFQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQzdCLElBQUksSUFBQSxnQkFBRyxFQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQzdCLElBQUksSUFBQSxnQkFBRyxFQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQzdCLElBQUksSUFBQSxrQkFBSyxFQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sT0FBTyxDQUFDO0lBQ2pDLElBQUksSUFBQSxnQkFBRyxFQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQzdCLElBQUksSUFBQSxrQkFBSyxFQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sT0FBTyxDQUFDO0lBQ2pDLElBQUksSUFBQSxrQkFBSyxFQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sT0FBTyxDQUFDO0lBRWpDLE1BQU0sSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQW5CRCwrQkFtQkMifQ==