#include <bits/stdc++.h>

using namespace std;

queue<Node *> q;

void levelOrder(Node *root)
{

    if (root == NULL)
    {
        return;
    }

    Node *curr;
    q.push(root);

    while (!q.empty())
    {

        curr = q.front();
        q.pop();

        if (curr->left)
        {
            q.push(curr->left);
        }
        if (curr->right)
        {
            q.push(curr->right);
        }

        cout << curr->data << " ";
    }
}