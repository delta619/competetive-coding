// https://leetcode.com/contest/weekly-contest-402/problems/maximum-total-damage-with-spell-casting/
/*
A magician has various spells.

You are given an array power, where each element represents the damage of a spell. Multiple spells can have the same damage value.

It is a known fact that if a magician decides to cast a spell with a damage of power[i], they cannot cast any spell with a damage of power[i] - 2, power[i] - 1, power[i] + 1, or power[i] + 2.

Each spell can be cast only once.

Return the maximum possible total damage that a magician can cast.
*/

#include<iostream>
#include<vector>
#include<map>
#include<set>
#include<queue>
#include<stack>
#include<algorithm>

using namespace std;
typedef long long ll;

long long maximumTotalDamage(vector<int>& power){
    unordered_map<int, long long> freq;
    for (int p : power) {
        freq[p]++;
    }

    vector<int> uniquePowers;
    for (const auto& entry : freq) {
        uniquePowers.push_back(entry.first);
    }
    sort(uniquePowers.begin(), uniquePowers.end());

    map<int, long long> dp;
    long long maxDamage = 0;

}

int main(){

    vector<int> power = {2,1,4,3,1,1,1,5};
    ll ans = maximumTotalDamage( power);


    cout<<ans<<endl;

    return 0;
}