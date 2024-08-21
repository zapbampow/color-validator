import { hexRegex } from "../patterns/colorRegex.js";
import { hexWithAlphaRegex, hexNoAlphaRegex } from "../patterns/colorRegex.js";
import noColor from "./noColor.js";
export default function isHex(color) {
    if (noColor(color))
        return false;
    return hexRegex.test(color);
}
export function isHexAlpha(color) {
    if (noColor(color))
        return false;
    return hexWithAlphaRegex.test(color);
}
export function isHexNoAlpha(color) {
    if (noColor(color))
        return false;
    return hexNoAlphaRegex.test(color);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGV4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZhbGlkYXRlL2hleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQy9FLE9BQU8sT0FBTyxNQUFNLGNBQWMsQ0FBQztBQUVuQyxNQUFNLENBQUMsT0FBTyxVQUFVLEtBQUssQ0FBQyxLQUFhO0lBQ3pDLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQ2pDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBRUQsTUFBTSxVQUFVLFVBQVUsQ0FBQyxLQUFhO0lBQ3RDLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQ2pDLE9BQU8saUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFFRCxNQUFNLFVBQVUsWUFBWSxDQUFDLEtBQWE7SUFDeEMsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDakMsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3JDLENBQUMifQ==