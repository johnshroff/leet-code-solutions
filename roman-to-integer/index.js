/**
 * Difficulty: Easy
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const ROMAN_MAP = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    };
    let answer = 0;
    for (let x = 0; x < s.length; ++x) {
        const combo = s[x] + s[x+1];
        if (ROMAN_MAP[combo] !== undefined) {
            ++x;
            answer += ROMAN_MAP[combo]
        } else {
            answer += ROMAN_MAP[s[x]];
        }
    }
    return answer;
};