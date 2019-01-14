/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {

  function count(str, num) {
    if (num === n) {
      return str
    }

    let c = 1
    let res = ''
    let i = 0

    while(i < str.length) {
      if (str[i + 1] !== str[i]) {
        res += c + str[i]
        c = 1
      } else {
        c++
      }
      i++
    }

    return count(res, num+1)
  }

  return count('1', 1)
}
