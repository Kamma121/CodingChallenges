// https://leetcode.com/problems/valid-parentheses/description/

function isValid(s) {
    const symbols = ['(', ')', '{', '}', '[', ']'];
    let nextSymbol = [];
    let open = 0;
    for (let i = 0; i < s.length; i++) {
        let id = symbols.indexOf(s[i]);
        if (id % 2 === 0) {
            nextSymbol.push(symbols[id + 1]);
            open++;
        } else if (nextSymbol.pop() !== s[i]) {
            return false;
        } else {
            open--;
        }
    }
    return open === 0;
}

module.exports = isValid;