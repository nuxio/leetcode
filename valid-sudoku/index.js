/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let row = {}
  let col = {}
  let matrix = {}
  let n

  for (let i = 0; i < 9; i++) {
    row[i] = {}
  
    for (let j = 0; j < 9; j++) {
      if (!col[j]) {
        col[j] = {}
      }
      let k = Math.floor(i / 3) + Math.floor(j / 3) * 3
      if (!matrix[k]) {
        matrix[k] = {}
      }

      n = board[i][j]
      if (n !== '.') {
        if (!row[i][n] && !col[j][n] && !matrix[k][n]) {
          row[i][n] = true
          col[j][n] = true
          matrix[k][n] = true
        } else {
          return false
        }
      }
    }
  }

  return true
}