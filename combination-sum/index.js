/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let results = []
  let result = []
  let length = candidates.length
  let can = candidates.sort((a, b) => a - b)
  
  // 深度优先查找
  function dfs (result, t, level) {
    if (t === 0) {
      results.push(result.slice(0))
      return
    }
    
    for (let i = level; i < length && t - can[i] >= 0; i++) {
      result.push(can[i])
      dfs(result, t - can[i], i)
      result.pop()
    }
  }
  
  dfs(result, target, 0)
  
  return results
}