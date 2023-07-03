const decimal = `(?:\\.\\d+)`;
const zeroToOne = `(?:0|0?(${decimal})?|1)`;
const zeroToNine = `[0-9]${decimal}?`;
const oneToNine = `[1-9]${decimal}?`;
const zeroToTen = `(${zeroToNine}|10)`;
const zeroToNinetyNine = `([0-9]${decimal}?|[1-9][0-9]${decimal}?)`;
const zeroToOneHundred = `(${zeroToNinetyNine}|100)`;
const zeroToOneHundredPercent = `${zeroToOneHundred}%`;
const zeroToTwoHundredFiftyFive = `(0?${decimal}|0|${oneToNine}|[1-9][0-9]${decimal}?|1[0-9][0-9]${decimal}?|2[0-4][0-9]${decimal}?|25[0-4]${decimal}?|255)`;
const hue = `((0|0?${decimal}|-?[1-9]([0-9]+)?${decimal}?)((deg)|(g?rad)|(turn))?)`;
console.log("zeroToTwoHundredFiftyFive", zeroToTwoHundredFiftyFive);

const hexRegex = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

// hsl done only for commas
const hslC = `^(hsl)a?\\(${hue}, ?(${zeroToOneHundredPercent}), ?(${zeroToOneHundredPercent})(, ?(${zeroToOneHundredPercent}|${zeroToOne}))?\\)$`;
const hslCommas = new RegExp(hslC, "i");

// hsl done only for spaces
const hslS = `^(hsl)a?\\(${hue} (${zeroToOneHundredPercent}) (${zeroToOneHundredPercent})( \\/ (${zeroToOneHundredPercent}|${zeroToOne}))?\\)$`;
const hslSpaces = new RegExp(hslS, "i");

const rgbC = `^(rgb)a?\\((${zeroToTwoHundredFiftyFive}), ?(${zeroToTwoHundredFiftyFive}), ?(${zeroToTwoHundredFiftyFive})(, ?(${zeroToOneHundredPercent}|${zeroToOne}))?\\)$`;
const rgbCommas = new RegExp(rgbC, "i");

const rgbS = `^(rgb)a?\\((${zeroToTwoHundredFiftyFive}) (${zeroToTwoHundredFiftyFive}) (${zeroToTwoHundredFiftyFive})( \\/ (${zeroToOneHundredPercent}|${zeroToOne}))?\\)$`;
const rgbSpaces = new RegExp(rgbS, "i");

const rgbP = `^(rgb)a?\\((${zeroToOneHundredPercent}) (${zeroToOneHundredPercent}) (${zeroToOneHundredPercent})( \\/ (${zeroToOneHundredPercent}|${zeroToOne}))?\\)$`;
const rgbPercents = new RegExp(rgbP, "i");

// const rgbSpaces =
//   /^rgba?\((((?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)|((?:100|\d{1,2})%)) ){2}(((?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)|((?:100|\d{1,2})%)))( \/ (((?:100|\d{1,2})%)|(0?\.\d+%?)))?\)/;
const labRegex =
  /^lab\((0?(?:100|\d{0,2}(?:\.\d*)?)%?)( -?((0?(?:100|\d{0,2}(?:\.\d*)?)%?)|((0?[0-9]?[0-9]|1[01][0-9]|12[0-5])))){2}( \/ (((?:100|\d{1,2})%)|(0?\.\d+%?)))?\)/;
const oklabRegex =
  /^oklab\((0?(?:100|\d{0,2}(?:\.\d*)?)%?)( -?((0?(?:100|\d{0,2}(?:\.\d*)?)%?)|((0?[0-9]?[0-9]|1[01][0-9]|12[0-5])))){2}( \/ (((?:100|\d{1,2})%)|(0?\.\d+%?)))?\)/;
const lchRegex =
  /^lch\((0?(?:100|\d{0,2}(?:\.\d*)?)%?)( -?((0?(?:100|\d{0,2}(?:\.\d*)?)%?)|((0?[0-9]?[0-9]|1[01][0-9]|12[0-5])))){2}( \/ (((?:100|\d{1,2})%)|(0?\.\d+%?)))?\)/;
const oklchRegex =
  /^oklch\((0?(?:100|\d{0,2}(?:\.\d*)?)%?)( -?((0?(?:100|\d{0,2}(?:\.\d*)?)%?)|((0?[0-9]?[0-9]|1[01][0-9]|12[0-5])))){2}( \/ (((?:100|\d{1,2})%)|(0?\.\d+%?)))?\)/;

export {
  hexRegex,
  hslCommas,
  hslSpaces,
  rgbCommas,
  rgbSpaces,
  rgbPercents,
  labRegex,
  oklabRegex,
  lchRegex,
  oklchRegex,
};
