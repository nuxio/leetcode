/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  if (!words.length || !s) {
    return []
  }

  const wl = words[0].length // 单个单词长度
  const wc = words.length    // 单词个数
  const sl = s.length        // 字符串长度

  if (sl < wl * wc) {
    return []
  }

  let res = []
  let m1 = {}
  const increase = function(map, key) {
    if (!map[key]) {
      map[key] = 0
    }

    ++map[key]
  }

  // 统计单词出现次数
  for(let w of words) {
    increase(m1, w)
  }

  for (let i = 0; i < wl; i++) {
    let left = i
    let count = 0 // 当前 left 所在位置进行匹配，所匹配到的单词个数
    let m2 = {}

    for (let j = i; j <= sl - wl; j += wl) {
      let t = s.substr(j, wl)

      if (m1[t]) {
        increase(m2, t)

        if (m2[t] <= m1[t]) {
          ++count
        } else {
          // 走到这里说明已经不匹配了，需要移动left继续匹配

          // 直到 t 在 m2 中的计数不超过在 m1 中的计数，才会有匹配的可能
          while (m2[t] > m1[t]) {
            // 因为此时 left 小于 j，所以取出来的 t1 一定是在 m1 和 m2 中的 
            let t1 = s.substr(left, wl)
            --m2[t1] // 移除掉因为移动而被排除在外的单词的计数
            if (m2[t1] < m1[t1]) { // 有效匹配的单词个数减少了
              --count
            }
            left += wl  // 移动匹配的起始位置
          }
        }

        // 如果计数相同，则表示完成匹配
        if (count === wc) {
          res.push(left) // 记录位置
          --m2[s.substr(left, wl)] // 向右移动 left ，并减少对应的计数
          --count
          left += wl
        }
      } else {
        m2 = {}
        count = 0
        left = j + wl
      }
    }
  }

  return res
};