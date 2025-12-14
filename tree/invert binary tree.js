/**
 * 
 * Leetcode 226. Invert Binary Tree
 * https://leetcode.com/problems/invert-binary-tree/
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root == null) return null; // check for the base case

    let temp = root.right // swap
    root.right = root.left
    root.left = temp;

    invertTree(root.left)
    invertTree(root.right)

    return root




};