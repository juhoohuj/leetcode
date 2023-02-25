/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var searchInsert = function(nums, t) {
    let f = nums.indexOf(nums.find(e => e > t));
    let i = 0
    if (nums.includes(t)) i = nums.indexOf(t)

    if (!nums.includes(t)) {
        if(f == -1) {
            i = nums.length
        }
        else  i = f
    }

    return i
};

let arr = [1,3,5,6]

console.log(searchInsert(arr, 7))