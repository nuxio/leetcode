/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n < 4) {
    return n
  }

  let f1 = 2
  let f2 = 3
  let res = 0

  for (let i = 4; i <= n; i++) {
    res = f1 + f2
    f1 = f2
    f2 = res
  }

  return res
};