// 918

func maxSubarraySumCircular(nums []int) int {
    if len(nums) == 0{
        return 0
    }

    totalSum := nums[0]

    currMax, maxSum := nums[0], nums[0]
    currMin, minSum := nums[0], nums[0]

    for i:=1 ;i< len(nums) ; i++{
        totalSum += nums[i]

        currMax = max(nums[i], currMax + nums[i])
        maxSum = max(maxSum, currMax)

        currMin = min(nums[i], currMin +nums[i])
        minSum = min(minSum, currMin)
    }

    if maxSum < 0{
        return maxSum
    }

    return max(maxSum,  // either the max sub-sum subarray in the array OR
    totalSum - minSum) // the (total sum of the array) - (the lowest sum of subarray)

}