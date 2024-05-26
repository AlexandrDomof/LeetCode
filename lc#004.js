/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let ind1 = 0,
        ind2 = 0,
        nums = [],
        anz = 0,
        lengthNums1 = 0,
        lengthNums2 = 0,
        fl = true; // флаг четности

    //проверка на пустоту массива
    if (nums1 != null) {
        lengthNums1 = nums1.length;
    }

    if (nums2 != null) {
        lengthNums2 = nums2.length;
    }

    // проверка на четность к-ва эл в новом массиве
    if ((lengthNums1 + lengthNums2) % 2 == 0) {
        anz = (lengthNums1 + lengthNums2) / 2 + 1;
    }
    else {
        anz = (lengthNums1 + lengthNums2 + 1) / 2;
        fl = false; // нечетное
    }

    if (lengthNums1 * lengthNums2 > 0) { // оба не пустые
        for (let i = 0; i < anz; i++) {

            if ((ind1 != lengthNums1) && (ind2 != lengthNums2)) {
                if (nums1[ind1] <= nums2[ind2]) {
                    nums.push(nums1[ind1]);
                    ind1++;
                }
                else {
                    nums.push(nums2[ind2]);
                    ind2++;
                }
            }
            else {
                if (ind1 == lengthNums1) {
                    nums.push(nums2[ind2]);
                    ind2++;
                }
                else {
                    nums.push(nums1[ind1]);
                    ind1++;
                }

            }


        }
    }
    else {
        if (lengthNums1 > 0) {
            for (let i = 0; i < anz; i++) {
                nums.push(nums1[i])
            }
        }
        else {
            for (let i = 0; i < anz; i++) {
                nums.push(nums2[i])
            }
        }
    }

    if (anz == 1) {
        return nums[0]
    }
    else {
        if (!fl) {
            return nums[anz - 1];
        }
        else {
            return (nums[anz - 1] + nums[anz - 2]) / 2;
        }
    }


};