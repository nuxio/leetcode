/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums.sort((a, b) => a - b)
  let results = []
  
  const dfs = function(nums, left, right) {
    if (left === right) {
      results.push(nums.slice())
    } else {
      for (let i = left; i <= right; i++) {
        if (i !== left && nums[left] === nums[i]) continue // 与上次开始相同，则认为是重复的
        
        [nums[left], nums[i]] = [nums[i], nums[left]]
        dfs(nums.slice(), left + 1, right)
      }
    }
  }
  
  dfs(nums, 0, nums.length - 1)
  
  return results
};
