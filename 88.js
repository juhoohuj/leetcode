/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.length = m
    nums2.length = n

    nums1.push(...nums2)

    nums1.sort(function(a, b){return a - b})

};

let n1 = [1,2,3,0,0,0]
let m1 = 3
let n2 = [2,5,6]
let m2 = 2


merge(n1, m1, n2, m2)

console.log(n1)
