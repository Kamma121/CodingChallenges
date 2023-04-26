const calcRunningSum = require('./running-sum');
test('Return a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).Where nums = [1,2,3,4], output should be : [1,3,6,10]', () => {
    expect(calcRunningSum([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
});

test('Return a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).Where nums = [1,1,1,1,1], output should be : [1,2,3,4,5]', () => {
    expect(calcRunningSum([1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5]);
});

test('Return a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).Where nums = [3,1,2,10,1], output should be : [3,4,6,16,17]', () => {
    expect(calcRunningSum([3, 1, 2, 10, 1])).toEqual([3, 4, 6, 16, 17]);
});