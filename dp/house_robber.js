/**
 * Leetcode 198. House Robber
 * https://leetcode.com/problems/house-robber/
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let n = nums.length
    if(n == 0) return 0
    if(n == 1) return nums[0];

    let dp = Array(n+1).fill(0)

    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])

    for(let i = 2 ;i< n ;i++){
        dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1])
    }

    return dp[n-1];


    
    
};