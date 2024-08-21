import { lchRegex } from "../patterns/colorRegex.js";
import noColor from "./noColor.js";
export default function isLch(color) {
    if (noColor(color))
        return false;
    return lchRegex.test(color);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZhbGlkYXRlL2xjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDckQsT0FBTyxPQUFPLE1BQU0sY0FBYyxDQUFDO0FBRW5DLE1BQU0sQ0FBQyxPQUFPLFVBQVUsS0FBSyxDQUFDLEtBQWE7SUFDekMsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDakMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzlCLENBQUMifQ==