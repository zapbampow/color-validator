"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.regex = exports.hasAlpha = exports.getColorType = void 0;
const colorRegex_js_1 = __importDefault(require("./patterns/colorRegex.js"));
exports.regex = colorRegex_js_1.default;
const getColorType_js_1 = __importDefault(require("./utils/getColorType.js"));
exports.getColorType = getColorType_js_1.default;
const hasAlpha_js_1 = __importDefault(require("./utils/hasAlpha.js"));
exports.hasAlpha = hasAlpha_js_1.default;
const index_js_1 = __importDefault(require("./validate/index.js"));
exports.default = index_js_1.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNkVBQTZDO0FBTVosZ0JBTjFCLHVCQUFLLENBTTBCO0FBTHRDLDhFQUFtRDtBQUsxQyx1QkFMRix5QkFBWSxDQUtFO0FBSnJCLHNFQUEyQztBQUlwQixtQkFKaEIscUJBQVEsQ0FJZ0I7QUFIL0IsbUVBQTJDO0FBRTNDLGtCQUFlLGtCQUFRLENBQUMifQ==