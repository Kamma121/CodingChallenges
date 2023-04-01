// https://codeforces.com/problemset/problem/1080/A

function calculateNotebooks(n, k) {
    if (n < 1) {
        return "Wrong value of friends";
    }
    if (k > Math.pow(10, 8)) {
        return "Wrong value of sheets in notebook";
    }
    let red = 2;
    let green = 5;
    let blue = 8;
    let result = 0;
    const colors = [red, green, blue];
    for (let i = 0; i < colors.length; i++) {
        result += calcSheets(n, k, colors[i]);
    }
    return result;
}

function calcSheets(n, k, color) {
    let neededSheets = color * n;
    let counter = 0;
    while (neededSheets > 0) {
        neededSheets -= k;
        counter++;
    }
    return counter;
}

calculateNotebooks(3, 5);