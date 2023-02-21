/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    for (let i = 0; i < nums.length; i++) {
        for (let l = i+1; l < nums.length; l++) {
            if (nums[i] + nums[l] === target) {
                let output = [i, l]
                return output;
            }     
        }  
    }
};



console.log(twoSum([2,7,11,15], 9))