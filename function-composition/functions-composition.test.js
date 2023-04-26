const compose = require('./function-composition');

describe("compose", () => {
    it.each([
        [[x => x + 1, x => x * x, x => 2 * x], 4, 65],
        [[x => 10 * x, x => 10 * x, x => 10 * x], 1, 1000],
        [[], 42, 42]
    ])("Returns a function that is the composition of an array of functions, when function = '%p' and x = '%i' expected output is : '%i' ", (givenFunction, x, expected) => {
        expect(compose(givenFunction)(x)).toEqual(expected);
    });
});