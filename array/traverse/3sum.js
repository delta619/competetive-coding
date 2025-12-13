/**
 * Leetcode 15. 3Sum
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = []
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) { // for each ith element

        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let l = i + 1; // left pointer
        let r = nums.length - 1 // right pointer


        while (l < r) {

            let sum = nums[i] + nums[l] + nums[r];

            // console.log(sum)

            if (sum === 0) {
                res.push([nums[i], nums[l], nums[r]]);


                while (l < r && nums[l] === nums[l + 1]) l++;
                while (l < r && nums[r] === nums[r - 1]) r--;

                l++;
                r--;
            }
            else if (sum < 0) {
                l++;  // move left pointer to right
            } else {
                r--;  // move right pointer to left
            }
        }

    }

    return res;


};