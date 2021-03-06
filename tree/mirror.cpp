#include <bits/stdc++.h>
typedef long long ll;
using namespace std;

#define pb push_back
#define VLL vector<ll>
#define VVLL vector<vector<ll>>

bool vis[10];

class node
{

public:
    int data;
    node* left = NULL;
    node* right = NULL;
    node(int val)
    {
        data = val;
    }
};

void printBT(const string& prefix, const node* curr, bool isLeft)
{
    if (curr != NULL)
    {
        cout << prefix;

        cout << (isLeft ? "|--" : "'--");

        // print the value of the curr
        cout << curr->data << endl;

        // enter the next tree level - left and right branch
        printBT(prefix + (isLeft ? "|   " : "    "), curr->left, true);
        printBT(prefix + (isLeft ? "|   " : "    "), curr->right, false);
    }
}

void mirror(node* curr) {
    if (curr == NULL) return;

    mirror(curr->left);
    mirror(curr->right);


    node* temp;

    temp = curr->right;
    curr->right = curr->left;
    curr->left = temp;


}

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
            }
        }
    }
}

int main()
{

    node* root = new node(10);
    root->left = new node(6);
    root->right = new node(15);
    root->right->right = new node(18);
    root->left->left = new node(2);
    root->left->right = new node(8);



    printBT("", root, false);


    mirror(root);

    printBT("", root, false);


    return 0;

}