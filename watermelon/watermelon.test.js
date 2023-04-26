const calcWatermelon = require('./watermelon');

describe('watermelon', () => {
    let wrong = "NO";
    let correct = "YES";
    it.each([
        [8, correct],
        [13, wrong],
        [150, correct]
    ])('Can weight of watermelon be divided in two even parts', (weight, answer) => {
        expect(calcWatermelon(weight)).toBe(answer);
    })
});