"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endsWithAlphaRegex = exports.oklchRegex = exports.lchRegex = exports.oklabRegex = exports.labRegex = exports.rgbPercents = exports.rgbSpaces = exports.rgbCommas = exports.hslSpaces = exports.hslCommas = exports.hexNoAlphaRegex = exports.hexWithAlphaRegex = exports.hexRegex = void 0;
// reusable patterns for color regex
const decimal = `(?:\\.\\d+)`;
const zeroToOne = `(?:0|0?(${decimal})|1)`;
const zeroToNine = `[0-9]${decimal}?`;
const oneToNine = `[1-9]${decimal}?`;
const zeroToTen = `(${zeroToNine}|10)`;
const zeroToNinetyNine = `(${decimal}|[1-9][0-9]${decimal}?|[0-9]${decimal}?)`;
const zeroToOneHundred = `(${zeroToNinetyNine}|100)`;
const zeroToOneHundredPercent = `${zeroToOneHundred}%`;
const zeroToOneHundredTwentyFive = `(${decimal}|125|12[0-4]${decimal}?|1[01][0-9]${decimal}?|[1-9][0-9]${decimal}?|[0-9]${decimal}?)`;
const zeroToTwoHundredThirty = `(${decimal}|230|2[0-2][0-9]${decimal}?|1[0-9][0-9]${decimal}?|[1-9][0-9]${decimal}?|[0-9]${decimal}?)`;
const zeroToTwoHundredFiftyFive = `(0?${decimal}|0|${oneToNine}|[1-9][0-9]${decimal}?|1[0-9][0-9]${decimal}?|2[0-4][0-9]${decimal}?|25[0-4]${decimal}?|255)`;
const hue = `((0|0?${decimal}|-?[1-9]([0-9]+)?${decimal}?)((deg)|(g?rad)|(turn))?)`;
const alpha = `(${zeroToOneHundredPercent}|${zeroToOne})`;
// hex
const hexRegex = /^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{4}|[A-Fa-f0-9]{3})$/;
exports.hexRegex = hexRegex;
const hexWithAlphaRegex = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;
exports.hexWithAlphaRegex = hexWithAlphaRegex;
const hexNoAlphaRegex = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
exports.hexNoAlphaRegex = hexNoAlphaRegex;
// hsl done only for commas
const hslC = `^(hsl)a?\\(${hue}, ?(${zeroToOneHundredPercent}), ?(${zeroToOneHundredPercent})(, ?${alpha})?\\)$`;
const hslCommas = new RegExp(hslC, "i");
exports.hslCommas = hslCommas;
// hsl done only for spaces
const hslS = `^(hsl)a?\\(${hue} (${zeroToOneHundredPercent}) (${zeroToOneHundredPercent})( \\/ ${alpha})?\\)$`;
const hslSpaces = new RegExp(hslS, "i");
exports.hslSpaces = hslSpaces;
const rgbC = `^(rgb)a?\\((${zeroToTwoHundredFiftyFive}), ?(${zeroToTwoHundredFiftyFive}), ?(${zeroToTwoHundredFiftyFive})(, ?${alpha})?\\)$`;
const rgbCommas = new RegExp(rgbC, "i");
exports.rgbCommas = rgbCommas;
const rgbS = `^(rgb)a?\\((${zeroToTwoHundredFiftyFive}) (${zeroToTwoHundredFiftyFive}) (${zeroToTwoHundredFiftyFive})( \\/ ${alpha})?\\)$`;
const rgbSpaces = new RegExp(rgbS, "i");
exports.rgbSpaces = rgbSpaces;
const rgbP = `^(rgb)a?\\((${zeroToOneHundredPercent}) (${zeroToOneHundredPercent}) (${zeroToOneHundredPercent})( \\/ ${alpha})?\\)$`;
const rgbPercents = new RegExp(rgbP, "i");
exports.rgbPercents = rgbPercents;
const lab = `^(lab)\\((${zeroToOneHundred}%?) (-?(${zeroToOneHundredTwentyFive}|${zeroToOneHundredPercent})) (-?(${zeroToOneHundredTwentyFive}|${zeroToOneHundredPercent}))( / ${alpha})?\\)`;
const labRegex = new RegExp(lab, "i");
exports.labRegex = labRegex;
const oklab = `^(oklab)\\((${zeroToOneHundred}%?) (-?(${zeroToOneHundredTwentyFive}|${zeroToOneHundredPercent})) (-?(${zeroToOneHundredTwentyFive}|${zeroToOneHundredPercent}))( / ${alpha})?\\)`;
const oklabRegex = new RegExp(oklab, "i");
exports.oklabRegex = oklabRegex;
const lch = `^(lch)\\((${zeroToOneHundred}%?) (${zeroToTwoHundredThirty}) ${hue}( / (${zeroToOneHundredPercent}|${zeroToOne}))?\\)`;
const lchRegex = new RegExp(lch, "i");
exports.lchRegex = lchRegex;
const oklch = `^(oklch)\\((${zeroToOneHundred}%?) (${zeroToTwoHundredThirty}) ${hue}( / ${alpha})?\\)`;
const oklchRegex = new RegExp(oklch, "i");
exports.oklchRegex = oklchRegex;
const endsWithAlpha = `((\\s\\/\\s${alpha})|(,\\s${alpha}))?`;
const endsWithAlphaRegex = new RegExp(endsWithAlpha, "i");
exports.endsWithAlphaRegex = endsWithAlphaRegex;
const regex = {
    hex: hexRegex,
    hexWithAlpha: hexWithAlphaRegex,
    hexNoAlpha: hexNoAlphaRegex,
    hslCommas,
    hslSpaces,
    rgbCommas,
    rgbSpaces,
    rgbPercents,
    lab: labRegex,
    oklab: oklabRegex,
    lch: lchRegex,
    oklch: oklchRegex,
    endsWithAlpha: endsWithAlphaRegex,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JSZWdleC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXR0ZXJucy9jb2xvclJlZ2V4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG9DQUFvQztBQUNwQyxNQUFNLE9BQU8sR0FBRyxhQUFhLENBQUM7QUFDOUIsTUFBTSxTQUFTLEdBQUcsV0FBVyxPQUFPLE1BQU0sQ0FBQztBQUMzQyxNQUFNLFVBQVUsR0FBRyxRQUFRLE9BQU8sR0FBRyxDQUFDO0FBQ3RDLE1BQU0sU0FBUyxHQUFHLFFBQVEsT0FBTyxHQUFHLENBQUM7QUFDckMsTUFBTSxTQUFTLEdBQUcsSUFBSSxVQUFVLE1BQU0sQ0FBQztBQUN2QyxNQUFNLGdCQUFnQixHQUFHLElBQUksT0FBTyxjQUFjLE9BQU8sVUFBVSxPQUFPLElBQUksQ0FBQztBQUMvRSxNQUFNLGdCQUFnQixHQUFHLElBQUksZ0JBQWdCLE9BQU8sQ0FBQztBQUNyRCxNQUFNLHVCQUF1QixHQUFHLEdBQUcsZ0JBQWdCLEdBQUcsQ0FBQztBQUN2RCxNQUFNLDBCQUEwQixHQUFHLElBQUksT0FBTyxlQUFlLE9BQU8sZUFBZSxPQUFPLGVBQWUsT0FBTyxVQUFVLE9BQU8sSUFBSSxDQUFDO0FBQ3RJLE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxPQUFPLG1CQUFtQixPQUFPLGdCQUFnQixPQUFPLGVBQWUsT0FBTyxVQUFVLE9BQU8sSUFBSSxDQUFDO0FBQ3ZJLE1BQU0seUJBQXlCLEdBQUcsTUFBTSxPQUFPLE1BQU0sU0FBUyxjQUFjLE9BQU8sZ0JBQWdCLE9BQU8sZ0JBQWdCLE9BQU8sWUFBWSxPQUFPLFFBQVEsQ0FBQztBQUM3SixNQUFNLEdBQUcsR0FBRyxTQUFTLE9BQU8sb0JBQW9CLE9BQU8sNEJBQTRCLENBQUM7QUFDcEYsTUFBTSxLQUFLLEdBQUcsSUFBSSx1QkFBdUIsSUFBSSxTQUFTLEdBQUcsQ0FBQztBQUUxRCxNQUFNO0FBQ04sTUFBTSxRQUFRLEdBQ1osa0VBQWtF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