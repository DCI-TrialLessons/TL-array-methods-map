const rewire = require("rewire");
const fs = require("fs");
const content = fs
    .readFileSync("./index.js")
    .toString("utf-8")
    .replace(/ ()/g, "");
const solution = rewire("../index.js");

beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));

describe('1. Camelize', () => {
    it("Should accept a string and return Camelized version", () => {
        const camelize = solution.__get__("camelize");
        expect(camelize("background-color")).toBe("backgroundColor");
    })
})

describe('2. User Object', () => {
    it("Should return a new user object with 'id, fullName'", () => {
        const usersMapped = solution.__get__("usersMapped");
        expect(usersMapped[0].id).toBe(1);
        expect(usersMapped[0].fullName).toBe("John Smith");
        expect(usersMapped[1].id).toBe(2);
        expect(usersMapped[1].fullName).toBe("Pete Hunt");
        expect(usersMapped[2].id).toBe(3);
        expect(usersMapped[2].fullName).toBe("Mary Key");
    })
})