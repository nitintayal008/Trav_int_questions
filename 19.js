function findPassableRowsAndCols(board) {
  let m = board.length;
  let n = board[0].length;
  let passableCols = [];
  let passableRows = [];
 
  for (let i = 0; i < m; i++) {
    let passable = true;
    for (let j = 0; j < n; j++) {
      if (board[i][j] === '+') {
        passable = false;
        break;
      }
    }
    if (passable) {
      passableRows.push(i)
    }
  }
 
 
  for (let i = 0; i < n; i++) {
    let passable = true;
    for (let j = 0; j < m; j++) {
      console.log(i, j)
      if (board[j][i] === '+') {
        passable = false;
        break;
      }
    }
    if (passable) {
      passableCols.push(i)
    }
  }
 
 
  return {
    passableRows,
    passableCols
  }
 
}