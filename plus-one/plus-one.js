// https://leetcode.com/problems/plus-one/description/

function plusOne(digits) {
    let digitsLength = digits.length - 1;
    while (digits[digitsLength] === 9) {
        digits[digitsLength--] = 0;
        if (digitsLength === -1) {
            digits.unshift(1);
            return digits;
        }
    }
    digits[digitsLength]++;
    return digits;
}

module.exports = plusOne;