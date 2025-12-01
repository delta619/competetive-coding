/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let temp= n;
    let arr = Array(32).fill(0)
    let pos = 31

    while(temp){
        if(temp & 1){
            arr[pos] = 1
        }else{
            arr[pos] = 0
        }
        pos--
        temp = Math.floor(temp / 2)
    }

    // rev array

    let rev_val = 0
    let mp = 0
    for(let val of arr){
        if(val == 1){
            rev_val = rev_val += 2 ** mp
        }
        mp++;
    }
    return rev_val
    console.log(rev_val)

};