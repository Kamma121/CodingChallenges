//https://leetcode.com/problems/length-of-last-word/
function checkLength(s) {
    let currentWord = "";
    for (let index = s.length - 1; index > -1; index--) {
        if (s[index] !== " ") {
            currentWord += s[index];
        } else if (currentWord.length) {
            break;
        }
    }
    return currentWord.length;
}

module.exports = checkLength;