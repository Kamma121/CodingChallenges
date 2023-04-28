const {romanToInt, intToRoman} = require('./roman-and-integer');

describe('roman-and-integer', () => {
    describe('romanToInt', () => {
        it.each([
            ["III", 3],
            ["MCMXCIV", 1994],
            ["CMXCIX", 999]

        ])('Should convert roman numeral %s to an integer %i', (roman, int) => {
            expect(romanToInt(roman)).toBe(int);
        })
    });

    describe('intToRoman', () => {
        it.each([
            [3, "III"],
            [1994, "MCMXCIV"],
            [999, "CMXCIX"]

        ])('Should convert integer %i to roman numeral %s', (int, roman) => {
            expect(intToRoman(int)).toEqual(roman);
        })
    });
});
