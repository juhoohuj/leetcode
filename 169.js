/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let b = 0
    let c = 0
    let d = new Set(nums)
    let u = [...d]
    let duplicates = u.map(value => [value, nums.filter(str => str === value).length]);    
    duplicates.forEach(e => {
        if(e[1] > c) {
            b = e[0]
            c = e[1]
        }
    });
    return b
};



let n = nums = [2,2,1,1,1,2,2]

console.log(majorityElement(n))