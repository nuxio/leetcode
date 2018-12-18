/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let record = []
  let h = head
  
  while(head && (head.val || head.val === 0)) {
      record.push(head)
      head = head.next
  }

  const rl = record.length
  
  if (rl === n) {
      return h.next
  }
  
  if (rl > n) {
      record[rl - n - 1].next = record[rl - n + 1]
  }
  
  return h
};