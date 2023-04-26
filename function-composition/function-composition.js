//https://leetcode.com/problems/function-composition/

function compose(functions) {
    return function (x) {
        for (let i = functions.length - 1; i > -1; i--) {
            x = functions[i](x);
        }
        return x;
    }
}

module.exports = compose;