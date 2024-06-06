// leetcode 45

func jump(nums []int) int {
	if len(nums) == 1 {
		return 0
	}
	steps := nums[0]
	maxReach := nums[0]
	jumps := 1
	for i := 1; i < len(nums); i++ {
		if i == len(nums)-1 {
			return jumps
		}
		maxReach = max(maxReach, nums[i]+i)
		steps--
		if steps == 0 {
			jumps++
			steps = maxReach - i
		}
	}
	return jumps

}