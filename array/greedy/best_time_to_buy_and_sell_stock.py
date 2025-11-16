class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = len(prices)
        calc_max = [0] * n
        calc_max[n-1] = prices[n-1]

        for i in range(n-2, -1, -1):
            calc_max[i] = max(prices[i], calc_max[i+1])
        
        maxx = 0
        for i in range(n):
            maxx = max(maxx, abs(prices[i] - calc_max[i]))
        return maxx


        