//https://leetcode.com/problems/search-insert-position/description/

function search(nums, target) {
    if (nums[0] > target) {
        return 0;
    } else if (nums[nums.length - 1] < target) {
        return nums.length;
    }
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        if (nums[i] === target) {
            return i;
        } else if (nums[i] < target && target < nums[j]) {
            return j;
        }
    }
}
search([1, 3, 6], 2);
module.exports = search;