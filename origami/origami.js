// https://codeforces.com/problemset/problem/1080/A

function calculateNotebooks(n, k) {
    if (n < 1) {
        return "Wrong value of friends";
    }
    if (k > Math.pow(10, 8)) {
        return "Wrong value of sheets in notebook";
    }
    let red = 2 * n;
    let green = 5 * n;
    let blue = 8 * n;
    const colors = [red, green, blue];
    let sheets = 0;
    for (let color of colors) {
        sheets += Math.ceil(color / k);
    }
    return sheets;
}

calculateNotebooks(15, 6);
module.exports = calculateNotebooks;