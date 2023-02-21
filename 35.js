/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var searchInsert = function(nums, t) {
    if (nums.includes(t)) return nums.indexOf(t)

    else {
        let f = array1.find(e => e > t);
        if(f == -1) return (nums[nums.length - 1]) + 1
        return nums.indexOf(f)
    }

};


