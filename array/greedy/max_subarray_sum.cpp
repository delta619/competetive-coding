#include <bits/stdc++.h>
typedef long long ll;
using namespace std;

#define pb push_back
#define VLL vector<ll>
#define VVLL vector<vector<ll>>

int main()
{

    int n;
    cin >> n;

    VLL a;

    while (n--)
    {
        ll temp;
        cin >> temp;
        a.pb(temp);
    }

    ll max_so_far = 0;
    ll max_ending_here = 0;

    for (ll i = 0; i < a.size(); i++)
    {
        //1
        max_ending_here = max_ending_here + a[i];

        //2
        if (max_ending_here > max_so_far)
        {
            max_so_far = max_ending_here;
        }
        //3
        if (max_ending_here < 0)
        {
            max_ending_here = 0;
        }
    }

    cout << max_so_far;

    return 0;
}