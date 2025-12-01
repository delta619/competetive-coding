/**
 * Leetcode 322. Coin Change
 * https://leetcode.com/problems/coin-change/
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    
    let dp = Array(amount+5).fill(Infinity)
    dp[0] = 0;
    
    for(let coin of coins){
        for(let x=coin ; x<=amount ; x++){
            dp[x] = Math.min(dp[x], 1+ dp[x - coin])
        }
    }

    return dp[amount] == Infinity? -1: dp[amount];

};

