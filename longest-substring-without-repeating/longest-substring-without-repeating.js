// https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s) {
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;
    const mySet = new Set();
    let counter = 0;
    let maxCounter = 0;
    let left = 0;
    for (let i = 0; i < s.length; i++) {

        while (mySet.has(s[i])) {
            if (counter > maxCounter) {
                maxCounter = counter;
            }
            mySet.delete(s[left++]);
            counter--;
        }
        mySet.add(s[i]);
        counter++;
    }
    return counter > maxCounter ? counter : maxCounter;
}

module.exports = lengthOfLongestSubstring;