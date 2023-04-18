// https://leetcode.com/problems/removing-stars-from-a-string/description/

function removeStars(s) {
    const star = "*";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === star) {
            s = s.slice(0, i - 1) + s.slice(i + 1);
            i -= 2;
        }
    }
    return s;
}