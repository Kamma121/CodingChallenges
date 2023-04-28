// https://leetcode.com/problems/roman-to-integer/
function romanToInt(s) {
    const romans = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (romans[s[i]] < romans[s[i + 1]] && i + 1 < s.length) {
            result += (romans[s[i + 1]] - romans[s[i]]);
            i++;
        } else {
            result += romans[s[i]];
        }
    }
    return result;
}

// https://leetcode.com/problems/integer-to-roman/
function intToRoman(num) {
    const romans = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"
    }
    let result = "";
    const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let i = 0;
    while (num > 0) {
        if (num >= nums[i]) {
            result += romans[nums[i]];
            num -= nums[i];
            i--;
        }
        i++;
    }
    return result;
}

module.exports = {
    romanToInt,
    intToRoman
};