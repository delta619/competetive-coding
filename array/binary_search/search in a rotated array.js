/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let l = 0;
    let r = nums.length-1;

    while(l<=r){
        let mid = l + Math.floor((r-l)/2);


        if(nums[mid] == target){
            return mid;
        }

        if(nums[l] <= nums[mid]){ // left side is sorted
            if(nums[l] <= target && target < nums[mid]){
                r = mid-1;  // target is in the left half
            }else{
                l = mid+1; // target is in the right half;
            }
        }else{ // right side is sorted 
            if(nums[mid] < target && target <= nums[r]){
                l = mid+1; // target is in the right half
            }else{
                r = mid-1;// target is in the left half
            }
        }

    }

    return -1


};