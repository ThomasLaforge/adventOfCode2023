import { describe, test, expect } from "vitest";
import { getExoOnePartTwo } from "./1";

describe("Jour 1 - exercice 2", () => {
    describe("one line", () => {
        describe("like first part", () => {
            test("should be true", () => {
                const data = ["12"]
                expect(getExoOnePartTwo(data)).toBe(12);
            })

            test("with element between", () => {
                const data = ["1___2"]
                expect(getExoOnePartTwo(data)).toBe(12);
            })

            test("with other numbers", () => {
                const data = ["1992"]
                expect(getExoOnePartTwo(data)).toBe(12);
            })

            test("with one number", () => {
                const data = ["1"]
                expect(getExoOnePartTwo(data)).toBe(11);
            })

            test("starting with a letter", () => {
                const data = ["a12"]
                expect(getExoOnePartTwo(data)).toBe(12);
            })   

            test("ending with a letter", () => {
                const data = ["12a"]
                expect(getExoOnePartTwo(data)).toBe(12);
            })   

            test("strating and ending with a letter", () => {
                const data = ["a12a"]
                expect(getExoOnePartTwo(data)).toBe(12);
            })   
        })

        describe("specific to second part", () => {
            test("second is a word", () => {
                const data = ["1two"]
                expect(getExoOnePartTwo(data)).toBe(12);
            })

            test("first is a word", () => {
                const data = ["two1"]
                expect(getExoOnePartTwo(data)).toBe(21);
            })

            test("first and second are words", () => {
                const data = ["two1two"]
                expect(getExoOnePartTwo(data)).toBe(22);
            })

            test("first and second are words with numbers", () => {
                const data = ["two1two1"]
                expect(getExoOnePartTwo(data)).toBe(21);
            })

            test("only words", () => {
                const data = ["onetwo"]
                expect(getExoOnePartTwo(data)).toBe(12);
            })

            test("only one word", () => {
                const data = ["one"]
                expect(getExoOnePartTwo(data)).toBe(11);
            })
        })
    })

    describe("multi numbers", () => {
        test("with simple numbers", () => {
            const data = ["10", "20"]
            expect(getExoOnePartTwo(data)).toBe(30);
        })
    })

    describe("consign example", () => {
        test("complete", () => {
            const data = [
                "two1nine",
                "eightwothree",
                "abcone2threexyz",
                "xtwone3four",
                "4nineeightseven2",
                "zoneight234",
                "7pqrstsixteen",
            ]
            expect(getExoOnePartTwo(data)).toBe(281);
        })
    })
        
})