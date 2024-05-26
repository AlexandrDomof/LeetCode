/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let result = nums[0] + nums[1] + nums[2];
    let differenz = Math.abs(nums[0] + nums[1] + nums[2] - target);

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                if (Math.abs(sum - target) < differenz) {
                    differenz = Math.abs(sum - target);
                    result = sum;
                }
            }
        }
    }
    return result;
};

console.log(threeSumClosest([0, 0, 0], 1))