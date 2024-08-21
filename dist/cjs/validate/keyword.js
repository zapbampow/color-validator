"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const noColor_js_1 = __importDefault(require("./noColor.js"));
function isKeyword(color) {
    if ((0, noColor_js_1.default)(color))
        return false;
    let keywords = [
        "currentColor",
        "currentcolor",
        "inherit",
        "initial",
        "revert",
        "transparent",
        "unset",
    ];
    return keywords.includes(color);
}
exports.default = isKeyword;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5d29yZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92YWxpZGF0ZS9rZXl3b3JkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOERBQW1DO0FBRW5DLFNBQXdCLFNBQVMsQ0FBQyxLQUFhO0lBQzdDLElBQUksSUFBQSxvQkFBTyxFQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBRWpDLElBQUksUUFBUSxHQUFHO1FBQ2IsY0FBYztRQUNkLGNBQWM7UUFDZCxTQUFTO1FBQ1QsU0FBUztRQUNULFFBQVE7UUFDUixhQUFhO1FBQ2IsT0FBTztLQUNSLENBQUM7SUFFRixPQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbEMsQ0FBQztBQWRELDRCQWNDIn0=