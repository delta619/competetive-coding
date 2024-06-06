// Function maxProfit calculates the maximum profit achievable by completing at most k transactions with given stock prices.
// Parameters:
//     k: An integer representing the maximum number of transactions allowed.
//     prices: A slice of integers representing the prices of a stock on each day.
// Returns:
//     An integer representing the maximum profit achievable.
func maxProfit(k int, prices []int) int {
    n := len(prices)
    // If there are no prices, profit is 0.
    if n == 0 {
        return 0
    }
    // If k is greater than or equal to half the number of days,
    // it is effectively an unlimited transaction case.
    if k >= n/2 {
        return maxProfitInf(prices)
    }
    // dp array to store the maximum profit for each day and transaction count.
    dp := make([][][]int, n)
    // Initializing the dp array.
    for i := 0; i < n; i++ {
        dp[i] = make([][]int, k+1)
        for j := 0; j <= k; j++ {
            dp[i][j] = make([]int, 2)
        }
    }
    // Dynamic programming to calculate maximum profit.
    for i := 0; i < n; i++ {
        for j := 1; j <=k; j++ {
            if i == 0 {
                // Base case: no previous day, initialize profit values.
                dp[i][j][0] = 0
                dp[i][j][1] = -prices[i]
                continue
            }
            // Calculate the maximum profit for each day and transaction count.
            dp[i][j][0] = max(dp[i-1][j][0], dp[i-1][j][1]+prices[i])
            dp[i][j][1] = max(dp[i-1][j][1], dp[i-1][j-1][0]-prices[i])
        }
    }
    // Return the maximum profit achievable.
    return dp[n-1][k][0]
}

// Function maxProfitInf calculates the maximum profit achievable with unlimited transactions.
// Parameters:
//     prices: A slice of integers representing the prices of a stock on each day.
// Returns:
//     An integer representing the maximum profit achievable.
func maxProfitInf(prices []int) int {
    n := len(prices)
    // If there are no prices, profit is 0.
    if n == 0 {
        return 0
    }
    // dp array to store the maximum profit for each day.
    dp := make([][]int, n)
    // Initializing the dp array.
    for i := 0; i < n; i++ {
        dp[i] = make([]int, 2)
    }
    // Dynamic programming to calculate maximum profit.
    for i := 0; i < n; i++ {
        if i == 0 {
            // Base case: no previous day, initialize profit values.
            dp[i][0] = 0
            dp[i][1] = -prices[i]
            continue
        }
        // Calculate the maximum profit for each day.
        dp[i][0] = max(dp[i-1][0], dp[i-1][1]+prices[i])
        dp[i][1] = max(dp[i-1][1], dp[i-1][0]-prices[i])
    }
    // Return the maximum profit achievable.
    return dp[n-1][0]
}