const lengthOfLongestSubstring = require('./longest-substring-without-repeating');

describe('longest-substring-without-repeating', () => {
    it.each([
        ["aaaa", 1],
        ["aquaprocess", 9],
        ["worldwwrighten", 8],
        ["abcabcbb", 3]
    ])('Should return length of the longest substring %s without repeating characters ', (s, chars) => {
        expect(lengthOfLongestSubstring(s)).toBe(chars);
    })
});