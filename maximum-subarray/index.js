/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  
  const helper = function(nums, left, right) {
    if (left === right) {
      return nums[left]
    }

    let center = Math.floor((left + right) / 2)
    let leftMax = helper(nums, left, center)
    let rightMax = helper(nums, center + 1, right)

    let leftBorderSum = nums[center]
    let maxLeftBorderSum = nums[center]
    for (let i = center - 1; i >= left; i--) {
      leftBorderSum += nums[i]
      if (leftBorderSum > maxLeftBorderSum) {
        maxLeftBorderSum = leftBorderSum
      }
    }

    let rightBorderSum = nums[center + 1]
    let maxRightBorderSum = nums[center + 1]
    for (let i = center + 2; i <= right; i++) {
      rightBorderSum += nums[i]
      if (rightBorderSum > maxRightBorderSum) {
        maxRightBorderSum = rightBorderSum
      }
    }

    return Math.max(leftMax, rightMax, maxLeftBorderSum + maxRightBorderSum)
  }

  return helper(nums, 0, nums.length - 1)
};