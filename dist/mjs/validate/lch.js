import regex from "../patterns/colorRegex.js";
import noColor from "./noColor.js";
export default function isLch(color) {
    if (noColor(color))
        return false;
    return regex.lch.test(color);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZhbGlkYXRlL2xjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssTUFBTSwyQkFBMkIsQ0FBQztBQUM5QyxPQUFPLE9BQU8sTUFBTSxjQUFjLENBQUM7QUFFbkMsTUFBTSxDQUFDLE9BQU8sVUFBVSxLQUFLLENBQUMsS0FBYTtJQUN6QyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUNqQyxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9CLENBQUMifQ==