/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let biggest = 0
    let count = 0
    let d = new Set(nums)
    let u = [...d]


    let duplicates = u.map(value => [value, nums.filter(str => str === value).length]);
    
    duplicates.forEach(e => {
        if(e[1] > count) {
            biggest = e[0]
            count = e[1]
        }
    });

    return biggest
};



let n = nums = [2,2,1,1,1,2,2]

console.log(majorityElement(n))