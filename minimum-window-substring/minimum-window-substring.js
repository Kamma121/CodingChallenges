// https://leetcode.com/problems/minimum-window-substring/

function minWindow(s, t) {
    const letters = {};
    for (let letter of t) {
        letters[letter] = letters[letter] + 1 || 1;
    }
    let counter = t.length;
    let left = 0, right = 0;
    let minResult = '';
    let minLen = Infinity;
    while (right < s.length) {
        if (letters[s[right]] > 0) {
            counter--;
        }
        letters[s[right]]--;
        right++;
        while (counter === 0) {
            if (right - left < minLen) {
                minLen = right - left;
                minResult = s.slice(left, right);
            }
            letters[s[left]]++;
            if (letters[s[left]] > 0) {
                counter++;
            }
            left++;
        }
    }
    return minResult;
}

module.exports = minWindow;