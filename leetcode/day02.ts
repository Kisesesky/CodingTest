// 2. Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/description/

// 비어 있지 않은 두 개의 연결 리스트가 주어지며, 각 연결 리스트는 음이 아닌 정수를 나타냅니다.
// 각 자리의 숫자는 역순으로 저장되어 있고, 각 노드는 하나의 숫자만을 가지고 있습니다.
// 이 두 수를 더한 결과를 연결 리스트 형태로 반환하세요.
// 두 수는 숫자 0 자체를 제외하고는 앞에 0이 붙는 경우(leading zero)가 없다고 가정해도 됩니다.
 
// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 
// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros

// 2 + 5 = 7
// 4 + 6 = 10 → digit 0 carry 1
// 3 + 4 + 1 = 8


class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}
 
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let v1 = l1 !==null ? l1.val : 0;
        let v2 = l2 !==null ? l2.val : 0;
        let sum = v1 + v2 + carry;
        carry = Math.floor(sum / 10);
        let digit = sum % 10;

        current.next = new ListNode(digit);
        current = current.next
        if (l1 !== null) l1 = l1.next
        if (l2 !== null) l2 = l2.next
    }
    return dummy.next
};