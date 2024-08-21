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
export default regex;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JSZWdleC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXR0ZXJucy9jb2xvclJlZ2V4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQztBQUNwQyxNQUFNLE9BQU8sR0FBRyxhQUFhLENBQUM7QUFDOUIsTUFBTSxTQUFTLEdBQUcsV0FBVyxPQUFPLE1BQU0sQ0FBQztBQUMzQyxNQUFNLFVBQVUsR0FBRyxRQUFRLE9BQU8sR0FBRyxDQUFDO0FBQ3RDLE1BQU0sU0FBUyxHQUFHLFFBQVEsT0FBTyxHQUFHLENBQUM7QUFDckMsTUFBTSxTQUFTLEdBQUcsSUFBSSxVQUFVLE1BQU0sQ0FBQztBQUN2QyxNQUFNLGdCQUFnQixHQUFHLElBQUksT0FBTyxjQUFjLE9BQU8sVUFBVSxPQUFPLElBQUksQ0FBQztBQUMvRSxNQUFNLGdCQUFnQixHQUFHLElBQUksZ0JBQWdCLE9BQU8sQ0FBQztBQUNyRCxNQUFNLHVCQUF1QixHQUFHLEdBQUcsZ0JBQWdCLEdBQUcsQ0FBQztBQUN2RCxNQUFNLDBCQUEwQixHQUFHLElBQUksT0FBTyxlQUFlLE9BQU8sZUFBZSxPQUFPLGVBQWUsT0FBTyxVQUFVLE9BQU8sSUFBSSxDQUFDO0FBQ3RJLE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxPQUFPLG1CQUFtQixPQUFPLGdCQUFnQixPQUFPLGVBQWUsT0FBTyxVQUFVLE9BQU8sSUFBSSxDQUFDO0FBQ3ZJLE1BQU0seUJBQXlCLEdBQUcsTUFBTSxPQUFPLE1BQU0sU0FBUyxjQUFjLE9BQU8sZ0JBQWdCLE9BQU8sZ0JBQWdCLE9BQU8sWUFBWSxPQUFPLFFBQVEsQ0FBQztBQUM3SixNQUFNLEdBQUcsR0FBRyxTQUFTLE9BQU8sb0JBQW9CLE9BQU8sNEJBQTRCLENBQUM7QUFDcEYsTUFBTSxLQUFLLEdBQUcsSUFBSSx1QkFBdUIsSUFBSSxTQUFTLEdBQUcsQ0FBQztBQUUxRCxNQUFNO0FBQ04sTUFBTSxRQUFRLEdBQ1osa0VBQWtFLENBQUM7QUFDckUsTUFBTSxpQkFBaUIsR0FBRyxxQ0FBcUMsQ0FBQztBQUNoRSxNQUFNLGVBQWUsR0FBRyxxQ0FBcUMsQ0FBQztBQUU5RCwyQkFBMkI7QUFDM0IsTUFBTSxJQUFJLEdBQUcsY0FBYyxHQUFHLE9BQU8sdUJBQXVCLFFBQVEsdUJBQXVCLFFBQVEsS0FBSyxRQUFRLENBQUM7QUFDakgsTUFBTSxTQUFTLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBRXhDLDJCQUEyQjtBQUMzQixNQUFNLElBQUksR0FBRyxjQUFjLEdBQUcsS0FBSyx1QkFBdUIsTUFBTSx1QkFBdUIsVUFBVSxLQUFLLFFBQVEsQ0FBQztBQUMvRyxNQUFNLFNBQVMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFFeEMsTUFBTSxJQUFJLEdBQUcsZUFBZSx5QkFBeUIsUUFBUSx5QkFBeUIsUUFBUSx5QkFBeUIsUUFBUSxLQUFLLFFBQVEsQ0FBQztBQUM3SSxNQUFNLFNBQVMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFFeEMsTUFBTSxJQUFJLEdBQUcsZUFBZSx5QkFBeUIsTUFBTSx5QkFBeUIsTUFBTSx5QkFBeUIsVUFBVSxLQUFLLFFBQVEsQ0FBQztBQUMzSSxNQUFNLFNBQVMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFFeEMsTUFBTSxJQUFJLEdBQUcsZUFBZSx1QkFBdUIsTUFBTSx1QkFBdUIsTUFBTSx1QkFBdUIsVUFBVSxLQUFLLFFBQVEsQ0FBQztBQUNySSxNQUFNLFdBQVcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFFMUMsTUFBTSxHQUFHLEdBQUcsYUFBYSxnQkFBZ0IsV0FBVywwQkFBMEIsSUFBSSx1QkFBdUIsVUFBVSwwQkFBMEIsSUFBSSx1QkFBdUIsU0FBUyxLQUFLLE9BQU8sQ0FBQztBQUM5TCxNQUFNLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFFdEMsTUFBTSxLQUFLLEdBQUcsZUFBZSxnQkFBZ0IsV0FBVywwQkFBMEIsSUFBSSx1QkFBdUIsVUFBVSwwQkFBMEIsSUFBSSx1QkFBdUIsU0FBUyxLQUFLLE9BQU8sQ0FBQztBQUNsTSxNQUFNLFVBQVUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFFMUMsTUFBTSxHQUFHLEdBQUcsYUFBYSxnQkFBZ0IsUUFBUSxzQkFBc0IsS0FBSyxHQUFHLFFBQVEsdUJBQXVCLElBQUksU0FBUyxRQUFRLENBQUM7QUFDcEksTUFBTSxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBRXRDLE1BQU0sS0FBSyxHQUFHLGVBQWUsZ0JBQWdCLFFBQVEsc0JBQXNCLEtBQUssR0FBRyxPQUFPLEtBQUssT0FBTyxDQUFDO0FBQ3ZHLE1BQU0sVUFBVSxHQUFHLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztBQUUxQyxNQUFNLGFBQWEsR0FBRyxjQUFjLEtBQUssVUFBVSxLQUFLLEtBQUssQ0FBQztBQUM5RCxNQUFNLGtCQUFrQixHQUFHLElBQUksTUFBTSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUUxRCxNQUFNLEtBQUssR0FBRztJQUNaLEdBQUcsRUFBRSxRQUFRO0lBQ2IsWUFBWSxFQUFFLGlCQUFpQjtJQUMvQixVQUFVLEVBQUUsZUFBZTtJQUMzQixTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsV0FBVztJQUNYLEdBQUcsRUFBRSxRQUFRO0lBQ2IsS0FBSyxFQUFFLFVBQVU7SUFDakIsR0FBRyxFQUFFLFFBQVE7SUFDYixLQUFLLEVBQUUsVUFBVTtJQUNqQixhQUFhLEVBQUUsa0JBQWtCO0NBQ2xDLENBQUM7QUFFRixlQUFlLEtBQUssQ0FBQyJ9