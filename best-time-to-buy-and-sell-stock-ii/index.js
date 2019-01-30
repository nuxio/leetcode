/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0
  let length = prices.length

  for (let i = 0; i < length; i++) {
    if (prices[i] < prices[i + 1]) {
      max += prices[i + 1] - prices[i]
    }
  }

  return max
};