// leetcode 105

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func buildTree(preorder []int, inorder []int) *TreeNode {
    if len(preorder) == 0{
        return nil
    }

    i := slices.Index(inorder, preorder[0]) // find the index element of root node within inorder
    lpre, rpre:= preorder[1:i+1], preorder[i+1:]
    lin, rin:= inorder[:i], inorder[i+1:]


    return &TreeNode{
        Val: inorder[i],
        Left: buildTree(lpre, lin),
        Right: buildTree(rpre, rin),
    }


}