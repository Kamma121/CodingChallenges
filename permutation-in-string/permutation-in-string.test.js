const checkInclusion = require('./permutation-in-string');

describe('permutation-in-string', () => {
    it.each([
        ["cda", "abcad", true],
        ["ab", "aacbaa", true],
        ["aab", "abb", false],
        ["aa", "a", false]
    ])('Should return if string s2 includes any permutation of string s1', (s1, s2, result) => {
        expect(checkInclusion(s1, s2)).toBe(result);
    })
});