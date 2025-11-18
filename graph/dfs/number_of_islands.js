/**
 * @param {character[][]} grid
 * @return {number}
 */
 function run(grid, i, j){
    let n = grid.length
    let m = grid[0].length
    if(i< 0 || j < 0 || i>=n || j>=m || grid[i][j] == '0'){
        return;
    }
    grid[i][j] = 0
    run(grid, i+1, j)
    run(grid, i-1, j)
    run(grid, i, j+1)
    run(grid, i, j-1)
 }
var numIslands = function(grid) {
    let n = grid.length
    let m = grid[0].length
    let ans = 0;
    for(let i = 0; i< n ;i++){
        for(let j = 0 ;j< m ;j++){
            if(grid[i][j] == '1'){
                ans+=1
                run(grid, i, j);
            }
        }
    }
    return ans;
};