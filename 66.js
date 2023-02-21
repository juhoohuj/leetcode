/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(d) {
    let int = BigInt(d.join(''));
    int++
    let newResult = int.toString(10).replace(/\D/g, '0').split('').map(Number);
    return newResult
};


let d  = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,2,8,5,6,1,2,4,5]

console.log(plusOne(d))