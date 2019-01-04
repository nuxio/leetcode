/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let m = nums.length - 1
  let flag = false

  while (m > 0) {
    // 1 6 7  4   5  3 2
    //       m-1  m
    if (nums[m - 1] < nums[m]) {
      let i = m
      let n = nums[m - 1]
      while ((i + 1) < nums.length && nums[i + 1] > n) {
        i++
      }
      // nums[i] <-> nums[m - 1]
      nums.splice(m - 1, 1, nums[i])
      nums.splice(i, 1, n)

      const a = nums.slice(m).reverse()
      nums.splice(m, a.length, ...a)
      flag = true
      break
    }
    m--
  }

  if (!flag) {
    nums.reverse()
  }
}

// let nums = [1, 2, 3, 4]
// nextPermutation(nums)
// console.log(nums)