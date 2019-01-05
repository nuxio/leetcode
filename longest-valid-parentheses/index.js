/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let start = 0 // 左括弧开始的地方
  let left = [] // 左括弧队列
  let max = 0
  let l = s.length

  for (let i = 0; i < l; i++) {
    if (s[i] === '(') {
      left.push(i) // 记录左括弧的位置
    } else {
      if (left.length) {
        left.pop()
        if (left.length) {
          max = Math.max(i - left[left.length - 1], max) // 还有剩余的左括弧没有匹配完
        } else {
          max = Math.max(i - start + 1, max) // 完全匹配
        }
      } else {
        start = i + 1 // 如果以 ) 开始 则跳过
      }
    }
  }

  return max
}

// longestValidParentheses('()(((())((()()((())))))((')