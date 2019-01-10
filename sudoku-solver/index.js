/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  // 依次记录行、列、方格中的数字
  let row = []
  let col = []
  let matrix = []
  let matrixIndex
  let n

  for (let i = 0; i < 9; i++) {
    row[i] = {}
    for(let j = 0; j < 9; j++) {
      matrixIndex = Math.floor(i / 3) + Math.floor(j / 3) * 3
      n = board[i][j]
      col[j] = col[j] || {}
      matrix[matrixIndex] = matrix[matrixIndex] || {}

      if (n !== '.') {
        row[i][n] = true
        col[j][n] = true
        matrix[matrixIndex][n] = true
      }
    }
  }

  function solve(board, row, col, matrix, i, j) {
    // 逐列寻找还未填写数字的位置
    while(board[i][j] !== '.') {
      if (++j >= 9) {
        i++
        j = 0
      }

      if (i >= 9) {
        return true
      }
    }
    let matrixIndex = Math.floor(i / 3) + Math.floor(j / 3) * 3

    // 依次尝试1~9的数字
    for (let num = 1; num <= 9; num++) {
      if (!row[i][num] && !col[j][num] && !matrix[matrixIndex][num]) {
        board[i][j] = num.toString()
        row[i][num] = true
        col[j][num] = true
        matrix[matrixIndex][num] = true

        // 这一步下去，验证是否正确，如果不正确
        if (solve(board, row, col, matrix, i, j)) {
          return true
        } else {
          // 不正确就回退这一步的操作
          board[i][j] = '.'
          row[i][num] = false
          col[j][num] = false
          matrix[matrixIndex][num] = false
        }
      }
    }
  }

  solve(board, row, col, matrix, 0, 0)
}
