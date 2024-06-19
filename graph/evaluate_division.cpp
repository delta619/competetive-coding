// leetcode 399


class Solution {
public:
        map <string, map<string, double> > graph;
        set <string> seen;
    vector<double> calcEquation(vector<vector<string>>& equations, vector<double>& values, vector<vector<string>>& queries) {
        

        vector<double> ans;

        for (int i = 0 ;i < equations.size() ;i++){
            const string A = equations[i][0];
            const string B = equations[i][1];

            double val = values[i];

            graph[A][B] = val;
            graph[B][A] = 1/val;

        }

        for (auto query : queries){
            const string C = query[0];
            const string D = query[1];

            if (!graph.count(C) || !graph.count(D)) {
                ans.push_back(-1);
                continue;
            }
            ans.push_back(divide(C,D));
            seen.clear();

        }

        return ans;
    }

    double divide(const string A, const string C){
        if (A == C){
            return 1.0;
        }

        seen.insert(A);

        for (const auto& i: graph[A]){
            string B = i.first;

            double value = i.second;

            if (seen.count(B)){
                continue;
            }

            const double res = divide(B, C);
            if (res > 0) {
                return res * value;
            }
        }

        return -1;

    }
};