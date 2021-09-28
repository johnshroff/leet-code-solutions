/**
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
