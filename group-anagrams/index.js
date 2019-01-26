/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  if (!strs.length) {
    return 
  }
  const map = {}

  strs.forEach(s => {
    let key = s.split('').sort().join('')
    if (!map[key]) {
      map[key] = [s]
    } else {
      map[key].push(s)
    }
  })

  return Object.values(map)
};
