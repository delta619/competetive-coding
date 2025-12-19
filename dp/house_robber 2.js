/**
 * Leetcode 213. House Robber II
 * https://leetcode.com/problems/house-robber-ii/
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const n = nums.length;

    if(n == 1) return nums[0]

    var solve = function (start, end) {
        let len = end - start + 1;
        let dp = Array(len).fill(0)

        dp[0] = nums[start]
        dp[1] = Math.max(nums[start], nums[start + 1])
        for (let i = 2; i < len; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[start + i]);
        }
        return dp[len - 1]
    }

    let case1 = solve(0, n - 2)
    let case2 = solve(1, n - 1)
    return Math.max(case1, case2);
};

