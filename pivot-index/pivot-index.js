//https://leetcode.com/problems/find-pivot-index/description/
function findPivotIndex(nums) {
    for (let i = 0; i < nums.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let k = 0; k < i; k++) {
            leftSum += nums[k];
        }
        for (let l = i + 1; l < nums.length; l++) {
            rightSum += nums[l];
        }
        if (leftSum === rightSum) {
            return i;
        }
    }
    return -1;
}