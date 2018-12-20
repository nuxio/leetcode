/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head) {
    return null
  }

  if (!head.next) {
    return head
  }

  let temp = head.next
  head.next = swapPairs(temp.next)
  temp.next = head

  return temp
};
