# 🎨 Color Validator
Utilities to validate CSS colors, including named colors, css keywords, hex, rgb, rgba, hsl, hsla, lch, oklch, lab, and oklab.

There are so many variations for HTML colors, even for a single type of color. Checking whether any given color is a valid color can get a little tricky.

For example, a hex color is a pretty simple pattern. It starts with a #, followed by 6 characters that are each a number or a letter between A and F (#123abc). 

Or 3 characters for short hand (#0f0). Or 8 if using an alpha channel (#000000aa). Or 4 if using short hand with an alpha channel (#000a). 

As regex that looks like this: 
```
/^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{4}|[A-Fa-f0-9]{3})$/
```

HSL colors are more complex. The h, s, and l can be separated by commas or not. The hue can be a number, degrees, radians, gradians, or turns. The alpha can be a percentage or a decimal. They can start with hsl or hsla. If values are separated by spaces, then the alpha is preceded by a "/". 

The regex for that is quite a bit more complicated. This is just for the comma separated version.

```
/^(hsl)a?\(((0|0?(?:\.\d+)|-?[1-9]([0-9]+)?(?:\.\d+)?)((deg)|(g?rad)|(turn))?), ?((((?:\.\d+)|[1-9][0-9](?:\.\d+)?|[0-9](?:\.\d+)?)|100)%), ?((((?:\.\d+)|[1-9][0-9](?:\.\d+)?|[0-9](?:\.\d+)?)|100)%)(, ?((((?:\.\d+)|[1-9][0-9](?:\.\d+)?|[0-9](?:\.\d+)?)|100)%|(?:0|0?((?:\.\d+))|1)))?\)$/i
```

You get the point. It's tricky. That's why you're here.

With 🎨 Color Validator you can check whether a color matches any of the valid patterns without needing to do the work of figuring out the complex regex for all the possibilities.

🎨 Color Validator also exposes `getColorType` and `hasAlpha` utilities, as well as the base regular expressions used for validation.

## Install
```js
npm i color-validator --save
```

## ESM Usage
```js
import validate, { regex, getColorType, hasAlpha } from "color-validator"

const isValid = validate.color("#000fff"); // true
const colorType = getColorType("hsl(0 100% 100%)"); // hsl
const hasAlpha = hasAlpha("rgb(25% 25% 25%)")   // false
const oklabRegex = regex.oklab;
```

## CommonJS Usage
```js
const validate = require("color-validator");

const isValid = validate.default.color("#000fff"); // true
const colorType = validate.getColorType("hsl(0 100% 100%)"); // hsl
const hasAlpha = validate.hasAlpha("rgb(25% 25% 25%)")   // false
const oklabRegex = validate.regex.oklab;

```

OR 

```js
const validate = require("color-validator").default;
const { regex, getColorType, hasAlpha } = require("color-validator");

const isValid = validate.color("#000fff"); // true
const colorType = getColorType("hsl(0 100% 100%)"); // hsl
const hasAlpha = hasAlpha("rgb(25% 25% 25%)")   // false
const oklabRegex = regex.oklab;

```

## Validate Utilities
```js
import validate from "color-validator"

// Validate any possible color
validate.color("#000000") // true

// Validate named colors
validate.named("AliceBlue") // true

// Validate css keywords
validate.keyword("currentColor") // true

// Validate whether a string is a color or a keyword
validate.colorOrKeyword("black") // true

// Validate color by type
validate.hex("#fff") // true
validate.hexAlpha("#123123aa") // true
validate.hexNoAlpha("#ff00ff") // true
validate.rgb("rgb(0, 0, 0)") // true
validate.hsl("hsl(0 100% 50%)") // true
validate.lab("lab(100 -100 125)") // true
validate.oklab("oklab(100 -100 125)") // true
validate.lch("lch(0 0 360)") // true
validate.oklch("oklch(0 0 360)") // true
```

## Regex Patterns
The regex utilities return the regular expression for each pattern. 

```js
import { regex } from "color-validator"

const {
    hex,
    hexWithAlpha,
    hexNoAlpha,
    hslCommas,
    hslSpaces,
    rgbCommas,
    rgbSpaces,
    rgbPercents,
    lab,
    oklab,
    lch,
    oklch,
    endsWithAlpha,
} = regex;

console.log(hex)  
// /^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{4}|[A-Fa-f0-9]{3})$/

```

## Other Utilities

### getColorType
Returns the type of color entered.

```ts
import { getColorType } from "color-validator"

type ColorType = "hex" | "rgb" | "hsl" | "lab" | "oklab" | "lch" | "oklch" | "named" | "keyword";

console.log(getColorType("#00ff00")) // hex
```

### hasAlpha
Returns whether the color has an alpha value

```js
import { hasAlpha } from "color-validator"

hasAlpha("hsl(0 25% 75% / .25)") // true
hasAlpha("#000") // false
```

## License
[MIT](LICENSE)

## Acknowledgements
This came about while working on a different project. I needed a way to check a variety of colors, including oklch. I couldn't find anything that was a perfect match, which led me down the color regex rabbit hole. 🐰🕳️

About when I thought this was near a releasable state I ran across [validate-color](https://github.com/dreamyguy/validate-color). While it didn't do everything I wanted, including oklch, it did point me to a couple of areas where this was lacking, including css keyword validation and preventing ReDoS attacks, which was new to me.