const isValid = require('./valid-parentheses');

describe('valid-parentheses', () => {
    it.each([
        ["()", true],
        ["()[]{}", true],
        ["(]", false],
        ["{[]}", true],
        ["([]", false]
    ])('Check if input string is valid', (str, result) => {
        expect(isValid(str)).toBe(result);
    })
});