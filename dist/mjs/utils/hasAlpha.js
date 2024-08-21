import { endsWithAlphaRegex } from "../patterns/colorRegex.js";
import { isHexAlpha } from "../validate/hex.js";
import noColor from "../validate/noColor.js";
export default function hasAlpha(color) {
    if (noColor(color))
        return false;
    let endsWithAlphaPattern = endsWithAlphaRegex.test(color);
    let hasFourCommaChannels = color.split(",").length === 4;
    let isSplitWithSlash = color.split("/").length === 2;
    let hasAlphaChannel = endsWithAlphaPattern && (hasFourCommaChannels || isSplitWithSlash);
    return hasAlphaChannel || isHexAlpha(color);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzQWxwaGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvaGFzQWxwaGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sT0FBTyxNQUFNLHdCQUF3QixDQUFDO0FBRTdDLE1BQU0sQ0FBQyxPQUFPLFVBQVUsUUFBUSxDQUFDLEtBQWE7SUFDNUMsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFFakMsSUFBSSxvQkFBb0IsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUQsSUFBSSxvQkFBb0IsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDekQsSUFBSSxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDckQsSUFBSSxlQUFlLEdBQ2pCLG9CQUFvQixJQUFJLENBQUMsb0JBQW9CLElBQUksZ0JBQWdCLENBQUMsQ0FBQztJQUVyRSxPQUFPLGVBQWUsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDOUMsQ0FBQyJ9