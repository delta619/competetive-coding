#include <bits/stdc++.h>
typedef long long ll;
using namespace std;

#define pb push_back
#define VLL vector<ll>
#define VVLL vector<vector<ll>>

bool vis[10];

void dfs(VVLL g, int i)
{

    if (vis[i])
    {
        return;
    }

    cout << i << " ";
    vis[i] = true;

    for (auto x : g[i])
    {
        dfs(g, x);
    }
}

void bfs(VVLL g, int i)
{

    static queue<int> q;

    q.push(i);
    vis[i] = true;

    while (!q.empty())
    {

        ll curr = q.front();
        q.pop();

        cout << curr << " ";

        for (auto x : g[curr])
        {
            if (!vis[x])
            {
                q.push(x);
                vis[x] = true;
            }
        }
    }
}

int main()
{
    memset(vis, 0, sizeof(vis));

    ll n;
    cin >> n;

    vector<VLL> g(n + 1);
    ll t = n;
    while (t--)
    {
        ll u, v;
        cin >> u >> v;

        g[u].pb(v);
        g[v].pb(u);
    }

    for (ll i = 0; i <= n; i++)
    {
        cout << "At " << i << " :";
        for (ll j = 0; j < g[i].size(); j++)
        {
            cout << " # ";
            cout << g[i][j] << " ";
        }
        cout << endl;
    }

    cout << "Enter Start node\n";
    ll start;
    cin >> start;
    bfs(g, start);

    return 0;
}