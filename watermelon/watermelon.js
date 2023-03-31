// https://codeforces.com/problemset/problem/4/A
function calcWatermelon(watermelonWeight) {
    let wrong = "NO";
    let correct = "YES";
    if (watermelonWeight < 1 || watermelonWeight > 100) {
        return wrong;
    }
    if ((watermelonWeight / 2) % 2 === 0 || watermelonWeight % 2 === 0) {
        return correct;
    }
    return wrong;
}

calcWatermelon(150);