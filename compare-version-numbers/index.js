/**
 * Version numbers consist of one or more revisions joined by a dot '.'. Each revision consists of digits and may contain leading zeros. Every revision contains at least one character. Revisions are 0-indexed from left to right, with the leftmost revision being revision 0, the next revision being revision 1, and so on. For example 2.5.33 and 0.1 are valid version numbers.
 * To compare version numbers, compare their revisions in left-to-right order.
 * Revisions are compared using their integer value ignoring any leading zeros.
 * This means that revisions 1 and 001 are considered equal. If a version number does not specify a revision at an index,
 * then treat the revision as 0. For example, version 1.0 is less than version 1.1 because their revision 0s are the same,
 * but their revision 1s are 0 and 1 respectively, and 0 < 1.
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const ver1 = version1.split("."),
        ver2 = version2.split(".");

    let i = 0;

    do {

        const v1 = ver1[i] ? +ver1[i] : 0,
            v2 = ver2[i] ? +ver2[i] : 0;

        if (v1 > v2) {
            return 1;
        } else if (v1 < v2) {
            return -1;
        }

        ++i;

    } while(ver1[i] !== undefined || ver2[i] !== undefined)

    return 0;
};
