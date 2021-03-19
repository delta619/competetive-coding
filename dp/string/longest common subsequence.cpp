#include <bits/stdc++.h>
typedef long long ll;
using namespace std;

#define pb push_back
#define VLL vector<ll>
#define VVLL vector<vector<ll>>

int dp[100][100];

int solve(string a, string b, int n, int m)
{
    if (dp[n][m])
    {
        return dp[n][m];
    }

    // cout << n << " " << m << endl;

    if (n == 0 || m == 0)
    {
        return 0;
    }

    if (a[n - 1] == b[m - 1])
    {

        int temp = 1 + solve(a, b, n - 1, m - 1);
        dp[n][m] = temp;
        return temp;
    }
    else
    {
        int temp = max(solve(a, b, n, m - 1), solve(a, b, n - 1, m));
        dp[n][m] = temp;
        return temp;
    }
}

int main()
{

    memset(dp, 0, sizeof(dp));

    string a, b;
    cin >> a >> b;

    ll ans = solve(a, b, a.length(), b.length());

    cout << ans << endl;
    return 0;
}