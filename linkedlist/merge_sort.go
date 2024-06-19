// leetcode 148

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
 func sortList(head *ListNode) *ListNode {
    if head == nil || head.Next == nil {
        return head
    }

    end_of_first_half := getMiddle(head)
    head_of_second_half := end_of_first_half.Next

    end_of_first_half.Next = nil

    left_most_of_left := sortList(head)
    left_most_of_right := sortList(head_of_second_half)

    return Merge(left_most_of_left, left_most_of_right)
}

func getMiddle(node *ListNode) *ListNode {
    slow, fast := node, node.Next

    for fast != nil && fast.Next != nil {
        slow = slow.Next
        fast = fast.Next.Next
    }

    return slow
}

func Merge(node1, node2 *ListNode) *ListNode {
    head := &ListNode{}
    curr := head

    for node1 != nil && node2 != nil {
        if node1.Val < node2.Val {
            curr.Next = node1
            node1 = node1.Next
        } else {
            curr.Next = node2
            node2 = node2.Next
        }
        curr = curr.Next
    }

    if node1 != nil {
        curr.Next = node1
    }

    if node2 != nil {
        curr.Next = node2
    }

    return head.Next
}
