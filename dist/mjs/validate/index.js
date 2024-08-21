import hex, { isHexAlpha, isHexNoAlpha } from "./hex.js";
import rgb from "./rgb.js";
import hsl from "./hsl.js";
import lab from "./lab.js";
import lch from "./lch.js";
import oklab from "./oklab.js";
import oklch from "./oklch.js";
import named from "./named.js";
import keyword from "./keyword.js";
function isColor(color) {
    return (hex(color) ||
        rgb(color) ||
        hsl(color) ||
        lab(color) ||
        lch(color) ||
        oklab(color) ||
        oklch(color) ||
        named(color));
}
function isColorOrKeyword(color) {
    return isColor(color) || keyword(color);
}
export default {
    color: isColor,
    colorOrKeyword: isColorOrKeyword,
    hex,
    hexAlpha: isHexAlpha,
    hexNoAlpha: isHexNoAlpha,
    rgb,
    hsl,
    lab,
    lch,
    oklab,
    oklch,
    named,
    keyword,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmFsaWRhdGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxHQUFHLEVBQUUsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3pELE9BQU8sR0FBRyxNQUFNLFVBQVUsQ0FBQztBQUMzQixPQUFPLEdBQUcsTUFBTSxVQUFVLENBQUM7QUFDM0IsT0FBTyxHQUFHLE1BQU0sVUFBVSxDQUFDO0FBQzNCLE9BQU8sR0FBRyxNQUFNLFVBQVUsQ0FBQztBQUMzQixPQUFPLEtBQUssTUFBTSxZQUFZLENBQUM7QUFDL0IsT0FBTyxLQUFLLE1BQU0sWUFBWSxDQUFDO0FBQy9CLE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQUMvQixPQUFPLE9BQU8sTUFBTSxjQUFjLENBQUM7QUFFbkMsU0FBUyxPQUFPLENBQUMsS0FBYTtJQUM1QixPQUFPLENBQ0wsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNWLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDVixHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ1YsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNWLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDVixLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ1osS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNaLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FDYixDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsZ0JBQWdCLENBQUMsS0FBYTtJQUNyQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQUVELGVBQWU7SUFDYixLQUFLLEVBQUUsT0FBTztJQUNkLGNBQWMsRUFBRSxnQkFBZ0I7SUFDaEMsR0FBRztJQUNILFFBQVEsRUFBRSxVQUFVO0lBQ3BCLFVBQVUsRUFBRSxZQUFZO0lBQ3hCLEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxPQUFPO0NBQ1IsQ0FBQyJ9