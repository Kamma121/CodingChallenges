//https://leetcode.com/problems/isomorphic-strings/description/

function isIsomorphic(s, t) {
    const myMap = new Map();
    let izomorph = "";
    for (let i = 0; i < s.length; i++) {
        if (!myMap.has(s[i]) && !(Array.from(myMap.values()).includes(t[i]))) {
            myMap.set(s[i], t[i]);

        }
        izomorph += myMap.get(s[i]);
    }
    myMap.clear();
    if (izomorph === t) {
        return true;
    }
    return false;
};