/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  lists = lists.filter(item => item && (item.val || item.val === 0)).sort((a, b) => a.val - b.val)
  if (!lists.length) {
    return null
  }

  if (lists.length === 1) {
    return lists[0]
  }

  let head = {
    val: 0,
    next: null
  }
  let flag = head

  function fuck(flag, list) {
    flag.next = list[0]

    if (list.length === 1) {
      return
    }

    if (!list[0].next) {
      list.shift()
    } else {
      list[0] = list[0].next
    }

    fuck(flag.next, list.sort((a, b) => a.val - b.val))
  }

  fuck(flag, lists)

  return head.next
};