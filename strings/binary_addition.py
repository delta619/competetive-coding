# leetcode 67

class Solution:
    def addBinary(self, a: str, b: str) -> str:
        # Reverse the strings to facilitate addition from the least significant bit
        a = a[::-1]
        b = b[::-1]

        # Ensure both strings are of equal length by padding the shorter one with '0's
        if len(a) < len(b):
            a += '0' * (len(b) - len(a))
        else:
            b += '0' * (len(a) - len(b))

        ans = ""
        carry = 0

        for i in range(len(a)):
            bit_a = a[i]
            bit_b = b[i]

            if bit_a == '1' and bit_b == '1':
                if carry == 1:
                    ans += '1'
                else:
                    ans += '0'
                carry = 1
            elif bit_a == '0' and bit_b == '0':
                if carry == 1:
                    ans += '1'
                else:
                    ans += '0'
                carry = 0
            else:
                if carry == 1:
                    ans += '0'
                    carry = 1
                else:
                    ans += '1'

        if carry:
            ans += "1"

        return ans[::-1]
