# leetcode 201. Bitwise AND of Numbers Range

class Solution:
    def rangeBitwiseAnd(self, left: int, right: int) -> int:
        shifts = 0

        while left != right:
            left = left >> 1
            right = right >> 1
            shifts = shifts + 1
        prefix = left
        return prefix << shifts

