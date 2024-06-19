# leetcode 502

class Solution:
    def findMaximizedCapital(self, k: int, w: int, profits: List[int], capital: List[int]) -> int:
        n = len(profits)
        projects = [( capital[i], profits[i]) for i in range(n)]
        projects.sort()
        maxHeap = [] 
        checkpoint = 0
        for _ in range(k):
            while checkpoint< n and projects[checkpoint][0] <= w: # putting the profits into maxheap which can be bought using w
                heapq.heappush(maxHeap, -projects[checkpoint][1]) # pushing the profit in the maxheap
                checkpoint+=1 # to make sure, we dont include the same project in head again
            if not maxHeap:
                break # if there is no project in heap, then break
            w = w - heapq.heappop(maxHeap) # extracting the most profitable project from heap
        
        return w # return the final profit we could accumulate


        