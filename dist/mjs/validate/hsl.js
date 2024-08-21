import { hslCommas, hslSpaces } from "../patterns/colorRegex.js";
import noColor from "./noColor.js";
export default function isHsl(color) {
    if (noColor(color))
        return false;
    let commas = hslCommas.test(color);
    let spaces = hslSpaces.test(color);
    return commas || spaces;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHNsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZhbGlkYXRlL2hzbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sT0FBTyxNQUFNLGNBQWMsQ0FBQztBQUVuQyxNQUFNLENBQUMsT0FBTyxVQUFVLEtBQUssQ0FBQyxLQUFhO0lBQ3pDLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQ2pDLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxPQUFPLE1BQU0sSUFBSSxNQUFNLENBQUM7QUFDMUIsQ0FBQyJ9