/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length
    let highest_calc = Array(n).fill(0)

    highest_calc[n-1] = prices[n-1] // pre calc the highest in future
    for (let i = n-2 ; i>=0 ;i--){
        highest_calc[i] = Math.max(prices[i], highest_calc[i+1]) // max of that day vs next day
    }
    
    let maxx = 0;
    for(let i = 0 ;i< n ;i++){
        maxx = Math.max(maxx, Math.abs(prices[i]- highest_calc[i]))
    }
    return maxx;
};