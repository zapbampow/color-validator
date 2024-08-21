"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hex_js_1 = __importStar(require("./hex.js"));
const rgb_js_1 = __importDefault(require("./rgb.js"));
const hsl_js_1 = __importDefault(require("./hsl.js"));
const lab_js_1 = __importDefault(require("./lab.js"));
const lch_js_1 = __importDefault(require("./lch.js"));
const oklab_js_1 = __importDefault(require("./oklab.js"));
const oklch_js_1 = __importDefault(require("./oklch.js"));
const named_js_1 = __importDefault(require("./named.js"));
const keyword_js_1 = __importDefault(require("./keyword.js"));
function isColor(color) {
    return ((0, hex_js_1.default)(color) ||
        (0, rgb_js_1.default)(color) ||
        (0, hsl_js_1.default)(color) ||
        (0, lab_js_1.default)(color) ||
        (0, lch_js_1.default)(color) ||
        (0, oklab_js_1.default)(color) ||
        (0, oklch_js_1.default)(color) ||
        (0, named_js_1.default)(color));
}
function isColorOrKeyword(color) {
    return isColor(color) || (0, keyword_js_1.default)(color);
}
exports.default = {
    color: isColor,
    colorOrKeyword: isColorOrKeyword,
    hex: hex_js_1.default,
    hexAlpha: hex_js_1.isHexAlpha,
    hexNoAlpha: hex_js_1.isHexNoAlpha,
    rgb: rgb_js_1.default,
    hsl: hsl_js_1.default,
    lab: lab_js_1.default,
    lch: lch_js_1.default,
    oklab: oklab_js_1.default,
    oklch: oklch_js_1.default,
    named: named_js_1.default,
    keyword: keyword_js_1.default,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmFsaWRhdGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUF5RDtBQUN6RCxzREFBMkI7QUFDM0Isc0RBQTJCO0FBQzNCLHNEQUEyQjtBQUMzQixzREFBMkI7QUFDM0IsMERBQStCO0FBQy9CLDBEQUErQjtBQUMvQiwwREFBK0I7QUFDL0IsOERBQW1DO0FBRW5DLFNBQVMsT0FBTyxDQUFDLEtBQWE7SUFDNUIsT0FBTyxDQUNMLElBQUEsZ0JBQUcsRUFBQyxLQUFLLENBQUM7UUFDVixJQUFBLGdCQUFHLEVBQUMsS0FBSyxDQUFDO1FBQ1YsSUFBQSxnQkFBRyxFQUFDLEtBQUssQ0FBQztRQUNWLElBQUEsZ0JBQUcsRUFBQyxLQUFLLENBQUM7UUFDVixJQUFBLGdCQUFHLEVBQUMsS0FBSyxDQUFDO1FBQ1YsSUFBQSxrQkFBSyxFQUFDLEtBQUssQ0FBQztRQUNaLElBQUEsa0JBQUssRUFBQyxLQUFLLENBQUM7UUFDWixJQUFBLGtCQUFLLEVBQUMsS0FBSyxDQUFDLENBQ2IsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLGdCQUFnQixDQUFDLEtBQWE7SUFDckMsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksSUFBQSxvQkFBTyxFQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFFRCxrQkFBZTtJQUNiLEtBQUssRUFBRSxPQUFPO0lBQ2QsY0FBYyxFQUFFLGdCQUFnQjtJQUNoQyxHQUFHLEVBQUgsZ0JBQUc7SUFDSCxRQUFRLEVBQUUsbUJBQVU7SUFDcEIsVUFBVSxFQUFFLHFCQUFZO0lBQ3hCLEdBQUcsRUFBSCxnQkFBRztJQUNILEdBQUcsRUFBSCxnQkFBRztJQUNILEdBQUcsRUFBSCxnQkFBRztJQUNILEdBQUcsRUFBSCxnQkFBRztJQUNILEtBQUssRUFBTCxrQkFBSztJQUNMLEtBQUssRUFBTCxrQkFBSztJQUNMLEtBQUssRUFBTCxrQkFBSztJQUNMLE9BQU8sRUFBUCxvQkFBTztDQUNSLENBQUMifQ==