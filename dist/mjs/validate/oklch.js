import regex from "../patterns/colorRegex.js";
import noColor from "./noColor.js";
export default function isOklch(color) {
    if (noColor(color))
        return false;
    return regex.oklch.test(color);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2tsY2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmFsaWRhdGUvb2tsY2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sMkJBQTJCLENBQUM7QUFDOUMsT0FBTyxPQUFPLE1BQU0sY0FBYyxDQUFDO0FBRW5DLE1BQU0sQ0FBQyxPQUFPLFVBQVUsT0FBTyxDQUFDLEtBQWE7SUFDM0MsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDakMsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNqQyxDQUFDIn0=