class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        prod = 1
        num_of_zeros = 0
        for v in nums:
            if v == 0:
                num_of_zeros += 1
                continue
            prod = prod * v
        ans = []
        for v in nums:
            if v == 0:
                if num_of_zeros >1:
                    ans.append(0)
                elif num_of_zeros  == 1:
                    ans.append(prod)
            else:
                if num_of_zeros >1:
                    ans.append(0)
                elif num_of_zeros  == 1:
                    ans.append(0)
                else:
                    ans.append(prod // v)
        return ans