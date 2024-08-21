import { oklabRegex } from "../patterns/colorRegex.js";
import noColor from "./noColor.js";
export default function isOklab(color) {
    if (noColor(color))
        return false;
    return oklabRegex.test(color);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2tsYWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmFsaWRhdGUvb2tsYWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZELE9BQU8sT0FBTyxNQUFNLGNBQWMsQ0FBQztBQUVuQyxNQUFNLENBQUMsT0FBTyxVQUFVLE9BQU8sQ0FBQyxLQUFhO0lBQzNDLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQ2pDLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoQyxDQUFDIn0=