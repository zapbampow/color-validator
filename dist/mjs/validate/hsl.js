import regex from "../patterns/colorRegex.js";
import noColor from "./noColor.js";
export default function isHsl(color) {
    if (noColor(color))
        return false;
    let commas = regex.hslCommas.test(color);
    let spaces = regex.hslSpaces.test(color);
    return commas || spaces;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHNsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZhbGlkYXRlL2hzbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssTUFBTSwyQkFBMkIsQ0FBQztBQUM5QyxPQUFPLE9BQU8sTUFBTSxjQUFjLENBQUM7QUFFbkMsTUFBTSxDQUFDLE9BQU8sVUFBVSxLQUFLLENBQUMsS0FBYTtJQUN6QyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUNqQyxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxPQUFPLE1BQU0sSUFBSSxNQUFNLENBQUM7QUFDMUIsQ0FBQyJ9