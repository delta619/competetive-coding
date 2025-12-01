class Solution:

    def run(self, amount, coins, memo):
        if amount == 0:
            return 0
        if amount < 0:
            return 10**9

        if amount in memo:
            return memo[amount]

        best = 10**9
        for c in coins:
            best = min(best, 1 + self.run(amount - c, coins, memo))

        memo[amount] = best
        return best

    def coinChange(self, coins: List[int], amount: int) -> int:
        memo = {}
        ans = self.run(amount, coins, memo)
        return ans if ans != 10**9 else -1