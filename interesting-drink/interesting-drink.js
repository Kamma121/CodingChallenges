// https://codeforces.com/problemset/problem/706/B

function calculateShops(n, prices, days, coins) {
    if (n < 1 || n > 100) {
        return "Wrong number of shops";
    }
    for (let i of prices) {
        if (i < 1 || i > Math.pow(10, 5)) {
            return "Wrong price of the bottle";
        }
    }
    if (days < 1 || days > Math.pow(10, 5)) {
        return "Wrong number of days";
    }
    for (let i of coins) {
        if (i < 1 || i > Math.pow(10, 5)) {
            return "Wrong number of coins, that Vasili can spend";
        }
    }

    let result = [];
    for (let i = 0; i < days; i++) {
        let counter = 0;
        let j = 0;
        while (j < prices.length) {
            if (coins[i] >= prices[j]) {
                counter++;
            }
            j++;
        }
        result[i] = counter;
    }
    return result;
}

const prices = [3, 10, 8, 6, 11];
const coinsNumber = [1, 10, 3, 11];
calculateShops(5, prices, 4, coinsNumber);

module.exports = calculateShops;