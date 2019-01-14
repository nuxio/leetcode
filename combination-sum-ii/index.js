/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  if (candidates.length === 0) {
    return []
  }

  let res = []
  candidates.sort((a, b) => a - b)

  function dfs(nums, target, result, level) {
    if (target === 0) {
      res.push(result.slice())
      return
    }

    for (let i = level; i < nums.length && target >= nums[i]; i++) {
      // 与上个数字相同 跳过
      if (i !== level && nums[i] === nums[i - 1]) {
        continue
      }

      result.push(nums[i])
      dfs(nums, target - nums[i], result, i + 1)
      result.pop()
    }
    return
  }

  dfs(candidates, target, [], 0)
  return res
};