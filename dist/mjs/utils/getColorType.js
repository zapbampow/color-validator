import hex from "../validate/hex.js";
import rgb from "../validate/rgb.js";
import hsl from "../validate/hsl.js";
import lab from "../validate/lab.js";
import oklab from "../validate/oklab.js";
import lch from "../validate/lch.js";
import oklch from "../validate/oklch.js";
import named from "../validate/named.js";
export default function getColorType(color) {
    if (!color) {
        throw new Error("No color provided");
    }
    if (typeof color !== "string") {
        throw new Error("Color must be a string");
    }
    if (hex(color))
        return "hex";
    if (rgb(color))
        return "rgb";
    if (hsl(color))
        return "hsl";
    if (lab(color))
        return "lab";
    if (oklab(color))
        return "oklab";
    if (lch(color))
        return "lch";
    if (oklch(color))
        return "oklch";
    if (named(color))
        return "named";
    throw new Error("Invalid color");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Q29sb3JUeXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2dldENvbG9yVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEdBQUcsTUFBTSxvQkFBb0IsQ0FBQztBQUNyQyxPQUFPLEdBQUcsTUFBTSxvQkFBb0IsQ0FBQztBQUNyQyxPQUFPLEdBQUcsTUFBTSxvQkFBb0IsQ0FBQztBQUNyQyxPQUFPLEdBQUcsTUFBTSxvQkFBb0IsQ0FBQztBQUNyQyxPQUFPLEtBQUssTUFBTSxzQkFBc0IsQ0FBQztBQUN6QyxPQUFPLEdBQUcsTUFBTSxvQkFBb0IsQ0FBQztBQUNyQyxPQUFPLEtBQUssTUFBTSxzQkFBc0IsQ0FBQztBQUN6QyxPQUFPLEtBQUssTUFBTSxzQkFBc0IsQ0FBQztBQUV6QyxNQUFNLENBQUMsT0FBTyxVQUFVLFlBQVksQ0FBQyxLQUFhO0lBQ2hELElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7S0FDdEM7SUFFRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUM3QixNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7S0FDM0M7SUFFRCxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUM3QixJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUM3QixJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUM3QixJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUM3QixJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLE9BQU8sQ0FBQztJQUNqQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUM3QixJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLE9BQU8sQ0FBQztJQUNqQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLE9BQU8sQ0FBQztJQUVqQyxNQUFNLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ25DLENBQUMifQ==