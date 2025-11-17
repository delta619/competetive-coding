/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let m = new Map()

    for (let i = 0 ;i < nums.length ;i++){
        if (m.has(nums[i])){ // syntactical sugar , hasOwnProperty
            return true
        }
        m.set(nums[i], true) 
    }
    return false;
};