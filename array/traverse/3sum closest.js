/**
 * Leetcode 16. 3Sum Closest
 * Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
 * Return the sum of the three integers.
 * 
 * https://leetcode.com/problems/3sum-closest/
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let res = []
    nums.sort((a, b) => a - b)

    let minn = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;

        let l = i + 1;
        let r = nums.length - 1

        while (l < r) {

            let sum = nums[i] + nums[l] + nums[r]

            if (Math.abs(target - sum) < Math.abs(target - minn)) {
                minn = sum;

            }else if (sum < target){
                l++;
            }else if (sum > target){
                r--;
            }else {
                return sum;
            }

        }
    }
    return minn;
};