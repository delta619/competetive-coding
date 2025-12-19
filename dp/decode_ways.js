/**
 * Leetcode 91. Decode Ways
 * https://leetcode.com/problems/decode-ways/
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let n = s.length
    if(n === 0) return 0

    let dp = Array(n+1).fill(0)
    dp[0] = 1
    dp[1] = s[0] !== '0' ? 1 : 0

    for(let i = 2 ;i <= n ; i++){
        if(s[i-1] != '0'){ // one digit
            dp[i] = dp[i] + dp[i-1]
        }

        let two = parseInt(s.substr(i-2, 2)) //two digits

        if(two >= 10 && two <= 26){
            dp[i] = dp[i] + dp[i-2] 
        }
    }
    return dp[n]
};