/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  let temp = 0
  let res = new Array(num1.length + num2.length).fill(0)

  for(let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      temp = (num1[i] - 0) * (num2[j] - 0)
      temp += res[i + j + 1]

      res[i + j + 1] = temp % 10
      res[i + j] += ~~(temp / 10)
    }
  }

  // 排除队首的0
  while(res[0] === 0) {
    res.shift()
  }
  
  const str = res.join('')

  return str ? str : "0"
};