// Given a 2D matrix of integers, find the size (side length) of the largest square sub-matrix where all the elements are the same. Return the size of this square. If there are multiple such squares, return the size of the largest one. If the matrix is empty, return 0.

// Example input: matrix = [
//   [2, 2, 3, 3],
//   [2, 2, 3, 3],
//   [2, 2, 2, 2],
//   [2, 2, 2, 2]
// ]
// Expected output: 2


function largestSameSquare(matrix){
    if(!matrix || matrix.length ==0 || matrix[0].length ==0 ) return 0;
    const n = matrix.length;
    const m = matrix[0].length;
    let maxside = 0;

    let dp = [];
    for(let i=0; i<n ; i++){
        dp.push(new Array(m).fill(1));
    }

    for(let i=0;i <n; i++){
        for(let j=0; j<m; j++){
            if(i==0 || j ==0){
                dp[i][j] = 1;
            }else{
                if(matrix[i][j]=== matrix[i][j-1] && matrix[i][j]=== matrix[i-1][j]  && matrix[i][j]=== matrix[i-1][j-1]){
                    dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
                }else{
                    dp[i][j] = 1;
                }
            }

            maxside = Math.max(maxside, dp[i][j]);
        }
    }
    console.log(maxside);
    return maxside;
}

 matrix = [
  [2, 1, 2, 2],
  [2, 2, 1, 2],
  [2, 1, 1, 2],
  [2, 2, 2, 2]
]
largestSameSquare(matrix);


