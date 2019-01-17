/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let si = 0 // 当前字符位置
  let pi = 0 // 当期通配符位置

  let sstar = -1 // 与通配符*号匹配的位置
  let pstar = -1 // 通配符*号所在位置

  while(s[si]) {
    if (s[si] === p[pi] || p[pi] === '?') {
      si++
      pi++
    } else if (p[pi] === '*') {
      // 记录*号所在位置
      pstar = pi
      sstar = si
      pi++ //
    } else if (pstar > -1) {
      // 目前有匹配到星号且当前字符和通配符不相等
      pi = pstar + 1 // 通配符位置返回到*号所在位置
      si = ++sstar   // 字符所在位置从匹配到*号的位置+1，且匹配到*号的位置自增
    } else {
      // 没有 ? * 且不相等，则不匹配
      return false
    }
  }

  // 如果有剩下的*号
  while(p[pi] === '*') {
    pi++
  }

  // 是否匹配完整
  return !p[pi]
};