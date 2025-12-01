#  Leetcode Problem: 268. Missing Number
#  https://leetcode.com/problems/missing-number/
class Solution(object):
    def missingNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        xor_val = 0
        n = len(nums)

        for val, i in zip(nums, range(n)):
            xor_val = xor_val ^ val ^ i

        xor_val ^= n   # VERY important step

        return xor_val
        