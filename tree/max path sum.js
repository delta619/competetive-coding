/**
 * Leetcode Problem: 124. Binary Tree Maximum Path Sum
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/
 * 
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */



var maxPathSum = function (root) {
    var maxx = -Infinity

    var dfs = function (node) {
        if (node === null) return 0;

        let leftGain = Math.max(0, dfs(node.left))
        let rightGain = Math.max(0, dfs(node.right))

        let currentPath = node.val + leftGain + rightGain

        maxx = Math.max(maxx, currentPath)

        return node.val + Math.max(leftGain, rightGain);

    }
    dfs(root)
    return maxx;
};