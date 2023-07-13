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
const hexRegex =
  /^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{4}|[A-Fa-f0-9]{3})$/;
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

export {
  hexRegex,
  hexWithAlphaRegex,
  hexNoAlphaRegex,
  hslCommas,
  hslSpaces,
  rgbCommas,
  rgbSpaces,
  rgbPercents,
  labRegex,
  oklabRegex,
  lchRegex,
  oklchRegex,
  endsWithAlphaRegex,
};
