/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let mem = 1;
    let digits1 = [];

    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] += mem;
        if (digits[i] === 10) {
            digits1.unshift(0)
        } else {
            digits1.unshift(digits[i]);
            mem = 0;
        }
    }
    if (mem === 1) {
        digits1.unshift(1)
    }

    return digits1;
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));