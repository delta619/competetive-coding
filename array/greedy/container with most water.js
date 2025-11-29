
/**
 * Leetcode 11. Container With Most Water
 * https://leetcode.com/problems/container-with-most-water/
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let l = 0
    let r = height.length - 1
    let area = 0;
    while (l < r) {

        let temp_area = (r - l) * Math.min(height[l], height[r])
        if (temp_area > area) {
            area = temp_area;
        }

        if (height[l] === height[r]) {
            l++
            r--;
        }
        else if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }
    return area
};