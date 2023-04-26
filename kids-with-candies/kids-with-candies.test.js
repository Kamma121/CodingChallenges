const kidWithCandies = require('./kids-with-candies');

test('Check if kid have the greatest amount of candies after adding extraCandies = 3 among other children.Candies = [2,3,5,1,3]', () => {
    expect(kidWithCandies([2, 3, 5, 1, 3], 3)).toEqual([true, true, true, false, true]);
});

test('Check if kid have the greatest amount of candies after adding extraCandies = 1 among other children.Candies = [4,2,1,1,2]', () => {
    expect(kidWithCandies([4,2,1,1,2], 1)).toEqual([true, false, false, false, false]);
});

test('Check if kid have the greatest amount of candies after adding extraCandies = 10 among other children.Candies = [12,1,12]', () => {
    expect(kidWithCandies([12, 1, 12], 10)).toEqual([true, false, true]);
});