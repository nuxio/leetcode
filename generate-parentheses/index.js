/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let ans = []

  function backtrack(S = '', left = 0, right = 0) {
    if (S.length === 2 * n) {
      ans.push(S)
      return
    }

    if (left < n) {
      backtrack(S + '(', left + 1, right)
    }

    if (right < left) {
      backtrack(S + ')', left, right + 1)
    }
  }


  backtrack()
  return ans
};