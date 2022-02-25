/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Difficulty: Easy
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const OPEN = {"(": 0, "[": 1, "{": 2},
        CLOSE = {")": 0, "]": 1, "}": 2},
        stack = [];

    for (let x = 0; x < s.length; ++x) {
        const char = s[x];
        if (OPEN[char] !== undefined) {
            stack.push(OPEN[char]);
        } else if (stack.pop() !== CLOSE[char])  {
            return false;
        }
    }
    return stack.length === 0;
};