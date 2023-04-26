const calculateShops = require('./interesting-drink');

describe('interesting-drink', () => {
    it('Should return how many bottles Vasiliy is able to buy each day', () => {
        expect(calculateShops(5, [3, 10, 8, 6, 11], 4, [1, 10, 3, 11])).toEqual([0, 4, 1, 5]);
    });
});