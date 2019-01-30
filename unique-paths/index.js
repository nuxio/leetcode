/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  if (m <= 0 || n <= 0) {
    return 0
  }

  let res = new Array(n).fill(0)
  res[0] = 1

  for (let i = 0; i < m; i++) {
    for (let j = 1; j < n; j++) {
      res[j] += res[j - 1]
    }
  }

  return res[n - 1]
};

// key point: res[i][j] = res[i][j - 1] + res[i - 1][j]
// 即可以到达一个格子的路径的数量等于它左边和上面的格子的路径之和