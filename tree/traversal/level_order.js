/**
 * 
 * Leetcode Problem: 102. Binary Tree Level Order Traversal
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root == null)return []

    const result = []
    const q = [root]

    while(q.length){
        const size = q.length
        const level = []

        for(let i = 0; i< size ; i++){
            const node = q.shift();
            level.push(node.val)

            if(node.left) q.push(node.left)
            if(node.right) q.push(node.right)

        }

        result.push(level)
    }

    return result;
};