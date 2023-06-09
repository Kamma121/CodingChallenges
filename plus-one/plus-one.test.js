const plusOne = require('./plus-one');

describe('plus-one', () => {
    it.each([
        [[1,2,3],[1,2,4]],
        [[9,9],[1,0,0]],
        [[9],[1,0]],
        [[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3],[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]]
    ])('Should increment the large integer represented as array',(basic,incremented) =>{
        expect(plusOne(basic)).toEqual(incremented);
    })
});