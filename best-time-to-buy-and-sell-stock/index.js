/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0
  let profit = 0
  let minValue = prices[0]

  for (let i = 1; i < prices.length; i++) {
    if (minValue > prices[i]) {
      minValue = prices[i]
    }

    profit = prices[i] - minValue

    max = Math.max(max, profit)
  }

  return max
};