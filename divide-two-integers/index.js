/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const MAX = Math.pow(2, 31) - 1
  const MIN = -Math.pow(2, 31)
  let flag = (dividend >= 0 && divisor >= 0) || (dividend < 0 && divisor < 0) ? 1 : -1
  let d1 = Math.abs(dividend)
  let d2 = Math.abs(divisor)
  let res = 0

  if (d1 < d2) {
    return 0
  }

  while (d1 >= d2) {
    let temp = d2
    let i = 0

    while (d1 > temp << 1) {
      // 溢出
      if ((temp << 1) <= 0) {
        break
      }

      temp = temp << 1
      i++
      
      // i = 30 即 temp << 30 
      if (flag > 0 && i > 29) {
        return MAX
      }
      if (flag < 0 && i > 30) {
        return MIN
      }
    }
    d1 -= temp
    res = res + Math.pow(2, i)
  }

  if (flag > 0) {
    return res
  } else {
    return -res
  }
};