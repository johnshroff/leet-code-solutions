/**
 * Given a string s, find the length of the longest substring without repeating characters.
 * Difficulty: Medium
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let ss = {}, p = 0, current = 0, max = 0;

    while (p < s.length) {
        const char = s[p];
        if (ss[char] === undefined) {
            ss[char] = p;
            ++current;
            max = Math.max(current, max);
        } else {
            p = ss[char];
            ss = {};
            current = 0;
        }
        ++p;
    }
    return max;
};