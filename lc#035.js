/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let fl = true;
    let ind = 0;
    if (nums[0] > target) { return 0 }
    while (fl || nums.length == ind - 1) {

        if (nums[ind] == target) {
            return ind;
        }
        else {
            if (nums[ind + 1] <= target) {
                ind++;
            }
            else {
                return ind + 1;
            }
        }
    }
    return ind;
};