import { rgbCommas, rgbSpaces, rgbPercents } from "../patterns/colorRegex.js";
import noColor from "./noColor.js";
export default function isRgb(color) {
    if (noColor(color))
        return false;
    let commas = rgbCommas.test(color);
    let spaces = rgbSpaces.test(color);
    let percent = rgbPercents.test(color);
    return commas || spaces || percent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmdiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZhbGlkYXRlL3JnYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RSxPQUFPLE9BQU8sTUFBTSxjQUFjLENBQUM7QUFFbkMsTUFBTSxDQUFDLE9BQU8sVUFBVSxLQUFLLENBQUMsS0FBYTtJQUN6QyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUNqQyxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsSUFBSSxPQUFPLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxPQUFPLE1BQU0sSUFBSSxNQUFNLElBQUksT0FBTyxDQUFDO0FBQ3JDLENBQUMifQ==