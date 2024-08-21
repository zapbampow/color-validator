"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const hexWithAlphaRegex = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;
const hexNoAlphaRegex = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
// hsl done only for commas
const hslC = `^(hsl)a?\\(${hue}, ?(${zeroToOneHundredPercent}), ?(${zeroToOneHundredPercent})(, ?${alpha})?\\)$`;
const hslCommas = new RegExp(hslC, "i");
// hsl done only for spaces
const hslS = `^(hsl)a?\\(${hue} (${zeroToOneHundredPercent}) (${zeroToOneHundredPercent})( \\/ ${alpha})?\\)$`;
const hslSpaces = new RegExp(hslS, "i");
const rgbC = `^(rgb)a?\\((${zeroToTwoHundredFiftyFive}), ?(${zeroToTwoHundredFiftyFive}), ?(${zeroToTwoHundredFiftyFive})(, ?${alpha})?\\)$`;
const rgbCommas = new RegExp(rgbC, "i");
const rgbS = `^(rgb)a?\\((${zeroToTwoHundredFiftyFive}) (${zeroToTwoHundredFiftyFive}) (${zeroToTwoHundredFiftyFive})( \\/ ${alpha})?\\)$`;
const rgbSpaces = new RegExp(rgbS, "i");
const rgbP = `^(rgb)a?\\((${zeroToOneHundredPercent}) (${zeroToOneHundredPercent}) (${zeroToOneHundredPercent})( \\/ ${alpha})?\\)$`;
const rgbPercents = new RegExp(rgbP, "i");
const lab = `^(lab)\\((${zeroToOneHundred}%?) (-?(${zeroToOneHundredTwentyFive}|${zeroToOneHundredPercent})) (-?(${zeroToOneHundredTwentyFive}|${zeroToOneHundredPercent}))( / ${alpha})?\\)`;
const labRegex = new RegExp(lab, "i");
const oklab = `^(oklab)\\((${zeroToOneHundred}%?) (-?(${zeroToOneHundredTwentyFive}|${zeroToOneHundredPercent})) (-?(${zeroToOneHundredTwentyFive}|${zeroToOneHundredPercent}))( / ${alpha})?\\)`;
const oklabRegex = new RegExp(oklab, "i");
const lch = `^(lch)\\((${zeroToOneHundred}%?) (${zeroToTwoHundredThirty}) ${hue}( / (${zeroToOneHundredPercent}|${zeroToOne}))?\\)`;
const lchRegex = new RegExp(lch, "i");
const oklch = `^(oklch)\\((${zeroToOneHundred}%?) (${zeroToTwoHundredThirty}) ${hue}( / ${alpha})?\\)`;
const oklchRegex = new RegExp(oklch, "i");
const endsWithAlpha = `((\\s\\/\\s${alpha})|(,\\s${alpha}))?`;
const endsWithAlphaRegex = new RegExp(endsWithAlpha, "i");
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
exports.default = regex;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JSZWdleC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXR0ZXJucy9jb2xvclJlZ2V4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0NBQW9DO0FBQ3BDLE1BQU0sT0FBTyxHQUFHLGFBQWEsQ0FBQztBQUM5QixNQUFNLFNBQVMsR0FBRyxXQUFXLE9BQU8sTUFBTSxDQUFDO0FBQzNDLE1BQU0sVUFBVSxHQUFHLFFBQVEsT0FBTyxHQUFHLENBQUM7QUFDdEMsTUFBTSxTQUFTLEdBQUcsUUFBUSxPQUFPLEdBQUcsQ0FBQztBQUNyQyxNQUFNLFNBQVMsR0FBRyxJQUFJLFVBQVUsTUFBTSxDQUFDO0FBQ3ZDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxPQUFPLGNBQWMsT0FBTyxVQUFVLE9BQU8sSUFBSSxDQUFDO0FBQy9FLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxnQkFBZ0IsT0FBTyxDQUFDO0FBQ3JELE1BQU0sdUJBQXVCLEdBQUcsR0FBRyxnQkFBZ0IsR0FBRyxDQUFDO0FBQ3ZELE1BQU0sMEJBQTBCLEdBQUcsSUFBSSxPQUFPLGVBQWUsT0FBTyxlQUFlLE9BQU8sZUFBZSxPQUFPLFVBQVUsT0FBTyxJQUFJLENBQUM7QUFDdEksTUFBTSxzQkFBc0IsR0FBRyxJQUFJLE9BQU8sbUJBQW1CLE9BQU8sZ0JBQWdCLE9BQU8sZUFBZSxPQUFPLFVBQVUsT0FBTyxJQUFJLENBQUM7QUFDdkksTUFBTSx5QkFBeUIsR0FBRyxNQUFNLE9BQU8sTUFBTSxTQUFTLGNBQWMsT0FBTyxnQkFBZ0IsT0FBTyxnQkFBZ0IsT0FBTyxZQUFZLE9BQU8sUUFBUSxDQUFDO0FBQzdKLE1BQU0sR0FBRyxHQUFHLFNBQVMsT0FBTyxvQkFBb0IsT0FBTyw0QkFBNEIsQ0FBQztBQUNwRixNQUFNLEtBQUssR0FBRyxJQUFJLHVCQUF1QixJQUFJLFNBQVMsR0FBRyxDQUFDO0FBRTFELE1BQU07QUFDTixNQUFNLFFBQVEsR0FDWixrRUFBa0Us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