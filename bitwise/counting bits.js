/**
 * Leetcode 338. Counting Bits
 * Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.
 * 
 * 
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let res = new Array(n+1).fill(0)
    res[0] = 0;

    for(let i = 1 ; i<= n ;i++){
        if(i %2 == 1){
            res[i] = res[Math.floor(i/2)] + 1;
        }else{
            res[i] = res[Math.floor(i/2)];
        }
    }

    return res

};