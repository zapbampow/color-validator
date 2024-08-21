import namedColors from "../patterns/namedColors.js";
import noColor from "./noColor.js";
export default function isNamed(color) {
    if (noColor(color))
        return false;
    return namedColors[color?.toLowerCase()] !== undefined;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmFsaWRhdGUvbmFtZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxXQUFXLE1BQU0sNEJBQTRCLENBQUM7QUFDckQsT0FBTyxPQUFPLE1BQU0sY0FBYyxDQUFDO0FBRW5DLE1BQU0sQ0FBQyxPQUFPLFVBQVUsT0FBTyxDQUFDLEtBQWE7SUFDM0MsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDakMsT0FBTyxXQUFXLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxDQUFDLEtBQUssU0FBUyxDQUFDO0FBQ3pELENBQUMifQ==