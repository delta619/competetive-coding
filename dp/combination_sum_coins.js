/**
 * Leetcode 377. Combination Sum IV
 * https://leetcode.com/problems/combination-sum-iv/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    dp = Array(target+1).fill(0)
    dp[0] = 1;

    for(let sum = 1 ; sum <= target ; sum++){
        for(let j = 0 ; j< nums.length ;j++){
            if(sum >= nums[j]){
                dp[sum] = dp[sum] + dp[sum-nums[j]];
            }
        }
    }
    return dp[target];
};