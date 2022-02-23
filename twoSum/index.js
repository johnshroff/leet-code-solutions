/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashMap = {};
    for (let x = 0; x < nums.length; ++x) {
        hashMap[nums[x]] = x;
    }
    for (let x = 0; x < nums.length; ++x) {
        const hashKey = target - nums[x];
        if (hashMap[hashKey] !== undefined && hashMap[hashKey] !== x) {
            return [x, hashMap[hashKey]];
        }
    }
};


/**
 * After reviewing other answers, you only have to traverse the array once
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashMap = {};
    for (let x = 0; x < nums.length; ++x) {
        const hashKey = target - nums[x];
        if (hashMap[hashKey] !== undefined && hashMap[hashKey] !== x) {
            return [x, hashMap[hashKey]];
        }

        hashMap[nums[x]] = x;
    }
};