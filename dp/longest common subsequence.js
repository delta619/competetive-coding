/**
 * Leetcode 1143. Longest Common Subsequence
 * @see https://leetcode.com/problems/longest-common-subsequence/
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    let n = text1.length;
    let m = text2.length;

    // dp array (n+1 × m+1)
    let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if(text1[i-1] == text2[j-1]){
                dp[i][j] = 1 + dp[i-1][j-1]
            }else{
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }
    return dp[n][m];
};