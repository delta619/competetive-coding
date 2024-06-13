// leetcode 128

func longestConsecutive(nums []int) int {
    if(len(nums) == 0){
        return 0
    }
    m:= make(map[int]bool)


    for _, num:= range nums{
        m[num] = true
    }

    maxx:=0

    for _, k:= range nums{

        if !m[k-1]{
            // if the predecessor is not in there
            currNum:= k
            currLen:= 1

            for m[currNum+1]{
                currNum++
                currLen++
            } 

            maxx = max(maxx, currLen)
            currLen = 0

        }

    }
    
    return maxx

}