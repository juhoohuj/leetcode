/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0

    for (let i = 0; i < nums.length ; i++) {

        if(nums[i] === val) {
            nums[i] = nums[i-1]
            k++
        }
    }

    return k
};


console.log(removeElement([1,1,2,2], 2))