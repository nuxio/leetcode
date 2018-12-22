/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (!head) {
    return null
  }

  let node = head
  let count = 0

  while (node != null && count != k) {
    node = node.next
    count++
  }

  if (count == k) {
    node = reverseKGroup(node, k)
    while (count > 0) {
      let temp = head.next
      head.next = node
      node = head
      head = temp
      count--
    }
    head = node
  }

  return head
};