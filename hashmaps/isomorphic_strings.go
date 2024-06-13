// leetcode 205

func isIsomorphic(s string, t string) bool {
    
    m:= make(map[byte]byte)

    already_mapped:= make(map[byte]bool)
    for i, _:= range s{
        chS:= s[i]
        chT:= t[i]

        if mapped, exists := m[chS] ; exists{
            if mapped != chT {

                return false
            }
        }else{
            m[chS] = chT
            if _, ok := already_mapped[chT]; ok{
                    return false
            }
            already_mapped[chT] = true
        }
    }

    return true

}