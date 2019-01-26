/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  let result = 1

  for (let i = n; i !== 0; i = ~~(i / 2)) {
    if (i % 2 !== 0) result *= x
    x *= x
  }

  return n < 0 ? 1 / result : result
};