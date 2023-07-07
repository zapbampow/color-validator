import validate from "./validate.mjs";
import {
  hexRegex,
  hslCommas,
  hslSpaces,
  rgbCommas,
  rgbSpaces,
  labRegex,
  oklabRegex,
  lchRegex,
  oklchRegex,
} from "./patterns/colorRegex.mjs";
import getColorType from "./utils/getColorType.mjs";

export default validate;
export {
  hexRegex,
  hslCommas,
  hslSpaces,
  rgbCommas,
  rgbSpaces,
  labRegex,
  oklabRegex,
  lchRegex,
  oklchRegex,
  getColorType,
};
