/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let result = Infinity;

    nums.sort((a, b) => (a - b));

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1,
            right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (Math.abs(sum - target) < Math.abs(result)) {
                result = target - sum;
            } else if (sum < target) {
                left++
            } else {
                right--;
            }
        }
    }

    return target - result;
};

console.log(threeSumClosest([0, 0, 0], 1))