// leetcode 42
package main
import "fmt"

func trap(height []int) int {

	height = append([]int{0}, height...)
	height = append(height, 0)

	n := len(height)

	maxxLeft := height[0]
	maxxRight := height[n-1]
	
	leftArr := make([]int, n)
	rightArr := make([]int, n)

	for i := 1; i < n; i++ {
		leftArr[i] = maxxLeft
		if height[i] > maxxLeft {
			maxxLeft = height[i]
		}
	
	}

	for i := n-2; i >= 0; i-- {
		rightArr[i] = maxxRight
		if height[i] > maxxRight {
			maxxRight = height[i]
		}
	}

	ans:=0
	for i:= 1; i<n-1 ;i++{

		if leftArr[i] > height[i] && height[i] < rightArr[i]{
			ans+=abs(min(leftArr[i], rightArr[i]) - height[i] )
		}
	}
	



	return ans
}



func main() {
	height := []int{0,1,0,2,1,0,1,3,2,1,2,1}
	fmt.Println(trap(height))
}

func abs(a int) int{
	if a< 0 {
		return a * -1
	}
	return a
}