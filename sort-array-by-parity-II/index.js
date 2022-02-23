/**
 * Given an array of integers nums, half of the integers in nums are odd, and the other half are even.
 * Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.
 * {@link https://leetcode.com/problems/sort-array-by-parity-ii/}
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
	const newNums = [...nums];
	let oddI = 1, evenI = 0;
	for (const num of newNums) {
		if (num % 2 === 0) {
			nums[evenI] = num;
			evenI = evenI + 2;
		} else {
			nums[oddI] = num;
			oddI = oddI + 2;
		}
	}
	return nums;
};

/**
 * Alternate, entirely in place solution
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
	const oddStack = [], evenStack = [];
	let oddI = 1, evenI = 0;
	for (let x = 0; x < nums.length; ++x) {
		if (nums[x] % 2 === 0) {
			evenStack.push(nums[x]);
		} else {
			oddStack.push(nums[x]);
		}

		if (x >= oddI && oddStack.length > 0) {
			nums[oddI] = oddStack.pop();
			oddI += 2;
		}
		if (x >= evenI && evenStack.length > 0) {
			nums[evenI] = evenStack.pop();
			evenI += 2;
		}
	}
	return nums;
};
