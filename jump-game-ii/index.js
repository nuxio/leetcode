/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let count = 0
  let length = nums.length
  let last = 0 // 上一步能到达的最远位置
  let cur = 0  // 当前能到达的最远位置

  for (let i = 0; i < length - 1; ++i) {
    cur = Math.max(cur, i + nums[i])
    if (i === last) {
      last = cur
      ++count
      if (cur >= length - 1) {
        break
      }
    }
  }

  return count
};