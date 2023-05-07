// https://leetcode.com/problems/permutation-in-string/

function checkInclusion(s1, s2) {
    const letters = new Map();
    for (let letter of s1) {
        if (!letters.has(letter)) {
            letters.set(letter, 1);
        } else {
            letters.set(letter, letters.get(letter) + 1);
        }
    }
    for (let i = 0; i < s2.length; i++) {
        if (letters.has(s2[i])) {
            let j = i;
            let counter = 0;
            let tmpMap = new Map(letters);
            while (j - i < s1.length) {
                if (tmpMap.has(s2[j]) && tmpMap.get(s2[j]) !== 0) {
                    tmpMap.set(s2[j], tmpMap.get(s2[j]) - 1);
                    counter++
                }
                j++
            }
            if (counter === s1.length) {
                return true;
            }
        }
    }
    return false;
}

module.exports = checkInclusion;