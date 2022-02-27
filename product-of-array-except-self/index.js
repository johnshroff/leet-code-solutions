/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const prefix = [], postfix = [];

    for (let i = 0; i < nums.length; ++i) {
        const previous = (i - 1) in prefix ? prefix[i - 1] : 1;
        prefix[i] = nums[i] * previous
    }
    for (let i = nums.length - 1; i >= 0; --i) {
        const previous = (i + 1) in postfix ? postfix[i + 1] : 1;
        postfix[i] = nums[i] * previous
    }

    const answer = [];
    for (let i = 0; i < nums.length; ++i) {
        const preProduct = (i - 1) in prefix ? prefix[i - 1] : 1;
        const postProduct = (i + 1) in postfix ? postfix[i + 1] : 1;

        answer.push(preProduct * postProduct);
    }
    return answer;
};