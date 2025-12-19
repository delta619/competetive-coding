/**
 * 
 * Leetcode 230 
 * Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {

    let res = []

    let dfs = (node) => {
        if (node === null) return null


        dfs(node.left)
        let val = node.val
        res.push(val)
        dfs(node.right)

    }

    dfs(root)
    return res[k - 1];

};