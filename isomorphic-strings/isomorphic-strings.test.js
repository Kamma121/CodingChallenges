const isIsomorphic = require('./isomorphic-strings');

test('Determinate if two strings s = "egg"  and t = "add" are isomorphic',()=>{
    expect(isIsomorphic("add","egg")).toBeTruthy();
});

test('Determinate if two strings s = "foo"  and t = "bar" are isomorphic',()=>{
    expect(isIsomorphic("foo","bar")).toBeFalsy();
});

test('Determinate if two strings s = "paper"  and t = "title" are isomorphic',()=>{
    expect(isIsomorphic("paper","title")).toBeTruthy();
});