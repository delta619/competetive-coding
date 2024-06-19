# // leetcode 108

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        if len(nums) == 0:
            return None
        curNode = TreeNode(nums[len(nums)//2],None,None)
        curNode.left = self.sortedArrayToBST(nums[0:len(nums)//2])
        curNode.right = self.sortedArrayToBST(nums[len(nums)//2+1:])
        return curNode
