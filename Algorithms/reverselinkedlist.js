function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var reverseList = function (head) {
  if (head == null || head.next == null) return head;
  var node = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return node;
};
