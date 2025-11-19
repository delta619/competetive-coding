/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let z_c = 0;
    let prod = 1;

    for (let v of nums) {
        if (v != 0) {
            prod = prod * v
        } else {
            z_c += 1
        }
    }

    let ans = []
    for (let v of nums) {
        if (v == 0) {
            if (z_c > 1) {
                ans.push(0)
            } else if (z_c == 1) {
                ans.push(prod)
            }
        } else {
            if (z_c > 1) {
                ans.push(0)
            } else if (z_c == 1) {
                ans.push(0)
            } else {
                ans.push(prod / v)
            }
        }
    }

    return ans

};
