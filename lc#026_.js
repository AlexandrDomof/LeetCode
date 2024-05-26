/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let nums1 = [];
    nums1.push(nums[0]);
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== nums[i + 1]) {
            nums1.push(nums[i + 1]);
        }
    }
    return (nums1.length);
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])