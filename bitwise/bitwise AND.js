/**
 * Leetcode 371. Sum of Two Integers
 * but you are not allowed to use the operator + and -.
 * 
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    // first check the carry (bitwise AND)
    // then xor (partial sum bitwise XOR)

    while(b){
        let carry = (a & b) << 1
        a = a ^ b;
        b = carry;
    }

    return a;
};