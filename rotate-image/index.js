/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let length = matrix.length
  if (length === 0) {
    return
  }
  let n = length - 1
  let temp = 0

  // 将矩阵放入坐标系中比较好理解，依次推算出旋转时每个坐标要填入的数字的旧坐标
  for (let y = 0; y < length / 2; y++) {
    for (let x = y; x < n - y; x++) {
      temp = matrix[y][x]
      matrix[y][x] = matrix[n - x][y]
      matrix[n - x][y] = matrix[n - y][n - x]
      matrix[n - y][n - x] = matrix[x][n - y]
      matrix[x][n - y] = temp
    }
  }
};