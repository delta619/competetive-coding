class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        maxx = float('-inf')
        prod = 1

        for v in nums:
            prod = prod * v
            if prod > maxx:
                maxx = prod
            if prod == 0:
                prod = 1
        
        prod = 1

        for v in nums[::-1]:
            prod = prod * v
            if prod > maxx:
                maxx = prod
            if prod == 0:
                prod = 1
        return maxx