"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entities_1 = require("entities");
const types_1 = require("./types");
function parseSemesterType(n) {
    if (n === 1) {
        return types_1.SemesterType.FALL;
    }
    else if (n === 2) {
        return types_1.SemesterType.SPRING;
    }
    else if (n === 3) {
        return types_1.SemesterType.SUMMER;
    }
    else {
        return types_1.SemesterType.UNKNOWN;
    }
}
exports.parseSemesterType = parseSemesterType;
function trimAndDefine(text) {
    if (text === undefined || text === null) {
        return undefined;
    }
    const trimmed = text.trim();
    return trimmed === "" ? undefined : entities_1.decodeHTML(trimmed);
}
exports.trimAndDefine = trimAndDefine;
const GRADE_LEVEL_MAP = new Map([
    [-100, "已阅"],
    [-99, "A+"],
    [-98, "A"],
    [-92, "A-"],
    [-87, "B+"],
    [-85, "优秀"],
    [-82, "B"],
    [-78, "B-"],
    [-74, "C+"],
    [-71, "C"],
    [-68, "C-"],
    [-67, "G"],
    [-66, "D+"],
    [-64, "D"],
    [-65, "免课"],
    [-63, "P"],
    [-62, "EX"],
    [-61, "免修"],
    [-60, "通过"],
    [-59, "不通过"],
    [-55, "W"],
    [-51, "I"],
    [-50, "缓考"],
    [-31, "NA"],
    [-30, "F"]
]);
function mapGradeToLevel(grade) {
    if (grade !== null && GRADE_LEVEL_MAP.has(grade)) {
        return GRADE_LEVEL_MAP.get(grade);
    }
    else {
        return undefined;
    }
}
exports.mapGradeToLevel = mapGradeToLevel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBc0M7QUFFdEMsbUNBQXVDO0FBRXZDLFNBQWdCLGlCQUFpQixDQUFDLENBQVM7SUFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ1gsT0FBTyxvQkFBWSxDQUFDLElBQUksQ0FBQztLQUMxQjtTQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNsQixPQUFPLG9CQUFZLENBQUMsTUFBTSxDQUFDO0tBQzVCO1NBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLE9BQU8sb0JBQVksQ0FBQyxNQUFNLENBQUM7S0FDNUI7U0FBTTtRQUNMLE9BQU8sb0JBQVksQ0FBQyxPQUFPLENBQUM7S0FDN0I7QUFDSCxDQUFDO0FBVkQsOENBVUM7QUFFRCxTQUFnQixhQUFhLENBQzNCLElBQStCO0lBRS9CLElBQUksSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO1FBQ3ZDLE9BQU8sU0FBUyxDQUFDO0tBQ2xCO0lBQ0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzVCLE9BQU8sT0FBTyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxxQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzFELENBQUM7QUFSRCxzQ0FRQztBQUVELE1BQU0sZUFBZSxHQUFHLElBQUksR0FBRyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDO0lBQ1osQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUM7SUFDWCxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQztJQUNWLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO0lBQ1gsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUM7SUFDWCxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztJQUNYLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDO0lBQ1YsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUM7SUFDWCxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztJQUNYLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDO0lBQ1YsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUM7SUFDWCxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQztJQUNWLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO0lBQ1gsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUM7SUFDVixDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztJQUNYLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDO0lBQ1YsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUM7SUFDWCxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztJQUNYLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO0lBQ1gsQ0FBQyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUM7SUFDWixDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQztJQUNWLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDO0lBQ1YsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUM7SUFDWCxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztJQUNYLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDO0NBQ1gsQ0FBQyxDQUFDO0FBRUgsU0FBZ0IsZUFBZSxDQUFDLEtBQW9CO0lBQ2xELElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2hELE9BQU8sZUFBZSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUcsQ0FBQztLQUNyQztTQUFNO1FBQ0wsT0FBTyxTQUFTLENBQUM7S0FDbEI7QUFDSCxDQUFDO0FBTkQsMENBTUMifQ==