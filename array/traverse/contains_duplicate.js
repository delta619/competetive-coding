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

/**
 * Checks whether the given array contains any duplicate elements, using Set.
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let m = new Set()

    for (let i = 0 ;i < nums.length ;i++){
        if (m.has(nums[i])){ // syntactical sugar for hasOwnProperty
            return true
        }
        m.add(nums[i], true) 
    }
    return false;
};