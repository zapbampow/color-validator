"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colorRegex_js_1 = __importDefault(require("../patterns/colorRegex.js"));
const noColor_js_1 = __importDefault(require("./noColor.js"));
function isOklab(color) {
    if ((0, noColor_js_1.default)(color))
        return false;
    return colorRegex_js_1.default.oklab.test(color);
}
exports.default = isOklab;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2tsYWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmFsaWRhdGUvb2tsYWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4RUFBOEM7QUFDOUMsOERBQW1DO0FBRW5DLFNBQXdCLE9BQU8sQ0FBQyxLQUFhO0lBQzNDLElBQUksSUFBQSxvQkFBTyxFQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQ2pDLE9BQU8sdUJBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUFIRCwwQkFHQyJ9