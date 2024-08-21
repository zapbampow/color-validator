import regex from "../patterns/colorRegex.js";
import noColor from "./noColor.js";
export default function isRgb(color) {
    if (noColor(color))
        return false;
    let commas = regex.rgbCommas.test(color);
    let spaces = regex.rgbSpaces.test(color);
    let percent = regex.rgbPercents.test(color);
    return commas || spaces || percent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmdiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZhbGlkYXRlL3JnYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssTUFBTSwyQkFBMkIsQ0FBQztBQUM5QyxPQUFPLE9BQU8sTUFBTSxjQUFjLENBQUM7QUFFbkMsTUFBTSxDQUFDLE9BQU8sVUFBVSxLQUFLLENBQUMsS0FBYTtJQUN6QyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUNqQyxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxPQUFPLE1BQU0sSUFBSSxNQUFNLElBQUksT0FBTyxDQUFDO0FBQ3JDLENBQUMifQ==