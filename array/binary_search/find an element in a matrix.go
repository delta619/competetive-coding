# leetcode 74

func searchMatrix(matrix [][]int, target int) bool {
    if len(matrix) == 0 || len(matrix[0]) == 0 {
        return false
    }
    
    // Binary search to find the row
    rowIndex := findRow(matrix, target)
    if rowIndex == -1 {
        return false
    }

    // Binary search within the row
    return binarySearch(matrix[rowIndex], target)
}

func findRow(matrix [][]int, target int) int {
    top, bottom := 0, len(matrix)-1
    
    for top <= bottom {
        mid := (top + bottom) / 2
        if target >= matrix[mid][0] && target <= matrix[mid][len(matrix[mid])-1] {
            return mid
        } else if target < matrix[mid][0] {
            bottom = mid - 1
        } else {
            top = mid + 1
        }
    }
    
    return -1 // Target not in any row range
}

func binarySearch(arr []int, target int) bool {
    l, r := 0, len(arr)-1
    
    for l <= r {
        mid := (l + r) / 2
        if arr[mid] == target {
            return true
        } else if arr[mid] < target {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    
    return false
}

