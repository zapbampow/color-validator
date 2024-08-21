"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const namedColors_js_1 = __importDefault(require("../patterns/namedColors.js"));
const noColor_js_1 = __importDefault(require("./noColor.js"));
function isNamed(color) {
    if ((0, noColor_js_1.default)(color))
        return false;
    return namedColors_js_1.default[color === null || color === void 0 ? void 0 : color.toLowerCase()] !== undefined;
}
exports.default = isNamed;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmFsaWRhdGUvbmFtZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnRkFBcUQ7QUFDckQsOERBQW1DO0FBRW5DLFNBQXdCLE9BQU8sQ0FBQyxLQUFhO0lBQzNDLElBQUksSUFBQSxvQkFBTyxFQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQ2pDLE9BQU8sd0JBQVcsQ0FBQyxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsV0FBVyxFQUFFLENBQUMsS0FBSyxTQUFTLENBQUM7QUFDekQsQ0FBQztBQUhELDBCQUdDIn0=