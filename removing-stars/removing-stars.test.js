const removeStars = require('./removing-stars');

test('Remove the closest non-star character to its left, as well as remove the star itself.For given string : "leet**cod*e" .Output : "lecoe"',()=>{
    expect(removeStars("leet**cod*e")).toBe("lecoe");
});
test('Remove the closest non-star character to its left, as well as remove the star itself.For given string : "erase*****" .Output : ""',()=>{
    expect(removeStars("erase*****")).toBe("");
});