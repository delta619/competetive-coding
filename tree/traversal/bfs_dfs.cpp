#include <bits/stdc++.h>
typedef long long ll;
using namespace std;

class node
{
public:
    node *left;
    node *right;
    ll data;

    node(int val)
    {
        data = val;
        left = NULL;
        right = NULL;
    };
};

void insert(node *root, int val)
{

    if (root == NULL)
    {
        cout << "Value added ";
        root = new node(val);
        return;
    }

    if (root->data < val)
    {
        if (root->right)
        {
            insert(root->right, val);
        }
        else
        {
            root->right = new node(val);
        }
    }
    else if (root->data > val)
    {
        if (root->left)
        {
            insert(root->left, val);
        }
        else
        {
            root->left = new node(val);
        }
    }
    else
    {
        cout << "Value already present in the tree ";
    }
}

node *insert_returnRoot(node *root, int val)
{

    if (root == NULL)
    {
        cout << "Root is null , so creating root node ";
        root = new node(val);
        return root;
    }
    node *curr = root;

    while (1)
    {
        // 847269

        if (curr->data > val)
        {
            if (curr->left)
            {
                curr = curr->left;
            }
            else
            {
                curr->left = new node(val);
                break;
            }
        }
        else
        {

            if (curr->right)
            {
                curr = curr->right;
            }
            else
            {
                curr->right = new node(val);
                break;
            }
        }
    }

    return root;
}

void dfs(node *root)
{

    if (root == NULL)
    {
        return;
    }

    cout << root->data << " ";

    dfs(root->left);
    dfs(root->right);
}

queue<node *> q;

void bfs(node *root)
{
    if (root == NULL)
    {
        cout << "Root is null ";
        return;
    }
    else
    {
        q.push(root);
    }

    while (!q.empty())
    {

        node *curr = q.front();
        cout << curr->data << " ";
        q.pop();

        if (curr->left)
        {
            q.push(curr->left);
        }

        if (curr->right)
        {
            q.push(curr->right);
        }
    }
}

int main()
{

    ll n;
    cin >> n;
    node *root = NULL;

    while (n--)
    {
        ll temp;
        cin >> temp;
        root = insert_returnRoot(root, temp);
    }

    while (1)
    {
        cout << "Enter 1 for dfs , 2 for bfs";

        ll temp;
        cin >> temp;

        if (temp == 1)
        {

            dfs(root);
        }

        if (temp == 2)
        {

            bfs(root);
        }
    }

}; //End of Solution