"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasAlpha = exports.getColorType = exports.oklchRegex = exports.lchRegex = exports.oklabRegex = exports.labRegex = exports.rgbSpaces = exports.rgbCommas = exports.hslSpaces = exports.hslCommas = exports.hexRegex = void 0;
const index_js_1 = __importDefault(require("./validate/index.js"));
const colorRegex_js_1 = require("./patterns/colorRegex.js");
Object.defineProperty(exports, "hexRegex", { enumerable: true, get: function () { return colorRegex_js_1.hexRegex; } });
Object.defineProperty(exports, "hslCommas", { enumerable: true, get: function () { return colorRegex_js_1.hslCommas; } });
Object.defineProperty(exports, "hslSpaces", { enumerable: true, get: function () { return colorRegex_js_1.hslSpaces; } });
Object.defineProperty(exports, "rgbCommas", { enumerable: true, get: function () { return colorRegex_js_1.rgbCommas; } });
Object.defineProperty(exports, "rgbSpaces", { enumerable: true, get: function () { return colorRegex_js_1.rgbSpaces; } });
Object.defineProperty(exports, "labRegex", { enumerable: true, get: function () { return colorRegex_js_1.labRegex; } });
Object.defineProperty(exports, "oklabRegex", { enumerable: true, get: function () { return colorRegex_js_1.oklabRegex; } });
Object.defineProperty(exports, "lchRegex", { enumerable: true, get: function () { return colorRegex_js_1.lchRegex; } });
Object.defineProperty(exports, "oklchRegex", { enumerable: true, get: function () { return colorRegex_js_1.oklchRegex; } });
const getColorType_js_1 = __importDefault(require("./utils/getColorType.js"));
exports.getColorType = getColorType_js_1.default;
const hasAlpha_js_1 = __importDefault(require("./utils/hasAlpha.js"));
exports.hasAlpha = hasAlpha_js_1.default;
exports.default = index_js_1.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsbUVBQTJDO0FBQzNDLDREQVVrQztBQU1oQyx5RkFmQSx3QkFBUSxPQWVBO0FBQ1IsMEZBZkEseUJBQVMsT0FlQTtBQUNULDBGQWZBLHlCQUFTLE9BZUE7QUFDVCwwRkFmQSx5QkFBUyxPQWVBO0FBQ1QsMEZBZkEseUJBQVMsT0FlQTtBQUNULHlGQWZBLHdCQUFRLE9BZUE7QUFDUiwyRkFmQSwwQkFBVSxPQWVBO0FBQ1YseUZBZkEsd0JBQVEsT0FlQTtBQUNSLDJGQWZBLDBCQUFVLE9BZUE7QUFiWiw4RUFBbUQ7QUFjakQsdUJBZEsseUJBQVksQ0FjTDtBQWJkLHNFQUEyQztBQWN6QyxtQkFkSyxxQkFBUSxDQWNMO0FBWlYsa0JBQWUsa0JBQVEsQ0FBQyJ9