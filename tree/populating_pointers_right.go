// leetcode 117 

/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Left *Node
 *     Right *Node
 *     Next *Node
 * }
 */

 func connect(root *Node) *Node {
	if root == nil{
        return nil
    }

    array  := []*Node {root}

    for len(array) > 0 {
        var tempArray []*Node
        for i:=0 ;i < len(array) ;i++{ // loop through all the nodes in a single layer (BFS)
            if i != len(array)-1 { // if its not the rigthmost in a level
                array[i].Next = array[i+1]
            }
            if array[i].Left != nil{ // add all the left children in the level layer
                tempArray = append(tempArray, array[i].Left)
            }
            if array[i].Right != nil{ // add all the right children in the level layer
                tempArray = append(tempArray, array[i].Right)
            }
        }
        array = tempArray
    }

    return root

}