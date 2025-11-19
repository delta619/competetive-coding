/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = -Infinity;
    let prod = 1

    for (let v of nums){
        prod = prod * v
        if(prod > max){
            max = prod
        }
        if(prod == 0){
            prod = 1
        }
    }

    prod = 1
    for (let i = nums.length -1 ; i>=0 ; i--){
        prod = prod * nums[i]
        if(prod > max){
            max = prod
        }
        if(prod == 0){
            prod = 1
        }
    }

    return max
};