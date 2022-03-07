/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * Difficulty: Easy
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

    let node1 = list1,
        node2 = list2,
        result = new ListNode(null), curr = result;

    while (node1 || node2) {
        if (curr.val !== null) {
            curr.next = new ListNode();
            curr = curr.next;
        }

        const value1 = node1 ? node1.val : Number.MAX_SAFE_INTEGER;
        const value2 = node2 ? node2.val : Number.MAX_SAFE_INTEGER;

        if (value1 <= value2 && node1) {
            curr.val = node1.val;
            node1 = node1.next !== null ? node1.next : null;
        } else {
            curr.val = node2.val;
            node2 = node2 !== null ? node2.next : null;
        }
    }
    return result.val !== null ? result : null;

};