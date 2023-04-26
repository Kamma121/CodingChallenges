const isMatch = require('./wildcard-matching');
describe('wildcard-matching', () => {
    it.each([
        ["aa", "a", false],
        ["aa", "*", true],
        ["cb", "?a",false]
    ])('Return if  %s and %s match the pattern.', (s, p, expected) => {
        expect(isMatch(s, p)).toBe(expected);
    })
});