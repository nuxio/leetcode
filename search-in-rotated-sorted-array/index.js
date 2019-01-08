/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  let mid

  while (left <= right) {
    mid = (left + right) >> 1

    if (nums[mid] === target) {
      return mid
    }

    if (nums[mid] < nums[right]) { // numx[mid] 在右边的升序序列
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    } else { // numx[mid] 在左边的升序序列
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
  }

  return -1
}