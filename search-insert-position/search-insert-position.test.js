const search = require('./search-insert-position');

describe('search-insert-position', () => {
    it.each([
        [[1,3,5,6], 5, 2],
        [[1, 3, 5, 6], 2, 1],
        [[1, 3, 5, 6], 7, 4]
    ])('Return the index of element or index where it should be.In %p for target %i it should return %i',
        (arr, target, expected) => {
            expect(search(arr, target)).toBe(expected);
        })
});