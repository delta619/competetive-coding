class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        max_so_far = nums[0]
        temp_sum = nums[0]

        for v in nums[1:]:
            temp_sum = temp_sum + v
            temp_sum = max(temp_sum, v)

            if temp_sum > max_so_far:
                max_so_far = temp_sum

        return max_so_far

