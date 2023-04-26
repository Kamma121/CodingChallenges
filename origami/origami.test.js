const calculateNotebooks = require('./origami');

test('Calculate minimum number notebooks needed to buy,to make invitations for 3 friends, each notebook has 5 sheets of each color.Output 10', () => {
    expect(calculateNotebooks(3, 5)).toBe(10);
});

test('Calculate minimum number notebooks needed to buy,to make invitations for 15 friends, each notebook has 6 sheets of each color.Output 38', () => {
    expect(calculateNotebooks(15, 6)).toEqual(38);
});