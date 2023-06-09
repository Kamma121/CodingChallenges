//https://leetcode.com/problems/running-sum-of-1d-array/description/

function calcRunningSum(nums) {
    let runningSum = nums.slice();
    for (let i = 1; i < nums.length; i++) {
        runningSum[i] = nums[i] + runningSum[i - 1];
    }
    return runningSum;
}
module.exports = calcRunningSum;