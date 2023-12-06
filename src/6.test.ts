import { describe, test, expect } from "vitest";
import { getExo6PartOne, getExo6PartTwo } from "./6";

describe("exercice 6", () => {
    describe("part one", () => {
        test("easy", () => {
            const data = [
                "Time:      7",
                "Distance:  9"
            ]
            expect(getExo6PartOne(data)).toBe(4);
        })

        test("example", () => {
            const data = [
                "Time:      7  15   30",
                "Distance:  9  40  200"
            ]
            expect(getExo6PartOne(data)).toBe(288);
        })

        test("exo", () => {
            const data = [
                "Time:        40     81     77     72",
                "Distance:   219   1012   1365   1089"
            ]
            expect(getExo6PartOne(data)).toBe(861300);
        })


        test("exo 2 with part one", () => {
            const data = [
                "Time:      71530",
                "Distance:  940200"
            ]
            expect(getExo6PartOne(data)).toBe(71503);
        })

        test("exo 2 with part two", () => {
            const data = [
                "Time:      7  15   30",
                "Distance:  9  40  200"
            ]
            expect(getExo6PartTwo(data)).toBe(71503);
        })

        test("exo 2 final test", () => {
            const data = [
                "Time:        40     81     77     72",
                "Distance:   219   1012   1365   1089"
            ]
            expect(getExo6PartTwo(data)).toBe(28101347);
        })
    })
})