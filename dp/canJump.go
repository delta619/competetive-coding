func canJump(nums []int) bool {
    if(len(nums) == 1){
        return true
    }
    steps:= nums[0]
    for i:=0 ; i< len(nums) && steps>0;{
        i++
        steps--
        if i >= len(nums)-1{
            return true
        }
        steps = max(steps, nums[i])
    }

    return false
    
}