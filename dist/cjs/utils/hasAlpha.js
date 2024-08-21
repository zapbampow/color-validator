"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colorRegex_js_1 = require("../patterns/colorRegex.js");
const hex_js_1 = require("../validate/hex.js");
const noColor_js_1 = __importDefault(require("../validate/noColor.js"));
function hasAlpha(color) {
    if ((0, noColor_js_1.default)(color))
        return false;
    let endsWithAlphaPattern = colorRegex_js_1.endsWithAlphaRegex.test(color);
    let hasFourCommaChannels = color.split(",").length === 4;
    let isSplitWithSlash = color.split("/").length === 2;
    let hasAlphaChannel = endsWithAlphaPattern && (hasFourCommaChannels || isSplitWithSlash);
    return hasAlphaChannel || (0, hex_js_1.isHexAlpha)(color);
}
exports.default = hasAlpha;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzQWxwaGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvaGFzQWxwaGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2REFBK0Q7QUFDL0QsK0NBQWdEO0FBQ2hELHdFQUE2QztBQUU3QyxTQUF3QixRQUFRLENBQUMsS0FBYTtJQUM1QyxJQUFJLElBQUEsb0JBQU8sRUFBQyxLQUFLLENBQUM7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUVqQyxJQUFJLG9CQUFvQixHQUFHLGtDQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxRCxJQUFJLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztJQUN6RCxJQUFJLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztJQUNyRCxJQUFJLGVBQWUsR0FDakIsb0JBQW9CLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDO0lBRXJFLE9BQU8sZUFBZSxJQUFJLElBQUEsbUJBQVUsRUFBQyxLQUFLLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBVkQsMkJBVUMifQ==