// https://codeforces.com/problemset/problem/4/A
function calcWatermelon(watermelonWeight) {
    let wrong = "NO";
    let correct = "YES";
    if (watermelonWeight <= 2) {
        return wrong;
    }
    return watermelonWeight % 2 === 0 ? correct : wrong;
}

calcWatermelon(150);
module.exports = calcWatermelon;