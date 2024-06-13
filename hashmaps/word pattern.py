// leetcode 290

class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        words = s.split(" ")
        if len(words) != len(pattern):
            return False
        m = defaultdict(bool)
        already_mapped = defaultdict(bool)

        for i in range(len(pattern)):
            if m[pattern[i]] == False:
                if already_mapped[words[i]]:
                    return False
                m[pattern[i]] = words[i]
                already_mapped[words[i]] = True
            else:
                if m[pattern[i]] != words[i]:
                    return False
        
        return True