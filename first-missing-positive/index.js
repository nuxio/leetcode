/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let record = []
  let length = nums.length

  // 关键点在于 最小整数 和 数组长度的关系
  // 比如 [1, 2, 3] 最小整数为4
  for (let i = 0; i < length; i++) {
    if (nums[i] > 0 && nums[i] <= length) {
      record[nums[i]] = 1
    }
  }

  for (let j = 1; j <= length; j++) {
    if (!record[j]) {
      return j
    }
  }

  return length ? length + 1 : 1
};