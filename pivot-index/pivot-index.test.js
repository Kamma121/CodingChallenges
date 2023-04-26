const findPivotIndex = require('./pivot-index');

describe('pivot-index', () => {
    it.each([
        [[1, 7, 3, 6, 5, 6], 3],
        [[1, 2, 3], -1],
        [[2, 1, -1], 0]
    ])('Should return pivot index of array.For %p it should return %i', (arr, index) => {
        expect(findPivotIndex(arr)).toBe(index);
    })
});