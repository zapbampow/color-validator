import noColor from "./noColor.js";
export default function isKeyword(color) {
    if (noColor(color))
        return false;
    let keywords = [
        "currentColor",
        "currentcolor",
        "inherit",
        "initial",
        "revert",
        "transparent",
        "unset",
    ];
    return keywords.includes(color);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5d29yZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92YWxpZGF0ZS9rZXl3b3JkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sT0FBTyxNQUFNLGNBQWMsQ0FBQztBQUVuQyxNQUFNLENBQUMsT0FBTyxVQUFVLFNBQVMsQ0FBQyxLQUFhO0lBQzdDLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBRWpDLElBQUksUUFBUSxHQUFHO1FBQ2IsY0FBYztRQUNkLGNBQWM7UUFDZCxTQUFTO1FBQ1QsU0FBUztRQUNULFFBQVE7UUFDUixhQUFhO1FBQ2IsT0FBTztLQUNSLENBQUM7SUFFRixPQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbEMsQ0FBQyJ9