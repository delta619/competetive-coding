// leetcode 909

#include <vector>
#include <queue>
#include <numeric>
#include <algorithm>

using namespace std;

class Solution {
public:
    int snakesAndLadders(vector<vector<int>>& board) {
        int n = board.size(), lbl = 1;

        // Create a vector to store the coordinates of each cell
        vector<pair<int, int>> cells(n * n + 1);
        vector<int> columns(n);
        
        // Fill columns vector with values from 0 to n-1
        iota(columns.begin(), columns.end(), 0);

        // Fill cells vector with the coordinates of the board in a snakes and ladders pattern
        for (int row = n - 1; row >= 0; row--) {
            for (int column : columns) {
                cells[lbl] = {row, column};
                lbl += 1;
            }
            reverse(columns.begin(), columns.end());  // Reverse columns for the next row
        }

        // Create a distance vector to store the minimum moves to reach each cell
        vector<int> dist(n * n + 1, -1);
        dist[1] = 0;  // Start at cell 1 with 0 moves
        queue<int> q;
        q.push(1);

        // BFS to find the shortest path to the last cell
        while (!q.empty()) {
            int curr = q.front();
            q.pop();
            for (int next = curr + 1; next <= min(curr + 6, n * n); next++) {
                auto [row, column] = cells[next];
                int destination = board[row][column] != -1 ? board[row][column] : next;
                if (dist[destination] == -1) {
                    dist[destination] = dist[curr] + 1;
                    q.push(destination);
                }
            }
        }

        return dist[n * n];
    }
};
