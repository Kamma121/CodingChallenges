//https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/

function kidsWithCandies(candies, extraCandies) {
    let result = [];
    let maxCandies = Math.max(...candies);
    for (let candy of candies) {
        if (candy + extraCandies >= maxCandies) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
    return result;
}