const minWindow = require('./minimum-window-substring');

describe('minimum-window-substring', () => {
    it.each([
        ["ADOBECODEBANC", "ABC", "BANC"],
        ["HELLOWORLDUP", "WORLDCUP", ""],
        ["ABCDAGLDFG", "AD", "DA"]
    ])('Should return minimum window substring of %s, that consist every character in %s', (s1, s2, result) => {
        expect(minWindow(s1, s2)).toBe(result);
    })

});