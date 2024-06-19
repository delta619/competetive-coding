# leetcode 433

from typing import List
from collections import deque

class Solution:
    def minMutation(self, startGene: str, endGene: str, bank: List[str]) -> int:
        if endGene not in bank:
            return -1
        
        # Convert the bank list to a set for O(1) look-up times
        bankSet = set(bank)
        
        # Define valid gene characters
        geneChars = ['A', 'C', 'G', 'T']
        
        # Queue for BFS
        q = deque([(startGene, 0)])
        
        while q:
            currentGene, mutations = q.popleft()
            
            # Try mutating each position in the gene
            for i in range(len(currentGene)):
                for char in geneChars:
                    newGene = currentGene[:i] + char + currentGene[i+1:]
                    
                    # If we found the endGene, return the number of mutations
                    if newGene == endGene:
                        return mutations + 1
                    
                    # If the new gene is in the bank, add it to the queue and remove from the bank set
                    if newGene in bankSet:
                        bankSet.remove(newGene)
                        q.append((newGene, mutations + 1))
        
        # If no mutation path was found, return -1
        return -1
