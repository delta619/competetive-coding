/**
 * Leetcode 191. Number of 1 Bits
 * https://leetcode.com/problems/number-of-1-bits/
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let ans = 0;

    while(n){
        if (n%2 != 0){
            ans+=1;
        }
        n = Math.floor(n/2);
    }
    return ans;
};