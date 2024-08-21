import regex from "../patterns/colorRegex.js";
import { isHexAlpha } from "../validate/hex.js";
import noColor from "../validate/noColor.js";
export default function hasAlpha(color) {
    if (noColor(color))
        return false;
    let endsWithAlphaPattern = regex.endsWithAlpha.test(color);
    let hasFourCommaChannels = color.split(",").length === 4;
    let isSplitWithSlash = color.split("/").length === 2;
    let hasAlphaChannel = endsWithAlphaPattern && (hasFourCommaChannels || isSplitWithSlash);
    return hasAlphaChannel || isHexAlpha(color);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzQWxwaGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvaGFzQWxwaGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sMkJBQTJCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sT0FBTyxNQUFNLHdCQUF3QixDQUFDO0FBRTdDLE1BQU0sQ0FBQyxPQUFPLFVBQVUsUUFBUSxDQUFDLEtBQWE7SUFDNUMsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFFakMsSUFBSSxvQkFBb0IsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzRCxJQUFJLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztJQUN6RCxJQUFJLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztJQUNyRCxJQUFJLGVBQWUsR0FDakIsb0JBQW9CLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDO0lBRXJFLE9BQU8sZUFBZSxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM5QyxDQUFDIn0=