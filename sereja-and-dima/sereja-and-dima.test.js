const calculateSum = require('./sereja-and-dima');

describe('sereja-and-dima', () => {
    it.each([
        [4, [4, 1, 2, 10], "12 5"],
        [7, [1, 2, 3, 4, 5, 6, 7], "16 12"]
    ])('Return Sereja and Dima points at the end of the game.For %i cards on the table %p points should be : %p ',
        (n, cards, points) => {
            expect(calculateSum(n, cards)).toEqual(points);
        })
});