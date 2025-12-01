/**
 * Leetcode 70. Climbing Stairs
 * https://leetcode.com/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    dp = Array(n + 1).fill(-1)

    return climb(n);


};
var dp
function climb(n) {
    if (n < 0) return 0;
    if (n == 0) return 1;

    if (dp[n] >= 0) return dp[n];

    let ans = climb(n - 1) + climb(n - 2)
    dp[n] = ans;
    return dp[n]
}

