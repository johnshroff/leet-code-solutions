/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * Difficulty: Easy
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const returnString = [];

    let matches = true;
    let x = 0;

    const charMatches = (chr, x) => {
        for (let y = 1; y < strs.length; ++y) {
            if (strs[y][x] !== chr) {
                return false;
            }
        }
        return true;
    };
    do {
        matches = charMatches(strs[0][x], x);
        if (matches) {
            returnString.push(strs[0][x]);
        }
    } while(matches && strs[0][++x] !== undefined);
    return returnString.join("");
};