/**
 * Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
 * [4,5,6,7,0,1,2] if it was rotated 4 times.
 * [0,1,2,4,5,6,7] if it was rotated 7 times.
 * Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
 * Given the sorted rotated array nums of unique elements, return the minimum element of this array.
 * You must write an algorithm that runs in O(log n) time.
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

    if (nums[0] <= nums[nums.length - 1]) {
        return nums[0];
    }
    if (nums.length === 2) {
        return Math.min(nums[0], nums[1]);
    }

    const search = (l, r) => {

        let x = Math.floor((l + r) / 2);

        if (nums[x - 1] === undefined) {
            return Math.min(nums[x], nums[x + 1]);
        }
        if (nums[x + 1] === undefined) {
            return Math.min(nums[x], nums[x - 1]);
        }

        if (!(nums[x - 1] < nums[x] && nums[x + 1] > nums[x])) {
            return Math.min(nums[x - 1], nums[x], nums[x + 1]);
        }

        return (nums[x] > nums[l] && nums[x] > nums[r]) ?
            search(x, r) :
            search(l, x);
    };

    return search(0, nums.length - 1);
};