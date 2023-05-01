// https://leetcode.com/problems/plus-one/description/

function plusOne(digits) {
    let len = digits.length - 1;
    while (digits[len] === 9) {
        digits[len--] = 0;
        if (len === -1) {
            digits.unshift(1);
            return digits;
        }
    }
    digits[len]++;
    return digits;
}
module.exports = plusOne;