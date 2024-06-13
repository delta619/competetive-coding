// leetcode 135

func candy(ratings []int) int {
    n:= len(ratings)
    if n == 1{
        return 1
    }

    cd:= make([]int, n)

    for i,_:= range cd{
        cd[i] = 1
    }

    for i:=0 ;i < n-1 ;i++{
        if ratings[i] < ratings[i+1]{
            cd[i+1] = cd[i]+1
            continue
        }
    }

    for i := n - 2; i >= 0; i-- {
        if ratings[i] > ratings[i+1] {
            cd[i] = max(cd[i], cd[i+1] + 1)
        }
    }


    ans:= 0
    for _,v:= range cd{
        ans+=v
    }

    fmt.Println(cd)

    
    return ans
}