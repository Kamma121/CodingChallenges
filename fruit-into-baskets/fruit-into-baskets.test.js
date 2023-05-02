const totalFruit = require('./fruit-into-baskets');

describe('fruit-into-baskets', () => {
    it.each([
        [[3, 1, 3, 1, 2, 1, 1, 2, 4], 5],
        [[5, 1, 3, 5, 2, 2, 8, 4], 3],
        [[0, 1, 2, 2], 3]
    ])('Should return maximum number of fruits you can pick', (fruits, max) => {
        expect(totalFruit(fruits)).toBe(max);
    })
});