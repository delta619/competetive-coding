// leetcode 137

class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int ans = 0;

        for (int i = 0 ;i < 32;i++){
            int total = 0;
            for (const int num: nums){
                total = total + (num >> i & 1);
            }
            if (total %3 == 0){
                ans = ans | 0 << i;
            }else{
                ans = ans | 1 <<i;
            }

        }
        return ans;
    }
};