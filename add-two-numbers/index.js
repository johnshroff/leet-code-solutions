/**
 * ListNode definition
 * @param val
 * @param next
 * @constructor
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order,
 * and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * Difficulty: Medium
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const listWalker = (result, l1, l2, remainder) => {
        const v1 = l1 ? l1.val : 0;
        const v2 = l2 ? l2.val : 0;
        const total = v1 + v2 + remainder;
        const totalString = total.toString();

        let digit;

        if (totalString.length === 2) {
            remainder       = +totalString[0];
            digit           = +totalString[1];
        } else {
            remainder       = 0;
            digit           = total;
        }

        result.val = digit;

        const next1 = l1 ? l1.next : undefined,
            next2 = l2 ? l2.next : undefined;

        if (next1 || next2 || remainder > 0) {
            result.next = new ListNode();
            listWalker(
                result.next,
                next1,
                next2,
                remainder < 0 ? 0 : remainder
            );
        }
    };

    const result = new ListNode();
    listWalker(result, l1, l2, 0);
    return result;
};