/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (nums.length === 1) {
    return nums[0] === target ? [0, 0] : [-1, -1]
  }

  const searchFirst = function () {
    let left = 0
    let right = nums.length - 1
    let mid = -1

    while (left <= right) {
      mid = left + right >> 1

      if (nums[mid] === target) {
        if (mid > 0 && nums[mid - 1] === target) {
          right = mid - 1
        } else {
          return mid
        }
      } else if (nums[mid] < target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }

    return -1
  }

  const searchLast = function () {
    let left = 0
    let right = nums.length - 1
    let mid = -1

    while (left <= right) {
      mid = left + right >> 1

      if (nums[mid] === target) {
        if (mid + 1 < nums.length && nums[mid + 1] === target) {
          left = mid + 1
        } else {
          return mid
        }
      } else if (nums[mid] < target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }

    return -1
  }

  return [searchFirst(), searchLast()]
}