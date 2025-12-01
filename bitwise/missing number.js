/**
 * Leetcode 268. Missing Number
 * Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let arr = Array(nums.length+1).fill(0)

    for(let i = 0 ; i< nums.length +1 ;i++){
        arr[nums[i]]=1
    }
    for(let i = 0 ; i< nums.length+1 ;i ++){
        if(arr[i] === 0){
            return i;
        }
    }
};


/**
 * Leetcode 268. Missing Number
 * XOR Approach
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

    let xor_val = 0
    for (let i = 0 ; i< nums.length+1 ;i++){
        xor_val = xor_val ^ nums[i] ^ i;
    }

    return xor_val;

};