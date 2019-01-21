/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let permute = function(nums) {
  let res = [];
  helper(res, nums, 0);
  return res; 
};

let helper = function(res, nums, pos) {
  if (pos === nums.length - 1) {
      res.push(nums.slice());
  } else {
      for(let i = pos; i < nums.length; ++i) {
          [nums[pos], nums[i]] = [nums[i], nums[pos]];
          helper(res, nums, pos + 1);
          [nums[pos], nums[i]] = [nums[i], nums[pos]];
      }
  }
}
